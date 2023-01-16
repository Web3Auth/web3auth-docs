import CodeBlock from "@theme/CodeBlock";
import classNames from "classnames";
import rangeParser from "parse-numeric-range";
import path from "path";
import { FiFile } from "react-icons/fi";
import { animated, useSpring } from "react-spring";

import styles from "./styles.module.css";

interface Props {
  filenames: string[];
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

  if (["jsx", "java", "swift", "ts", "tsx", "html", "css", "xml", "dart", "json", "cs"].includes(ext)) return `language-${ext}`;
  if (ext === "js") return "language-jsx";
  if (ext === "vue") return "language-ts";
  if (ext === "gradle") return "language-groovy";
  if (ext === "kt") return "language-kotlin";
  if (ext === "plist") return "language-xml";
  if (ext === "yaml") return "language-yaml";
  if (ext === "") return "language-shell";
  return undefined;
};

export default function IntegrationBuilderCodeView({ selectedFilename, filenames, fileContents, highlight, onClickFilename }: Props) {
  const highlightLines = rangeParser(highlight || "0");
  const props = useSpring({ scroll: Math.max(highlightLines[0] * 15, 0) }); // 22 is line height, 64 is offset to scroll the line close to top
  return (
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
              <span>{getDisplayName(filename.replace("-", "-\u2060"))}</span>
            </li>
          ))}
        </ul>
      </div>
      <animated.div className={styles.body} scrollTop={props.scroll}>
        <CodeBlock className={getLanguage(selectedFilename)}>{fileContents[selectedFilename]}</CodeBlock>
      </animated.div>
    </div>
  );
}
