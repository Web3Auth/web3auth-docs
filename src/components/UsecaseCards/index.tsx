import classNames from "classnames";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp">
          <div>
            <h3 className={styles.title}>
              <strong>Binance Extension Wallet</strong>
            </h3>
            <h4 className={styles.headline}>Using Web3Auth within a Chrome Extension Wallet</h4>
            <p className={styles.description}>
              With the Binance Chain browser extension you can send and receive funds on Binance Chain and Ethereum, and cross-chain transfers between
              both of Binance’s blockchains, all with the login flow of Web3Auth, customised for Binance.
            </p>
          </div>
          <span
            className={styles.footer}
            target="_blank"
            href="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp"
            rel="noreferrer"
          >
            Download the Extension →
          </span>
        </Link>

        <Link className={classNames(styles.card)} to="https://play.skyweaver.net/">
          <div>
            <h3 className={styles.title}>
              <strong>Skyweaver</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth's Custom Authentication for on-chain Games</h4>
            <p>
              Skyweaver, using their Sequence Multi-Key Wallet, have made one of the most interesting use cases of Web3Auth's Custom Authentication
              solution on Polygon L2. This combination gives players the best user experience, security and access control to their wallets.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://play.skyweaver.net/" rel="noreferrer">
            Try being a gamer once →
          </span>
        </Link>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://collect.100thieves.com/">
          <div>
            <h3 className={styles.title}>
              <strong>100 Thieves</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth's Modal for NFT Airdrops</h4>
            <p>
              100 Thieves is using Web3Auth's Plug and Play SDK on their website to onboard thousands of mainstream users and aspiring NFT collectors
              using an out-of-the-box Modal provided by Web3Auth, that you can add too, in less than 30 mins!
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://collect.100thieves.com/" rel="noreferrer">
            Collect the 100 Thieves chain →
          </span>
        </Link>
        <Link className={classNames(styles.card)} to="https://www.keplr.app/">
          <div>
            <h3 className={styles.title}>
              <strong>Kepler</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth as the entry point for inter-chain transactions</h4>
            <p>
              Kepler is an excellent example of an Inter-chain Chrome Extension Wallet, using Web3Auth as their social login architecture. With the
              flexibility of Web3Auth, with just a social login, Kepler is generating a series of addresses across multiple EVM chains, and is able to
              handle all the transactions required for the dApp.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://www.keplr.app/" rel="noreferrer">
            Download the Extension →
          </span>
        </Link>
      </div>

      {/* THRID ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://app.kash.io/">
          <div>
            <h3 className={styles.title}>
              <strong>Kash</strong>
            </h3>
            <h4 className={styles.headline}>Using Web3Auth on a multi chain DeFi platform</h4>
            <p>
              Kash built an excellent UI using our Web3Auth Plug and Play Core SDK and their DeFi platform integration creates an Ethereum and Terra
              address with just a simple click.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://app.kash.io/" rel="noreferrer">
            Just experience this →
          </span>
        </Link>
      </div>
    </>
  );
}
