import React, { useState } from "react";
import styles from "./styles.module.css";

export default function ProductSuiteStack() {
  const [tab, setTab] = useState<
    "overview" | "openlogin" | "wallet" | "custom-auth" | "network"
  >("overview");

  let content: JSX.Element;
  switch (tab) {
    case "overview":
      content = (
        <section className={styles.contentContainer}>
          <div>
            <h1>The Torus Stack</h1>
            <div className={styles.content}>
              <p>
                An SDK of authentication and key management products, powered by
                a decentralized non-custodial PKI infrastructure that is
                maintained by users themselves and large stakeholders in the
                blockchain ecosystem.
              </p>
            </div>
          </div>
          <img src="/contents/stack-overview.png" alt="Overview" height={320} />
        </section>
      );
      break;
    case "openlogin":
      content = (
        <section className={styles.contentContainer}>
          <div>
            <h1>Torus | OpenLogin</h1>
            <div className={styles.content}>
              <p>
                An authentication suite that combines the simplicity of
                passwordless authentication with the security of non-custodial
                PKI
              </p>
              <ul>
                <li>Passwordless, SSO, Face/TouchID Login</li>
                <li>
                  Manage data flows to acheive GDPR, CPRA, or CCPA compliance
                </li>
                <li>Connect up to any blockchain</li>
              </ul>
            </div>
          </div>
          <img
            src="/contents/stack-openlogin.png"
            alt="OpenLogin"
            height={320}
          />
        </section>
      );
      break;
    case "wallet":
      content = (
        <section className={styles.contentContainer}>
          <div>
            <h1>Torus | Wallet</h1>
            <div className={styles.content}>
              <p>
                Wallet uses the same OpenLogin flows and additionally provides a
                direct connection to Ethereum and other blockchains via a
                metamask esque style.
              </p>
              <ul>
                <li>Same seamless login experiences</li>
                <li>Interoperable with other decentralized applications</li>
                <li>Comes with fiat-to-crypto provider</li>
              </ul>
            </div>
          </div>
          <img src="/contents/stack-wallet.png" alt="Wallet" height={320} />
        </section>
      );
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
