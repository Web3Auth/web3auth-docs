/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CodeBlock from "@theme/CodeBlock";
import classNames from "classnames";
import rangeParser from "parse-numeric-range";
import path from "path";
import { useEffect, useState } from "react";
import { FiFile } from "react-icons/fi";
import { animated, useSpring } from "react-spring";

import styles from "./styles.module.css";

interface Props {
  filenames: string[];
  builderOptions: Record<string, string>;
  fileContents: Record<string, string>;
  highlight?: string;
  selectedFilename: string;
  onClickFilename: (filename: string) => void;
  scroll?: number;
}

const getDisplayName = (filename: string): string => {
  return path.basename(filename);
};

const getLanguage = (filename: string): string => {
  const ext = path.extname(filename).substr(1);

  if (["jsx", "java", "swift", "ts", "tsx", "html", "css", "xml"].includes(ext)) return `language-${ext}`;
  if (ext === "js" || ext === "vue") return "language-jsx";
  if (ext === "gradle") return "language-groovy";
  if (ext === "kt") return "language-kotlin";
  if (ext === "plist") return "language-xml";
  return undefined;
};

export default function IntegrationBuilderCodeView({ selectedFilename, filenames, fileContents, highlight, onClickFilename, builderOptions }: Props) {
  const highlightLines = rangeParser(highlight || "0");
  const props = useSpring({ scroll: Math.max(highlightLines[0] * 22 - 64, 0) }); // 22 is line height, 64 is offset to scroll the line close to top
  const [previewUrl, setPreviewUrl] = useState<string | undefined>("https://web3auth-preview.surge.sh");
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("builderOptions", builderOptions);
    const url = new URL("https://web3auth-preview.surge.sh");
    if (builderOptions.whitelabel === "yes") {
      url.pathname = "whitelabel.html";
    }
    if (builderOptions.chain === "eth") {
      url.searchParams.append("chainNamespace", "eip155");
    }
    if (builderOptions.chain === "solana") {
      url.searchParams.append("chainNamespace", "sol");
    }

    setPreviewUrl(url.href);
    setIsPreviewLoading(true);
  }, [builderOptions]);
  return (
    <div className={styles.container}>
      {builderOptions.preview === "yes" ? (
        <div className={styles.container}>
          {isPreviewLoading && <h1 style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>Loading....</h1>}
          <iframe
            style={{ display: isPreviewLoading ? "none" : "block" }}
            onLoad={() => {
              setIsPreviewLoading(false);
            }}
            src={previewUrl}
            id="iframe1"
            height="100%"
            width="100%"
            scrolling="no"
            title="web3auth web integration example"
            frameBorder="no"
          />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <ul className={classNames("tabs", styles.codeTabs)} role="tablist" aria-orientation="horizontal">
              {filenames.map((filename) => (
                <li
                  key={filename}
                  className={classNames("tabs__item", {
                    "tabs__item--active": filename === selectedFilename,
                  })}
                  role="tab"
                  onClick={onClickFilename.bind(this, filename)}
                  onKeyDown={onClickFilename.bind(this, filename)}
                >
                  <FiFile />
                  <span>{getDisplayName(filename)}</span>
                </li>
              ))}
            </ul>
          </div>
          <animated.div className={styles.body} scrollTop={props.scroll}>
            <CodeBlock className={getLanguage(selectedFilename)} metastring={highlight ? `{${highlight}}` : undefined}>
              {fileContents[selectedFilename]}
            </CodeBlock>
          </animated.div>
        </div>
      )}
    </div>
  );
}
