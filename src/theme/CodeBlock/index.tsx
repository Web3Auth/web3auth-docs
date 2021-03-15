/**
 * Swizzled from @docusaurus/theme-classic/src/theme/CodeBlock
 */

import React, { useEffect, useState, useRef } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import usePrismTheme from "@theme/hooks/usePrismTheme";
import { useThemeConfig } from "@docusaurus/theme-common";
import copy from "copy-text-to-clipboard";
import rangeParser from "parse-numeric-range";
import clsx from "clsx";
import styles from "./styles.module.css";

const highlightLinesRangeRegex = /{([\d,-]+)}/;
const getHighlightDirectiveRegex = (
  languages = ["js", "jsBlock", "jsx", "python", "html"]
) => {
  // supported types of comments
  const comments = {
    js: {
      start: "\\/\\/",
      end: "",
    },
    jsBlock: {
      start: "\\/\\*",
      end: "\\*\\/",
    },
    jsx: {
      start: "\\{\\s*\\/\\*",
      end: "\\*\\/\\s*\\}",
    },
    python: {
      start: "#",
      end: "",
    },
    html: {
      start: "<!--",
      end: "-->",
    },
  };
  // supported directives
  const directives = [
    "highlight-next-line",
    "highlight-start",
    "highlight-end",
  ].join("|");
  // to be more reliable, the opening and closing comment must match
  const commentPattern = languages
    .map(
      (lang) =>
        `(?:${comments[lang].start}\\s*(${directives})\\s*${comments[lang].end})`
    )
    .join("|");
  // white space is allowed, but otherwise it should be on it's own line
  return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
};

// select comment styles based on language
const highlightDirectiveRegex = (lang: string) => {
  switch (lang) {
    case "js":
    case "javascript":
    case "ts":
    case "typescript":
      return getHighlightDirectiveRegex(["js", "jsBlock"]);

    case "jsx":
    case "tsx":
      return getHighlightDirectiveRegex(["js", "jsBlock", "jsx"]);

    case "html":
      return getHighlightDirectiveRegex(["js", "jsBlock", "html"]);

    case "python":
    case "py":
      return getHighlightDirectiveRegex(["python"]);

    default:
      // all comment types
      return getHighlightDirectiveRegex();
  }
};
const codeBlockTitleRegex = /(?:title=")(.*)(?:")/;

interface Props {
  className: string;
  metastring: string;
  lineNamespace?: string;
  children: React.ReactNode[];
}

export default function CodeBlock({
  children,
  className: languageClassName,
  lineNamespace,
  metastring,
}: Props): JSX.Element {
  const { prism } = useThemeConfig();

  const [showCopied, setShowCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  // The Prism theme on SSR is always the default theme but the site theme
  // can be in a different mode. React hydration doesn't update DOM styles
  // that come from SSR. Hence force a re-render after mounting to apply the
  // current relevant styles. There will be a flash seen of the original
  // styles seen using this current approach but that's probably ok. Fixing
  // the flash will require changing the theming approach and is not worth it
  // at this point.
  useEffect(() => {
    setMounted(true);
  }, []);

  const button = useRef(null);
  let highlightLines: number[] = [];
  let codeBlockTitle = "";

  const prismTheme = usePrismTheme();

  // In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
  const content = Array.isArray(children) ? children.join("") : children;

  if (metastring && highlightLinesRangeRegex.test(metastring)) {
    const highlightLinesRange = metastring.match(highlightLinesRangeRegex)![1];
    highlightLines = rangeParser(highlightLinesRange).filter((n) => n > 0);
  }

  if (metastring && codeBlockTitleRegex.test(metastring)) {
    codeBlockTitle = metastring.match(codeBlockTitleRegex)![1];
  }

  let language =
    languageClassName &&
    // Force Prism's language union type to `any` because it does not contain all available languages
    ((languageClassName.replace(/language-/, "") as Language) as any);

  if (!language && prism.defaultLanguage) {
    language = prism.defaultLanguage;
  }

  // only declaration OR directive highlight can be used for a block
  let code = content.replace(/\n$/, "");
  if (highlightLines.length === 0 && language !== undefined) {
    let range = "";
    const directiveRegex = highlightDirectiveRegex(language);
    // go through line by line
    const lines = content.replace(/\n$/, "").split("\n");

    let blockStart: number;
    // loop through lines
    for (let index = 0; index < lines.length; ) {
      const line = lines[index];
      // adjust for 0-index
      const lineNumber = index + 1;
      const match = line.match(directiveRegex);
      if (match !== null) {
        const directive = match
          .slice(1)
          .reduce(
            (final: string | undefined, item) => final || item,
            undefined
          );
        switch (directive) {
          case "highlight-next-line":
            range += `${lineNumber},`;
            break;

          case "highlight-start":
            blockStart = lineNumber;
            break;

          case "highlight-end":
            range += `${blockStart}-${lineNumber - 1},`;
            break;

          default:
            break;
        }
        lines.splice(index, 1);
      } else {
        // lines without directives are unchanged
        index += 1;
      }
    }
    highlightLines = rangeParser(range);
    code = lines.join("\n");
  }

  const handleCopyCode = () => {
    copy(code);
    setShowCopied(true);

    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <Highlight
      {...defaultProps}
      key={String(mounted)}
      theme={prismTheme}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={styles.codeBlockContainer}>
          {codeBlockTitle && (
            <div style={style} className={styles.codeBlockTitle}>
              {codeBlockTitle}
            </div>
          )}
          <div className={clsx(styles.codeBlockContent, language)}>
            <div
              tabIndex={0}
              className={clsx(className, styles.codeBlock, "thin-scrollbar", {
                [styles.codeBlockWithTitle]: codeBlockTitle,
              })}
            >
              <div className={styles.codeBlockLines} style={style}>
                {tokens.map((line, i) => {
                  if (line.length === 1 && line[0].content === "") {
                    line[0].content = "\n";
                  }

                  const lineProps = getLineProps({ line, key: i });
                  const lineNo = i + 1;

                  if (highlightLines.includes(lineNo)) {
                    lineProps.className = `${lineProps.className} docusaurus-highlight-code-line`;
                  }

                  const lineId = lineNamespace
                    ? `${lineNamespace}-docusaurus-code-line-no-${lineNo}`
                    : undefined;

                  return (
                    <div key={i} id={lineId} {...lineProps}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              ref={button}
              type="button"
              aria-label={translate({
                id: "theme.CodeBlock.copyButtonAriaLabel",
                message: "Copy code to clipboard",
                description: "The ARIA label for copy code blocks button",
              })}
              className={clsx(styles.copyButton)}
              onClick={handleCopyCode}
            >
              {showCopied ? (
                <Translate
                  id="theme.CodeBlock.copied"
                  description="The copied button label on code blocks"
                >
                  Copied
                </Translate>
              ) : (
                <Translate
                  id="theme.CodeBlock.copy"
                  description="The copy button label on code blocks"
                >
                  Copy
                </Translate>
              )}
            </button>
          </div>
        </div>
      )}
    </Highlight>
  );
}
