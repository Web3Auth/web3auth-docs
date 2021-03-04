import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";
import theme from "prism-react-renderer/themes/palenight";
import parseRange from "parse-numeric-range";
import styles from "./styles.module.css";

export default function CodeView({ code, language, hightlight }) {
  const hightlightLines = hightlight ? parseRange(hightlight) : [];

  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classNames(styles.pre, className)} style={style}>
          {tokens.map((line, i) => {
            const { className, ...lineProps } = getLineProps({ line, key: i });
            const isHightlighted = hightlightLines.includes(i + 1);

            return (
              <div
                key={i}
                className={classNames(className, styles.line, {
                  "docusaurus-highlight-code-line": isHightlighted,
                })}
                {...lineProps}
              >
                <span className={styles.lineNo}>{i + 1}</span>
                <span className={styles.lineContent}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
