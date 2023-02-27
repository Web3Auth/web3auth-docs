import Link from "@docusaurus/Link";
import web3AuthModal from "@site/static/images/web3auth-modal.png";
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
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3>Get started in seconds.</h3>
        <p>Bootstrap your DApp or Wallet with our multi platform SDKs and connect to any blockchain</p>
        <Link to="/quick-start">
          <button type="button" className={styles.ctaBtn}>
            Quick Start
          </button>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img src={web3AuthModal} alt="Web3Auth Modal" className={styles.image} />
      </div>
    </div>
  );
}
