import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Skyweaver</h6>
          <h5 className={styles.headline}>Web3 games that feels like Web2</h5>
          <p>
          We onboard users via the Sequence Wallet. Its social logins are powered by the Torus Network. There's no better way to plug in social auth into Web3 on a wallet
          <i> - Peter Kieltyka, Co-founder</i>.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://medium.com/toruslabs/accelerating-blockchain-adoption-amongst-mainstream-users-with-skyweaver-1a0ea17b1e78">Learn more</a>
          </div>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Kukai</h6>
          <h5 className={styles.headline}>For the best NFT onboarding</h5>
          <p>
          Web3Auth is the easiest way for non-tech savvy users to onboard into a wallet, making it a great fit for the NFT ecosystem. It reduces friction, and increases conversion
          <i> - Luis Gonzalez, Kukai/Tezos Commons</i>
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://medium.com/toruslabs/how-kukai-reached-a-million-user-logins-with-web3auth-sdk-58bdc08ca83d">Learn more</a>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Keplr</h6>
          <h5 className={styles.headline}>Seamless onboarding that scales</h5>
          <p>
          Keplr has been using Web3Auth for one-step registration and logins straight into their Cosmos Extension Wallet. We are thrilled with their success and helping them build the easiest and secure wallet on the Cosmos Blockchain.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="TODO">Learn more</a>
          </div>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>BEW</h6>
          <h5 className={styles.headline}>Web3Auth pave the way for crypto’s future</h5>
          <p>
          See how Binance Extension Wallet removes seed phrases.
          Web3Auth has allowed Binance Smart Chain users to seamlessly create and manage their extension wallets with their Social Accounts.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://medium.com/toruslabs/how-binance-chain-extension-wallet-removes-seedphrases-with-web3auth-40cd527fcfaf">Learn more</a>
          </div>
        </div>
      </div>

      {/* THRID ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Binance Featured Market</h6>
          <h5 className={styles.headline}>Seamless onboarding that scales</h5>
          <p>
            Web3Auth - 2021 has been a challenging year full of opportunities for us. We're thrilled with the growth we've experienced, the partnerships we've forged, and the friends we've made. 2022 is going to be our best year yet!
            Sequoia- Cryptos worth more than GDPs of nations are lost due to inefficient Private Key Management. Send in your wishes to these guys who want to make Cryptos accessible even to your Grandma!
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="TODO">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
}
