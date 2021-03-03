import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";
import styles from "./code-block.module.css";

export default function CodeBlock({ code, language }) {
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classNames(styles.pre, className)} style={style}>
          {tokens.map((line, i) => (
            <div
              className={styles.line}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <span className={styles.lineNo}>{i + 1}</span>
              <span className={styles.lineContent}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
