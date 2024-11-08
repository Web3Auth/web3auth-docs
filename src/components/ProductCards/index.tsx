import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
              UI, and advanced security options, with non custodial MPC key management. Create a
              user-friendly, secure entry point for crypto-native users and non-crypto users alike.
            </p>
          </div>
        </Link>
      </div>
      <h2>Explore our Products</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Link className={styles.cardHeader} to={`${baseUrl}product/pnp`}>
            <div className={styles.cardIconContainer}>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.cardIcon}
              >
                <path
                  d="M14.2486 4.47657L14.2486 2.8099C14.2486 2.36787 14.073 1.94395 13.7605 1.63139C13.4479 1.31883 13.024 1.14323 12.5819 1.14323L2.58195 1.14323C2.13992 1.14323 1.716 1.31883 1.40344 1.63139C1.09088 1.94395 0.915283 2.36787 0.915283 2.8099L0.915283 11.1432C0.915283 11.5853 1.09088 12.0092 1.40344 12.3217C1.716 12.6343 2.13992 12.8099 2.58195 12.8099L12.5819 12.8099C13.024 12.8099 13.4479 12.6343 13.7605 12.3217C14.073 12.0092 14.2486 11.5853 14.2486 11.1432L14.2486 9.47657M14.2486 4.47657C13.8066 4.47657 10.8827 4.65216 10.5701 4.96472C10.2575 5.27728 10.0819 5.70121 10.0819 6.14323L10.0819 7.8099C10.0819 8.25193 10.2575 8.67585 10.5701 8.98841C10.8827 9.30097 13.8066 9.47657 14.2486 9.47657M14.2486 4.47657C14.6906 4.47657 15.1146 4.65216 15.4271 4.96472C15.7397 5.27728 15.9153 5.70121 15.9153 6.14323L15.9153 7.8099C15.9153 8.25193 15.7397 8.67585 15.4271 8.98841C15.1146 9.30097 14.6906 9.47657 14.2486 9.47657"
                  stroke="currentColor"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h5>Plug and Play SDKs</h5>
          </Link>
          <div className={styles.cardContent}>
            <Link className={styles.cardContentText} to={`${baseUrl}product/pnp`}>
              <p>
                <b>Integrate Web3Auth in just 4 lines of Code.</b>
                <br />
                <br />
                Build a non-custodial embedded wallet with prebuilt UI Components and flows,
                whitelabeled within your app.
              </p>
            </Link>
            <div className={styles.links}>
              <a href={`https://demo.web3auth.io/`}>Demo{chevron}</a>
              <a
                href={`${baseUrl}quick-start?product=PNP&sdk=PNP_MODAL&framework=REACT&stepIndex=0`}
              >
                Quick Start{chevron}
              </a>
              <a href={`${baseUrl}sdk/pnp/web/modal`}>SDK Reference{chevron}</a>
              <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Web+Modal+SDK`}>
                Examples{chevron}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Link className={styles.cardHeader} to={`${baseUrl}product/sfa`}>
            <div className={styles.cardIconContainer}>
              <svg
                className={styles.cardIcon}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.87494 2.52873C3.06253 2.75354 2.50001 3.49287 2.50001 4.33581L2.50001 10.0683C2.50001 12.9232 3.99837 15.5686 6.44688 17.0367L9.03583 18.589C9.62936 18.9448 10.3707 18.9448 10.9642 18.589L13.5531 17.0367C16.0017 15.5686 17.5 12.9232 17.5 10.0683L17.5 4.33581C17.5 3.49287 16.9375 2.75354 16.1251 2.52873L10.5001 0.972122C10.1729 0.881567 9.82717 0.881567 9.49994 0.972121L3.87494 2.52873ZM16.25 10.0683L16.25 4.33581C16.25 4.05483 16.0625 3.80839 15.7917 3.73345L10.1667 2.17684C10.0576 2.14666 9.9424 2.14666 9.83332 2.17684L4.20832 3.73345C3.93752 3.80839 3.75001 4.05483 3.75001 4.33581L3.75001 10.0683C3.75001 12.484 5.01786 14.7224 7.08967 15.9646L9.67862 17.5169C9.87646 17.6355 10.1236 17.6355 10.3214 17.5169L12.9104 15.9646C14.9822 14.7224 16.25 12.4839 16.25 10.0683Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50001 6.875L12.5 6.875C13.8807 6.875 15 7.99428 15 9.375C15 10.7557 13.8807 11.875 12.5 11.875L7.50001 11.875C6.1193 11.875 5.00001 10.7557 5.00001 9.375C5.00001 7.99428 6.1193 6.875 7.50001 6.875ZM7.50001 8.125C6.80966 8.125 6.25001 8.68464 6.25001 9.375C6.25001 10.0654 6.80966 10.625 7.50001 10.625L12.5 10.625C13.1904 10.625 13.75 10.0654 13.75 9.375C13.75 8.68464 13.1904 8.125 12.5 8.125L7.50001 8.125Z"
                  fill="currentColor"
                />
                <path
                  d="M10 9.375C10 8.16687 10.9794 7.1875 12.1875 7.1875C13.3956 7.1875 14.375 8.16687 14.375 9.375C14.375 10.5831 13.3956 11.5625 12.1875 11.5625C10.9794 11.5625 10 10.5831 10 9.375Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h5>Single Factor Auth SDKs</h5>
          </Link>
          <div className={styles.cardContent}>
            <Link className={styles.cardContentText} to={`${baseUrl}product/sfa`}>
              <p>
                <b>Single click login with zero web3 components.</b>
                <br />
                <br />
                Personalize your dApp experience with a single click login where Web3Auth is
                completely hidden.
              </p>
            </Link>

            <div className={styles.links}>
              <a href={`https://demo-sfa.web3auth.io/`}>Demo{chevron}</a>
              <a
                href={`${baseUrl}quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=REACT&stepIndex=0`}
              >
                Quick Start{chevron}
              </a>
              <a href={`${baseUrl}sdk/sfa/sfa-js`}>SDK Reference{chevron}</a>
              <a href={`${baseUrl}examples?product=Core+Kit&sdk=Single+Factor+Auth+JS+SDK`}>
                Examples{chevron}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Link className={styles.cardHeader} to={`${baseUrl}product/mpc-core-kit`}>
            <div className={styles.cardIconContainer}>
              <svg
                className={styles.cardIcon}
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.96899 2.81059C9.65643 3.12315 9.48083 3.54707 9.48083 3.9891V4.82243C9.48083 5.04345 9.39304 5.25541 9.23676 5.41169C9.08048 5.56797 8.86852 5.65577 8.6475 5.65577H6.1475C5.92649 5.65577 5.71453 5.74356 5.55825 5.89984C5.40197 6.05612 5.31417 6.26809 5.31417 6.4891V8.9891C5.31417 9.21011 5.22637 9.42208 5.07009 9.57836C4.91381 9.73464 4.70185 9.82243 4.48083 9.82243H3.6475C3.20547 9.82243 2.78155 9.99803 2.46899 10.3106C2.15643 10.6231 1.98083 11.0471 1.98083 11.4891C1.98083 11.9311 2.15643 12.3551 2.46899 12.6676C2.78155 12.9802 3.20547 13.1558 3.6475 13.1558H4.48083C4.70185 13.1558 4.91381 13.2436 5.07009 13.3998C5.22637 13.5561 5.31417 13.7681 5.31417 13.9891V16.4891C5.31417 16.7101 5.40197 16.9221 5.55825 17.0784C5.71453 17.2346 5.92649 17.3224 6.1475 17.3224H8.6475C8.86852 17.3224 9.08048 17.2346 9.23676 17.0784C9.39304 16.9221 9.48083 16.7101 9.48083 16.4891V15.6558C9.48083 15.2137 9.65643 14.7898 9.96899 14.4773C10.2816 14.1647 10.7055 13.9891 11.1475 13.9891C11.5895 13.9891 12.0135 14.1647 12.326 14.4773C12.6386 14.7898 12.8142 15.2137 12.8142 15.6558V16.4891C12.8142 16.7101 12.902 16.9221 13.0582 17.0784C13.2145 17.2346 13.4265 17.3224 13.6475 17.3224H16.1475C16.3685 17.3224 16.5805 17.2346 16.7368 17.0784C16.893 16.9221 16.9808 16.7101 16.9808 16.4891V13.9891C16.9808 13.7681 16.893 13.5561 16.7368 13.3998C16.5805 13.2436 16.3685 13.1558 16.1475 13.1558H15.3142C14.8721 13.1558 14.4482 12.9802 14.1357 12.6676C13.8231 12.3551 13.6475 11.9311 13.6475 11.4891C13.6475 11.0471 13.8231 10.6231 14.1357 10.3106C14.4482 9.99803 14.8721 9.82243 15.3142 9.82243H16.1475C16.3685 9.82243 16.5805 9.73464 16.7368 9.57836C16.893 9.42208 16.9808 9.21011 16.9808 8.9891V6.4891C16.9808 6.26809 16.893 6.05612 16.7368 5.89984C16.5805 5.74356 16.3685 5.65577 16.1475 5.65577H13.6475C13.4265 5.65577 13.2145 5.56797 13.0582 5.41169C12.902 5.25541 12.8142 5.04345 12.8142 4.82243V3.9891C12.8142 3.54707 12.6386 3.12315 12.326 2.81059C12.0135 2.49803 11.5895 2.32243 11.1475 2.32243C10.7055 2.32243 10.2816 2.49803 9.96899 2.81059Z"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h5>MPC Core Kit</h5>
          </Link>

          <div className={styles.cardContent}>
            <Link className={styles.cardContentText} to={`${baseUrl}product/mpc-core-kit`}>
              <p>
                <b>Build custom UX flows on Web3Auth's MPC Infrastructure.</b>
                <br />
                <br />
                Get the best in class security with a total non custodial experience with an
                enterprise grade wallet infrastructure.
              </p>
            </Link>
            <div className={styles.links}>
              <a
                href={`${baseUrl}quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=REACT&stepIndex=0`}
              >
                Quick Start{chevron}
              </a>
              <a href={`${baseUrl}sdk/mpc-core-kit`}>SDK Reference{chevron}</a>
              <a href={`${baseUrl}examples?product=Core+Kit&sdk=Single+Factor+Auth+JS+SDK`}>
                Examples{chevron}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link className={styles.cardAlert} to={`${baseUrl}product/wallet-ecosystems`}>
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
            Explore our Wallet Ecosystems offering and let Web3Auth help you build and manage your
            own cross app ecosystem.
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
