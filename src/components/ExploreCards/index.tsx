import classNames from "classnames";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Build from "@site/static/contents/icons/build.svg";
import Whitelabel from "@site/static/contents/icons/whitelabel.svg";
import CustomAuthentication from "@site/static/contents/icons/custom-authentication.svg";

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>Start with Web3Auth</strong>
      </h2>
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="/docs/integration-builder">
          <Build className={styles.cardIcon} />
          <h5 className={styles.title}>
            <strong>Start Building</strong>
          </h5>
          <p>Integrate instantly through our uniquely designed Integration Builder.</p>
          <div>
            <a className={styles.footer} href="/docs/integration-builder">
              Explore Integration Builder →
            </a>
          </div>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/whitelabel">
          <Whitelabel className={styles.cardIcon} />
          <h5 className={styles.title}>
            <strong>Whitelabel</strong>
          </h5>
          <p>Make Web3Auth your own with a wide range of Whitelabeling options.</p>
          <div>
            <a className={styles.footer} href="/docs/whitelabel">
              Checkout Whitelabel Page→
            </a>
          </div>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/connect-blockchain/">
          <CustomAuthentication className={styles.cardIcon} />
          <h5 className={styles.title}>
            <strong>Custom Authentication</strong>
          </h5>
          <p>Use your own social login and generate a non custodial private key with Web3Auth.</p>
          <div>
            <a className={styles.footer} href="/docs/connect-blockchain/">
              Turn to Custom Authentication →
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}
