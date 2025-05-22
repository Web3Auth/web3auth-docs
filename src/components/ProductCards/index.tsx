import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { webIcons, mobileIcons, gamingIcons } from "../../common/Icons";
import styles from "./styles.module.css";

export default function QuickNavigation() {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const chevron = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 3.33301L10.6667 7.99967L6 12.6663"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Link className={styles.cardAlert} to={`${baseUrl}what-is-web3auth`}>
          <div className={styles.cardContent}>
            <span>
              <b>What is Web3Auth?</b>
            </span>
            <p>
              Web3Auth simplifies Web3 access with easy-to-use social logins, customizable wallet
              UI, and advanced security options, with non custodial MPC wallet management. Create a
              user-friendly, secure entry point for crypto-native users and non-crypto users alike.
            </p>
          </div>
        </Link>
      </div>
      <h2>Explore our SDKs</h2>
      <div className={styles.cardContainer}>
        <Link className={styles.card} to={`${baseUrl}sdk/web`}>
          <div className={styles.cardHeader}>
            <h5>Web SDKs</h5>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardContentText}>
              <p>Integrate Web3Auth in just 4 lines of code.</p>
            </div>
            {webIcons}
            {/* <div className={styles.links}>
              <a href={`https://demo.web3auth.io/`} className={styles.pillContainer}>
                <span className={styles.pill}>Demo{chevron}</span>
              </a>
              <a
                href={`${baseUrl}quick-start?product=PNP&sdk=PNP_MODAL`}
                className={styles.pillContainer}
              >
                <span className={styles.pill}>Quick Start{chevron}</span>
              </a>
              <a href={`${baseUrl}examples`} className={styles.pillContainer}>
                <span className={styles.pill}>Examples{chevron}</span>
              </a>
            </div> */}
          </div>
        </Link>
        <Link className={styles.card} to={`${baseUrl}sdk/mobile`}>
          <div className={styles.cardHeader}>
            <h5>Mobile SDKs</h5>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardContentText}>
              <p>Native mobile authentication with no web3 expertise required.</p>
            </div>
            {mobileIcons}

            {/* <div className={styles.links}>
              <a
                href={`${baseUrl}quick-start?product=SFA&sdk=SFA_WEB`}
                className={styles.pillContainer}
              >
                <span className={styles.pill}>Quick Start{chevron}</span>
              </a>
              <a href={`${baseUrl}examples`} className={styles.pillContainer}>
                <span className={styles.pill}>Examples{chevron}</span>
              </a>
            </div> */}
          </div>
        </Link>
        <Link className={styles.card} to={`${baseUrl}sdk/gaming`}>
          <div className={styles.cardHeader}>
            <h5>Gaming SDKs</h5>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardContentText}>
              <p>Effortless non-custodial wallet management for your games.</p>
            </div>
            {gamingIcons}
            {/* <div className={styles.links}>
              <a
                href={`${baseUrl}quick-start?product=GAMING&sdk=GAMING_UNITY`}
                className={styles.pillContainer}
              >
                <span className={styles.pill}>Quick Start{chevron}</span>
              </a>
              <a href={`${baseUrl}examples`} className={styles.pillContainer}>
                <span className={styles.pill}>Examples{chevron}</span>
              </a>
            </div> */}
          </div>
        </Link>
      </div>
      <Link className={styles.cardAlert} to={`${baseUrl}sdk/mpc-core-kit`}>
        <div className={styles.cardContent}>
          <span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cardIconAlert}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 10.3708C18 12.4926 17.1571 14.5274 15.6569 16.0277C14.1566 17.528 12.1217 18.3708 10 18.3708C7.87827 18.3708 5.84344 17.528 4.34315 16.0277C2.84285 14.5274 2 12.4926 2 10.3708C2 8.24912 2.84285 6.21429 4.34315 4.714C5.84344 3.2137 7.87827 2.37085 10 2.37085C12.1217 2.37085 14.1566 3.2137 15.6569 4.714C17.1571 6.21429 18 8.24912 18 10.3708ZM11 6.37085C11 6.63607 10.8946 6.89042 10.7071 7.07796C10.5196 7.26549 10.2652 7.37085 10 7.37085C9.73478 7.37085 9.48043 7.26549 9.29289 7.07796C9.10536 6.89042 9 6.63607 9 6.37085C9 6.10563 9.10536 5.85128 9.29289 5.66374C9.48043 5.47621 9.73478 5.37085 10 5.37085C10.2652 5.37085 10.5196 5.47621 10.7071 5.66374C10.8946 5.85128 11 6.10563 11 6.37085ZM9 9.37085C8.73478 9.37085 8.48043 9.47621 8.29289 9.66374C8.10536 9.85128 8 10.1056 8 10.3708C8 10.6361 8.10536 10.8904 8.29289 11.078C8.48043 11.2655 8.73478 11.3708 9 11.3708V14.3708C9 14.6361 9.10536 14.8904 9.29289 15.078C9.48043 15.2655 9.73478 15.3708 10 15.3708H11C11.2652 15.3708 11.5196 15.2655 11.7071 15.078C11.8946 14.8904 12 14.6361 12 14.3708C12 14.1056 11.8946 13.8513 11.7071 13.6637C11.5196 13.4762 11.2652 13.3708 11 13.3708V10.3708C11 10.1056 10.8946 9.85128 10.7071 9.66374C10.5196 9.47621 10.2652 9.37085 10 9.37085H9Z"
                fill="currentColor"
              />
            </svg>
            <b>Looking for a more customised solution?</b>
          </span>
          <p>
            Explore our MPC Core Kit Enterprise SDK offering and build and manage your version of
            Web3Auth.
          </p>

          <div className={styles.btnContainerAlert}>
            Find out More
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 3.29279C10.4805 3.10532 10.7348 3 11 3C11.2652 3 11.5195 3.10532 11.707 3.29279L17.707 9.29279C17.8945 9.48031 17.9998 9.73462 17.9998 9.99979C17.9998 10.265 17.8945 10.5193 17.707 10.7068L11.707 16.7068C11.5184 16.8889 11.2658 16.9897 11.0036 16.9875C10.7414 16.9852 10.4906 16.88 10.3052 16.6946C10.1198 16.5092 10.0146 16.2584 10.0123 15.9962C10.01 15.734 10.1108 15.4814 10.293 15.2928L14.586 10.9998H3C2.73478 10.9998 2.48043 10.8944 2.29289 10.7069C2.10536 10.5194 2 10.265 2 9.99979C2 9.73457 2.10536 9.48022 2.29289 9.29268C2.48043 9.10514 2.73478 8.99979 3 8.99979H14.586L10.293 4.70679C10.1055 4.51926 10.0002 4.26495 10.0002 3.99979C10.0002 3.73462 10.1055 3.48031 10.293 3.29279Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
