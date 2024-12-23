import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import {
  web,
  android,
  ios,
  reactnative,
  flutter,
  unity,
  unreal,
  mpccorekitjs,
  singlefactorauthjs,
  singlefactorauthandroid,
  singlefactorauthflutter,
  singlefactorauthios,
} from "./src/common/SDKOptions";

import { getPnPVersion, getCoreKitVersion } from "./src/common/versions";

function pnpTopNavButton(selectedSDK: string): string {
  const baseUrl = process.env.REACT_APP_BASE_URL || "/docs/";

  var pnpSDKs = {
    [web]: `${baseUrl}sdk/pnp/web`,
    [android]: `${baseUrl}sdk/pnp/android`,
    [ios]: `${baseUrl}sdk/pnp/ios`,
    [reactnative]: `${baseUrl}sdk/pnp/react-native`,
    [flutter]: `${baseUrl}sdk/pnp/flutter`,
    [unity]: `${baseUrl}sdk/pnp/unity`,
    [unreal]: `${baseUrl}sdk/pnp/unreal`,
  };
  if (pnpSDKs.hasOwnProperty(selectedSDK)) {
    delete pnpSDKs[selectedSDK];
  }
  var sdkNames = Object.keys(pnpSDKs);
  var sdkLinks = Object.values(pnpSDKs);
  var sdkVersion = getPnPVersion(selectedSDK);

  return `
    <div class="sdk-sidebar-container">
      <div class="sdk-sidebar-option-selected">
        Plug and Play SDKs
        <div class="sdk-sidebar-dropdown-container">
          <select class="sdk-sidebar-dropdown" onchange="location.href=this.value">
              <option value="">${selectedSDK}</option>
              <option value="${sdkLinks[0]}">${sdkNames[0]}</option>
              <option value="${sdkLinks[1]}">${sdkNames[1]}</option>
              <option value="${sdkLinks[2]}">${sdkNames[2]}</option>
              <option value="${sdkLinks[3]}">${sdkNames[3]}</option>
              <option value="${sdkLinks[4]}">${sdkNames[4]}</option>
              <option value="${sdkLinks[5]}">${sdkNames[5]}</option>
          </select>
          v${sdkVersion}
        </div>
      </div>
      <a class="sdk-sidebar-option" href="${baseUrl}sdk/sfa/sfa-js">
        Single Factor Auth SDKs
        <span class="sdk-sidebar-description">One click login, without redirection, all natively within your app.</span>
      </a>
      <a class="sdk-sidebar-option" href="${baseUrl}sdk/mpc-core-kit/mpc-core-kit-js">
        MPC Core Kit SDK
        <span class="sdk-sidebar-description">Build your own MPC wallet with Web3Auth Infra layer SDK</span>
      </a>
    </div>`;
}

function sfaTopNavButton(selectedSDK: string): string {
  const baseUrl = process.env.REACT_APP_BASE_URL || "/docs/";

  var coreKitSDKs = {
    [singlefactorauthjs]: `${baseUrl}sdk/sfa/sfa`,
    [singlefactorauthandroid]: `${baseUrl}sdk/sfa/sfa-android`,
    [singlefactorauthios]: `${baseUrl}sdk/sfa/sfa-ios`,
    [singlefactorauthflutter]: `${baseUrl}sdk/sfa/sfa-flutter`,
  };
  if (coreKitSDKs.hasOwnProperty(selectedSDK)) {
    delete coreKitSDKs[selectedSDK];
  }
  var sdkNames = Object.keys(coreKitSDKs);
  var sdkLinks = Object.values(coreKitSDKs);
  var sdkVersion = getCoreKitVersion(selectedSDK);

  return `
    <div class="sdk-sidebar-container">
      <a class="sdk-sidebar-option" href="${baseUrl}sdk/pnp/web">
        Plug and Play SDKs
        <span class="sdk-sidebar-description">Integrate Web3Auth with 4 lines of code.</span>
      </a>
      <div class="sdk-sidebar-option-selected">
        Single Factor Auth SDKs
                <div class="sdk-sidebar-dropdown-container">
        <select class="sdk-sidebar-dropdown" onchange="location.href=this.value">
            <option value="">${selectedSDK}</option>
            <option value="${sdkLinks[0]}">${sdkNames[0]}</option>
            <option value="${sdkLinks[1]}">${sdkNames[1]}</option>
            <option value="${sdkLinks[2]}">${sdkNames[2]}</option>
        </select>
                  v${sdkVersion}
                  </div>
      </div>
      <a class="sdk-sidebar-option" href="${baseUrl}sdk/mpc-core-kit/mpc-core-kit-js">
        MPC Core Kit SDK
        <span class="sdk-sidebar-description">Build your own MPC wallet with Web3Auth Infra layer SDK</span>
      </a>
    </div>`;
}

function mpcckTopNavButton(): string {
  const baseUrl = process.env.REACT_APP_BASE_URL || "/docs/";
  var sdkVersion = getCoreKitVersion(mpccorekitjs);

  return `
    <div class="sdk-sidebar-container">
      <a class="sdk-sidebar-option" href="${baseUrl}sdk/pnp/web">
        Plug and Play SDKs
        <span class="sdk-sidebar-description">Integrate Web3Auth with 4 lines of code.</span>
      </a>
       <a class="sdk-sidebar-option" href="${baseUrl}sdk/sfa/sfa-js">
        Single Factor Auth SDKs
        <span class="sdk-sidebar-description">One click login, without redirection, all natively within your app.</span>
      </a>
      <div class="sdk-sidebar-option-selected">
        MPC Core Kit SDK - v${sdkVersion}
        <span class="sdk-sidebar-description">Build your own MPC wallet with Web3Auth Infra layer SDK</span>
      </div>
    </div>`;
}

