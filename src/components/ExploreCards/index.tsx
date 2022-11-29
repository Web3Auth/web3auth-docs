import Link from "@docusaurus/Link";
import Build from "@site/static/contents/icons/build.svg";
import CustomAuthentication from "@site/static/contents/icons/custom-authentication.svg";
import Whitelabel from "@site/static/contents/icons/whitelabel.svg";
import classNames from "classnames";

import styles from "./styles.module.css";

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>Start with Web3Auth</strong>
      </h2>
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="/quick-start">
          <div>
            <Build className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Start Building</strong>
            </h5>
          </div>
          <p>Integrate instantly through our uniquely designed Integration Builder.</p>

          <span className={styles.footer} href="/quick-start">
            Explore Quick Start →
          </span>
        </Link>

        <Link className={classNames(styles.card)} to="/whitelabel">
          <div>
            <Whitelabel className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Whitelabel</strong>
            </h5>
          </div>
          <p>Make Web3Auth your own with a wide range of Whitelabeling options.</p>

          <span className={styles.footer} href="/whitelabel">
            Checkout Whitelabel Page→
          </span>
        </Link>

        <Link className={classNames(styles.card)} to="/custom-authentication/">
          <div>
            <CustomAuthentication className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Custom Authentication</strong>
            </h5>
          </div>
          <p>Use your own social login and generate a non custodial private key with Web3Auth.</p>

          <span className={styles.footer} href="/custom-authentication/">
            Turn to Custom Authentication →
          </span>
        </Link>
      </div>
    </div>
  );
}
