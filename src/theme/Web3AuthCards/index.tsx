import Link from "@docusaurus/Link";
import Image1 from "@site/static/images/qs-apps.svg";
import Image3 from "@site/static/images/qs-plugin.svg";
import Image2 from "@site/static/images/qs-wallet.svg";
import classNames from "classnames";

import styles from "./styles.module.css";

export default function Web3AuthCards() {
  return (
    <div className={styles.container}>
      <Link to="/guides#apps" className={classNames(styles.cardQuickStart, styles.cardQsWeb3)}>
        <img className={styles.mainIcon} src={Image1} alt="App" />
        <p className={styles.headline}>Web3 dApp</p>
        <p className={styles.description}>Web and/or native mobile application that uses keys to connect to one or multiple blockchains.</p>
      </Link>
      <Link to="/guides#wallets" className={classNames(styles.cardQuickStart, styles.cardQsWallet)}>
        <img className={styles.mainIcon} src={Image2} alt="Wallet" />
        <p className={styles.headline}>Wallet</p>
        <p className={styles.description}>An application that manages user keys, connecting to multiple dApps in different ecosystems.</p>
      </Link>
      <Link to="/guides#auth" className={classNames(styles.cardQuickStart, styles.cardQsPlugin)}>
        <img className={styles.mainIcon} src={Image3} alt="Plugin" />
        <p className={styles.headline}>Plugin your own auth</p>
        <p className={styles.description}>Have an existing userbase/auth you&apos;d like to use? Plug them in with zero migration necessary.</p>
      </Link>
    </div>
  );
}
