import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function TorusWalletGetStartedCards() {
  return (
    <div className={styles.container}>
      <Link
        className={classNames(styles.card)}
        to="/integration-builder?b=wallet&lang=HTML"
      >
        <p className={styles.headline}>Setup Google Login connected to Ethereum on the Web</p>
        <p className={styles.poweredBy}><span>Powered by</span><img src="/images/wallet-full-logo.svg" alt="Wallet" /></p>
      </Link>
      <Link
        className={classNames(styles.card)}
        to="/integration-builder?b=wallet&lang=React"
      >
        <p className={styles.headline}>Integrate Wallet with your favorite web framework: React or Vue</p>
        <p className={styles.poweredBy}><span>Powered by</span><img src="/images/wallet-full-logo.svg" alt="Wallet" /></p>
      </Link>
    </div>
  );
}
