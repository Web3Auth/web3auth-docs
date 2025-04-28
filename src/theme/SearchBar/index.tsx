import React, { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import { isRegexpStringMatch, useSearchLinkCreator } from "@docusaurus/theme-common";
import { marked } from "marked";

import {
  useAlgoliaContextualFacetFilters,
  useSearchResultUrlProcessor,
} from "@docusaurus/theme-search-algolia/client";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import translations from "@theme/SearchTranslations";
import type {
  InternalDocSearchHit,
  DocSearchModal as DocSearchModalType,
  DocSearchModalProps,
  StoredDocSearchHit,
  DocSearchTransformClient,
  DocSearchHit,
} from "@docsearch/react";

import type { AutocompleteState } from "@algolia/autocomplete-core";
import type { FacetFilters } from "algoliasearch/lite";
import { OpenAI } from "openai";
import "./styles.css";

// Browser-friendly access to environment variables - moved to use inside component for on-demand loading
// No global OpenAI client initialization here - we'll do it on-demand

// AI Analytics
let aiQueryCount = 0;

/**
 * Tracks AI queries for analytics purposes
 */
function trackAIQuery(query: string, success: boolean = true): void {
  aiQueryCount++;

  // Log the query for analytics
  console.log(
    `[Web3Auth AI] Query ${aiQueryCount}: "${query}" (${success ? "success" : "failed"})`,
  );

  try {
    // Example: track with a custom analytics event if you have analytics set up
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ai_search", {
        event_category: "search",
        event_label: query,
        value: success ? 1 : 0,
      });
    }
  } catch (e) {
    console.warn("Failed to track AI query:", e);
  }
}

/**
 * Fetches the content of a document from its URL
 */
async function fetchDocumentContent(url: string): Promise<string> {
  try {
    // Convert absolute URL to relative path if it's from the same origin
    let path = url;

    if (typeof window !== "undefined") {
      // Check if it's from the same domain
      const urlObj = new URL(url, window.location.origin);

      if (urlObj.origin === window.location.origin) {
        // For same-origin URLs, we can just fetch the HTML file
        // Strip off origin and handle paths that end with / by adding index.html
        path = urlObj.pathname;

        // Handle typical Docusaurus routes - append index.html if needed
        if (path.endsWith("/")) {
          path = `${path}index.html`;
        } else if (!path.includes(".")) {
          // If there's no file extension, it's likely a route that needs /index.html
          path = `${path}/index.html`;
        }
      } else {
        // For external URLs, we can't fetch due to CORS, so just use what's available
        return "";
      }
    }

    try {
      const response = await fetch(path);

      if (!response.ok) {
        console.warn(`Failed to fetch content from ${path}: ${response.statusText}`);
        return "";
      }

      const html = await response.text();

      // Extract main content from the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Find the main content area (adjust selector based on your Docusaurus theme)
      const mainContent =
        tempDiv.querySelector(".markdown") ||
        tempDiv.querySelector("article") ||
        tempDiv.querySelector("main") ||
        tempDiv.querySelector(".container") ||
        tempDiv.querySelector('div[class*="docItemContainer"]') ||
        tempDiv.querySelector('div[class*="docMainContainer"]');

      if (mainContent) {
        // Strip navigation and sidebar elements that don't contain actual content
        const elementsToRemove = mainContent.querySelectorAll(
          "script, style, nav, .navbar, .sidebar, .pagination, .tocCollapsible, .tableOfContents",
        );
        elementsToRemove.forEach((node) => node.remove());

        // Extract code blocks specially - they're important for technical documentation
        const codeBlocks: string[] = [];

        // Find all code blocks with different selectors to ensure we get them all
        const codeElements = mainContent.querySelectorAll(
          'pre code, .codeBlock, .prism-code, code[class*="language-"], div[class*="codeBlockContainer"]',
        );

        codeElements.forEach((codeEl) => {
          const codeContent = codeEl.textContent || "";
          if (codeContent.trim()) {
            codeBlocks.push(codeContent);
          }
        });

        // Get the main text content
        let extractedText = mainContent.textContent || "";

        // Add extracted code blocks at the end with special markers if they exist
        if (codeBlocks.length > 0) {
          // Deduplicate code blocks
          const uniqueCodeBlocks = [...new Set(codeBlocks)];

          extractedText += "\n\nCODE EXAMPLES:\n";
          uniqueCodeBlocks.forEach((code, index) => {
            extractedText += `\n--- CODE BLOCK ${index + 1} ---\n${code}\n--- END CODE BLOCK ---\n`;
          });
        }

        // Removed verbose logging: `Successfully extracted ${extractedText.length} characters from ${url}`
        return extractedText;
      }

      // Keep warning for content issues
      console.warn(`[Web3Auth RAG] Could not find content in ${url}`);
      return "";
    } catch (fetchError) {
      console.error(`Error during fetch for ${path}:`, fetchError);
      return "";
    }
  } catch (error) {
    console.error(`Error fetching document content from ${url}:`, error);
    return "";
  }
}

