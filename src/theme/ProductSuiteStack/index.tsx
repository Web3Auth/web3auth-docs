import React from "react";
import styles from "./styles.module.css";

export default function ProductSuiteStack() {
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>tabs</div>
      <div className={styles.contentContainer}>content</div>
    </div>
  );
}
