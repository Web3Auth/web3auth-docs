import Link from "@docusaurus/Link";
import classNames from "classnames";
import { FaFingerprint } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

import styles from "./styles.module.css";

export default function OpenLoginGetStartedCards() {
  return (
    <>
      <div className={styles.container}>
        <Link className={classNames(styles.card, styles.cardOne)} to="/quick-start/?b=open-login&chain=Ethereum">
          <p className={styles.headline}>
            <SiEthereum fill="#3C3C3D" /> Setup SSO login connected with Ethereum using OpenLogin
          </p>
          <p className={styles.poweredBy}>
            <span>Powered by</span>
            <img src="/images/openlogin-full-logo-1.svg" alt="OpenLogin" />
          </p>
        </Link>
        <Link className={classNames(styles.card, styles.cardOne)} to="/quick-start/?b=open-login&chain=Solana">
          <p className={styles.headline}>
            <img src="/contents/solana-sol-logo.svg" height="16px" alt="solana-logo" /> One-click Wallet Creation on Solana with OpenLogin
          </p>
          <p className={styles.poweredBy}>
            <span>Powered by</span>
            <img src="/images/openlogin-full-logo-1.svg" alt="OpenLogin" />
          </p>
        </Link>
      </div>
      <div className={styles.container}>
        <Link className={classNames(styles.card, styles.cardOne)} to="/quick-start/?b=open-login&chain=Binance%20Smart%20Chain">
          <p className={styles.headline}>
            <img src="/contents/binance-coin-bnb-logo.svg" height="20px" alt="binance logo" /> Passwordless login connected with Binance Smart Chain
            with OpenLogin
          </p>
          <p className={styles.poweredBy}>
            <span>Powered by</span>
            <img src="/images/openlogin-full-logo-1.svg" alt="OpenLogin" />
          </p>
        </Link>
        <Link className={classNames(styles.card, styles.cardOne)} to="/quick-start/?b=open-login&chain=Polygon">
          <p className={styles.headline}>
            <FaFingerprint /> Setup Touch/Face ID logins connected with Polygon using OpenLogin
          </p>
          <p className={styles.poweredBy}>
            <span>Powered by</span>
            <img src="/images/openlogin-full-logo-1.svg" alt="OpenLogin" />
          </p>
        </Link>
      </div>
    </>
  );
}