/**
 * Chunks text into smaller segments to handle large documents
 */
function chunkText(text: string, maxChunkSize: number = 1500): string[] {
  if (!text || text.length <= maxChunkSize) {
    return [text];
  }

  const chunks: string[] = [];
  let currentIndex = 0;

  while (currentIndex < text.length) {
    // Find a good breakpoint (paragraph or sentence end)
    let endIndex = Math.min(currentIndex + maxChunkSize, text.length);

    // If we're not at the end of the text, find a good breaking point
    if (endIndex < text.length) {
      // Try to break at paragraph
      const paragraphBreak = text.lastIndexOf("\n\n", endIndex);
      if (paragraphBreak > currentIndex && paragraphBreak > endIndex - 200) {
        endIndex = paragraphBreak;
      } else {
        // Try to break at sentence
        const sentenceBreak = Math.max(
          text.lastIndexOf(". ", endIndex),
          text.lastIndexOf("! ", endIndex),
          text.lastIndexOf("? ", endIndex),
        );
        if (sentenceBreak > currentIndex && sentenceBreak > endIndex - 100) {
          endIndex = sentenceBreak + 1; // Include the period
        }
      }
    }

    chunks.push(text.substring(currentIndex, endIndex));
    currentIndex = endIndex;
  }

  return chunks;
}

/**
 * Enhances document content by processing and extracting key information
 */
function processDocumentContent(content: string): string {
  if (!content) return "";

  // Remove excess whitespace
  content = content.replace(/\s+/g, " ");

  // Extract code blocks - they're particularly important for technical documentation
  const codeBlocks: string[] = [];
  const codeRegex = /```[\s\S]*?```|`[\s\S]*?`/g;
  let match;

  while ((match = codeRegex.exec(content)) !== null) {
    codeBlocks.push(match[0]);
  }

  // Process the regular text to ensure it's clean and structured
  const processedText = content.replace(/\s+/g, " ").replace(/\n{3,}/g, "\n\n");

  // If we found code blocks, highlight their importance
  if (codeBlocks.length > 0) {
    const codeSection = "Code examples:\n" + codeBlocks.join("\n\n");
    return processedText + "\n\n" + codeSection;
  }

  return processedText;
}

/**
 * Score and rank search results by relevance to the query
 */
function rankSearchResultsByRelevance(
  query: string,
  searchResults: InternalDocSearchHit[],
): InternalDocSearchHit[] {
  if (!searchResults || searchResults.length === 0) {
    return [];
  }

  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 2);

  // Score each result based on multiple factors
  const scoredResults = searchResults.map((result) => {
    let score = 0;

    // Basic text matching in title
    if (result.hierarchy?.lvl0) {
      const title = result.hierarchy.lvl0.toLowerCase();
      queryWords.forEach((word) => {
        if (title.includes(word)) score += 2;
      });
    }

    // Basic text matching in subtitle
    if (result.hierarchy?.lvl1) {
      const subtitle = result.hierarchy.lvl1.toLowerCase();
      queryWords.forEach((word) => {
        if (subtitle.includes(word)) score += 1.5;
      });
    }

    // Text matching in content snippets
    if (result._snippetResult?.content?.value) {
      const snippet = result._snippetResult.content.value.toLowerCase();
      queryWords.forEach((word) => {
        if (snippet.includes(word)) score += 1;
      });

      // Bonus for highlighted matches in snippets (Algolia marks these with <em>)
      if (result._snippetResult.content.value.includes("<em>")) {
        score += 2;
      }
    }

    // Prefer specific pages over index pages
    if (result.url && !result.url.endsWith("/") && !result.url.endsWith("index.html")) {
      score += 0.5;
    }

    return { result, score };
  });

  // Sort by score (highest first)
  return scoredResults.sort((a, b) => b.score - a.score).map((item) => item.result);
}