const sdkQuickLinks: any = [
  {
    type: "html",
    value: "<span class='sidebarHeading'>Additional Reading</span>",
    defaultStyle: true,
  },
  {
    type: "link",
    label: "Quick Start",
    href: "/quick-start",
  },
  {
    type: "link",
    label: "Examples",
    href: "/examples",
  },
  {
    type: "link",
    label: "Auth Provider Setup",
    href: "/auth-provider-setup",
  },
  {
    type: "link",
    label: "Connect Blockchain",
    href: "/connect-blockchain",
  },
  {
    type: "link",
    label: "Troubleshooting",
    href: "/troubleshooting",
  },
  {
    type: "link",
    label: "Dashboard Setup",
    href: "/dashboard-setup",
  },
];

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "html",
      value: "<span class='sidebarHeading'>Quick Links</span>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="https://web3auth.io/community/c/announcements/5" target="_blank">
      <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2382_32884)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2197 2.52454C15.4635 2.63322 15.6251 2.91009 15.6251 3.21939V6.5105C16.221 6.65496 16.7733 7.00412 17.2098 7.52245C17.7958 8.21838 18.1251 9.16227 18.1251 10.1465C18.1251 11.1307 17.7958 12.0746 17.2098 12.7705C16.7733 13.2888 16.221 13.638 15.6251 13.7825V17.0736C15.6251 17.3829 15.4635 17.6597 15.2197 17.7684C14.9758 17.8771 14.7008 17.7948 14.5294 17.5619C13.7097 16.4479 12.0088 15.4883 9.79172 15.0698V19.2902C9.79137 19.8752 9.61719 20.4417 9.29988 20.8891C8.98256 21.3365 8.54246 21.6365 8.05712 21.7364C7.57178 21.8362 7.07233 21.7295 6.64677 21.4349C6.22121 21.1404 5.89683 20.6769 5.7308 20.1262L5.72913 20.1207L4.02651 14.3291C3.304 13.8888 2.71049 13.1942 2.33019 12.3351C1.90553 11.3758 1.77301 10.2717 1.95506 9.20963C2.13712 8.14761 2.62257 7.1929 3.32926 6.50706C4.03595 5.82122 4.92048 5.44637 5.83315 5.44596H7.36005C7.95219 5.44596 8.52857 5.40788 9.0825 5.33587C9.09232 5.3343 9.10222 5.33299 9.11219 5.33197C11.6599 4.9947 13.6279 3.9563 14.5294 2.73106C14.7008 2.49814 14.9758 2.41585 15.2197 2.52454ZM15.6251 12.2457C15.8862 12.136 16.1263 11.958 16.3259 11.7209C16.6775 11.3033 16.8751 10.737 16.8751 10.1465C16.8751 9.55596 16.6775 8.98962 16.3259 8.57206C16.1263 8.335 15.8862 8.15692 15.6251 8.04725V12.2457Z" fill="currentColor"/>
        </g>
        <defs>
        <clipPath id="clip0_2382_32884">
        <rect width="20" height="23.75" fill="none" transform="translate(0.000244141 0.25)"/>
        </clipPath>
        </defs>
      </svg>
      <span class='sidebarLinkText'>Announcements</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/resources">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.26404C3.46957 2.26404 2.96086 2.47475 2.58579 2.84982C2.21071 3.2249 2 3.73361 2 4.26404V15.264C2 16.0597 2.31607 16.8228 2.87868 17.3854C3.44129 17.948 4.20435 18.264 5 18.264C5.79565 18.264 6.55871 17.948 7.12132 17.3854C7.68393 16.8228 8 16.0597 8 15.264V4.26404C8 3.73361 7.78929 3.2249 7.41421 2.84982C7.03914 2.47475 6.53043 2.26404 6 2.26404H4ZM5 16.264C5.26522 16.264 5.51957 16.1587 5.70711 15.9711C5.89464 15.7836 6 15.5293 6 15.264C6 14.9988 5.89464 14.7445 5.70711 14.5569C5.51957 14.3694 5.26522 14.264 5 14.264C4.73478 14.264 4.48043 14.3694 4.29289 14.5569C4.10536 14.7445 4 14.9988 4 15.264C4 15.5293 4.10536 15.7836 4.29289 15.9711C4.48043 16.1587 4.73478 16.264 5 16.264ZM10 14.507L14.9 9.60704C15.2749 9.23198 15.4856 8.72337 15.4856 8.19304C15.4856 7.66271 15.2749 7.15409 14.9 6.77904L13.485 5.36404C13.1099 4.9891 12.6013 4.77847 12.071 4.77847C11.5407 4.77847 11.0321 4.9891 10.657 5.36404L10 6.02104V14.507ZM16 18.264H9.071L15.071 12.264H16C16.5304 12.264 17.0391 12.4748 17.4142 12.8498C17.7893 13.2249 18 13.7336 18 14.264V16.264C18 16.7945 17.7893 17.3032 17.4142 17.6783C17.0391 18.0533 16.5304 18.264 16 18.264Z" fill="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Resources</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/quick-start">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59022 12.2135L10.59 2.21384C10.651 2.12674 10.7382 2.06135 10.8389 2.02718C10.9396 1.99301 11.0486 1.99184 11.15 2.02384L11.1801 2.03333C11.2692 2.06763 11.3468 2.12683 11.4036 2.20416C11.4665 2.28995 11.5005 2.39358 11.5004 2.49999V2.50002V7.50002V8.00002H12.0004H16.0004H16.0007C16.0921 7.99998 16.1818 8.02502 16.2601 8.07243C16.3383 8.11984 16.402 8.18779 16.4443 8.26889C16.4865 8.34999 16.5058 8.44113 16.4998 8.5324C16.4939 8.62367 16.4631 8.71156 16.4107 8.78652L9.41083 18.7863L9.41044 18.7868C9.34953 18.8741 9.26236 18.9397 9.16161 18.974C9.06087 19.0083 8.95181 19.0095 8.85029 18.9776C8.74878 18.9456 8.66011 18.8821 8.59719 18.7963C8.53427 18.7104 8.50038 18.6068 8.50044 18.5003V18.5V13.5V13H8.00044H4.00045H4.00022C3.90876 13.0001 3.81904 12.975 3.74083 12.9276C3.66262 12.8802 3.59891 12.8122 3.55663 12.7311C3.51435 12.65 3.49513 12.5589 3.50105 12.4676C3.50697 12.3764 3.53782 12.2885 3.59022 12.2135Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Quick Start</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/examples">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.70668 10.5L3.06023 10.1464L5.35318 7.85348C5.3532 7.85347 5.35322 7.85345 5.35323 7.85343C5.44694 7.75967 5.49957 7.63254 5.49957 7.49998C5.49957 7.36745 5.44696 7.24034 5.35329 7.14659C5.35325 7.14656 5.35322 7.14652 5.35318 7.14648M2.70668 10.5L4.29279 6.79298C4.48031 6.60551 4.73462 6.5002 4.99979 6.5002C5.26495 6.5002 5.51926 6.60551 5.70679 6.79298L5.35318 7.14648M2.70668 10.5L3.06023 10.8535L5.35323 13.1465L5.35318 13.1466L5.35943 13.1526C5.40719 13.1988 5.44528 13.2539 5.47148 13.3149C5.49769 13.3759 5.51148 13.4415 5.51206 13.5079C5.51263 13.5743 5.49998 13.6402 5.47484 13.7016C5.4497 13.7631 5.41257 13.8189 5.36563 13.8658C5.31868 13.9128 5.26286 13.9499 5.20141 13.975C5.13996 14.0002 5.07412 14.0128 5.00773 14.0123C4.94134 14.0117 4.87573 13.9979 4.81473 13.9717C4.75373 13.9455 4.69855 13.9074 4.65243 13.8596L4.65249 13.8596L4.64634 13.8534L1.64639 10.8535C1.64638 10.8535 1.64636 10.8534 1.64634 10.8534C1.55264 10.7597 1.5 10.6325 1.5 10.5C1.5 10.3674 1.55264 10.2403 1.64634 10.1465C1.64636 10.1465 1.64638 10.1465 1.64639 10.1465L4.64629 7.14659M2.70668 10.5L4.64629 7.14659M5.35318 7.14648C5.25943 7.05281 5.13232 7.0002 4.99979 7.0002C4.8672 7.0002 4.74005 7.05286 4.64629 7.14659M5.35318 7.14648L4.64629 7.14659M12.1577 4.02534L12.1579 4.02541C12.2203 4.04615 12.2779 4.07896 12.3275 4.12197C12.3772 4.16498 12.4178 4.21735 12.4472 4.27609C12.4766 4.33483 12.4941 4.39878 12.4988 4.46429C12.5035 4.52981 12.4952 4.5956 12.4744 4.65791L8.47444 16.6579L8.4744 16.658C8.43248 16.7839 8.34228 16.888 8.22364 16.9473C8.10499 17.0067 7.96762 17.0165 7.84175 16.9746C7.71588 16.9327 7.61181 16.8425 7.55244 16.7238C7.49309 16.6052 7.48327 16.4679 7.52513 16.3421C7.52515 16.342 7.52516 16.342 7.52518 16.3419L11.5251 4.3421L11.5252 4.34184C11.5459 4.27952 11.5788 4.22189 11.6218 4.17226C11.6648 4.12262 11.7172 4.08194 11.7759 4.05255C11.8346 4.02316 11.8986 4.00563 11.9641 4.00096C12.0296 3.99629 12.0954 4.00457 12.1577 4.02534ZM15.3532 13.8534L15.3532 13.8534L15.3471 13.8596C15.301 13.9074 15.2458 13.9455 15.1848 13.9717C15.1238 13.9979 15.0582 14.0117 14.9918 14.0123C14.9255 14.0128 14.8596 14.0002 14.7982 13.975C14.7367 13.9499 14.6809 13.9128 14.6339 13.8658C14.587 13.8189 14.5499 13.7631 14.5247 13.7016C14.4996 13.6402 14.4869 13.5743 14.4875 13.5079C14.4881 13.4415 14.5019 13.3759 14.5281 13.3149C14.5543 13.2539 14.5924 13.1988 14.6401 13.1526L14.6402 13.1527L14.6463 13.1465L16.9393 10.8535L17.2929 10.5L16.9393 10.1464L14.6464 7.85348C14.6464 7.85347 14.6464 7.85345 14.6463 7.85343C14.5526 7.75967 14.5 7.63254 14.5 7.49998C14.5 7.36745 14.5526 7.24034 14.6463 7.14659C14.7401 7.05286 14.8672 7.0002 14.9998 7.0002C15.1323 7.0002 15.2595 7.05284 15.3532 7.14654C15.3533 7.14656 15.3533 7.14657 15.3533 7.14659L18.3532 10.1465C18.4469 10.2402 18.4996 10.3674 18.4996 10.5C18.4996 10.6326 18.4469 10.7597 18.3532 10.8535L15.3532 13.8534Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Examples</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/sdk">

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
    "what-is-web3auth",
    "how-web3auth-works",
    {
      type: "category",
      label: "Product Stack",
      items: [
        {
          type: "doc",
          id: "product/product",
        },
        "product/pnp",
        "product/sfa",
        "product/mpc-core-kit",
        "product/wallet-services",
        "product/wallet-ecosystems",
      ],
    },
    "product-fit",
    {
      type: "html",
      value: "<span class='sidebarHeading'>Features</span>",
      defaultStyle: true,
    },
    "features/account-abstraction",
    "features/account-dashboard",
    "features/blockchain-agnostic",
    "features/custom-authentication",
    "features/wallet-ui",
    "features/topup",
    "features/gaming",
    "features/interoperability",
    "features/mfa",
    "features/mpc",
    "features/mobile",
    "features/nft-services",
    "features/passkeys",
    "features/server-side-verification",
    "features/session-management",
    "features/smart-accounts",
    "features/user-management",
    "features/wallet-pregeneration",
    "features/mipd",
    "features/wallet-aggregation",
    "features/whitelabel",
    {
      type: "html",
      value: "<span class='sidebarHeading'>Additional Reading</span>",
      defaultStyle: true,
    },
    {
      type: "link",
      label: "Troubleshooting",
      href: "/troubleshooting",
    },
    {
      type: "category",
      label: "Contribute",
      items: ["contribute/contribute", "contribute/bug-bounty"],
    },
    {
      Legal: [
        "legal/cookie-policy",
        "legal/privacy-policy",
        "legal/terms-and-conditions",
        {
          type: "link",
          label: "Trust Center",
          href: "https://trust.web3auth.io",
        },
      ],
    },
  ],
  resources: [
    {
      type: "html",
      value: "<span class='sidebarHeading'>Quick Links</span>",
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="https://web3auth.io/community/c/announcements/5" target="_blank">
      <svg width="20" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2382_32884)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2197 2.52454C15.4635 2.63322 15.6251 2.91009 15.6251 3.21939V6.5105C16.221 6.65496 16.7733 7.00412 17.2098 7.52245C17.7958 8.21838 18.1251 9.16227 18.1251 10.1465C18.1251 11.1307 17.7958 12.0746 17.2098 12.7705C16.7733 13.2888 16.221 13.638 15.6251 13.7825V17.0736C15.6251 17.3829 15.4635 17.6597 15.2197 17.7684C14.9758 17.8771 14.7008 17.7948 14.5294 17.5619C13.7097 16.4479 12.0088 15.4883 9.79172 15.0698V19.2902C9.79137 19.8752 9.61719 20.4417 9.29988 20.8891C8.98256 21.3365 8.54246 21.6365 8.05712 21.7364C7.57178 21.8362 7.07233 21.7295 6.64677 21.4349C6.22121 21.1404 5.89683 20.6769 5.7308 20.1262L5.72913 20.1207L4.02651 14.3291C3.304 13.8888 2.71049 13.1942 2.33019 12.3351C1.90553 11.3758 1.77301 10.2717 1.95506 9.20963C2.13712 8.14761 2.62257 7.1929 3.32926 6.50706C4.03595 5.82122 4.92048 5.44637 5.83315 5.44596H7.36005C7.95219 5.44596 8.52857 5.40788 9.0825 5.33587C9.09232 5.3343 9.10222 5.33299 9.11219 5.33197C11.6599 4.9947 13.6279 3.9563 14.5294 2.73106C14.7008 2.49814 14.9758 2.41585 15.2197 2.52454ZM15.6251 12.2457C15.8862 12.136 16.1263 11.958 16.3259 11.7209C16.6775 11.3033 16.8751 10.737 16.8751 10.1465C16.8751 9.55596 16.6775 8.98962 16.3259 8.57206C16.1263 8.335 15.8862 8.15692 15.6251 8.04725V12.2457Z" fill="currentColor"/>
        </g>
        <defs>
        <clipPath id="clip0_2382_32884">
        <rect width="20" height="23.75" fill="none" transform="translate(0.000244141 0.25)"/>
        </clipPath>
        </defs>
      </svg>
      <span class='sidebarLinkText'>Announcements</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.7072 3.20877C10.5197 3.0213 10.2654 2.91599 10.0002 2.91599C9.73506 2.91599 9.48075 3.0213 9.29322 3.20877L2.29322 10.2088C2.11107 10.3974 2.01027 10.65 2.01255 10.9122C2.01483 11.1744 2.12 11.4252 2.30541 11.6106C2.49081 11.796 2.74163 11.9012 3.00382 11.9034C3.26602 11.9057 3.51862 11.8049 3.70722 11.6228L4.00022 11.3298V17.9158C4.00022 18.181 4.10558 18.4353 4.29312 18.6229C4.48065 18.8104 4.73501 18.9158 5.00022 18.9158H7.00022C7.26544 18.9158 7.51979 18.8104 7.70733 18.6229C7.89487 18.4353 8.00022 18.181 8.00022 17.9158V15.9158C8.00022 15.6506 8.10558 15.3962 8.29312 15.2087C8.48065 15.0211 8.73501 14.9158 9.00022 14.9158H11.0002C11.2654 14.9158 11.5198 15.0211 11.7073 15.2087C11.8949 15.3962 12.0002 15.6506 12.0002 15.9158V17.9158C12.0002 18.181 12.1056 18.4353 12.2931 18.6229C12.4807 18.8104 12.735 18.9158 13.0002 18.9158H15.0002C15.2654 18.9158 15.5198 18.8104 15.7073 18.6229C15.8949 18.4353 16.0002 18.181 16.0002 17.9158V11.3298L16.2932 11.6228C16.4818 11.8049 16.7344 11.9057 16.9966 11.9034C17.2588 11.9012 17.5096 11.796 17.695 11.6106C17.8805 11.4252 17.9856 11.1744 17.9879 10.9122C17.9902 10.65 17.8894 10.3974 17.7072 10.2088L10.7072 3.20877Z" fill="currentColor"/>
      </svg>
      <span class='sidebarLinkText'>Home</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/quick-start">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59022 12.2135L10.59 2.21384C10.651 2.12674 10.7382 2.06135 10.8389 2.02718C10.9396 1.99301 11.0486 1.99184 11.15 2.02384L11.1801 2.03333C11.2692 2.06763 11.3468 2.12683 11.4036 2.20416C11.4665 2.28995 11.5005 2.39358 11.5004 2.49999V2.50002V7.50002V8.00002H12.0004H16.0004H16.0007C16.0921 7.99998 16.1818 8.02502 16.2601 8.07243C16.3383 8.11984 16.402 8.18779 16.4443 8.26889C16.4865 8.34999 16.5058 8.44113 16.4998 8.5324C16.4939 8.62367 16.4631 8.71156 16.4107 8.78652L9.41083 18.7863L9.41044 18.7868C9.34953 18.8741 9.26236 18.9397 9.16161 18.974C9.06087 19.0083 8.95181 19.0095 8.85029 18.9776C8.74878 18.9456 8.66011 18.8821 8.59719 18.7963C8.53427 18.7104 8.50038 18.6068 8.50044 18.5003V18.5V13.5V13H8.00044H4.00045H4.00022C3.90876 13.0001 3.81904 12.975 3.74083 12.9276C3.66262 12.8802 3.59891 12.8122 3.55663 12.7311C3.51435 12.65 3.49513 12.5589 3.50105 12.4676C3.50697 12.3764 3.53782 12.2885 3.59022 12.2135Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Quick Start</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/examples">
      <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.70668 10.5L3.06023 10.1464L5.35318 7.85348C5.3532 7.85347 5.35322 7.85345 5.35323 7.85343C5.44694 7.75967 5.49957 7.63254 5.49957 7.49998C5.49957 7.36745 5.44696 7.24034 5.35329 7.14659C5.35325 7.14656 5.35322 7.14652 5.35318 7.14648M2.70668 10.5L4.29279 6.79298C4.48031 6.60551 4.73462 6.5002 4.99979 6.5002C5.26495 6.5002 5.51926 6.60551 5.70679 6.79298L5.35318 7.14648M2.70668 10.5L3.06023 10.8535L5.35323 13.1465L5.35318 13.1466L5.35943 13.1526C5.40719 13.1988 5.44528 13.2539 5.47148 13.3149C5.49769 13.3759 5.51148 13.4415 5.51206 13.5079C5.51263 13.5743 5.49998 13.6402 5.47484 13.7016C5.4497 13.7631 5.41257 13.8189 5.36563 13.8658C5.31868 13.9128 5.26286 13.9499 5.20141 13.975C5.13996 14.0002 5.07412 14.0128 5.00773 14.0123C4.94134 14.0117 4.87573 13.9979 4.81473 13.9717C4.75373 13.9455 4.69855 13.9074 4.65243 13.8596L4.65249 13.8596L4.64634 13.8534L1.64639 10.8535C1.64638 10.8535 1.64636 10.8534 1.64634 10.8534C1.55264 10.7597 1.5 10.6325 1.5 10.5C1.5 10.3674 1.55264 10.2403 1.64634 10.1465C1.64636 10.1465 1.64638 10.1465 1.64639 10.1465L4.64629 7.14659M2.70668 10.5L4.64629 7.14659M5.35318 7.14648C5.25943 7.05281 5.13232 7.0002 4.99979 7.0002C4.8672 7.0002 4.74005 7.05286 4.64629 7.14659M5.35318 7.14648L4.64629 7.14659M12.1577 4.02534L12.1579 4.02541C12.2203 4.04615 12.2779 4.07896 12.3275 4.12197C12.3772 4.16498 12.4178 4.21735 12.4472 4.27609C12.4766 4.33483 12.4941 4.39878 12.4988 4.46429C12.5035 4.52981 12.4952 4.5956 12.4744 4.65791L8.47444 16.6579L8.4744 16.658C8.43248 16.7839 8.34228 16.888 8.22364 16.9473C8.10499 17.0067 7.96762 17.0165 7.84175 16.9746C7.71588 16.9327 7.61181 16.8425 7.55244 16.7238C7.49309 16.6052 7.48327 16.4679 7.52513 16.3421C7.52515 16.342 7.52516 16.342 7.52518 16.3419L11.5251 4.3421L11.5252 4.34184C11.5459 4.27952 11.5788 4.22189 11.6218 4.17226C11.6648 4.12262 11.7172 4.08194 11.7759 4.05255C11.8346 4.02316 11.8986 4.00563 11.9641 4.00096C12.0296 3.99629 12.0954 4.00457 12.1577 4.02534ZM15.3532 13.8534L15.3532 13.8534L15.3471 13.8596C15.301 13.9074 15.2458 13.9455 15.1848 13.9717C15.1238 13.9979 15.0582 14.0117 14.9918 14.0123C14.9255 14.0128 14.8596 14.0002 14.7982 13.975C14.7367 13.9499 14.6809 13.9128 14.6339 13.8658C14.587 13.8189 14.5499 13.7631 14.5247 13.7016C14.4996 13.6402 14.4869 13.5743 14.4875 13.5079C14.4881 13.4415 14.5019 13.3759 14.5281 13.3149C14.5543 13.2539 14.5924 13.1988 14.6401 13.1526L14.6402 13.1527L14.6463 13.1465L16.9393 10.8535L17.2929 10.5L16.9393 10.1464L14.6464 7.85348C14.6464 7.85347 14.6464 7.85345 14.6463 7.85343C14.5526 7.75967 14.5 7.63254 14.5 7.49998C14.5 7.36745 14.5526 7.24034 14.6463 7.14659C14.7401 7.05286 14.8672 7.0002 14.9998 7.0002C15.1323 7.0002 15.2595 7.05284 15.3532 7.14654C15.3533 7.14656 15.3533 7.14657 15.3533 7.14659L18.3532 10.1465C18.4469 10.2402 18.4996 10.3674 18.4996 10.5C18.4996 10.6326 18.4469 10.7597 18.3532 10.8535L15.3532 13.8534Z" fill="currentColor" stroke="currentColor"/>
</svg>

      <span class='sidebarLinkText'>Examples</span>
      </a>`,
      defaultStyle: true,
    },
    {
      type: "html",
      value: `<a class='sidebarLink' href="/docs/sdk">

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
      value: "<span class='sidebarHeading'>Resources</span>",
      defaultStyle: true,
    },
    "resources",
    {
      type: "category",
      label: "Auth Provider Setup",
      items: [
        "auth-provider-setup/auth-provider-setup",
        "auth-provider-setup/verifiers",
        "auth-provider-setup/aggregate-verifier",
        {
          type: "category",
          label: "Social Connections",
          items: [
            "auth-provider-setup/social-providers/social-providers",
            "auth-provider-setup/social-providers/email-passwordless",
            "auth-provider-setup/social-providers/sms-passwordless",
            "auth-provider-setup/social-providers/twitter",
            "auth-provider-setup/social-providers/google",
            "auth-provider-setup/social-providers/telegram",
            "auth-provider-setup/social-providers/facebook",
            "auth-provider-setup/social-providers/twitch",
            "auth-provider-setup/social-providers/discord",
            "auth-provider-setup/social-providers/apple",
            "auth-provider-setup/social-providers/github",
            "auth-provider-setup/social-providers/worldcoin",
            "auth-provider-setup/social-providers/microsoft",
            "auth-provider-setup/social-providers/kakao",
            "auth-provider-setup/social-providers/linkedin",
            "auth-provider-setup/social-providers/line",
            "auth-provider-setup/social-providers/baidu",
            "auth-provider-setup/social-providers/bitbucket",
            "auth-provider-setup/social-providers/renren",
            "auth-provider-setup/social-providers/slack",
            "auth-provider-setup/social-providers/spotify",
            "auth-provider-setup/social-providers/vkontakte",
            "auth-provider-setup/social-providers/yandex",
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          type: "category",
          label: "Authentication Service Providers",
          items: [
            "auth-provider-setup/authentication-service-providers/auth0-service-provider",
            "auth-provider-setup/authentication-service-providers/aws-cognito-service-provider",
            "auth-provider-setup/authentication-service-providers/firebase-service-provider",
          ],
          collapsible: true,
          collapsed: false,
        },
        {
          type: "category",
          label: "Bring your own custom JWT Provider",
          items: [
            "auth-provider-setup/byo-jwt-provider/byo-jwt-provider",
            "auth-provider-setup/byo-jwt-provider/jsonwebtoken",
            "auth-provider-setup/byo-jwt-provider/jose",
            "auth-provider-setup/byo-jwt-provider/passport-jwt",
          ],
          collapsible: true,
          collapsed: false,
        },
      ],
    },

    {
      type: "category",
      label: "Connect Blockchain",
      items: [
        "connect-blockchain/connect-blockchain",
        {
          type: "category",
          label: "EVM Based Chains",
          items: [
            "connect-blockchain/evm/evm",
            {
              type: "category",
              label: "Ethereum",
              items: [
                "connect-blockchain/evm/ethereum/ethereum",
                "connect-blockchain/evm/ethereum/web",
                "connect-blockchain/evm/ethereum/android",
                "connect-blockchain/evm/ethereum/ios",
                "connect-blockchain/evm/ethereum/react-native",
                "connect-blockchain/evm/ethereum/flutter",
                "connect-blockchain/evm/ethereum/unity",
              ],
            },
            {
              type: "category",
              label: "5ire",
              items: [
                "connect-blockchain/evm/5ire/5ire",
                "connect-blockchain/evm/5ire/web",
                "connect-blockchain/evm/5ire/android",
                "connect-blockchain/evm/5ire/ios",
                "connect-blockchain/evm/5ire/react-native",
                "connect-blockchain/evm/5ire/flutter",
                "connect-blockchain/evm/5ire/unity",
              ],
            },
            {
              type: "category",
              label: "Aleph Zero",
              items: [
                "connect-blockchain/evm/aleph-zero/aleph-zero",
                "connect-blockchain/evm/aleph-zero/web",
                "connect-blockchain/evm/aleph-zero/android",
                "connect-blockchain/evm/aleph-zero/ios",
                "connect-blockchain/evm/aleph-zero/react-native",
                "connect-blockchain/evm/aleph-zero/flutter",
                "connect-blockchain/evm/aleph-zero/unity",
              ],
            },
            {
              type: "category",
              label: "Ancient8",
              items: [
                "connect-blockchain/evm/ancient8/ancient8",
                "connect-blockchain/evm/ancient8/web",
                "connect-blockchain/evm/ancient8/android",
                "connect-blockchain/evm/ancient8/ios",
                "connect-blockchain/evm/ancient8/react-native",
                "connect-blockchain/evm/ancient8/flutter",
                "connect-blockchain/evm/ancient8/unity",
              ],
            },
            {
              type: "category",
              label: "Arbitrum",
              items: [
                "connect-blockchain/evm/arbitrum/arbitrum",
                "connect-blockchain/evm/arbitrum/web",
                "connect-blockchain/evm/arbitrum/android",
                "connect-blockchain/evm/arbitrum/ios",
                "connect-blockchain/evm/arbitrum/react-native",
                "connect-blockchain/evm/arbitrum/flutter",
                "connect-blockchain/evm/arbitrum/unity",
              ],
            },
            {
              type: "category",
              label: "Astar zkEVM",
              items: [
                "connect-blockchain/evm/astar-zkevm/astar-zkevm",
                "connect-blockchain/evm/astar-zkevm/web",
                "connect-blockchain/evm/astar-zkevm/android",
                "connect-blockchain/evm/astar-zkevm/ios",
                "connect-blockchain/evm/astar-zkevm/react-native",
                "connect-blockchain/evm/astar-zkevm/flutter",
                "connect-blockchain/evm/astar-zkevm/unity",
              ],
            },
            {
              type: "category",
              label: "Astar zKyoto",
              items: [
                "connect-blockchain/evm/astar-zkyoto/astar-zkyoto",
                "connect-blockchain/evm/astar-zkyoto/web",
                "connect-blockchain/evm/astar-zkyoto/android",
                "connect-blockchain/evm/astar-zkyoto/ios",
                "connect-blockchain/evm/astar-zkyoto/react-native",
                "connect-blockchain/evm/astar-zkyoto/flutter",
                "connect-blockchain/evm/astar-zkyoto/unity",
              ],
            },
            {
              type: "category",
              label: "Avalanche",
              items: [
                "connect-blockchain/evm/avalanche/avalanche",
                "connect-blockchain/evm/avalanche/web",
                "connect-blockchain/evm/avalanche/android",
                "connect-blockchain/evm/avalanche/ios",
                "connect-blockchain/evm/avalanche/react-native",
                "connect-blockchain/evm/avalanche/flutter",
                "connect-blockchain/evm/avalanche/unity",
              ],
            },
            {
              type: "category",
              label: "Base Chain (Coinbase)",
              items: [
                "connect-blockchain/evm/base/base",
                "connect-blockchain/evm/base/web",
                "connect-blockchain/evm/base/android",
                "connect-blockchain/evm/base/ios",
                "connect-blockchain/evm/base/react-native",
                "connect-blockchain/evm/base/flutter",
                "connect-blockchain/evm/base/unity",
              ],
            },
            {
              type: "category",
              label: "BitKub",
              items: [
                "connect-blockchain/evm/bitkub/bitkub",
                "connect-blockchain/evm/bitkub/web",
                "connect-blockchain/evm/bitkub/android",
                "connect-blockchain/evm/bitkub/ios",
                "connect-blockchain/evm/bitkub/react-native",
                "connect-blockchain/evm/bitkub/flutter",
                "connect-blockchain/evm/bitkub/unity",
              ],
            },
            {
              type: "category",
              label: "BNB Chain",
              items: [
                "connect-blockchain/evm/bnb/bnb",
                "connect-blockchain/evm/bnb/web",
                "connect-blockchain/evm/bnb/android",
                "connect-blockchain/evm/bnb/ios",
                "connect-blockchain/evm/bnb/react-native",
                "connect-blockchain/evm/bnb/flutter",
                "connect-blockchain/evm/bnb/unity",
              ],
            },
            {
              type: "category",
              label: "BNB Optimistic Rollup",
              items: [
                "connect-blockchain/evm/opbnb/opbnb",
                "connect-blockchain/evm/opbnb/web",
                "connect-blockchain/evm/opbnb/android",
                "connect-blockchain/evm/opbnb/ios",
                "connect-blockchain/evm/opbnb/react-native",
                "connect-blockchain/evm/opbnb/flutter",
                "connect-blockchain/evm/opbnb/unity",
              ],
            },
            {
              type: "category",
              label: "Celo",
              items: [
                "connect-blockchain/evm/celo/celo",
                "connect-blockchain/evm/celo/web",
                "connect-blockchain/evm/celo/android",
                "connect-blockchain/evm/celo/ios",
                "connect-blockchain/evm/celo/react-native",
                "connect-blockchain/evm/celo/flutter",
                "connect-blockchain/evm/celo/unity",
              ],
            },
            {
              type: "category",
              label: "Chiliz",
              items: [
                "connect-blockchain/evm/chiliz/chiliz",
                "connect-blockchain/evm/chiliz/web",
                "connect-blockchain/evm/chiliz/android",
                "connect-blockchain/evm/chiliz/ios",
                "connect-blockchain/evm/chiliz/react-native",
                "connect-blockchain/evm/chiliz/flutter",
                "connect-blockchain/evm/chiliz/unity",
              ],
            },
            {
              type: "category",
              label: "Cronos",
              items: [
                "connect-blockchain/evm/cronos/cronos",
                "connect-blockchain/evm/cronos/web",
                "connect-blockchain/evm/cronos/android",
                "connect-blockchain/evm/cronos/ios",
                "connect-blockchain/evm/cronos/react-native",
                "connect-blockchain/evm/cronos/flutter",
                "connect-blockchain/evm/cronos/unity",
              ],
            },
            {
              type: "category",
              label: "Flare",
              items: [
                "connect-blockchain/evm/flare/flare",
                "connect-blockchain/evm/flare/web",
                "connect-blockchain/evm/flare/android",
                "connect-blockchain/evm/flare/ios",
                "connect-blockchain/evm/flare/react-native",
                "connect-blockchain/evm/flare/flutter",
                "connect-blockchain/evm/flare/unity",
              ],
            },
            {
              type: "category",
              label: "Flow",
              items: [
                "connect-blockchain/evm/flow/flow",
                "connect-blockchain/evm/flow/web",
                "connect-blockchain/evm/flow/android",
                "connect-blockchain/evm/flow/ios",
                "connect-blockchain/evm/flow/react-native",
                "connect-blockchain/evm/flow/flutter",
                "connect-blockchain/evm/flow/unity",
              ],
            },
            {
              type: "category",
              label: "Fhenix",
              items: [
                "connect-blockchain/evm/fhenix/fhenix",
                "connect-blockchain/evm/fhenix/web",
                "connect-blockchain/evm/fhenix/android",
                "connect-blockchain/evm/fhenix/ios",
                "connect-blockchain/evm/fhenix/react-native",
                "connect-blockchain/evm/fhenix/flutter",
                "connect-blockchain/evm/fhenix/unity",
              ],
            },
            {
              type: "category",
              label: "Harmony",
              items: [
                "connect-blockchain/evm/harmony/harmony",
                "connect-blockchain/evm/harmony/web",
                "connect-blockchain/evm/harmony/android",
                "connect-blockchain/evm/harmony/ios",
                "connect-blockchain/evm/harmony/react-native",
                "connect-blockchain/evm/harmony/flutter",
                "connect-blockchain/evm/harmony/unity",
              ],
            },
            {
              type: "category",
              label: "Hedera",
              items: [
                "connect-blockchain/evm/hedera/hedera",
                "connect-blockchain/evm/hedera/web",
                "connect-blockchain/evm/hedera/android",
                "connect-blockchain/evm/hedera/ios",
                "connect-blockchain/evm/hedera/react-native",
                "connect-blockchain/evm/hedera/flutter",
                "connect-blockchain/evm/hedera/unity",
              ],
            },
            {
              type: "category",
              label: "Kinto",
              items: [
                "connect-blockchain/evm/kinto/kinto",
                "connect-blockchain/evm/kinto/web",
                "connect-blockchain/evm/kinto/android",
                "connect-blockchain/evm/kinto/ios",
                "connect-blockchain/evm/kinto/react-native",
                "connect-blockchain/evm/kinto/flutter",
                "connect-blockchain/evm/kinto/unity",
              ],
            },
            {
              type: "category",
              label: "Klaytn",
              items: [
                "connect-blockchain/evm/klaytn/klaytn",
                "connect-blockchain/evm/klaytn/web",
                "connect-blockchain/evm/klaytn/android",
                "connect-blockchain/evm/klaytn/ios",
                "connect-blockchain/evm/klaytn/react-native",
                "connect-blockchain/evm/klaytn/flutter",
                "connect-blockchain/evm/klaytn/unity",
              ],
            },
            {
              type: "category",
              label: "Linea zkEVM",
              items: [
                "connect-blockchain/evm/linea/linea",
                "connect-blockchain/evm/linea/web",
                "connect-blockchain/evm/linea/android",
                "connect-blockchain/evm/linea/ios",
                "connect-blockchain/evm/linea/react-native",
                "connect-blockchain/evm/linea/flutter",
                "connect-blockchain/evm/linea/unity",
              ],
            },
            {
              type: "category",
              label: "Manta",
              items: [
                "connect-blockchain/evm/manta/manta",
                "connect-blockchain/evm/manta/web",
                "connect-blockchain/evm/manta/android",
                "connect-blockchain/evm/manta/ios",
                "connect-blockchain/evm/manta/react-native",
                "connect-blockchain/evm/manta/flutter",
                "connect-blockchain/evm/manta/unity",
              ],
            },
            {
              type: "category",
              label: "Metis",
              items: [
                "connect-blockchain/evm/metis/metis",
                "connect-blockchain/evm/metis/web",
                "connect-blockchain/evm/metis/android",
                "connect-blockchain/evm/metis/ios",
                "connect-blockchain/evm/metis/react-native",
                "connect-blockchain/evm/metis/flutter",
                "connect-blockchain/evm/metis/unity",
              ],
            },
            {
              type: "category",
              label: "Mint",
              items: [
                "connect-blockchain/evm/mint/mint",
                "connect-blockchain/evm/mint/web",
                "connect-blockchain/evm/mint/android",
                "connect-blockchain/evm/mint/ios",
                "connect-blockchain/evm/mint/react-native",
                "connect-blockchain/evm/mint/flutter",
                "connect-blockchain/evm/mint/unity",
              ],
            },
            {
              type: "category",
              label: "Moonbeam",
              items: [
                "connect-blockchain/evm/moonbeam/moonbeam",
                "connect-blockchain/evm/moonbeam/web",
                "connect-blockchain/evm/moonbeam/android",
                "connect-blockchain/evm/moonbeam/ios",
                "connect-blockchain/evm/moonbeam/react-native",
                "connect-blockchain/evm/moonbeam/flutter",
                "connect-blockchain/evm/moonbeam/unity",
              ],
            },
            {
              type: "category",
              label: "Moonriver",
              items: [
                "connect-blockchain/evm/moonriver/moonriver",
                "connect-blockchain/evm/moonriver/web",
                "connect-blockchain/evm/moonriver/android",
                "connect-blockchain/evm/moonriver/ios",
                "connect-blockchain/evm/moonriver/react-native",
                "connect-blockchain/evm/moonriver/flutter",
                "connect-blockchain/evm/moonriver/unity",
              ],
            },
            {
              type: "category",
              label: "Morph",
              items: [
                "connect-blockchain/evm/morph/morph",
                "connect-blockchain/evm/morph/web",
                "connect-blockchain/evm/morph/android",
                "connect-blockchain/evm/morph/ios",
                "connect-blockchain/evm/morph/react-native",
                "connect-blockchain/evm/morph/flutter",
                "connect-blockchain/evm/morph/unity",
              ],
            },
            {
              type: "category",
              label: "Neon",
              items: [
                "connect-blockchain/evm/neon/neon",
                "connect-blockchain/evm/neon/web",
                "connect-blockchain/evm/neon/android",
                "connect-blockchain/evm/neon/ios",
                "connect-blockchain/evm/neon/react-native",
                "connect-blockchain/evm/neon/flutter",
                "connect-blockchain/evm/neon/unity",
              ],
            },
            {
              type: "category",
              label: "Nibiru",
              items: [
                "connect-blockchain/evm/nibiru/nibiru",
                "connect-blockchain/evm/nibiru/web",
                "connect-blockchain/evm/nibiru/android",
                "connect-blockchain/evm/nibiru/ios",
                "connect-blockchain/evm/nibiru/react-native",
                "connect-blockchain/evm/nibiru/flutter",
                "connect-blockchain/evm/nibiru/unity",
              ],
            },
            {
              type: "category",
              label: "Optimism",
              items: [
                "connect-blockchain/evm/optimism/optimism",
                "connect-blockchain/evm/optimism/web",
                "connect-blockchain/evm/optimism/android",
                "connect-blockchain/evm/optimism/ios",
                "connect-blockchain/evm/optimism/react-native",
                "connect-blockchain/evm/optimism/flutter",
                "connect-blockchain/evm/optimism/unity",
              ],
            },
            {
              type: "category",
              label: "Polygon",
              items: [
                "connect-blockchain/evm/polygon/polygon",
                "connect-blockchain/evm/polygon/web",
                "connect-blockchain/evm/polygon/android",
                "connect-blockchain/evm/polygon/ios",
                "connect-blockchain/evm/polygon/react-native",
                "connect-blockchain/evm/polygon/flutter",
                "connect-blockchain/evm/polygon/unity",
              ],
            },
            {
              type: "category",
              label: "Rootstock",
              items: [
                "connect-blockchain/evm/rootstock/rootstock",
                "connect-blockchain/evm/rootstock/web",
                "connect-blockchain/evm/rootstock/android",
                "connect-blockchain/evm/rootstock/ios",
                "connect-blockchain/evm/rootstock/react-native",
                "connect-blockchain/evm/rootstock/flutter",
                "connect-blockchain/evm/rootstock/unity",
              ],
            },
            {
              type: "category",
              label: "Saakuru",
              items: [
                "connect-blockchain/evm/saakuru/saakuru",
                "connect-blockchain/evm/saakuru/web",
                "connect-blockchain/evm/saakuru/android",
                "connect-blockchain/evm/saakuru/ios",
                "connect-blockchain/evm/saakuru/react-native",
                "connect-blockchain/evm/saakuru/flutter",
                "connect-blockchain/evm/saakuru/unity",
              ],
            },
            {
              type: "category",
              label: "Shardeum",
              items: [
                "connect-blockchain/evm/shardeum/shardeum",
                "connect-blockchain/evm/shardeum/web",
                "connect-blockchain/evm/shardeum/android",
                "connect-blockchain/evm/shardeum/ios",
                "connect-blockchain/evm/shardeum/react-native",
                "connect-blockchain/evm/shardeum/flutter",
                "connect-blockchain/evm/shardeum/unity",
              ],
            },
            {
              type: "category",
              label: "SKALE",
              items: [
                "connect-blockchain/evm/skale/skale",
                "connect-blockchain/evm/skale/web",
                "connect-blockchain/evm/skale/android",
                "connect-blockchain/evm/skale/ios",
                "connect-blockchain/evm/skale/react-native",
                "connect-blockchain/evm/skale/flutter",
                "connect-blockchain/evm/skale/unity",
              ],
            },
            {
              type: "category",
              label: "Soneium",
              items: [
                "connect-blockchain/evm/soneium/soneium",
                "connect-blockchain/evm/soneium/web",
                "connect-blockchain/evm/soneium/android",
                "connect-blockchain/evm/soneium/ios",
                "connect-blockchain/evm/soneium/react-native",
                "connect-blockchain/evm/soneium/flutter",
                "connect-blockchain/evm/soneium/unity",
              ],
            },
            {
              type: "category",
              label: "Songbird",
              items: [
                "connect-blockchain/evm/songbird/songbird",
                "connect-blockchain/evm/songbird/web",
                "connect-blockchain/evm/songbird/android",
                "connect-blockchain/evm/songbird/ios",
                "connect-blockchain/evm/songbird/react-native",
                "connect-blockchain/evm/songbird/flutter",
                "connect-blockchain/evm/songbird/unity",
              ],
            },
            {
              type: "category",
              label: "Tron",
              items: ["connect-blockchain/evm/tron/tron", "connect-blockchain/evm/tron/web"],
            },
            {
              type: "category",
              label: "XDC Network",
              items: [
                "connect-blockchain/evm/xdc/xdc",
                "connect-blockchain/evm/xdc/web",
                "connect-blockchain/evm/xdc/android",
                "connect-blockchain/evm/xdc/ios",
                "connect-blockchain/evm/xdc/react-native",
                "connect-blockchain/evm/xdc/flutter",
                "connect-blockchain/evm/xdc/unity",
              ],
            },
            {
              type: "category",
              label: "Zetachain",
              items: [
                "connect-blockchain/evm/zetachain/zetachain",
                "connect-blockchain/evm/zetachain/web",
                "connect-blockchain/evm/zetachain/android",
                "connect-blockchain/evm/zetachain/ios",
                "connect-blockchain/evm/zetachain/react-native",
                "connect-blockchain/evm/zetachain/flutter",
                "connect-blockchain/evm/zetachain/unity",
              ],
            },
            {
              type: "category",
              label: "Zilliqa",
              items: [
                "connect-blockchain/evm/zilliqa/zilliqa",
                "connect-blockchain/evm/zilliqa/web",
                "connect-blockchain/evm/zilliqa/android",
                "connect-blockchain/evm/zilliqa/ios",
                "connect-blockchain/evm/zilliqa/react-native",
                "connect-blockchain/evm/zilliqa/flutter",
                "connect-blockchain/evm/zilliqa/unity",
              ],
            },
            {
              type: "category",
              label: "Zircuit",
              items: [
                "connect-blockchain/evm/zircuit/zircuit",
                "connect-blockchain/evm/zircuit/web",
                "connect-blockchain/evm/zircuit/android",
                "connect-blockchain/evm/zircuit/ios",
                "connect-blockchain/evm/zircuit/react-native",
                "connect-blockchain/evm/zircuit/flutter",
                "connect-blockchain/evm/zircuit/unity",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Solana",
          items: [
            "connect-blockchain/solana/solana",
            "connect-blockchain/solana/web",
            "connect-blockchain/solana/web-mpc",
            "connect-blockchain/solana/flutter",
            "connect-blockchain/solana/android",
            "connect-blockchain/solana/ios",
          ],
        },
        {
          type: "category",
          label: "Near",
          items: [
            "connect-blockchain/near/near",
            "connect-blockchain/near/web",
            "connect-blockchain/near/web-mpc",
          ],
        },
        "connect-blockchain/xrpl",
        {
          type: "category",
          label: "Other Chains",
          items: [
            "connect-blockchain/other/other",
            "connect-blockchain/other/algorand",
            "connect-blockchain/other/aptos",
            "connect-blockchain/other/bitcoin",
            "connect-blockchain/other/cosmos",
            "connect-blockchain/other/immutablex",
            "connect-blockchain/other/polkadot",
            "connect-blockchain/other/polymesh",
            "connect-blockchain/other/starkex",
            "connect-blockchain/other/starknet",
            "connect-blockchain/other/sui",
            "connect-blockchain/other/tezos",
            "connect-blockchain/other/ton",
          ],
          collapsible: true,
          collapsed: false,
        },
      ],
    },
    {
      type: "category",
      label: "Dashboard Setup",
      items: [
        "dashboard-setup/dashboard-setup",
        "dashboard-setup/projects-and-analytics",
        "dashboard-setup/whitelisting",
        "dashboard-setup/enable-interoperability",
        "dashboard-setup/setup-custom-authentication",
        "dashboard-setup/billing-and-usage",
        "dashboard-setup/roles-and-permissions",
      ],
    },
    "examples",
    {
      type: "category",
      label: "Web3Auth Infrastructure",
      items: [
        "infrastructure/infrastructure",
        "infrastructure/mpc-architecture",
        "infrastructure/sss-architecture",
        "infrastructure/nodes-and-dkg",
        "infrastructure/glossary",
        {
          type: "link",
          label: "Compliance, Audits and Trust",
          href: "https://trust.web3auth.io",
        },
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "troubleshooting/troubleshooting",
        "troubleshooting/different-private-key",
        "troubleshooting/sdk-errors-warnings",
        "troubleshooting/error-429",
        "troubleshooting/vite-issues",
        "troubleshooting/svelte-issues",
        "troubleshooting/webpack-issues",
        "troubleshooting/nuxt-issues",
        "troubleshooting/metro-issues",
        "troubleshooting/metro-issues-mpc",
        "troubleshooting/jwt-errors",
        "troubleshooting/supported-browsers",
        "troubleshooting/react-big-int-error",
        "troubleshooting/popup-blocked-issue",
      ],
    },
  ],
  sdk_pnp_web: [
    {
      type: "html",
      value: pnpTopNavButton(web),
      defaultStyle: true,
    },
    "sdk/pnp/web/web",
    {
      type: "category",
      label: "Modal SDK",
      items: [
        "sdk/pnp/web/modal/modal",
        "sdk/pnp/web/modal/install",
        "sdk/pnp/web/modal/initialize",
        "sdk/pnp/web/modal/usage",
        "sdk/pnp/web/modal/examples",
        "sdk/pnp/web/modal/modal-hooks",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/pnp/web/modal/account-abstraction",
            "sdk/pnp/web/modal/whitelabel",
            "sdk/pnp/web/modal/custom-authentication",
            "sdk/pnp/web/modal/mfa",
            "sdk/pnp/web/modal/initiate-topup",
            "sdk/pnp/web/modal/show-wallet-connect",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "No Modal SDK",
      items: [
        "sdk/pnp/web/no-modal/no-modal",
        "sdk/pnp/web/no-modal/install",
        "sdk/pnp/web/no-modal/initialize",
        "sdk/pnp/web/no-modal/usage",
        "sdk/pnp/web/no-modal/examples",
        "sdk/pnp/web/no-modal/no-modal-hooks",
        {
          type: "category",
          collapsible: true,
          collapsed: false,
          label: "Additional Settings",
          items: [
            "sdk/pnp/web/no-modal/account-abstraction",
            "sdk/pnp/web/no-modal/whitelabel",
            "sdk/pnp/web/no-modal/custom-authentication",
            "sdk/pnp/web/no-modal/mfa",
            "sdk/pnp/web/no-modal/initiate-topup",
            "sdk/pnp/web/no-modal/show-wallet-connect",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Adapters",
      items: [
        "sdk/pnp/web/adapters/adapters",
        "sdk/pnp/web/adapters/default-evm-adapter",
        "sdk/pnp/web/adapters/default-solana-adapter",
        "sdk/pnp/web/adapters/auth",
        "sdk/pnp/web/adapters/torus-evm",
        "sdk/pnp/web/adapters/torus-solana",
        "sdk/pnp/web/adapters/wallet-connect-v2",
        "sdk/pnp/web/adapters/coinbase",
      ],
    },
    {
      type: "category",
      label: "Wallet Services Plugin",
      items: [
        "sdk/pnp/web/wallet-services/wallet-services",
        "sdk/pnp/web/wallet-services/usage",
        "sdk/pnp/web/wallet-services/wallet-services-hooks",
      ],
    },
    {
      type: "category",
      label: "Providers",
      items: [
        "sdk/pnp/web/providers/providers",
        "sdk/pnp/web/providers/evm",
        "sdk/pnp/web/providers/aa-provider",
        "sdk/pnp/web/providers/solana",
        "sdk/pnp/web/providers/xrpl",
        "sdk/pnp/web/providers/common",
      ],
    },
    "sdk/pnp/web/wagmi-connector",

    {
      type: "link",
      label: "Playground",
      href: "https://w3a.link/pnp-playground",
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-web/7",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-web/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        {
          type: "category",
          label: "Plug and Play Modal SDK",
          items: [
            "migration-guides/modal-v8-to-v9",
            "migration-guides/modal-v7-to-v8",
            "migration-guides/modal-v6-to-v7",
            "migration-guides/modal-v5-to-v6",
          ],
        },
        {
          type: "category",
          label: "Plug and Play No Modal SDK",
          items: [
            "migration-guides/no-modal-v8-to-v9",
            "migration-guides/no-modal-v7-to-v8",
            "migration-guides/no-modal-v6-to-v7",
            "migration-guides/no-modal-v5-to-v6",
          ],
        },
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_android: [
    {
      type: "html",
      value: pnpTopNavButton(android),
      defaultStyle: true,
    },
    "sdk/pnp/android/android",
    "sdk/pnp/android/install",
    "sdk/pnp/android/initialize",
    "sdk/pnp/android/usage",
    "sdk/pnp/android/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/android/whitelabel",
        "sdk/pnp/android/custom-authentication",
        "sdk/pnp/android/mfa",
        "sdk/pnp/android/dapp-share",
      ],
    },
    {
      type: "link",
      label: "Playground",
      href: "https://w3a.link/pnp-android-playground",
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-android/16",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-android-sdk/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/android-v8-to-v9",
        "migration-guides/android-v7.2-to-v7.3",
        "migration-guides/android-v7.1.2-to-v7.2",
        "migration-guides/android-v7.1.1-to-v7.1.2",
        "migration-guides/android-v6-to-v6.1",
        "migration-guides/android-v5-to-v6",
        "migration-guides/android-v4-to-v5",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_ios: [
    {
      type: "html",
      value: pnpTopNavButton(ios),
      defaultStyle: true,
    },
    "sdk/pnp/ios/ios",
    "sdk/pnp/ios/install",
    "sdk/pnp/ios/initialize",
    "sdk/pnp/ios/usage",
    "sdk/pnp/ios/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/ios/whitelabel",
        "sdk/pnp/ios/custom-authentication",
        "sdk/pnp/ios/mfa",
        "sdk/pnp/ios/dapp-share",
      ],
    },
    {
      type: "link",
      label: "Playground",
      href: "https://w3a.link/pnp-ios-playground",
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-ios/17",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-swift-sdk/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/ios-v9-to-v10",
        "migration-guides/ios-v8.2-to-v8.3",
        "migration-guides/ios-v8.1-to-v8.2",
        "migration-guides/ios-v8-to-v8.1",
        "migration-guides/ios-v7-to-v8",
        "migration-guides/ios-v6-to-v7",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_react_native: [
    {
      type: "html",
      value: pnpTopNavButton(reactnative),
      defaultStyle: true,
    },
    "sdk/pnp/react-native/react-native",
    "sdk/pnp/react-native/install",
    "sdk/pnp/react-native/initialize",
    "sdk/pnp/react-native/usage",
    "sdk/pnp/react-native/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/react-native/account-abstraction",
        "sdk/pnp/react-native/whitelabel",
        "sdk/pnp/react-native/custom-authentication",
        "sdk/pnp/react-native/mfa",
        "sdk/pnp/react-native/dapp-share",
      ],
    },
    {
      type: "category",
      label: "Providers",
      items: [
        "sdk/pnp/react-native/providers/providers",
        "sdk/pnp/react-native/providers/evm",
        "sdk/pnp/react-native/providers/aa-provider",
        "sdk/pnp/react-native/providers/solana",
        "sdk/pnp/react-native/providers/xrpl",
        "sdk/pnp/react-native/providers/common",
      ],
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-rn/19",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-react-native-sdk/releases",
    },
    // {
    //   type: "link",
    //   label: "Playground Android",
    //   href: "https://w3a.link/pnp-rn-android-playground",
    // },
    // {
    //   type: "link",
    //   label: "Playground iOS",
    //   href: "https://w3a.link/pnp-rn-ios-playground",
    // },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/rn-v7-to-v8",
        "migration-guides/rn-v5-to-v6",
        "migration-guides/rn-v4-to-v5",
        "migration-guides/rn-v3-to-v4",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_flutter: [
    {
      type: "html",
      value: pnpTopNavButton(flutter),
      defaultStyle: true,
    },
    "sdk/pnp/flutter/flutter",
    "sdk/pnp/flutter/install",
    "sdk/pnp/flutter/initialize",
    "sdk/pnp/flutter/usage",
    "sdk/pnp/flutter/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/flutter/whitelabel",
        "sdk/pnp/flutter/custom-authentication",
        "sdk/pnp/flutter/mfa",
        "sdk/pnp/flutter/dapp-share",
      ],
    },
    {
      type: "link",
      label: "Playground Android",
      href: "https://w3a.link/pnp-flutter-android-playground",
    },
    {
      type: "link",
      label: "Playground iOS",
      href: "https://w3a.link/pnp-flutter-ios-playground",
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-flutter/18",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-flutter-sdk/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: ["migration-guides/flutter-v5-to-v6", "migration-guides/flutter-v3-to-v4"],
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_unity: [
    {
      type: "html",
      value: pnpTopNavButton(unity),
      defaultStyle: true,
    },
    "sdk/pnp/unity/unity",
    "sdk/pnp/unity/install",
    "sdk/pnp/unity/initialize",
    "sdk/pnp/unity/usage",
    "sdk/pnp/unity/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/unity/whitelabel",
        "sdk/pnp/unity/custom-authentication",
        "sdk/pnp/unity/mfa",
        "sdk/pnp/unity/dapp-share",
      ],
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-unity/20",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-unity-sdk/releases",
    },
    ...sdkQuickLinks,
  ],
  sdk_pnp_unreal: [
    {
      type: "html",
      value: pnpTopNavButton(unreal),
      defaultStyle: true,
    },
    "sdk/pnp/unreal/unreal",
    "sdk/pnp/unreal/install",
    "sdk/pnp/unreal/initialize",
    "sdk/pnp/unreal/usage",
    "sdk/pnp/unreal/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/pnp/unreal/whitelabel",
        "sdk/pnp/unreal/custom-authentication",
        "sdk/pnp/unreal/mfa",
      ],
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-pnp/pnp-unreal/21",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/web3auth-unreal-sdk/releases",
    },
    ...sdkQuickLinks,
  ],
  sdk_core_kit_sfa_web: [
    {
      type: "html",
      value: sfaTopNavButton(singlefactorauthjs),
      defaultStyle: true,
    },
    "sdk/sfa/sfa-js/sfa-js",
    "sdk/sfa/sfa-js/install",
    "sdk/sfa/sfa-js/initialize",
    "sdk/sfa/sfa-js/authentication",
    "sdk/sfa/sfa-js/usage",
    "sdk/sfa/sfa-js/examples",
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Additional Settings",
      items: [
        "sdk/sfa/sfa-js/passkeys-sfa",
        "sdk/sfa/sfa-js/account-abstraction",
        "sdk/sfa/sfa-js/initiate-topup",
        "sdk/sfa/sfa-js/show-wallet-connect",
      ],
    },
    {
      type: "category",
      label: "Providers",
      items: [
        "sdk/sfa/sfa-js/providers/providers",
        "sdk/sfa/sfa-js/providers/evm",
        "sdk/sfa/sfa-js/providers/aa-provider",
        "sdk/sfa/sfa-js/providers/solana",
        "sdk/sfa/sfa-js/providers/xrpl",
        "sdk/sfa/sfa-js/providers/common",
      ],
    },
    {
      type: "category",
      label: "Wallet Services Plugin",
      items: [
        "sdk/sfa/sfa-js/wallet-services/wallet-services",
        "sdk/sfa/sfa-js/wallet-services/usage",
        "sdk/sfa/sfa-js/wallet-services/wallet-services-hooks",
      ],
    },
    {
      type: "link",
      label: "Playground",
      href: "https://demo-sfa.web3auth.io",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: ["migration-guides/sfa-rn-to-sfa-js", "migration-guides/sfa-node-to-sfa-js"],
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-core-kit/core-kit-sfa/22",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/web3auth/single-factor-auth-web/releases",
    },
    ...sdkQuickLinks,
  ],
  sdk_core_kit_sfa_android: [
    {
      type: "html",
      value: sfaTopNavButton(singlefactorauthandroid),
      defaultStyle: true,
    },
    "sdk/sfa/sfa-android/sfa-android",
    "sdk/sfa/sfa-android/install",
    "sdk/sfa/sfa-android/initialize",
    "sdk/sfa/sfa-android/authentication",
    "sdk/sfa/sfa-android/usage",
    "sdk/sfa/sfa-android/examples",
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-core-kit/core-kit-sfa-android/26",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/web3auth/single-factor-auth-android/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/sfa-android-v2-to-v3",
        "migration-guides/sfa-android-v1.2.0-to-v2.0.0",
        "migration-guides/sfa-android-v0.4.0-to-v1",
        "migration-guides/sfa-android-v0.1.0-to-v0.3.0",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_core_kit_sfa_ios: [
    {
      type: "html",
      value: sfaTopNavButton(singlefactorauthios),
      defaultStyle: true,
    },
    "sdk/sfa/sfa-ios/sfa-ios",
    "sdk/sfa/sfa-ios/install",
    "sdk/sfa/sfa-ios/initialize",
    "sdk/sfa/sfa-ios/authentication",
    "sdk/sfa/sfa-ios/usage",
    "sdk/sfa/sfa-ios/examples",
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-core-kit/sfa-swift-sdk/30",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/web3auth/single-factor-auth-swift/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/sfa-ios-v8-to-v9",
        "migration-guides/sfa-ios-v7-to-v8",
        "migration-guides/sfa-ios-v2-to-v4",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_core_kit_sfa_flutter: [
    {
      type: "html",
      value: sfaTopNavButton(singlefactorauthflutter),
      defaultStyle: true,
    },
    "sdk/sfa/sfa-flutter/sfa-flutter",
    "sdk/sfa/sfa-flutter/install",
    "sdk/sfa/sfa-flutter/initialize",
    "sdk/sfa/sfa-flutter/authentication",
    "sdk/sfa/sfa-flutter/usage",
    "sdk/sfa/sfa-flutter/examples",
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-core-kit/sfa-flutter-sdk/31",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/web3auth/single-factor-auth-flutter/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: [
        "migration-guides/sfa-flutter-v4-to-v5",
        "migration-guides/sfa-flutter-v2-to-v4",
        "migration-guides/sfa-flutter-v1-to-v2",
      ],
    },
    ...sdkQuickLinks,
  ],
  sdk_core_kit_mpc_js: [
    {
      type: "html",
      value: mpcckTopNavButton(),
      defaultStyle: true,
    },
    "sdk/mpc-core-kit/mpc-core-kit-js/mpc-core-kit-js",
    "sdk/mpc-core-kit/mpc-core-kit-js/install",
    "sdk/mpc-core-kit/mpc-core-kit-js/initialize",
    "sdk/mpc-core-kit/mpc-core-kit-js/initialize-rn",
    {
      type: "category",
      label: "Authentication",
      items: [
        "sdk/mpc-core-kit/mpc-core-kit-js/authentication/authentication",
        "sdk/mpc-core-kit/mpc-core-kit-js/authentication/login-jwt",
        "sdk/mpc-core-kit/mpc-core-kit-js/authentication/login-oauth",
      ],
    },
    "sdk/mpc-core-kit/mpc-core-kit-js/signing",
    "sdk/mpc-core-kit/mpc-core-kit-js/usage",
    "sdk/mpc-core-kit/mpc-core-kit-js/examples",
    {
      type: "category",
      label: "Providers",
      items: [
        "sdk/mpc-core-kit/mpc-core-kit-js/providers/providers",
        "sdk/mpc-core-kit/mpc-core-kit-js/providers/evm",
      ],
    },
    {
      type: "link",
      label: "Support Forum",
      href: "https://web3auth.io/community/c/help-core-kit/mpc-core-kit/33",
    },
    {
      type: "link",
      label: "Release Notes",
      href: "https://github.com/Web3Auth/mpc-core-kit/releases",
    },
    {
      type: "category",
      label: "Migration Guides",
      items: ["migration-guides/mpc-core-kit-web-v2-to-v3"],
    },
    ...sdkQuickLinks,
  ],
  sdk_infra: [
    {
      type: "category",
      label: "tKey JS SDK",
      items: [
        "sdk/infra/tkey/tkey",
        "sdk/infra/tkey/install",
        "sdk/infra/tkey/initialize",
        "sdk/infra/tkey/usage",
        {
          type: "category",
          label: "Modules",
          collapsible: true,
          collapsed: false,
          items: [
            "sdk/infra/tkey/modules/modules",
            "sdk/infra/tkey/modules/web-storage",
            "sdk/infra/tkey/modules/react-native-storage",
            "sdk/infra/tkey/modules/chrome-storage",
            "sdk/infra/tkey/modules/security-questions",
            "sdk/infra/tkey/modules/share-transfer",
            "sdk/infra/tkey/modules/share-serialization",
            "sdk/infra/tkey/modules/seed-phrase",
            "sdk/infra/tkey/modules/private-keys",
          ],
        },
        {
          type: "category",
          label: "Additional Reading",
          collapsible: true,
          collapsed: false,
          items: ["sdk/infra/tkey/implicit-flow"],
        },
        {
          type: "link",
          label: "Support Forum Web",
          href: "https://web3auth.io/community/c/help-core-kit/core-kit-tkey/8",
        },
        {
          type: "link",
          label: "Support Forum React Native",
          href: "https://web3auth.io/community/c/help-core-kit/tkey-react-native-sdk/29",
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey/releases",
        },
        {
          type: "category",
          label: "Migration Guides",
          items: ["migration-guides/tkey-v11-to-v15"],
        },
      ],
    },
    {
      type: "category",
      label: "tKey iOS SDK",
      items: [
        "sdk/infra/tkey-ios/tkey-ios",
        "sdk/infra/tkey-ios/install",
        "sdk/infra/tkey-ios/initialize",
        "sdk/infra/tkey-ios/usage",
        {
          type: "category",
          label: "Modules",
          items: [
            "sdk/infra/tkey-ios/modules/modules",
            "sdk/infra/tkey-ios/modules/private-keys",
            "sdk/infra/tkey-ios/modules/security-questions",
            "sdk/infra/tkey-ios/modules/seed-phrase",
            "sdk/infra/tkey-ios/modules/share-serialization",
            "sdk/infra/tkey-ios/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Support Forum",
          href: "https://web3auth.io/community/c/help-core-kit/core-kit-tkey-ios/27",
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey-ios/releases",
        },
      ],
    },
    {
      type: "category",
      label: "tKey Android SDK",
      items: [
        "sdk/infra/tkey-android/tkey-android",
        "sdk/infra/tkey-android/install",
        "sdk/infra/tkey-android/initialize",
        "sdk/infra/tkey-android/usage",
        {
          type: "category",
          label: "Modules",
          items: [
            "sdk/infra/tkey-android/modules/modules",
            "sdk/infra/tkey-android/modules/private-keys",
            "sdk/infra/tkey-android/modules/security-questions",
            "sdk/infra/tkey-android/modules/seed-phrase",
            "sdk/infra/tkey-android/modules/share-serialization",
            "sdk/infra/tkey-android/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Support Forum",
          href: "https://web3auth.io/community/c/help-core-kit/tkey-android/28",
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey-android/releases",
        },
      ],
    },
    "sdk/infra/tkey-ios-mpc",
    ...sdkQuickLinks,
  ],

  wallet_ecosystems: [
    "sdk/wallet-ecosystems/safeauth",
    // "sdk/wallet-ecosystems/mocaverse",
  ],
};

export default sidebars;
