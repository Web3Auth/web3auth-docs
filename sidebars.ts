import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "html",
      value: "<span class='sidebarHeading'>Quick Links</span>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="https://docs.metamask.io/quickstart/?product=EMBEDDED_WALLETS&walletAggregatorOnly=NO&framework=REACT&stepIndex=0">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59022 12.2135L10.59 2.21384C10.651 2.12674 10.7382 2.06135 10.8389 2.02718C10.9396 1.99301 11.0486 1.99184 11.15 2.02384L11.1801 2.03333C11.2692 2.06763 11.3468 2.12683 11.4036 2.20416C11.4665 2.28995 11.5005 2.39358 11.5004 2.49999V2.50002V7.50002V8.00002H12.0004H16.0004H16.0007C16.0921 7.99998 16.1818 8.02502 16.2601 8.07243C16.3383 8.11984 16.402 8.18779 16.4443 8.26889C16.4865 8.34999 16.5058 8.44113 16.4998 8.5324C16.4939 8.62367 16.4631 8.71156 16.4107 8.78652L9.41083 18.7863L9.41044 18.7868C9.34953 18.8741 9.26236 18.9397 9.16161 18.974C9.06087 19.0083 8.95181 19.0095 8.85029 18.9776C8.74878 18.9456 8.66011 18.8821 8.59719 18.7963C8.53427 18.7104 8.50038 18.6068 8.50044 18.5003V18.5V13.5V13H8.00044H4.00045H4.00022C3.90876 13.0001 3.81904 12.975 3.74083 12.9276C3.66262 12.8802 3.59891 12.8122 3.55663 12.7311C3.51435 12.65 3.49513 12.5589 3.50105 12.4676C3.50697 12.3764 3.53782 12.2885 3.59022 12.2135Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Quick Start</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="https://docs.metamask.io/embedded-wallets/sdk/react/examples/">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.70668 10.5L3.06023 10.1464L5.35318 7.85348C5.3532 7.85347 5.35322 7.85345 5.35323 7.85343C5.44694 7.75967 5.49957 7.63254 5.49957 7.49998C5.49957 7.36745 5.44696 7.24034 5.35329 7.14659C5.35325 7.14656 5.35322 7.14652 5.35318 7.14648M2.70668 10.5L4.29279 6.79298C4.48031 6.60551 4.73462 6.5002 4.99979 6.5002C5.26495 6.5002 5.51926 6.60551 5.70679 6.79298L5.35318 7.14648M2.70668 10.5L3.06023 10.8535L5.35323 13.1465L5.35318 13.1466L5.35943 13.1526C5.40719 13.1988 5.44528 13.2539 5.47148 13.3149C5.49769 13.3759 5.51148 13.4415 5.51206 13.5079C5.51263 13.5743 5.49998 13.6402 5.47484 13.7016C5.4497 13.7631 5.41257 13.8189 5.36563 13.8658C5.31868 13.9128 5.26286 13.9499 5.20141 13.975C5.13996 14.0002 5.07412 14.0128 5.00773 14.0123C4.94134 14.0117 4.87573 13.9979 4.81473 13.9717C4.75373 13.9455 4.69855 13.9074 4.65243 13.8596L4.65249 13.8596L4.64634 13.8534L1.64639 10.8535C1.64638 10.8535 1.64636 10.8534 1.64634 10.8534C1.55264 10.7597 1.5 10.6325 1.5 10.5C1.5 10.3674 1.55264 10.2403 1.64634 10.1465C1.64636 10.1465 1.64638 10.1465 1.64639 10.1465L4.64629 7.14659M2.70668 10.5L4.64629 7.14659M5.35318 7.14648C5.25943 7.05281 5.13232 7.0002 4.99979 7.0002C4.8672 7.0002 4.74005 7.05286 4.64629 7.14659M5.35318 7.14648L4.64629 7.14659M12.1577 4.02534L12.1579 4.02541C12.2203 4.04615 12.2779 4.07896 12.3275 4.12197C12.3772 4.16498 12.4178 4.21735 12.4472 4.27609C12.4766 4.33483 12.4941 4.39878 12.4988 4.46429C12.5035 4.52981 12.4952 4.5956 12.4744 4.65791L8.47444 16.6579L8.4744 16.658C8.43248 16.7839 8.34228 16.888 8.22364 16.9473C8.10499 17.0067 7.96762 17.0165 7.84175 16.9746C7.71588 16.9327 7.61181 16.8425 7.55244 16.7238C7.49309 16.6052 7.48327 16.4679 7.52513 16.3421C7.52515 16.342 7.52516 16.342 7.52518 16.3419L11.5251 4.3421L11.5252 4.34184C11.5459 4.27952 11.5788 4.22189 11.6218 4.17226C11.6648 4.12262 11.7172 4.08194 11.7759 4.05255C11.8346 4.02316 11.8986 4.00563 11.9641 4.00096C12.0296 3.99629 12.0954 4.00457 12.1577 4.02534ZM15.3532 13.8534L15.3532 13.8534L15.3471 13.8596C15.301 13.9074 15.2458 13.9455 15.1848 13.9717C15.1238 13.9979 15.0582 14.0117 14.9918 14.0123C14.9255 14.0128 14.8596 14.0002 14.7982 13.975C14.7367 13.9499 14.6809 13.9128 14.6339 13.8658C14.587 13.8189 14.5499 13.7631 14.5247 13.7016C14.4996 13.6402 14.4869 13.5743 14.4875 13.5079C14.4881 13.4415 14.5019 13.3759 14.5281 13.3149C14.5543 13.2539 14.5924 13.1988 14.6401 13.1526L14.6402 13.1527L14.6463 13.1465L16.9393 10.8535L17.2929 10.5L16.9393 10.1464L14.6464 7.85348C14.6464 7.85347 14.6464 7.85345 14.6463 7.85343C14.5526 7.75967 14.5 7.63254 14.5 7.49998C14.5 7.36745 14.5526 7.24034 14.6463 7.14659C14.7401 7.05286 14.8672 7.0002 14.9998 7.0002C15.1323 7.0002 15.2595 7.05284 15.3532 7.14654C15.3533 7.14656 15.3533 7.14657 15.3533 7.14659L18.3532 10.1465C18.4469 10.2402 18.4996 10.3674 18.4996 10.5C18.4996 10.6326 18.4469 10.7597 18.3532 10.8535L15.3532 13.8534Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Examples</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="https://docs.metamask.io/embedded-wallets/sdk/">

      <svg width="20" height="20" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0498 13.4C10.0498 12.5116 10.4027 11.6595 11.031 11.0312C11.6592 10.403 12.5113 10.05 13.3998 10.05H53.5998C54.4883 10.05 55.3404 10.403 55.9686 11.0312C56.5969 11.6595 56.9498 12.5116 56.9498 13.4V20.1C56.9498 20.9885 56.5969 21.8406 55.9686 22.4689C55.3404 23.0971 54.4883 23.45 53.5998 23.45H13.3998C12.5113 23.45 11.6592 23.0971 11.031 22.4689C10.4027 21.8406 10.0498 20.9885 10.0498 20.1V13.4ZM10.0498 33.5C10.0498 32.6116 10.4027 31.7595 11.031 31.1312C11.6592 30.503 12.5113 30.15 13.3998 30.15H33.4998C34.3883 30.15 35.2404 30.503 35.8686 31.1312C36.4969 31.7595 36.8498 32.6116 36.8498 33.5V53.6001C36.8498 54.4885 36.4969 55.3406 35.8686 55.9689C35.2404 56.5971 34.3883 56.9501 33.4998 56.9501H13.3998C12.5113 56.9501 11.6592 56.5971 11.031 55.9689C10.4027 55.3406 10.0498 54.4885 10.0498 53.6001V33.5ZM46.8998 30.15C46.0113 30.15 45.1592 30.503 44.531 31.1312C43.9028 31.7595 43.5498 32.6116 43.5498 33.5V53.6001C43.5498 54.4885 43.9028 55.3406 44.531 55.9689C45.1592 56.5971 46.0113 56.9501 46.8998 56.9501H53.5998C54.4883 56.9501 55.3404 56.5971 55.9686 55.9689C56.5969 55.3406 56.9498 54.4885 56.9498 53.6001V33.5C56.9498 32.6116 56.5969 31.7595 55.9686 31.1312C55.3404 30.503 54.4883 30.15 53.5998 30.15H46.8998Z"
                fill="currentColor"
              />
            </svg>
      <span class='sidebarLinkText'>SDK Reference</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Overview</span>",
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "README",
    },
    {
      type: "link",
      label: "What is Web3Auth?",
      href: "https://docs.metamask.io/embedded-wallets/",
    },
    {
      type: "link",
      label: "How Web3Auth Works?",
      href: "https://docs.metamask.io/embedded-wallets/how-it-works/",
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Features</span>",
      defaultStyle: true,
    },
    {
      type: "link",
      label: "Connect any Blockchain",
      href: "https://docs.metamask.io/embedded-wallets/connect-blockchain/",
    },
    {
      type: "link",
      label: "External Wallet Aggregator",
      href: "https://docs.metamask.io/embedded-wallets/features/external-wallets/",
    },
    {
      type: "link",
      label: "Smart Accounts",
      href: "https://docs.metamask.io/embedded-wallets/features/smart-accounts/",
    },

    {
      type: "link",
      label: "Custom Authentication",
      href: "https://docs.metamask.io/embedded-wallets/authentication/",
    },
    {
      type: "link",
      label: "Funding",
      href: "https://docs.metamask.io/embedded-wallets/features/funding/",
    },

    {
      type: "link",
      label: "Prebuilt Wallet UI",
      href: "https://docs.metamask.io/embedded-wallets/features/whitelabel/",
    },
    {
      type: "link",
      label: "Wallet Pregeneration",
      href: "https://docs.metamask.io/embedded-wallets/features/wallet-pregeneration/",
    },
    {
      type: "link",
      label: "User Account Dashboard",
      href: "https://docs.metamask.io/embedded-wallets/features/user-account-dashboard/",
    },
    {
      type: "link",
      label: "Server-Side Verification",
      href: "https://docs.metamask.io/embedded-wallets/features/server-side-verification/",
    },
    {
      type: "link",
      label: "NFT Minting",
      href: "https://docs.metamask.io/embedded-wallets/features/nft-minting/",
    },
    {
      type: "link",
      label: "Session Management",
      href: "https://docs.metamask.io/embedded-wallets/features/session-management/",
    },
    {
      type: "link",
      label: "Multi Party Computation",
      href: "https://docs.metamask.io/embedded-wallets/features/mpc/",
    },
    {
      type: "html",
      value: "<span class='sidebarHeading'>Legal</span>",
      defaultStyle: true,
    },

    "change-of-ownership",
  ],
};

export default sidebars;
