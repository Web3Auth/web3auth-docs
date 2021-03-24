import React from "react";
import Link from "@docusaurus/Link";
import {
  SiReact,
  SiVueDotJs,
  SiAndroid,
  SiApple,
  SiJavascript,
} from "react-icons/si";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function DirectAuthGetStartedCards() {
  return (
    <>
      <div className={styles.container}>
        <Link
          className={classNames(styles.card)}
          to="/integration-builder?b=customauth&lang=HTML"
        >
          <h3>
            <SiJavascript className={styles.iconJs} /> CustomAuth + Web
          </h3>
          <p>Integrate CustomAuth into your Web app</p>
        </Link>
        <Link
          className={classNames(styles.card)}
          to="/integration-builder?b=customauth&lang=React"
        >
          <h3>
            <SiReact className={styles.iconReact} /> CustomAuth + React
          </h3>
          <p>Integrate CustomAuth into your React app</p>
        </Link>
      </div>
      <div className={styles.container}>
        <Link
          className={classNames(styles.card)}
          to="/integration-builder?b=customauth&lang=Android"
        >
          <h3>
            <SiAndroid className={styles.iconAndroid} /> CustomAuth + Android
          </h3>
          <p>Integrate CustomAuth into your Android app</p>
        </Link>
        <Link
          className={classNames(styles.card)}
          to="/integration-builder?b=customauth&lang=iOS"
        >
          <h3>
            <SiApple className={styles.iconIos} /> CustomAuth + iOS
          </h3>
          <p>Integrate CustomAuth into your iOS app</p>
        </Link>
      </div>
    </>
  );
}
