import Link from "@docusaurus/Link";
import classNames from "classnames";

import styles from "./styles.module.css";
import Lottie from "react-lottie";
import * as animationData from "/lottie/Hero.json";

const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };

export default function Web3AuthOverview() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.cardQuickStart)}>
        <p className={styles.headline}>Get started in seconds.</p>
        <p className={styles.description}>Bootstrap your DApp and Wallet with our multi platform SDKs</p>

        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <Link to="/quick-start">
              <button type="button" className={classNames(styles.ctaBtn, styles.ctaBtnWhite)}>
                Quick Start
              </button>
            </Link>
          </div>
          <div className={styles.btn}>
            <Link to="overview/what-is-web3auth">
              <button type="button" className={classNames(styles.ctaBtn, styles.ctaBtnWhite)}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Lottie options={defaultOptions} height={300} width={350} />
    </div>
  );
}
