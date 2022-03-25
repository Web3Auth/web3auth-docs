import classNames from "classnames";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Web3auth Architecture</h5>
          <h5 className={styles.headline}>Learn about Web3auth</h5>
          <span>What is Web3Auth</span>
          <br />
          <span>Key Management & Security</span>
          <br />
          <span>Release Notes</span>
          <br />
          <span>Audits</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Get Started</h5>
          <h5 className={styles.headline}>For beginners</h5>
          <span>Basic Installation</span>
          <br />
          <span>Quick Start</span>
          <br />
          <span>Demo Apps</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Basic Concepts</h5>
          <h5 className={styles.headline}>Understanding Web3Auth </h5>
          <span>Adapters and Configuration</span>
          <br />
          <span>Understanding the Lifecycle</span>
          <br />
          <span>Providers</span>
          <br />
          <span>Verifiers</span>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Whitelabel & Customise</h5>
          <h5 className={styles.headline}>Branding and UI</h5>
          <span>What is Web3Auth</span>
          <br />
          <span>Key Management & Security</span>
          <br />
          <span>Release Notes</span>
          <br />
          <span>Audits</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Use your own auth</h5>
          <h5 className={styles.headline}>Customised auth</h5>
          <span>Choosing your Auth Scheme</span>
          <br />
          <span>Deploying your Verifiers</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>API Reference</h5>
          <h5 className={styles.headline}>Some subtitle</h5>
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
      </div>

      {/* THIRD ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Demo Apps</h5>
          <h5 className={styles.headline}>Some subtitle</h5>
          <span>Example 1</span>
          <br />
          <span>Example 2</span>
          <br />
          <span>Example 3</span>
          <br />
          <span>Example 4</span>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h5 className={styles.title}>Contribute to Web3Auth</h5>
          <h5 className={styles.headline}>We are open-sourced</h5>
          <span>Open Source</span>
          <br />
          <span>Bug Bounty</span>
        </div>

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
