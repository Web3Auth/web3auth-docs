import Link from "@docusaurus/Link";
import classNames from "classnames";

import styles from "./styles.module.css";

export default function Web3AuthOverview() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.cardQuickStart)}>
        <div className={styles.content}>
          <p className={styles.headline}>Start building your dApp or Wallet</p>
          <p className={styles.description} />

          <div className={styles.btnContainer}>
            <Link to="https://docs.web3auth.io">
              <button className={classNames(styles.ctaBtn, styles.ctaBtnWhite)}>Start Building</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
