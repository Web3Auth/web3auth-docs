import React from "react";
import Link from "@docusaurus/Link";
import { SiReact, SiVueDotJs } from "react-icons/si";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function ProductSuiteGetStartedCards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>
          <SiReact className={styles.iconReact} /> Torus Wallet + React
        </h3>
        <p>Integrate Torus Wallet into your React app</p>
        <Link
          className={classNames(styles.button, styles.buttonReact)}
          to="/integration-builder?b=torus-wallet&lang=React"
        >
          Get Started
        </Link>
      </div>
      <div className={styles.card}>
        <h3>
          <SiVueDotJs className={styles.iconVue} /> Torus Wallet + Vue
        </h3>
        <p>Integrate Torus Wallet into your Vue app</p>
        <Link
          className={classNames(styles.button, styles.buttonVue)}
          to="/integration-builder?b=torus-wallet&lang=Vue"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
