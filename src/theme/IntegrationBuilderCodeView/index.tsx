import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { FiFile } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
import rangeParser from "parse-numeric-range";
import classNames from "classnames";
import path from "path";
import styles from "./styles.module.css";

interface Props {
  filenames: string[];
  fileContents: Record<string, string>;
  highlight?: string;
  selectedFilename: string;
  onClickFilename: (filename: string) => void;
}

const getDisplayName = (filename: string): string => {
  return path.basename(filename);
};

export default function IntegrationBuilderCodeView({
  selectedFilename,
  filenames,
  fileContents,
  highlight,
  onClickFilename,
}: Props) {
  const highlightLines = rangeParser(highlight || "0");
  const props = useSpring({ scroll: Math.max(highlightLines[0] * 22 - 64, 0) }); // 22 is line height, 64 is offset to scroll the line close to top

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ul
          className={classNames("tabs", styles.codeTabs)}
          role="tablist"
          aria-orientation="horizontal"
        >
          {filenames.map((filename) => (
            <li
              key={filename}
              className={classNames("tabs__item", {
                "tabs__item--active": filename === selectedFilename,
              })}
              role="tab"
              onClick={onClickFilename.bind(this, filename)}
            >
              <FiFile />
              <span>{getDisplayName(filename)}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* @ts-ignore */}
      <animated.div className={styles.body} scrollTop={props.scroll}>
        <CodeBlock
          className="language-jsx"
          metastring={highlight ? `{${highlight}}` : undefined}
          lineNamespace="integration-builder"
        >
          {fileContents[selectedFilename]}
        </CodeBlock>
      </animated.div>
    </div>
  );
}
