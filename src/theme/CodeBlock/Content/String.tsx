import React, { useRef, useState, useCallback } from "react";
import clsx from "clsx";
import { useThemeConfig, usePrismTheme } from "@docusaurus/theme-common";
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from "@docusaurus/theme-common/internal";
import { Highlight, type Language } from "prism-react-renderer";
import Line from "@theme/CodeBlock/Line";
import CopyButton from "@theme/CodeBlock/CopyButton";
import WordWrapButton from "@theme/CodeBlock/WordWrapButton";
import Container from "@theme/CodeBlock/Container";
import type { Props } from "@theme/CodeBlock/Content/String";

import styles from "./styles.module.css";

// Twoslash types
interface TwoslashQuery {
  kind: "query";
  start: number;
  length: number;
  text: string;
  offset: number;
  line: number;
  docs?: string;
}

interface TwoslashData {
  queries: TwoslashQuery[];
  errors: any[];
}

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language: string | undefined): string | undefined {
  return language?.toLowerCase();
}

// Filter out ^? lines from code content for clean display
function filterTwoslashLines(code: string): { cleanCode: string; lineMapping: number[] } {
  const lines = code.split("\n");
  const filteredLines: string[] = [];
  const lineMapping: number[] = [];

  lines.forEach((line, index) => {
    // Only filter out Twoslash query lines (^?), keep everything else including magic comments
    const isTwoslashQuery = line.trim().includes("^?");

    if (!isTwoslashQuery) {
      filteredLines.push(line);
      lineMapping.push(index);
    }
  });

  return {
    cleanCode: filteredLines.join("\n"),
    lineMapping,
  };
}

// Twoslash Tooltip Component
const TwoslashTooltip: React.FC<{
  query: TwoslashQuery;
  isVisible: boolean;
  position: { x: number; y: number };
}> = ({ query, isVisible, position }) => {
  if (!isVisible) return null;

  return (
    <div
      className={clsx("twoslash-tooltip", styles.twoslashTooltip)}
      style={{
        position: "fixed",
        left: position.x,
        top: position.y - 40,
      }}
    >
      <div className="twoslash-type">{query.text}</div>
      {query.docs && <div className="twoslash-docs">{query.docs}</div>}
    </div>
  );
};

