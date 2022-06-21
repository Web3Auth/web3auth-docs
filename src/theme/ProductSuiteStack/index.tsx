import Link from "@docusaurus/Link";
import Image7 from "@site/static/contents/stack-customauth-2.png";
import Image9 from "@site/static/contents/stack-network-2.png";
import Image3 from "@site/static/contents/stack-openlogin-2.png";
import Image1 from "@site/static/contents/stack-overview-2.png";
import Image5 from "@site/static/contents/stack-wallet-2.png";
import Image6 from "@site/static/images/customauth-full-logo.svg";
import Image8 from "@site/static/images/network-full-logo.svg";
import Image2 from "@site/static/images/openlogin-full-logo-1.svg";
import Image4 from "@site/static/images/wallet-full-logo.svg";
import classNames from "classnames";
import { useState } from "react";

import styles from "./styles.module.css";

export default function ProductSuiteStack() {
  const [tab, setTab] = useState<"overview" | "openlogin" | "wallet" | "custom-auth" | "network">("overview");

  let content: JSX.Element;
  switch (tab) {
    case "overview":
      content = (
        <section key="overview" className={classNames(styles.contentContainer, "anim-fade-in")}>
          <div>
            <h1>The Torus Stack</h1>
            <div className={styles.content}>
              <p>
                An SDK of authentication and key management products, powered by a decentralized non-custodial PKI infrastructure that is maintained
                by users themselves and large stakeholders in the blockchain ecosystem.
              </p>
            </div>
          </div>
          <img src={Image1} alt="Overview" height={360} />
        </section>
      );
      break;
    case "openlogin":
      content = (
        <section key="openlogin" className={classNames(styles.contentContainer, "anim-fade-in")}>
          <div>
            <h1 className="sr-only">Torus OpenLogin</h1>
            <img
              src={Image2}
              alt="Torus OpenLogin"
              style={{
                marginTop: "16px",
                marginBottom: "16px",
              }}
              height="29px"
            />
            <div className={styles.content}>
              <p>An authentication suite that combines the simplicity of passwordless authentication with the security of non-custodial PKI.</p>
              <ul>
                <li>Passwordless, SSO, Face/TouchID Login</li>
                <li>Manage data flows to acheive GDPR, CPRA, or CCPA compliance</li>
                <li>Connect up to any blockchain</li>
              </ul>
              <hr />
              <Link to="/open-login/get-started" className={styles.link}>
                Get started
              </Link>
            </div>
          </div>
          <img src={Image3} alt="Torus OpenLogin" height={360} />
        </section>
      );
      break;
    case "wallet":
      content = (
        <section key="wallet" className={classNames(styles.contentContainer, "anim-fade-in")}>
          <div>
            <h1 className="sr-only">Torus Wallet</h1>
            <img src={Image4} alt="Torus Wallet" height="60px" />
            <div className={styles.content}>
              <p>
                Wallet uses the same OpenLogin flows and additionally provides a direct connection to Ethereum and other blockchains via a metamask
                esque style.
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
          <img src={Image5} alt="Torus Wallet" height={360} />
        </section>
      );
      break;
    case "custom-auth":
      content = (
        <section key="custom-auth" className={classNames(styles.contentContainer, "anim-fade-in")}>
          <div>
            <h1 className="sr-only">Torus CustomAuth</h1>
            <img src={Image6} alt="Torus CustomAuth" height="60px" />
            <div className={styles.content}>
              <p>Do everything you can do with OpenLogin and Wallet in a fully customizable way.</p>
              <ul>
                <li>All logins and full UX control</li>
                <li>Fully-customizable authentication experiences</li>
                <li>Leverage on Torus&apos; key infrastructure</li>
              </ul>
              <hr />
              <Link to="/customauth/get-started" className={styles.link}>
                Get started
              </Link>
            </div>
          </div>
          <img src={Image7} alt="Torus CustomAuth" height={360} />
        </section>
      );
      break;
    case "network":
      content = (
        <section key="network" className={classNames(styles.contentContainer, "anim-fade-in")}>
          <div>
            <h1 className="sr-only">Torus Infrastructure</h1>
            <img src={Image8} alt="Torus Network" className={styles.networkLogo} />
            <div className={styles.content}>
              <p>
                Torus Key Infrastructure is a decentralized non-custodial PKI infrastructure that is maintained by users themselves and large
                stakeholders in the blockchain ecosystem. Keys (or user accounts) are managed by multiple authentication factors, threshold of which
                gives access to the account.
              </p>
              <ul>
                <li>No central server, its decentralized</li>
                <li>Open-source</li>
                <li>Non-custodial PKI designed to leverage on existing authentication systems</li>
              </ul>
              <hr />
              <Link to="/key-infrastructure/technical-architecture" className={styles.link}>
                Learn more
              </Link>
            </div>
          </div>
          <img src={Image9} alt="Torus Network" height={360} />
        </section>
      );
      break;
    default:
      content = null;
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabSection}>
          <ul>
            <li
              className={tab === "overview" ? styles.selected : undefined}
              onClick={() => setTab("overview")}
              onKeyDown={() => setTab("overview")}
              role="tab"
            >
              Overview
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Plug n play</span>
          <ul>
            <li
              className={tab === "openlogin" ? styles.selected : undefined}
              onClick={() => setTab("openlogin")}
              role="tab"
              onKeyDown={() => setTab("openlogin")}
            >
              OpenLogin
            </li>
            <li
              className={tab === "wallet" ? styles.selected : undefined}
              role="tab"
              onClick={() => setTab("wallet")}
              onKeyDown={() => setTab("wallet")}
            >
              Wallet
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Full customization</span>
          <ul>
            <li
              className={tab === "custom-auth" ? styles.selected : undefined}
              onClick={() => setTab("custom-auth")}
              role="tab"
              onKeyDown={() => setTab("custom-auth")}
            >
              CustomAuth
            </li>
          </ul>
        </div>
        <div className={styles.tabSection}>
          <span>Infrastructure</span>
          <ul>
            <li
              className={tab === "network" ? styles.selected : undefined}
              onClick={() => setTab("network")}
              onKeyDown={() => setTab("network")}
              role="tab"
            >
              Torus Key Infrastructure
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contentContainer}>{content}</div>
    </div>
  );
}
