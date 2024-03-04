import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import ThievesDark from "@site/static/guides/logo-100thieves-dark.png";
import ThievesLight from "@site/static/guides/logo-100thieves-light.png";
import BNB from "@site/static/guides/logo-bnb.png";
import Kash from "@site/static/guides/logo-kash.png";
import Keplr from "@site/static/guides/logo-keplr.png";
import SkyweaverDark from "@site/static/guides/logo-skyweaver-dark.png";
import SkyweaverLight from "@site/static/guides/logo-skyweaver-light.png";
import classNames from "classnames";

import styles from "./styles.module.css";

export default function UsecaseCards() {
  const { colorMode } = useColorMode();
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp">
          <div>
            <img className={styles.logo} src={BNB} alt="Binance Wallet" />
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
          >
            Download the Extension →
          </span>
        </Link>

        <Link className={classNames(styles.card)} to="https://play.skyweaver.net/">
          <div>
            {colorMode === "dark" ? (
              <img className={styles.logo} src={SkyweaverDark} alt="Skyweaver" />
            ) : (
              <img className={styles.logo} src={SkyweaverLight} alt="Skyweaver" />
            )}
            <h3 className={styles.title}>
              <strong>Skyweaver</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth's Custom Authentication for on-chain Games</h4>
            <p>
              Skyweaver, using their Sequence Multi-Key Wallet, have made one of the most interesting use cases of Web3Auth's Custom Authentication
              solution on Polygon L2. This combination gives players the best user experience, security and access control to their wallets.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://play.skyweaver.net/">
            Try being a gamer once →
          </span>
        </Link>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://collect.100thieves.com/">
          <div>
            {colorMode === "dark" ? (
              <img className={styles.logo} src={ThievesDark} alt="100Thieves" />
            ) : (
              <img className={styles.logo} src={ThievesLight} alt="100Thieves" />
            )}
            <h3 className={styles.title}>
              <strong>100 Thieves</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth's Modal for NFT Airdrops</h4>
            <p>
              100 Thieves is using Web3Auth's Plug and Play SDK on their website to onboard thousands of mainstream users and aspiring NFT collectors
              using an out-of-the-box Modal provided by Web3Auth, that you can add too, in less than 30 mins!
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://collect.100thieves.com/">
            Collect the 100 Thieves chain →
          </span>
        </Link>
        <Link className={classNames(styles.card)} to="https://www.keplr.app/">
          <div>
            <img className={styles.logo} src={Keplr} alt="Keplr" />
            <h3 className={styles.title}>
              <strong>Keplr</strong>
            </h3>
            <h4 className={styles.headline}>Web3Auth as the entry point for inter-chain transactions</h4>
            <p>
              Keplr is an excellent example of an Inter-chain Chrome Extension Wallet, using Web3Auth as their social login architecture. With the
              flexibility of Web3Auth, with just a social login, Keplr is generating a series of addresses across multiple EVM chains, and is able to
              handle all the transactions required for the dApp.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://www.keplr.app/">
            Download the Extension →
          </span>
        </Link>
      </div>

      {/* THRID ROW */}
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="https://app.kash.io/">
          <div>
            <img className={styles.logo} src={Kash} alt="Kash" />
            <h3 className={styles.title}>
              <strong>Kash</strong>
            </h3>
            <h4 className={styles.headline}>Using Web3Auth on a multi chain DeFi platform</h4>
            <p>
              Kash built an excellent UI using our Web3Auth Plug and Play No Modal SDK and their DeFi platform integration creates an Ethereum and
              Terra address with just a simple click.
            </p>
          </div>
          <span className={styles.footer} target="_blank" href="https://app.kash.io/">
            Just experience this →
          </span>
        </Link>
      </div>
    </>
  );
}
