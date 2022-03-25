import Link from "@docusaurus/Link";
import classNames from "classnames";

import styles from "./styles.module.css";
import Lottie from "react-lottie";
import animationData from "../../../static/lottie/Hero.json";

const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };

export default function Web3AuthOverview() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.cardQuickStart)}>
        <div className={styles.content}>
          <p className={styles.headline}>Start building your dApp or Wallet</p>
          <p className={styles.description} />

          <div className={styles.btnContainer}>
            <Link to="https://docs.web3auth.io">
              <button type="button" className={classNames(styles.ctaBtn, styles.ctaBtnWhite)}>
                Start Building
              </button>
            </Link>
          </div>
        </div>
        <Lottie options={defaultOptions} height={300} width={350} />
      </div>
    </div>
  );
}