/**
 * Processes search results to retrieve actual document content
 */
async function retrieveDocumentContent(
  searchResults: InternalDocSearchHit[],
  query: string,
): Promise<string[]> {
  if (!searchResults || searchResults.length === 0) {
    return [];
  }

  // Rank results by relevance to the query
  const rankedResults = rankSearchResultsByRelevance(query, searchResults);

  // Limit the number of documents to fetch to avoid performance issues
  const topResults = rankedResults.slice(0, 4);

  // Fetch content from each document URL in parallel
  const contentPromises = topResults.map((result) => fetchDocumentContent(result.url));
  const contents = await Promise.all(contentPromises);

  // Process and chunk the content
  return contents
    .filter((content) => content.trim() !== "")
    .map((content) => {
      // Process the content to enhance the extraction of key information
      const processedContent = processDocumentContent(content);

      // Chunk longer content to handle large documents
      const chunks = chunkText(processedContent, 2000);

      // For simplicity, we'll use just the first chunk for now
      // In a more advanced implementation, you could use all chunks or the most relevant ones
      return chunks[0];
    });
}

/**
 * Fallback mechanism that provides search result information when document fetching fails
 */
function generateFallbackContent(searchResults: InternalDocSearchHit[], query: string): string[] {
  if (!searchResults || searchResults.length === 0) {
    return [];
  }

  // Score and rank results by relevance first
  const rankedResults = rankSearchResultsByRelevance(query, searchResults);

  return rankedResults.slice(0, 5).map((result) => {
    // Create a structured representation of the search result
    let content = "";

    // Add the title and path information
    if (result.hierarchy) {
      const title = result.hierarchy.lvl0 || "";
      const subtitle = result.hierarchy.lvl1 || "";
      content += `# ${title}\n## ${subtitle}\n\n`;
    }

    // Add the URL
    content += `URL: ${result.url}\n\n`;

    // Add snippet if available - focus on extracting highlighted parts
    if (result._snippetResult?.content?.value) {
      const snippet = result._snippetResult.content.value;

      // Extract text surrounding the <em> highlighted parts for better context
      const highlights = snippet.split("<em>");
      if (highlights.length > 1) {
        content += "HIGHLIGHTED CONTENT:\n";
        for (let i = 1; i < highlights.length; i++) {
          const parts = highlights[i].split("</em>");
          if (parts.length > 0) {
            // Get the highlighted term and some context around it
            const highlightedTerm = parts[0];
            const contextAfter = parts[1]?.split(".")[0] || "";
            const contextBefore = highlights[i - 1]?.split(".").slice(-1)[0] || "";

            content += `- ${contextBefore} *${highlightedTerm}* ${contextAfter}.\n`;
          }
        }
        content += "\n";
      } else {
        // If no highlights, just use the whole snippet
        content += `${snippet}\n\n`;
      }
    }

    // Add text content if available
    if (result.content) {
      content += `${result.content}\n\n`;
    }

    return content;
  });
}

// AI Search Modal Component
interface AISearchProps {
  query: string;
  onClose: () => void;
  searchResults: InternalDocSearchHit[];
}

