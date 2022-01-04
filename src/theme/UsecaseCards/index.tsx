import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export default function UsecaseCards() {
  return (
    <>
      {/* FIRST ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Sky Weaver</h6>
          <h5 className={styles.headline}>Seamless onboarding that scales</h5>
          <p>
          We onboard users in one-click with Torus Key Infrastructure. It allows us to focus on developing the game without worrying about key management.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://www.skyweaver.net/">Learn more</a>
          </div>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Rarible</h6>
          <h5 className={styles.headline}>NFT friendly</h5>
          <p>
          Torus wallet is easy to use for non-tech savvy NFT crowd. It reduces friction to create wallet and purchase an NFT.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://wallet.kukai.app/account/tz2TztEbsVMoHGb4SkXV8QNt4JnxdiGe1A4p">Learn more</a>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className={styles.container}>
        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>Keplr</h6>
          <h5 className={styles.headline}>Seamless onboarding that scales</h5>
          <p>
          Keplr has been using #Web3Auth for one-step registration and logins straight into their Cosmos Extension Wallet. We are thrilled with their success and helping them build the easiest and secure wallet on the Cosmos Blockchain.
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://www.keplr.app/">Learn more</a>
          </div>
        </div>

        <div className={classNames(styles.card, styles.cardOne)}>
          <h6 className={styles.title}>BEW</h6>
          <h5 className={styles.headline}>Seamless onboarding that scales</h5>
          <p>
            TODO
            ...<br/><br/><br/><br/>
          </p>
          <div>
              <a className={styles.footer} target="_blank" href="https://wallet.kukai.app/account/tz2TztEbsVMoHGb4SkXV8QNt4JnxdiGe1A4p">Learn more</a>
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
              <a className={styles.footer} target="_blank" href="https://wallet.kukai.app/account/tz2TztEbsVMoHGb4SkXV8QNt4JnxdiGe1A4p">Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
}
