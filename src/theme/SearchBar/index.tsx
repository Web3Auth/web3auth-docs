import React, { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import { isRegexpStringMatch, useSearchLinkCreator } from "@docusaurus/theme-common";
import process from "process";
import { marked } from "marked";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";

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

  // Get the API key from window global variable (set in docusaurus.config.ts)
  const apiKey = typeof window !== "undefined" ? (window as any).OPENAI_API_KEY || "" : "";

  useEffect(() => {
    async function fetchAnswer() {
      if (!query) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Format search results to include in the prompt
        const formattedResults = searchResults
          .slice(0, 5)
          .map((result, index) => {
            return `${index + 1}. ${result.hierarchy?.lvl0 || ""} > ${result.hierarchy?.lvl1 || ""}: ${result.url}`;
          })
          .join("\n");

        // Create the prompt with context from search results
        const prompt = `
You are the Web3Auth AI Bot, an assistant that helps users with Web3Auth-related questions.
Answer the following question based on Web3Auth documentation.

The user is searching for: "${query}"

Here are the top relevant documents from our search:
${formattedResults}

Please provide a concise, helpful response based on Web3Auth documentation. Be specific, accurate and include code examples if relevant.
`;
        console.log("apiKey from window global", apiKey ? "Available" : "Not available");
        if (apiKey) {
          // Create OpenAI client on demand
          const openai = new OpenAI({
            apiKey: apiKey,
            dangerouslyAllowBrowser: true,
          });

          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content:
                  "You are the Web3Auth AI Bot, an assistant that helps users with Web3Auth integration.",
              },
              { role: "user", content: prompt },
            ],
            max_tokens: 500,
            temperature: 0.3,
          });

          const generatedAnswer = response.choices[0]?.message?.content;
          setAnswer(generatedAnswer || "Sorry, I couldn't find an answer to your question.");
        } else {
          setError("OpenAI API key is not configured. Please check your environment variables.");
        }
      } catch (err: any) {
        setError(err?.message || "Failed to generate an answer. Please try again later.");
        trackAIQuery(query, false);
      } finally {
        setLoading(false);
      }
    }

    fetchAnswer();
  }, [query, searchResults, apiKey]);

  // Effect to format markdown to HTML
  useEffect(() => {
    if (answer) {
      const htmlContent = marked.parse(answer) as string;
      setFormattedAnswer(htmlContent);
    }
  }, [answer]);

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
              <div>Generating answer based on Web3Auth documentation...</div>
            </div>
          ) : error ? (
            <div className="ai-error">{error}</div>
          ) : (
            <div className="ai-answer">
              <div className="ai-response">
                <strong>A:</strong>
                <div className="ai-response-text markdown">
                  <div dangerouslySetInnerHTML={{ __html: formattedAnswer }} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ai-modal-footer">
          Powered by Web3Auth AI • Using OpenAI to answer based on our documentation
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

  // Setup for DocSearch modal hooks
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: openModal,
    onClose: closeModal,
    onInput: handleInput,
    searchButtonRef,
  });

  // Add effect to inject the AI button at the top
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        const searchInput = document.querySelector(".DocSearch-Input") as HTMLInputElement;
        const searchDropdown = document.querySelector(".DocSearch-Dropdown");

        if (searchInput && searchDropdown) {
          // Listen for changes to the search input
          const handleSearchChange = () => {
            const query = searchInput.value;

            // Remove existing AI button if any
            const existingButton = document.querySelector(".ai-search-header");
            if (existingButton) {
              existingButton.remove();
            }

            // Create new AI button if query is valid
            if (query && query.trim().length > 2) {
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
              }

              // Add click event listener
              const button = aiButton.querySelector("button");
              if (button) {
                button.addEventListener("click", (e) => {
                  e.preventDefault();
                  // Get the current search results
                  const searchResultItems = Array.from(
                    document.querySelectorAll(".DocSearch-Hit"),
                  ).map((hit) => {
                    const anchor = hit.querySelector("a") as HTMLAnchorElement;
                    const titleEl = hit.querySelector(".DocSearch-Hit-title");
                    const pathEl = hit.querySelector(".DocSearch-Hit-path");

                    return {
                      url: anchor?.href || "",
                      hierarchy: {
                        lvl0: titleEl?.textContent || "",
                        lvl1: pathEl?.textContent || "",
                      },
                    } as InternalDocSearchHit;
                  });

                  handleAskAI(query, searchResultItems);
                  closeModal();
                });
              }
            }
          };

          // Attach input event listener
          searchInput.addEventListener("input", handleSearchChange);

          // Initial check
          handleSearchChange();

          return () => {
            searchInput.removeEventListener("input", handleSearchChange);
          };
        }
      }, 100);

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
            hitComponent={Hit}
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
