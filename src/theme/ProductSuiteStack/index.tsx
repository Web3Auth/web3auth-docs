import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ProductSuiteStack() {
  const [tab, setTab] = useState<
    "overview" | "openlogin" | "wallet" | "custom-auth" | "network"
  >("overview");

  let content: JSX.Element;
  switch (tab) {
    case "overview":
      content = <div>Overview</div>;
      break;
    case "openlogin":
      content = <div>OpenLogin</div>;
      break;
    case "wallet":
      content = <div>Wallet</div>;
      break;
    case "custom-auth":
      content = <div>CustomAuth</div>;
      break;
    case "network":
      content = <div>Network</div>;
      break;
    default:
      content = <></>;
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabSection}>
          <ul>
            <li
              className={tab === "overview" && styles.selected}
              onClick={() => setTab("overview")}
            >
              Overview
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Plug n play</span>
          <ul>
            <li
              className={tab === "openlogin" && styles.selected}
              onClick={() => setTab("openlogin")}
            >
              OpenLogin
            </li>
            <li
              className={tab === "wallet" && styles.selected}
              onClick={() => setTab("wallet")}
            >
              Wallet
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Full customization</span>
          <ul>
            <li
              className={tab === "custom-auth" && styles.selected}
              onClick={() => setTab("custom-auth")}
            >
              CustomAuth
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Infrastructure</span>
          <ul>
            <li
              className={tab === "network" && styles.selected}
              onClick={() => setTab("network")}
            >
              Network
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contentContainer}>{content}</div>
    </div>
  );
}
