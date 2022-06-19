import Link from "@docusaurus/Link";
import { Player } from "@lottiefiles/react-lottie-player";
import classNames from "classnames";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Web3AuthOverview() {
  const { height, width } = useWindowDimensions();
  let style = {};

  if (width < 700) {
    style = {
      height: (4 * width) / 7,
      width: (4 * width) / 6,
    };
  } else {
    style = {
      height: (width + height) / 7,
      width: (width + height) / 6,
    };
  }

  return (
    <div className={styles.container}>
      <div className={classNames(styles.cardQuickStart)}>
        <p className={styles.headline}>Get started in seconds.</p>
        <p className={styles.description}>Bootstrap your DApp or Wallet with our multi platform SDKs and connect to any blockchain</p>

        <div className={styles.btnContainer}>
          <div className={styles.btn}>
            <Link to="/get-started/quick-start">
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
        <Player loop autoplay controls={false} src="/lottie/Hero.json" style={style} />
      </div>
    </div>
  );
}
