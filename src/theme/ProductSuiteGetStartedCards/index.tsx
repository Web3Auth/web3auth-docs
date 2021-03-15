import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function ProductSuiteGetStartedCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Torus Wallet</h3>
        <p>A 1-click sign-up solution.</p>
        <Link
          className={classNames(styles.button, styles.button1)}
          to="/torus-wallet/quick-start"
        >
          Get Started
        </Link>
      </div>
      <div className={styles.card}>
        <h3>DirectAuth</h3>
        <p>A fully-customizable authentication.</p>
        <Link
          className={classNames(styles.button, styles.button2)}
          to="/direct-auth/quick-start"
        >
          Get Started
        </Link>
      </div>
      <div className={styles.card}>
        <h3>OpenLogin</h3>
        <p>A privacy-focused login.</p>
        <Link
          className={classNames(styles.button, styles.button3)}
          to="/open-login/quick-start"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
