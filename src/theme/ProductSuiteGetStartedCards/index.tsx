import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function ProductSuiteGetStartedCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>OpenLogin</h3>
        <p>
          An auth suite that combines the simplicity of passwordless
          authentication with the security of non-custodial PKI
        </p>
        <Link
          className={classNames(styles.button, styles.button3)}
          to="/open-login/quick-start"
        >
          Get Started
        </Link>
      </div>
      <div className={styles.card}>
        <h3>Torus Wallet</h3>
        <p>
          {" "}
          Uses OpenLogin flows with a direct connection to Ethereum and other
          blockchains via a metamask esque style
        </p>
        <Link
          className={classNames(styles.button, styles.button1)}
          to="/wallet/quick-start"
        >
          Get Started
        </Link>
      </div>
      <div className={styles.card}>
        <h3>CustomAuth</h3>
        <p>Fully-whitelabeled UI/UX paired up to Torus PKI and auth</p>
        <Link
          className={classNames(styles.button, styles.button2)}
          to="/customauth/quick-start"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
