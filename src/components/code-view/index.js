import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";
import theme from "prism-react-renderer/themes/palenight";
import styles from "./styles.module.css";

export default function CodeView({ code, language }) {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
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
