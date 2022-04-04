import classNames from "classnames";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>Binance Extension Wallet</h3>
          <h4 className={styles.headline}>Using Web3Auth within a Chrome Extension Wallet</h4>
          <p>
            With the Binance Chain browser extension you can send and receive funds on Binance Chain, Binance Smart Chain and Ethereum, and
            cross-chain transfers between both of Binance’s blockchains, all with the login flow of Web3Auth, customised for Binance.
          </p>
          <div>
            <a
              className={styles.footer}
              target="_blank"
              href="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp"
              rel="noreferrer"
            >
              Download the Extension
            </a>
          </div>
        </div>

        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>Skyweaver</h3>
          <h4 className={styles.headline}>Web3Auth Custom Authentication for on-chain Games</h4>
          <p>
            Skyweaver, using their Sequence Multi-Key Wallet, have made one of the most interesting use cases of Web3Auth's Custom Authentication
            solution on Polygon L2. This combination gives players the best user experience, security and access control to their wallets.
          </p>
          <div>
            <a className={styles.footer} target="_blank" href="https://play.skyweaver.net/" rel="noreferrer">
              Try being a gamer once
            </a>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>World Wrestling Entertainment (WWE)</h3>
          <h4 className={styles.headline}>Web3Auth as the NFT Platform Onboarding</h4>
          <p>
            For a smooth onboarding experience of mainstream users, WWE is using Web3Auth's Plug and Play Modal, white labelled for their platform.
            This is an awesome example of how Web3Auth's quick integration can be added to platforms that work on scale, and have the same experience
            throughout the onboarding process.
          </p>
          <div>
            <a className={styles.footer} target="_blank" href="https://www.wwemoonsault.com/" rel="noreferrer">
              Buy your favourite Wrestling NFT
            </a>
          </div>
        </div>

        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>100 Thieves</h3>
          <h4 className={styles.headline}>Web3Auth's Modal for NFT Airdrops</h4>
          <p>
            Looking for an example of how a quick integration of Web3Auth can look like for your dApp? 100 Thieves is using Web3Auth's Plug and Play
            SDK on their website to onboard new mainstream users and aspiring NFT collectors using a simple integration you can add in 30 mins!
          </p>
          <div>
            <a className={styles.footer} target="_blank" href="https://collect.100thieves.com/" rel="noreferrer">
              Collect the 100 Thieves chain
            </a>
          </div>
        </div>
      </div>

      {/* THRID ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>Kepler</h3>
          <h4 className={styles.headline}>Web3Auth as the entry point for inter-chain transactions</h4>
          <p>
            Kepler is an excellent example of an Inter-chain Chrome Extension Wallet, using Web3Auth as their social login architecture. With the
            flexibility of Web3Auth, with just a social login, Kepler is generating a series of addresses across multiple EVM chains, and is able to
            handle all the transactions required for the dApp.
          </p>
          <div>
            <a className={styles.footer} target="_blank" href="https://www.keplr.app/" rel="noreferrer">
              Download the Extension
            </a>
          </div>
        </div>

        <div className={classNames(styles.card)}>
          <h3 className={styles.title}>Kash</h3>
          <h4 className={styles.headline}>Using Web3Auth on a multi chain DeFi platform</h4>
          <p>
            Kash is one of our hands down favourite integrations. They built an excellent UI using our Custom Login UI SDK and their DeFi platform
            integration creates an ethereum and terra address with just a simple click. We just love demoing Kash at every demo interaction. Make sure
            you experience it as well!
          </p>
          <div>
            <a className={styles.footer} target="_blank" href="https://app.kash.io/" rel="noreferrer">
              Just experience this
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
