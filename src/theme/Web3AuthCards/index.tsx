import Link from "@docusaurus/Link";
import classNames from "classnames";

import styles from "./styles.module.css";

export default function Web3AuthCards() {
  return (
    <div className={styles.container}>
      <Link to="/guides#apps" className={classNames(styles.cardQuickStart, styles.cardQsWeb3)}>
        <img className={styles.mainIcon} src="/images/qs-apps.svg" alt="App" />
        <p className={styles.headline}>Web3 dApp</p>
        <p className={styles.description}>Web and/or native mobile application that uses keys to connect to one or multiple blockchains.</p>
      </Link>
      <Link to="/guides#wallets" className={classNames(styles.cardQuickStart, styles.cardQsWallet)}>
        <img className={styles.mainIcon} src="/images/qs-wallet.svg" alt="Wallet" />
        <p className={styles.headline}>Wallet</p>
        <p className={styles.description}>An application that manages user keys, connecting to multiple dApps in different ecosystems.</p>
      </Link>
      <Link to="/guides#auth" className={classNames(styles.cardQuickStart, styles.cardQsPlugin)}>
        <img className={styles.mainIcon} src="/images/qs-plugin.svg" alt="Plugin" />
        <p className={styles.headline}>Plugin your own auth</p>
        <p className={styles.description}>Have an existing userbase/auth you&apos;d like to use? Plug them in with zero migration necessary.</p>
      </Link>
    </div>
  );
}
