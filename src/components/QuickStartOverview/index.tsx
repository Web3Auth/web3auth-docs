import Link from "@docusaurus/Link";
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
  return (
    <div className={styles.container}>
      <div className="row">
        <div className={classNames("col col--7", classNames(styles.cardQuickStart))}>
          <p className={styles.headline}>Get started in seconds.</p>
          <p className={styles.description}>Bootstrap your DApp or Wallet with our multi platform SDKs and connect to any blockchain</p>

          <div className={styles.btnContainer}>
            <div className={styles.btn}>
              <Link to="/quick-start">
                <button type="button" className={classNames(styles.ctaBtn, styles.ctaBtnWhite)}>
                  Quick Start
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classNames("col col--5", styles.modalContainer)} />
      </div>
    </div>
  );
}
