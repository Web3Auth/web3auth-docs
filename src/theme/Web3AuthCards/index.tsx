import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function Web3AuthCards() {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.cardQuickStart, styles.cardQsWeb3)}
      >
        <img className={styles.mainIcon} src="/images/qs-apps.svg" alt="App" />
        <p className={styles.headline}>Web 3 applications</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Link className={styles.getStartedBtn} href="/integration-builder/?b=wallet&lang=HTML">Get started</Link>
      </div>
      <div
        className={classNames(styles.cardQuickStart, styles.cardQsWallet)}
      >
        <img className={styles.mainIcon} src="/images/qs-wallet.svg" alt="Wallet" />
        <p className={styles.headline}>Wallet</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Link className={styles.getStartedBtn} href="/integration-builder/?b=wallet&lang=HTML">Get started</Link>
      </div>
      <div
        className={classNames(styles.cardQuickStart, styles.cardQsPlugin)}

      >
        <img className={styles.mainIcon} src="/images/qs-plugin.svg" alt="Plugin" />
        <p className={styles.headline}>Plugin your own auth</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Link className={styles.getStartedBtn} href="/integration-builder/?b=wallet&lang=HTML">Get started</Link>
      </div>
    </div>
  );
}