export default function CodeBlockString({
  children,
  className: blockClassName = "",
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
  ...props
}: Props & { [key: string]: any }): JSX.Element {
  const {
    prism: { defaultLanguage, magicComments },
  } = useThemeConfig();

  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage,
  );

  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  // Twoslash state
  const [hoveredQuery, setHoveredQuery] = useState<TwoslashQuery | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Check if this is a Twoslash block
  const isTwoslash = metastring?.includes("twoslash") && metastring?.includes("twoslash-processed");

  // Parse Twoslash data from props
  let twoslashData: TwoslashData | null = null;
  if (isTwoslash) {
    try {
      // Try multiple ways to get the data
      if (props.twoslashData && typeof props.twoslashData === "object") {
        twoslashData = props.twoslashData;
      } else if (props.twoslashData && typeof props.twoslashData === "string") {
        twoslashData = JSON.parse(props.twoslashData);
      } else if (props.twoslash_data && typeof props.twoslash_data === "object") {
        twoslashData = props.twoslash_data;
      } else if (props.twoslash_data && typeof props.twoslash_data === "string") {
        twoslashData = JSON.parse(props.twoslash_data);
      } else if (props["data-twoslash"]) {
        twoslashData = JSON.parse(props["data-twoslash"]);
      }
    } catch (error) {
      console.warn("Failed to parse Twoslash data:", error);
    }
  }

  // Get the raw code content
  let rawCode = "";
  if (typeof children === "string") {
    rawCode = children;
  } else if (children && typeof children === "object" && "props" in children) {
    rawCode = children.props.children || "";
  }

  // Filter out ^? lines for Twoslash blocks
  const { cleanCode, lineMapping } = isTwoslash
    ? filterTwoslashLines(rawCode)
    : { cleanCode: rawCode, lineMapping: [] };

  // Use filtered code for parsing
  const codeToUse = isTwoslash ? cleanCode : rawCode;

  // Check if the code has magic comments
  const hasMagicComments =
    cleanCode.includes("//highlight-") ||
    cleanCode.includes("//focus-") ||
    cleanCode.includes("//error-");

  // We still parse the metastring in case we want to support more syntax in the future
  const title = parseCodeBlockTitle(metastring) || titleProp;

  const { lineClassNames, code } = parseLines(codeToUse, {
    metastring,
    language,
    magicComments,
  });

  const showLineNumbers = showLineNumbersProp ?? containsLineNumbers(metastring);

  // Create a map of character ranges that have Twoslash queries for visual indicators
  const twoslashRanges: Array<{
    line: number;
    start: number;
    end: number;
    query: TwoslashQuery;
    variableName: string;
  }> = [];
  if (isTwoslash && twoslashData?.queries) {
    twoslashData.queries.forEach((query) => {
      // Extract variable name from query text first
      const queryText = query.text;
      const variableNameMatch = queryText.match(
        /(?:const|let|var|function)?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/,
      );
      const variableName = variableNameMatch ? variableNameMatch[1] : "";

      if (!variableName) {
        console.warn("❌ Could not extract variable name from query:", queryText);
        return;
      }

      // The query.line is the line in the ORIGINAL code (before filtering)
      // We need to find where this variable appears in the code that will be displayed
      const originalLineIndex = query.line - 1; // Convert to 0-based

      // Use cleanCode for search since it now includes magic comments but excludes ^? lines
      const searchCode = cleanCode;
      const searchLines = searchCode.split("\n");

      // Find the variable in the search code
      let foundLine = -1;
      let variableIndex = -1;

      for (let i = 0; i < searchLines.length; i++) {
        const lineContent = searchLines[i];
        const index = lineContent.indexOf(variableName);

        // Check if this is likely the right line (contains the variable and is near the original line)
        if (index !== -1 && Math.abs(i - originalLineIndex) <= 2) {
          foundLine = i;
          variableIndex = index;
          break;
        }
      }

      // If not found near the original line, search the entire code
      if (foundLine === -1) {
        for (let i = 0; i < searchLines.length; i++) {
          const lineContent = searchLines[i];
          const index = lineContent.indexOf(variableName);

          if (index !== -1) {
            foundLine = i;
            variableIndex = index;
            break;
          }
        }
      }

      if (foundLine !== -1 && variableIndex !== -1) {
        // Map from cleanCode line numbers to parseLines output line numbers
        const parseLinesLines = code.split("\n");
        const cleanCodeLine = searchLines[foundLine];

        // Find the corresponding line in parseLines output
        let mappedLine = -1;
        for (let i = 0; i < parseLinesLines.length; i++) {
          if (parseLinesLines[i].trim() === cleanCodeLine.trim()) {
            mappedLine = i;
            break;
          }
        }

        if (mappedLine !== -1) {
          const range = {
            line: mappedLine, // Now using parseLines coordinates
            start: variableIndex,
            end: variableIndex + variableName.length,
            query,
            variableName,
          };

          twoslashRanges.push(range);
        } else {
          console.warn(
            `❌ Could not map line ${foundLine} from cleanCode to parseLines output for variable "${variableName}"`,
          );
        }
      } else {
        console.warn("❌ Could not find variable anywhere in the code:", {
          variableName,
          query,
          searchCode: searchLines,
        });
      }
    });
  }

  // Handle mouse events for Twoslash tooltips
  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!isTwoslash || !twoslashData?.queries?.length || !wordWrap.codeBlockRef.current) return;

      const codeElement = wordWrap.codeBlockRef.current;

      // Find all elements with twoslash-hover class
      const twoslashElements = codeElement.querySelectorAll(".token.twoslash-hover");
      let foundMatch = false;

      // Check if mouse is over any twoslash-hover element
      for (const element of twoslashElements) {
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        ) {
          // Found a hover element, now find which variable it corresponds to
          const elementText = element.textContent || "";

          // Find the matching Twoslash range by variable name
          const matchingRange = twoslashRanges.find(
            (range) => range.variableName === elementText.trim(),
          );

          if (matchingRange) {
            setHoveredQuery(matchingRange.query);
            setTooltipPosition({ x: event.clientX, y: event.clientY });
            foundMatch = true;
            break;
          }
        }
      }

      if (!foundMatch) {
        setHoveredQuery(null);
      }
    },
    [isTwoslash, twoslashData, twoslashRanges, wordWrap.codeBlockRef],
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredQuery(null);
  }, []);

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language && `language-${language}`,
        styles.codeBlockContainer,
        isTwoslash && "twoslash-block",
      )}
    >
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>
        <Highlight theme={prismTheme} code={code} language={(language ?? "text") as Language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            // Check if we have missing lines due to magic comments
            const expectedLineCount = lineClassNames.length;
            const actualTokenCount = tokens.length;
            const missingLines = expectedLineCount - actualTokenCount;

            // Create a map to track which lines need Twoslash processing
            const lineNeedsProcessing = new Map();
            twoslashRanges.forEach((range) => {
              lineNeedsProcessing.set(range.line, range);
            });

            return (
              <pre
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                tabIndex={0}
                ref={wordWrap.codeBlockRef}
                className={clsx(className, styles.codeBlock)}
                style={{
                  ...style,
                  cursor: isTwoslash && twoslashData?.queries?.length ? "default" : "text",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <code
                  className={clsx(
                    styles.codeBlockLines,
                    showLineNumbers && styles.codeBlockLinesWithNumbering,
                  )}
                >
                  {tokens.map((line, lineIndex) => {
                    // Get Twoslash ranges for this line
                    const lineRanges = twoslashRanges.filter((range) => range.line === lineIndex);

                    // Calculate character positions for this line and split tokens as needed
                    let charPosition = 0;
                    const enhancedLine: any[] = [];
                    const processedRanges = new Set<number>(); // Track which ranges we've successfully processed

                    line.forEach((token, tokenIndex) => {
                      const tokenLength = token.content.length;
                      const tokenStart = charPosition;
                      const tokenEnd = charPosition + tokenLength;

                      // Check if this token overlaps with any Twoslash ranges
                      const overlappingRanges = lineRanges.filter(
                        (range) => tokenStart < range.end && tokenEnd > range.start,
                      );

                      if (overlappingRanges.length > 0 && isTwoslash) {
                        // Process each overlapping range
                        overlappingRanges.forEach((range) => {
                          processedRanges.add(range.start); // Mark this range as processed
                        });

                        // Split this token to isolate the variable part
                        const range = overlappingRanges[0]; // Take the first overlapping range
                        const relativeStart = Math.max(0, range.start - tokenStart);
                        const relativeEnd = Math.min(tokenLength, range.end - tokenStart);

                        // Split the token into three parts: before, variable, after
                        const beforePart = token.content.substring(0, relativeStart);
                        const variablePart = token.content.substring(relativeStart, relativeEnd);
                        const afterPart = token.content.substring(relativeEnd);

                        // Add the parts as separate tokens
                        if (beforePart) {
                          enhancedLine.push({
                            ...token,
                            content: beforePart,
                          });
                        }

                        if (variablePart) {
                          const enhancedToken = {
                            ...token,
                            content: variablePart,
                            types: [...token.types, "twoslash-hover"],
                          };
                          enhancedLine.push(enhancedToken);
                        }

                        if (afterPart) {
                          enhancedLine.push({
                            ...token,
                            content: afterPart,
                          });
                        }
                      } else {
                        // No overlap, keep token as is
                        enhancedLine.push(token);
                      }

                      charPosition += tokenLength;
                    });

                    // FALLBACK: If we have unprocessed ranges on this line, try a different approach
                    const unprocessedRanges = lineRanges.filter(
                      (range) => !processedRanges.has(range.start),
                    );
                    if (unprocessedRanges.length > 0 && isTwoslash) {
                      // For each unprocessed range, try to find and split the containing token
                      unprocessedRanges.forEach((range) => {
                        let charPos = 0;
                        let foundInFallback = false;

                        for (let i = 0; i < enhancedLine.length; i++) {
                          const token = enhancedLine[i];
                          const tokenStart = charPos;
                          const tokenEnd = charPos + token.content.length;

                          // Check if this token contains the variable
                          if (tokenStart <= range.start && tokenEnd >= range.end) {
                            // Remove the original token and replace with split tokens
                            const relativeStart = range.start - tokenStart;
                            const relativeEnd = range.end - tokenStart;

                            const beforePart = token.content.substring(0, relativeStart);
                            const variablePart = token.content.substring(
                              relativeStart,
                              relativeEnd,
                            );
                            const afterPart = token.content.substring(relativeEnd);

                            const newTokens = [];
                            if (beforePart) {
                              newTokens.push({ ...token, content: beforePart });
                            }
                            if (variablePart) {
                              newTokens.push({
                                ...token,
                                content: variablePart,
                                types: [...token.types, "twoslash-hover"],
                              });
                            }
                            if (afterPart) {
                              newTokens.push({ ...token, content: afterPart });
                            }

                            // Replace the token with the split tokens
                            enhancedLine.splice(i, 1, ...newTokens);
                            foundInFallback = true;
                            break;
                          }

                          charPos += token.content.length;
                        }

                        if (!foundInFallback) {
                          console.warn(
                            `❌ Fallback: Could not process range for "${range.variableName}" on line ${lineIndex}`,
                            {
                              range,
                              enhancedLine: enhancedLine.map((t) => t.content).join(""),
                            },
                          );
                        }
                      });
                    }

                    // Mark this range as processed
                    lineRanges.forEach((range) => {
                      lineNeedsProcessing.delete(range.line);
                    });

                    // Safely handle lineClassNames - it could be an array or string
                    const baseClassNames = lineClassNames[lineIndex];
                    const classNamesArray = Array.isArray(baseClassNames)
                      ? baseClassNames
                      : baseClassNames
                        ? [baseClassNames]
                        : [];

                    return (
                      <Line
                        key={lineIndex}
                        line={enhancedLine}
                        classNames={classNamesArray}
                        showLineNumbers={showLineNumbers}
                        getLineProps={getLineProps}
                        getTokenProps={getTokenProps}
                      />
                    );
                  })}

                  {/* Handle missing highlighted lines that weren't in the tokens array */}
                  {isTwoslash &&
                    missingLines > 0 &&
                    Array.from(lineNeedsProcessing.entries()).map(([lineIndex, range]) => {
                      // Get the line content from our clean code
                      const cleanLines = cleanCode.split("\n");
                      const lineContent = cleanLines[lineIndex] || "";

                      if (!lineContent.trim()) {
                        return null; // Skip empty lines
                      }

                      // Create tokens manually for this line
                      const tokens = [
                        {
                          content: lineContent,
                          types: ["plain"],
                        },
                      ];

                      // Apply Twoslash enhancement
                      const enhancedTokens = [];
                      let charPos = 0;

                      tokens.forEach((token) => {
                        const tokenStart = charPos;
                        const tokenEnd = charPos + token.content.length;

                        // Check if this overlaps with our range
                        if (tokenStart <= range.start && tokenEnd >= range.end) {
                          const beforePart = token.content.substring(0, range.start - tokenStart);
                          const variablePart = token.content.substring(
                            range.start - tokenStart,
                            range.end - tokenStart,
                          );
                          const afterPart = token.content.substring(range.end - tokenStart);

                          if (beforePart) {
                            enhancedTokens.push({ ...token, content: beforePart });
                          }
                          if (variablePart) {
                            enhancedTokens.push({
                              ...token,
                              content: variablePart,
                              types: [...token.types, "twoslash-hover"],
                            });
                          }
                          if (afterPart) {
                            enhancedTokens.push({ ...token, content: afterPart });
                          }
                        } else {
                          enhancedTokens.push(token);
                        }

                        charPos += token.content.length;
                      });

                      // Get the line class names for highlighting
                      const baseClassNames = lineClassNames[lineIndex];
                      const classNamesArray = Array.isArray(baseClassNames)
                        ? baseClassNames
                        : baseClassNames
                          ? [baseClassNames]
                          : [];

                      return (
                        <Line
                          key={`missing-${lineIndex}`}
                          line={enhancedTokens}
                          classNames={classNamesArray}
                          showLineNumbers={showLineNumbers}
                          getLineProps={getLineProps}
                          getTokenProps={getTokenProps}
                        />
                      );
                    })}
                </code>
              </pre>
            );
          }}
        </Highlight>
        <div className={styles.buttonGroup}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )}
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>

      {/* Twoslash Tooltip */}
      {isTwoslash && hoveredQuery && (
        <TwoslashTooltip
          query={hoveredQuery}
          isVisible={!!hoveredQuery}
          position={tooltipPosition}
        />
      )}
    </Container>
  );
}
