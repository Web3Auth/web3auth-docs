import { useState, useEffect } from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";

import styles from "./styles.module.css";
import Lottie from "react-lottie";
import * as animationData from "/lottie/Hero.json";

const defaultOptions = { loop: true, autoplay: true, animationData: animationData, rendererSettings: { preserveAspectRatio: "xMidYMid slice" } };

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Web3AuthOverview() {
  var { height, width } = useWindowDimensions();

  if (width < 700) {
    var animWidth = (4 * width) / 6;
    var animHeight = (4 * width) / 7;
  } else {
    var animWidth = (width + height) / 6;
    var animHeight = (width + height) / 7;
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.cardQuickStart)}>
        <p className={styles.headline}>Get started in seconds.</p>
        <p className={styles.description}>Bootstrap your DApp and Wallet with our multi platform SDKs</p>

        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <Link to="/get-started/quickstart">
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
      <div className={styles.lottieContainer}>
        <Lottie options={defaultOptions} height={animHeight} width={animWidth} />
      </div>
    </div>
  );
}
