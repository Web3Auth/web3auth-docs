import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function ProductSuiteStack() {
  const [tab, setTab] = useState<
    "overview" | "openlogin" | "wallet" | "custom-auth" | "network"
  >("overview");

  let content: JSX.Element;
  switch (tab) {
    case "overview":
      content = (
        <section
          key="overview"
          className={classNames(styles.contentContainer, "anim-fade-in")}
        >
          <div>
            <h1>The Torus Stack</h1>
            <div className={styles.content}>
              <p>
                An SDK of authentication and key management products, powered by
                a decentralized non-custodial PKI infrastructure that is
                maintained by users themselves and large stakeholders in the
                blockchain ecosystem
              </p>
            </div>
          </div>
          <img src="/contents/stack-overview.png" alt="Overview" height={320} />
        </section>
      );
      break;
    case "openlogin":
      content = (
        <section
          key="openlogin"
          className={classNames(styles.contentContainer, "anim-fade-in")}
        >
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
              <hr />
              <Link to="/open-login/get-started" className={styles.link}>
                Get started
              </Link>
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
        <section
          key="wallet"
          className={classNames(styles.contentContainer, "anim-fade-in")}
        >
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
              <hr />
              <Link to="/wallet/get-started" className={styles.link}>
                Get started
              </Link>
            </div>
          </div>
          <img src="/contents/stack-wallet.png" alt="Wallet" height={320} />
        </section>
      );
      break;
    case "custom-auth":
      content = (
        <section
          key="custom-auth"
          className={classNames(styles.contentContainer, "anim-fade-in")}
        >
          <div>
            <h1>Torus | CustomAuth</h1>
            <div className={styles.content}>
              <p>
                Do everything you can do with OpenLogin and Wallet in a fully
                customizable way
              </p>
              <ul>
                <li>All logins and full UX control</li>
                <li>Fully-customizable authentication experiences</li>
                <li>Leverage on Torus' key infrastructure</li>
              </ul>
              <hr />
              <Link to="/customauth/get-started" className={styles.link}>
                Get started
              </Link>
            </div>
          </div>
          <img
            src="/contents/stack-customauth.png"
            alt="CustomAuth"
            height={320}
          />
        </section>
      );
      break;
    case "network":
      content = (
        <section
          key="network"
          className={classNames(styles.contentContainer, "anim-fade-in")}
        >
          <div>
            <h1>Torus | Network</h1>
            <div className={styles.content}>
              <p>
                The Torus Network is a decentralized non-custodial PKI
                infrastructure that is maintained by users themselves and large
                stakeholders in the blockchain ecosystem. Keys (or user
                accounts) are managed by multiple authentication factors,
                threshold of which gives access to the account
              </p>
              <ul>
                <li>No central server, its decentralized</li>
                <li>Open-source</li>
                <li>
                  Non-custodial PKI designed to leverage on existing
                  authentication systems
                </li>
              </ul>
              <hr />
              <Link
                to="/how-torus-works/system-architecture"
                className={styles.link}
              >
                Learn more
              </Link>
            </div>
          </div>
          <img src="/contents/stack-network.png" alt="Network" height={320} />
        </section>
      );
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
