import React from "react";
import styles from "./styles.module.css";

export default function ProductSuiteStack() {
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabSection}>
          <ul>
            <li className={styles.selected}>Overview</li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Plug n play</span>
          <ul>
            <li>OpenLogin</li>
            <li>Wallet</li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Full customization</span>
          <ul>
            <li>CustomAuth</li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Infrastructure</span>
          <ul>
            <li>Network</li>
          </ul>
        </div>
      </div>
      <div className={styles.contentContainer}>content</div>
    </div>
  );
}
