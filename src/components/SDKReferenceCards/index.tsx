import classNames from "classnames";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Web from "@site/static/contents/icons/web.svg";
import Mobile from "@site/static/contents/icons/mobile.svg";
import Gaming from "@site/static/contents/icons/gaming.svg";
import SelfHost from "@site/static/contents/icons/self-host.svg";

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>Explore our SDKs</strong>
      </h2>
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="./sdk/web">
          <div className={styles.cardContainer}>
            <Web className={classNames(styles.cardIcon)} />
            <div className={classNames(styles.cardContent)}>
              <span className={styles.title}>
                <strong>Web SDKs</strong>
              </span>
              <br />
              <span>Plug n Play JavaScript</span>
            </div>
          </div>
        </Link>

        <Link className={classNames(styles.card)} to="./sdk/android">
          <div className={styles.cardContainer}>
            <Mobile className={classNames(styles.cardIcon)} />
            <div className={classNames(styles.cardContent)}>
              <span className={styles.title}>
                <strong>Mobile SDKs</strong>
              </span>
              <br />
              <span>Android, iOS, React Native & Flutter</span>
            </div>
          </div>
        </Link>

        {/**<Link className={classNames(styles.card)} to="./sdk/unity">
          <div className={styles.cardContainer}>
            <Gaming className={classNames(styles.cardIcon)} />
            <div className={classNames(styles.cardContent)}>
              <span className={styles.title}>
                <strong>Gaming SDKs</strong>
              </span>
              <br />
              <span>Unity & Unreal Engine</span>
            </div>
          </div>
        </Link>**/}
      </div>

      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="./sdk/self-host/">
          <div className={styles.cardContainer}>
            <SelfHost className={classNames(styles.cardIcon)} />
            <div className={classNames(styles.cardContent)}>
              <span className={styles.title}>
                <strong>Web3Auth Self Host SDK</strong>
              </span>
              <br />
              <span>Enterprise Infrastructure SDKs</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
