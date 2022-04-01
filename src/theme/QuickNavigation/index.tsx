import classNames from "classnames";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Overview</h5>
          <h5 className={styles.headline}>Learn about Web3auth</h5>
          <span>What is Web3Auth</span>
          <br />
          <span>Technical Architecture</span>
          <br />
          <span>Audits</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Get Started</h5>
          <h5 className={styles.headline}>For beginners</h5>
          <span>Quick Start</span>
          <br />
          <span>Using the Dashboard</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Basic Concepts</h5>
          <h5 className={styles.headline}>Developing with Web3Auth</h5>
          <span>Glossary</span>
          <br />
          <span>Understanding the SDKs</span>
          <br />
          <span>Adapters</span>
          <br />
          <span>Connecting your Blockchain</span>
          <br />
          <span>Whitelabel</span>
          <br />
          <span>Using Custom Authentication</span>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>API Reference</h5>
          <h5 className={styles.headline}>Deep dive into our SDKs</h5>
          <span>Web</span>
          <br />
          <span>Android</span>
          <br />
          <span>iOS</span>
          <br />
          <span>React-Native</span>
          <br />
          <span>Flutter</span>
        </div>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Examples and Usecases</h5>
          <h5 className={styles.headline}>Experience Web3Auth</h5>
          <span>Demo Apps</span>
          <br />
          <span>Production Examples</span>
          <br />
          <span>Examples Apps</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Contribute to Web3Auth</h5>
          <h5 className={styles.headline}>We are open source!</h5>
          <span>Open Source</span>
          <br />
          <span>Bug Bounty</span>
        </div>
      </div>

      {/* THIRD ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Contact us</h5>
          <h5 className={styles.headline}>Get help or troubleshoot</h5>
          <span>Customer Support</span>
          <br />
          <span>Discord Community</span>
          <br />
          <span>Schedule a Demo</span>
          <br />
          <span>GitHub</span>
        </div>
      </div>
    </>
  );
}
