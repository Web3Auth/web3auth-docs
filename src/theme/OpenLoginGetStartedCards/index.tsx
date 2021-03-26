import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function OpenLoginGetStartedCards() {
  return (
    <div className={styles.container}>
      <Link
        className={classNames(styles.card, styles.cardOne)}
        to="/integration-builder?b=open-login&lang=HTML"
      >
        <p className={styles.headline}>
          Setup SSO login connected with Ethereum using OpenLogin
        </p>
        <p className={styles.poweredBy}>
          <span>Powered by</span>
          <img src="/images/openlogin-full-logo.svg" alt="OpenLogin" />
        </p>
      </Link>
    </div>
  );
}
