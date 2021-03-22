import React from "react";
import Link from "@docusaurus/Link";
import { SiReact, SiVueDotJs, SiAndroid, SiApple } from "react-icons/si";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function DirectAuthGetStartedCards() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>
            <SiReact className={styles.iconReact} /> DirectAuth + React
          </h3>
          <p>Integrate DirectAuth into your React app</p>
          <Link
            className={classNames(styles.button, styles.buttonReact)}
            to="/integration-builder?b=customauth&lang=React"
          >
            Get Started
          </Link>
        </div>
        <div className={styles.card}>
          <h3>
            <SiVueDotJs className={styles.iconVue} /> DirectAuth + Vue
          </h3>
          <p>Integrate DirectAuth into your Vue app</p>
          <Link
            className={classNames(styles.button, styles.buttonVue)}
            to="/integration-builder?b=customauth&lang=Vue"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>
            <SiAndroid className={styles.iconAndroid} /> DirectAuth + Android
          </h3>
          <p>Integrate DirectAuth into your Android app</p>
          <Link
            className={classNames(styles.button, styles.buttonAndroid)}
            to="/integration-builder?b=customauth&lang=Android"
          >
            Get Started
          </Link>
        </div>
        <div className={styles.card}>
          <h3>
            <SiApple className={styles.iconIos} /> DirectAuth + iOS
          </h3>
          <p>Integrate DirectAuth into your iOS app</p>
          <Link
            className={classNames(styles.button, styles.buttonIos)}
            to="/integration-builder?b=customauth&lang=iOS"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
