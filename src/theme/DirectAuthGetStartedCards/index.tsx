import Link from "@docusaurus/Link";
import classNames from "classnames";
import { SiApple, SiJavascript } from "react-icons/si";

import styles from "./styles.module.css";

export default function TorusWalletGetStartedCards() {
  return (
    <div className={styles.container}>
      <Link className={classNames(styles.card, styles.cardOne)} to="/quick-start/?b=customauth&lang=HTML">
        <p className={styles.headline}>
          <SiJavascript className={classNames(styles.icon, styles.iconJs)} />
          Setup fully-customizable Web3 SSO, passwordless, and TouchID login on the Web
        </p>
        <p className={styles.poweredBy}>
          <span>Powered by</span>
          <img src="/images/customauth-full-logo.svg" alt="CustomAuth" />
        </p>
      </Link>
      <Link className={classNames(styles.card, styles.cardTwo)} to="/quick-start/?b=customauth&lang=iOS">
        <p className={styles.headline}>
          <SiApple className={classNames(styles.icon, styles.iconIos)} />
          Setup fully-customizable Web3 authentication for your native Android/iOS app
        </p>
        <p className={styles.poweredBy}>
          <span>Powered by</span>
          <img src="/images/customauth-full-logo.svg" alt="CustomAuth" />
        </p>
      </Link>
    </div>
  );
}
