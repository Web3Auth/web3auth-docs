import classNames from "classnames";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>Overview</h5>
          <h5 className={styles.headline}>Learn about Web3auth</h5>
          <a href="./overview/what-is-web3auth" className={styles.link}>
            What is Web3Auth?
          </a>
          <br />
          <a href="./overview/how-web3auth-works" className={styles.link}>
            How Web3Auth Works?
          </a>
          <br />
          <a href="./overview/web3auth-and-wallets" className={styles.link}>
            Web3Auth and Wallets
          </a>
          <br />
          <a href="./overview/key-management" className={styles.link}>
            Key Management and Security
          </a>
          <br />
          <a href="./overview/audits" className={styles.link}>
            Audits
          </a>
        </div>

        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>Get Started</h5>
          <h5 className={styles.headline}>For beginners</h5>
          <a href="./get-started/" className={styles.link}>
            Getting Started
          </a>
          <br />
          <a href="./get-started/quickstart" className={styles.link}>
            Quick Start
          </a>
          <br />
          <a href="./get-started/using-dashboard" className={styles.link}>
            Using the Dashboard
          </a>
        </div>

        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>Basic Concepts</h5>
          <h5 className={styles.headline}>Developing with Web3Auth</h5>
          <a href="./developing-with-web3auth/" className={styles.link}>
            Development Terminologies
          </a>
          <br />
          <a href="./developing-with-web3auth/understand-sdk" className={styles.link}>
            Understanding the SDKs
          </a>
          <br />
          <a href="./developing-with-web3auth/adapters" className={styles.link}>
            Adapters and Configuration
          </a>
          <br />
          <a href="./developing-with-web3auth/connect-blockchain/" className={styles.link}>
            Connect your Blockchain
          </a>
          <br />
          <a href="./developing-with-web3auth/whitelabeling" className={styles.link}>
            Whitelabeling
          </a>
          <br />
          <a href="./developing-with-web3auth/customauth/" className={styles.link}>
            Using Custom Authentication
          </a>
          <br />
          <a href="./developing-with-web3auth/customauth/verifiers" className={styles.link}>
            Verifiers
          </a>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>API Reference</h5>
          <h5 className={styles.headline}>Deep dive into our SDKs</h5>
          <a href="./api-reference/web/choosesdk" className={styles.link}>
            Web
          </a>
          <br />
          <a href="./api-reference/android/setting-up" className={styles.link}>
            Android
          </a>
          <br />
          <a href="./api-reference/ios/setting-up" className={styles.link}>
            iOS
          </a>
          <br />
          <a href="./api-reference/react-native/setting-up" className={styles.link}>
            React Native
          </a>
          <br />
          <a href="./api-reference/flutter/setting-up" className={styles.link}>
            Flutter
          </a>
        </div>
        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>Examples and Use Cases</h5>
          <h5 className={styles.headline}>Experience Web3Auth</h5>
          <a href="./examples#try-out-a-demo-application" className={styles.link}>
            Demo Apps
          </a>
          <br />
          <a href="./examples#production-examples" className={styles.link}>
            Production Examples
          </a>
          <br />
          <a href="./examples#explore-our-examples" className={styles.link}>
            Example Applications for Reference
          </a>
        </div>

        <div className={classNames(styles.card)}>
          <h5 className={styles.title}>Contribute to Web3Auth</h5>
          <h5 className={styles.headline}>We are open source!</h5>
          <a href="./contribute/open-source" className={styles.link}>
            Open Source
          </a>
          <br />
          <a href="./contribute/bug-bounty" className={styles.link}>
            Bug Bounty
          </a>
        </div>
      </div>
    </>
  );
}
