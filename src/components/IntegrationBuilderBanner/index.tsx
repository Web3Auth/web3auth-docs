import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import integrationBuilderDark from "@site/static/images/graphics/integration-builder-dark.png";
import integrationBuilderLight from "@site/static/images/graphics/integration-builder-light.png";
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
  const { colorMode } = useColorMode();

  return (
    <Link to="/quick-start" className={styles.card}>
      <div className={styles.cardContent}>
        <h5>Build with Quick Starts</h5>
        <p>
          Choose your platform and get started with a base Web3Auth app using our Integration
          Builder
        </p>
      </div>
      <div className={styles.imageContainer}>
        {colorMode === "dark" ? (
          <img src={integrationBuilderDark} alt="integration-builder" className={styles.image} />
        ) : (
          <img src={integrationBuilderLight} alt="integration-builder" className={styles.image} />
        )}
      </div>
    </Link>
  );
}
