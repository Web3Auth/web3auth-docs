import classNames from "classnames";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Build from "@site/static/contents/icons/build.svg";
import Customize from "@site/static/contents/icons/customize.svg";
import Guide from "@site/static/contents/icons/guide.svg";

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
          <p>Start building your Web3Auth Integration instantly through our uniquely designed integration builder.</p>
          <div>
            <a className={styles.footer} href="/docs/integration-builder">
              Explore Integration Builder →
            </a>
          </div>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/api-reference">
          <Customize className={styles.cardIcon} />
          <h5 className={styles.title}>
            <strong>Customise</strong>
          </h5>
          <p>We have a wide range of options to choose, from fully Whitelabeled, Custom Authentication in the Blockchain of your choice.</p>
          <div>
            <a className={styles.footer} href="/docs/api-reference">
              See our API Reference →
            </a>
          </div>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/guides">
          <Guide className={styles.cardIcon} />
          <h5 className={styles.title}>
            <strong>Guides</strong>
          </h5>
          <p>Looking for an end to end understanding of the Web3Auth integration? Our guides are the solution for you.</p>
          <div>
            <a className={styles.footer} href="/docs/guides">
              Have a quick look →
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}
