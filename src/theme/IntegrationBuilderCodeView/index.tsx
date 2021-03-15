import React from "react";
import CodeBlock from "@theme/CodeBlock";
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
              {getDisplayName(filename)}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.body}>
        <CodeBlock
          className="language-jsx"
          metastring={highlight ? `{${highlight}}` : undefined}
          lineNamespace="integration-builder"
        >
          {fileContents[selectedFilename]}
        </CodeBlock>
      </div>
    </div>
  );
}
