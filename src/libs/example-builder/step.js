import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function Step({ isSelected = false, children }) {
  return (
    <div
      className={classNames(styles.step, {
        [styles.stepSelected]: isSelected,
      })}
    >
      {children}
    </div>
  );
}