function AISearchModal({ query, onClose, searchResults }: AISearchProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [formattedAnswer, setFormattedAnswer] = useState<string>("");
  const [retrievedContent, setRetrievedContent] = useState<string[]>([]);
  const [retrievalStatus, setRetrievalStatus] = useState<string>("Retrieving document content...");
  const [fetchFailed, setFetchFailed] = useState<boolean>(false);
  const [isRetrying, setIsRetrying] = useState<boolean>(false);

  // Get the API key from window global variable (set in docusaurus.config.ts)
  const apiKey = typeof window !== "undefined" ? (window as any).OPENAI_API_KEY || "" : "";

  // Function to handle retrying the query
  const handleRetry = useCallback(() => {
    setIsRetrying(true);
    setError(null);
    setLoading(true);
    setRetrievalStatus("Retrying...");

    // Set a small delay to ensure UI updates before retrying
    setTimeout(() => {
      setIsRetrying(false);
      // The useEffects will handle the retry since they depend on isRetrying
    }, 100);
  }, []);

  // First, retrieve document content
  useEffect(() => {
    async function fetchContent() {
      if (!query) {
        setLoading(false);
        return;
      }

      try {
        setRetrievalStatus("Retrieving document content...");
        setFetchFailed(false);

        if (searchResults.length === 0) {
          throw new Error("No search results available to retrieve content from");
        }

        const contents = await retrieveDocumentContent(searchResults, query);

        if (contents.length === 0) {
          // Simplified log
          console.warn("Could not retrieve document content, using fallback mechanism");
          // Use fallback mechanism to at least provide some information
          const fallbackContents = generateFallbackContent(searchResults, query);

          if (fallbackContents.length > 0) {
            setRetrievedContent(fallbackContents);
            setRetrievalStatus(
              `Using search results as content (${fallbackContents.length} results)`,
            );
            setFetchFailed(true);
          } else {
            throw new Error("Could not retrieve or generate any content for this search");
          }
        } else {
          setRetrievedContent(contents);
          setRetrievalStatus(`Retrieved content from ${contents.length} documents`);
        }
      } catch (err: any) {
        console.error("Error retrieving document content:", err);
        setRetrievalStatus("Failed to retrieve document content");
        setError(
          `Unable to retrieve documentation content: ${err.message || "Unknown error"}. Please try a different search query.`,
        );
        setLoading(false);
      }
    }

    fetchContent();
  }, [query, searchResults, isRetrying]);

  // Then, generate answer based on retrieved content
  useEffect(() => {
    async function fetchAnswer() {
      if (!query) {
        setLoading(false);
        return;
      }

      // If no content was retrieved, we've already set the error in the first useEffect
      if (retrievedContent.length === 0) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setRetrievalStatus("Generating AI response...");

        // Format search results with their titles and URLs for reference
        const formattedResults = searchResults
          .slice(0, 4)
          .map((result, index) => {
            const title = result.hierarchy?.lvl0 || "Document";
            const subtitle = result.hierarchy?.lvl1 || "";
            return `Source ${index + 1}: ${title} > ${subtitle}: ${result.url}`;
          })
          .join("\n");

        // Combine the retrieved content with source information
        const contextContent = retrievedContent
          .map((content, index) => {
            const result = searchResults[index];
            const title = result?.hierarchy?.lvl0 || "Document " + (index + 1);
            return `--- START OF DOCUMENT: ${title} ---\n${content}\n--- END OF DOCUMENT ---\n`;
          })
          .join("\n\n");

        // Create enhanced prompt with actual document content and better instructions
        const systemPrompt =
          "You are a helpful Web3Auth expert assistant. Your goal is to provide detailed, accurate information about Web3Auth's authentication solutions, SDKs, and integrations to developers.\n\n" +
          "RESPONSE GUIDELINES:\n" +
          "1. BE HELPFUL: Always try to provide SOME guidance, even when the documentation doesn't contain a perfect answer.\n" +
          "2. PRIORITIZE USER SUCCESS: Focus on helping the user accomplish their task with Web3Auth.\n" +
          "3. USE DOCUMENTATION FIRST: Base your answers primarily on the provided documentation snippets.\n" +
          "4. CODE EXAMPLES ARE CRUCIAL: Always include code snippets from the documentation when available, as they're extremely valuable to developers.\n" +
          "5. INFERENCE IS ALLOWED: When documentation contains related but not exact information, use reasonable inference to bridge gaps based on standard Web3Auth patterns.\n" +
          "6. BE HONEST: If you truly can't provide an answer, suggest relevant Web3Auth concepts or documentation sections that might help instead.\n" +
          "7. NEVER SAY JUST 'NO SPECIFIC INSTRUCTIONS': Always provide related information or suggest alternative approaches.\n\n" +
          "ABOUT WEB3AUTH:\n" +
          "- Web3Auth provides authentication infrastructure for Web3 applications\n" +
          "- Core products include Plug and Play (PnP) SDKs for Web, Mobile (Android, iOS, React Native, Flutter) and Gaming (Unity & Unreal Engine). Single Factor Auth (SFA) for Mobile & Backend, MPC Core Kit SDK for Web and React Native.\n" +
          "- The most used SDKs are Plug and Play Web Modal and No Modal SDKs, which have React Hook and Vue Composables as well." +
          "- Uses Shamir Secret Sharing (SSS) for PnP & SFA and Threshold Signature Scheme (TSS) - MPC for MPC Core Kit for enabling secure key management\n" +
          "- Compatible with all OAuth2 providers like Google, Facebook, Discord, Auth0, Firebase, etc., while having the ability to connect to any custom OAuth provider.";

        const userPrompt = `The user's question is: "${query}"

          Here's content from the most relevant Web3Auth documentation sections:

          ${contextContent}

          Source references:
          ${formattedResults}

          Based on the above documentation, provide the most helpful answer you can to the user's question. Remember:
          1. Include ALL relevant code examples from the documentation
          2. If you can't find a direct answer, still provide guidance based on similar concepts in Web3Auth
          3. Suggest specific next steps the user could take
          4. Keep your explanation concise but thorough
          5. Link to specific documentation pages when relevant`;

        if (apiKey) {
          // Create OpenAI client on demand
          const openai = new OpenAI({
            apiKey: apiKey,
            dangerouslyAllowBrowser: true,
          });

          const response = await openai.chat.completions.create({
            model: "gpt-4.1",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: userPrompt,
              },
            ],
            max_tokens: 30000,
            temperature: 0.5, // Lower temperature for more factual responses
          });

          const generatedAnswer = response.choices[0]?.message?.content;
          setAnswer(
            generatedAnswer ||
              "Sorry, I couldn't find relevant information in our documentation to answer your question.",
          );
        } else {
          setError("OpenAI API key is not configured. Please check your environment variables.");
        }
      } catch (err: any) {
        setError(err?.message || "Failed to generate an answer. Please try again later.");
        trackAIQuery(query, false);
      } finally {
        setLoading(false);
        setRetrievalStatus("");
      }
    }

    fetchAnswer();
  }, [query, retrievedContent, searchResults, apiKey, isRetrying]);

  // Effect to format markdown to HTML
  useEffect(() => {
    if (answer) {
      let htmlContent = marked.parse(answer) as string;

      // Add a note about direct links if content fetching failed
      if (fetchFailed && searchResults.length > 0) {
        const linksList = searchResults
          .slice(0, 3)
          .map((result, idx) => {
            const title =
              result.hierarchy?.lvl0 || result.hierarchy?.lvl1 || "Document " + (idx + 1);
            return `<li><a href="${result.url}" target="_blank">${title}</a></li>`;
          })
          .join("");

        const noticeHtml = `
          <div class="ai-notice">
            <p><strong>Note:</strong> I couldn't access the full content of the documentation pages.
            You may find more complete information by visiting these pages directly:</p>
            <ul>${linksList}</ul>
          </div>
        `;

        htmlContent += noticeHtml;
      }

      setFormattedAnswer(htmlContent);
    }
  }, [answer, fetchFailed, searchResults]);

  return (
    <div
      className="ai-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="ai-modal-content">
        <div className="ai-modal-header">
          <h3>AI Answer</h3>
          <button className="ai-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="ai-modal-body">
          <div className="ai-question">
            <strong>Q:</strong> {query}
          </div>

          {loading ? (
            <div className="ai-loading">
              <div className="ai-loading-spinner"></div>
              <div>{retrievalStatus || "Generating answer based on Web3Auth documentation..."}</div>
            </div>
          ) : error ? (
            <div className="ai-error">
              <div className="error-message">{error}</div>

              <div className="ai-error-actions">
                <button className="ai-retry-button" onClick={handleRetry}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 2v6h-6"></path>
                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                    <path d="M3 22v-6h6"></path>
                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                  </svg>
                  Retry Query
                </button>
              </div>

              {searchResults.length > 0 && (
                <div className="ai-search-links">
                  <p>You might find these search results helpful:</p>
                  <ul>
                    {searchResults.slice(0, 3).map((result, idx) => (
                      <li key={idx}>
                        <a href={result.url} target="_blank" rel="noopener noreferrer">
                          {result.hierarchy?.lvl0 ||
                            result.hierarchy?.lvl1 ||
                            "Result " + (idx + 1)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="ai-answer">
              <div className="ai-response">
                <div className="ai-response-text markdown">
                  <div dangerouslySetInnerHTML={{ __html: formattedAnswer }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ai-modal-footer">
          Powered by Web3Auth AI • Using content from {retrievedContent.length} documentation pages
          {fetchFailed ? " (search results only)" : ""}
        </div>
      </div>
    </div>
  );
}

type DocSearchProps = Omit<DocSearchModalProps, "onClose" | "initialScrollY"> & {
  contextualSearch?: string;
  externalUrlRegex?: string;
  searchPagePath: boolean | string;
};

let DocSearchModal: typeof DocSearchModalType | null = null;

function importDocSearchModalIfNeeded() {
  if (DocSearchModal) {
    return Promise.resolve();
  }
  return Promise.all([
    import("@docsearch/react/modal") as Promise<typeof import("@docsearch/react")>,
    import("@docsearch/react/style"),
    import("./styles.css"),
  ]).then(([{ DocSearchModal: Modal }]) => {
    DocSearchModal = Modal;
  });
}

function useNavigator({ externalUrlRegex }: Pick<DocSearchProps, "externalUrlRegex">) {
  const history = useHistory();
  const [navigator] = useState<DocSearchModalProps["navigator"]>(() => {
    return {
      navigate(params) {
        // Algolia results could contain URL's from other domains which cannot
        // be served through history and should navigate with window.location
        if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
          window.location.href = params.itemUrl;
        } else {
          history.push(params.itemUrl);
        }
      },
    };
  });
  return navigator;
}

function useTransformSearchClient(): DocSearchModalProps["transformSearchClient"] {
  const {
    siteMetadata: { docusaurusVersion },
  } = useDocusaurusContext();
  return useCallback(
    (searchClient: DocSearchTransformClient) => {
      searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
      return searchClient;
    },
    [docusaurusVersion],
  );
}

function useTransformItems(props: Pick<DocSearchProps, "transformItems">) {
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [transformItems] = useState<DocSearchModalProps["transformItems"]>(() => {
    return (items: DocSearchHit[]) =>
      props.transformItems
        ? // Custom transformItems
          props.transformItems(items)
        : // Default transformItems
          items.map((item) => ({
            ...item,
            url: processSearchResultUrl(item.url),
          }));
  });
  return transformItems;
}

function useSearchParameters({
  contextualSearch,
  ...props
}: DocSearchProps): DocSearchProps["searchParameters"] {
  function mergeFacetFilters(f1: FacetFilters, f2: FacetFilters): FacetFilters {
    const normalize = (f: FacetFilters): FacetFilters => (typeof f === "string" ? [f] : f);
    return [...normalize(f1), ...normalize(f2)];
  }

  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters() as FacetFilters;

  const configFacetFilters: FacetFilters = props.searchParameters?.facetFilters ?? [];

  const facetFilters: FacetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;

  // We let users override default searchParameters if they want to
  return {
    ...props.searchParameters,
    facetFilters,
  };
}

function Hit({
  hit,
  children,
}: {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: React.ReactNode;
}) {
  return <Link to={hit.url}>{children}</Link>;
}

type ResultsFooterProps = {
  state: AutocompleteState<InternalDocSearchHit>;
  onClose: () => void;
};

// Footer component (without AI button now)
function ResultsFooter({ state, onClose }: ResultsFooterProps) {
  const createSearchLink = useSearchLinkCreator();

  return (
    <div className="ai-search-footer">
      <Link to={createSearchLink(state.query)} onClick={onClose} className="ai-search-see-all">
        <Translate id="theme.SearchBar.seeAll" values={{ count: state.context.nbHits }}>
          {"See all {count} results"}
        </Translate>
      </Link>
    </div>
  );
}

function useResultsFooterComponent({
  closeModal,
}: {
  closeModal: () => void;
}): DocSearchProps["resultsFooterComponent"] {
  return useMemo(
    () =>
      ({ state }) => <ResultsFooter state={state} onClose={closeModal} />,
    [closeModal],
  );
}

function DocSearch({ externalUrlRegex, ...props }: DocSearchProps) {
  const navigator = useNavigator({ externalUrlRegex });
  // Use the standard search parameters without custom attributes that cause errors
  const searchParameters = useSearchParameters({ ...props });
  const transformItems = useTransformItems(props);
  const transformSearchClient = useTransformSearchClient();

  const searchContainer = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(undefined);

  const [showAIModal, setShowAIModal] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [searchResults, setSearchResults] = useState<InternalDocSearchHit[]>([]);

  // Track the last Algolia search state for better result access
  const [lastSearchState, setLastSearchState] =
    useState<AutocompleteState<InternalDocSearchHit> | null>(null);

  const prepareSearchContainer = useCallback(() => {
    if (!searchContainer.current) {
      const divElement = document.createElement("div");
      searchContainer.current = divElement;
      document.body.insertBefore(divElement, document.body.firstChild);
    }
  }, []);

  const openModal = useCallback(() => {
    prepareSearchContainer();
    importDocSearchModalIfNeeded().then(() => setIsOpen(true));
  }, [prepareSearchContainer]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    searchButtonRef.current?.focus();
    setInitialQuery(undefined);
  }, []);

  const handleAskAI = useCallback((query: string, results: InternalDocSearchHit[]) => {
    setAiQuery(query);
    setSearchResults(results);
    setShowAIModal(true);
    trackAIQuery(query, true);
  }, []);

  // Function to enhance search results with Algolia data
  const enhanceSearchResults = useCallback((state: AutocompleteState<InternalDocSearchHit>) => {
    // Store the full search state for later use
    setLastSearchState(state);

    // Get the current query
    const currentQuery = state.query;

    // Extract all hits from different sources - sometimes Algolia categorizes results
    let allHits: InternalDocSearchHit[] = [];

    // Combine all hits from different indices if they exist
    if (state.collections) {
      state.collections.forEach((collection) => {
        if (collection.items && Array.isArray(collection.items)) {
          allHits = [...allHits, ...collection.items];
        }
      });
    }

    // Rank these hits by relevance to the query
    return rankSearchResultsByRelevance(currentQuery, allHits);
  }, []);

  const handleInput = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
        // ignore browser's ctrl+f
        return;
      }
      // prevents duplicate key insertion in the modal input
      event.preventDefault();
      setInitialQuery(event.key);
      openModal();
    },
    [openModal],
  );

  const resultsFooterComponent = useResultsFooterComponent({
    closeModal,
  });

  // Extend the Hit component to help tracking clickable items
  const HitWithTracking = useMemo(
    () =>
      (props: { hit: InternalDocSearchHit | StoredDocSearchHit; children: React.ReactNode }) => {
        // Store clicked result for potential AI follow-up
        const handleClick = () => {
          // Remove unnecessary logging
          if (lastSearchState && lastSearchState.query) {
            // console.log(
            //   `[Web3Auth Search] User clicked result: ${props.hit.url} for query: "${lastSearchState.query}"`,
            // );
          }
        };

        return (
          <Link to={props.hit.url} onClick={handleClick}>
            {props.children}
          </Link>
        );
      },
    [lastSearchState],
  );

  // Setup for DocSearch modal hooks
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: openModal,
    onClose: closeModal,
    onInput: handleInput,
    searchButtonRef,
  });

  // Add effect to inject the AI button at the top and observe search state
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const searchInput = document.querySelector(".DocSearch-Input") as HTMLInputElement;
        const searchDropdown = document.querySelector(".DocSearch-Dropdown");

        if (searchInput && searchDropdown) {
          // We'll only add the AI button and not interfere with the search
          let aiButtonAdded = false;

          // Function to add AI button without affecting search input
          const addAiButton = (query: string) => {
            // Skip if query is too short or already added button
            if (!query || query.trim().length < 3) return;

            // Remove existing AI button if any
            const existingButton = document.querySelector(".ai-search-header");
            if (existingButton) {
              existingButton.remove();
            }

            // Create new AI button
            const aiButton = document.createElement("div");
            aiButton.className = "ai-search-header";
            aiButton.innerHTML = `
              <button class="ai-search-button-header" aria-label="Ask Web3Auth AI Bot to answer your question">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path>
                  <ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse>
                  <ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse>
                  <path d="M8 16h8v1H8z"></path>
                </svg>
                Ask Web3Auth AI Bot about "${query}"
              </button>
            `;

            // Insert the button at the top of search results
            const resultsContainer = document.querySelector(".DocSearch-Dropdown-Container");
            if (resultsContainer && resultsContainer.parentNode) {
              resultsContainer.parentNode.insertBefore(aiButton, resultsContainer);
              aiButtonAdded = true;
            }

            // Add click event listener
            const button = aiButton.querySelector("button");
            if (button) {
              button.addEventListener("click", (e) => {
                e.preventDefault();

                // Capture current search results
                const searchResultItems = Array.from(
                  document.querySelectorAll(".DocSearch-Hit"),
                ).map((hit) => {
                  const anchor = hit.querySelector("a") as HTMLAnchorElement;
                  const titleEl = hit.querySelector(".DocSearch-Hit-title");
                  const pathEl = hit.querySelector(".DocSearch-Hit-path");

                  // Try to extract any highlighted content
                  let snippet = "";
                  const contentEls = hit.querySelectorAll(".DocSearch-Hit-content mark");
                  contentEls.forEach((mark) => {
                    snippet += mark.textContent + " ... ";
                  });

                  return {
                    url: anchor?.href || "",
                    hierarchy: {
                      lvl0: titleEl?.textContent || "",
                      lvl1: pathEl?.textContent || "",
                    },
                    content: snippet || "",
                    _snippetResult: {
                      content: {
                        value: snippet || "",
                      },
                    },
                  } as InternalDocSearchHit;
                });

                // Use our ranking function to prioritize the most relevant results
                const rankedResults = rankSearchResultsByRelevance(query, searchResultItems);

                // Use all available search results for better context
                handleAskAI(query, rankedResults);
                closeModal();
              });
            }
          };

          // Use a passive approach to detect when results have been shown
          // We'll use a MutationObserver that doesn't interact with the input
          const observer = new MutationObserver((mutations) => {
            // Check if search has results
            const hasResults = document.querySelector(".DocSearch-Hit");
            const query = searchInput.value.trim();

            // Only add button if there are results and query is valid
            if (hasResults && query.length >= 3 && !aiButtonAdded) {
              addAiButton(query);
            }
          });

          // Observe search results area for changes
          observer.observe(searchDropdown, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false,
          });

          // Also check when user changes search input, but don't modify the input
          const handleNewSearch = () => {
            // Wait for search results to update
            setTimeout(() => {
              const hasResults = document.querySelector(".DocSearch-Hit");
              const query = searchInput.value.trim();

              // If results are shown and button not added yet, add it
              if (hasResults && query.length >= 3) {
                addAiButton(query);
              } else {
                // Remove button if search is too short
                const existingButton = document.querySelector(".ai-search-header");
                if (existingButton && query.length < 3) {
                  existingButton.remove();
                  aiButtonAdded = false;
                }
              }
            }, 100); // Short delay to let results render
          };

          // Track clicks in the input field
          searchInput.addEventListener("click", handleNewSearch);

          // Handle keyboard input without interfering with typing
          let typingTimer: NodeJS.Timeout | null = null;
          const doneTyping = () => {
            aiButtonAdded = false; // Reset flag to allow adding button again
            handleNewSearch();
          };

          // Use keyup event with delay to detect when user is done typing
          searchInput.addEventListener("keyup", () => {
            if (typingTimer) clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, 500);
          });

          // Cancel timer on keydown
          searchInput.addEventListener("keydown", () => {
            if (typingTimer) clearTimeout(typingTimer);
          });

          return () => {
            observer.disconnect();
            searchInput.removeEventListener("click", handleNewSearch);
            searchInput.removeEventListener("keyup", () => {});
            searchInput.removeEventListener("keydown", () => {});
            if (typingTimer) clearTimeout(typingTimer);
          };
        }
      }, 200); // Increased delay to ensure Algolia has initialized

      return () => clearTimeout(timer);
    }
  }, [isOpen, handleAskAI, closeModal]);

  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={openModal}
        ref={searchButtonRef}
        translations={props.translations?.button ?? translations.button}
      />

      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <DocSearchModal
            onClose={closeModal}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            navigator={navigator}
            transformItems={transformItems}
            hitComponent={HitWithTracking}
            transformSearchClient={transformSearchClient}
            {...(props.searchPagePath && {
              resultsFooterComponent,
            })}
            placeholder={translations.placeholder}
            {...props}
            translations={props.translations?.modal ?? translations.modal}
            searchParameters={searchParameters}
          />,
          searchContainer.current,
        )}

      {showAIModal && (
        <AISearchModal
          query={aiQuery}
          searchResults={searchResults}
          onClose={() => setShowAIModal(false)}
        />
      )}
    </>
  );
}

export default function SearchBar(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return <DocSearch {...(siteConfig.themeConfig.algolia as DocSearchProps)} />;
}
