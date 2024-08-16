import { embed_links } from "../../pages/quick-start/builder/index";
export interface Props {
  content: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      type: string;
      tags: string[];
      link: string;
      githubLink?: string;
      qsLink?: string;
      guideLink?: string;
    }
  >;
}

export const productMap = [
  {
    label: "Plug and Play",
    value: "pnp",
  },
  {
    label: "Core Kit",
    value: "core-kit",
  },
];

export const platformMap = [
  {
    label: "Web",
    value: "web",
  },
  {
    label: "Android",
    value: "android",
  },
  {
    label: "iOS/ Swift",
    value: "ios",
  },
  {
    label: "React Native",
    value: "react native",
  },
  {
    label: "Flutter",
    value: "flutter",
  },
  {
    label: "Unity",
    value: "unity",
  },
  {
    label: "Unreal Engine",
    value: "unreal",
  },
];

export const blockchainMap = [
  {
    label: "Ethereum/ EVM Compatible Chains",
    value: "evm",
  },
  {
    label: "Solana",
    value: "solana",
  },
  {
    label: "Connect Multiple Chains",
    value: "multi-chain",
  },
  {
    label: "XRPL",
    value: "xrpl",
  },
  {
    label: "Algorand",
    value: "algorand",
  },
  {
    label: "Aptos",
    value: "aptos",
  },
  {
    label: "Bitcoin",
    value: "bitcoin",
  },
  {
    label: "Cosmos",
    value: "cosmos",
  },
  {
    label: "ImmutableX",
    value: "immutablex",
  },
  {
    label: "Near",
    value: "near",
  },
  {
    label: "Polkadot",
    value: "polkadot",
  },
  {
    label: "Polymesh",
    value: "polymesh",
  },
  {
    label: "StarkEx",
    value: "starkex",
  },
  {
    label: "StarkNet",
    value: "starknet",
  },
  {
    label: "Sui",
    value: "sui",
  },
  {
    label: "Tezos",
    value: "tezos",
  },
];

const PLAYGROUND = "PLAYGROUND";
const QUICK_START = "QUICK START";
const SAMPLE_APP = "SAMPLE APP";

export const typeMap = [
  {
    id: 1,
    type: PLAYGROUND,
  },
  {
    id: 2,
    type: SAMPLE_APP,
  },
  {
    id: 3,
    type: QUICK_START,
  },
];

export const pnpModalExamples = [
  {
    title: "PnP Modal SDK React Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "react"],
    link: embed_links.PNP_MODAL_REACT,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/react-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_MODAL&framework=REACT&stepIndex=0",
  },
  {
    title: "PnP Modal SDK Angular Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "angular"],
    link: embed_links.PNP_MODAL_ANGULAR,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/angular-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_MODAL&framework=ANGULAR&stepIndex=0",
  },
  {
    title: "PnP Modal SDK Vue Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "vue"],
    link: embed_links.PNP_MODAL_VUE,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/vue-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_MODAL&framework=VUE&stepIndex=0",
  },
  {
    title: "PnP Modal SDK NextJS Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "nextjs"],
    link: embed_links.PNP_MODAL_NEXTJS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/nextjs-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_MODAL&framework=NEXTJS&stepIndex=0",
  },
  {
    title: "PnP Modal SDK Nuxt Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in Nuxt",
    image: "banners/nuxt.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "nuxt"],
    link: "https://nuxt-modal-quick-start.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/nuxt-modal-quick-start",
  },
  {
    title: "PnP Modal SDK Vanilla JS Quick Start",
    description: "A quick integration of Plug and Play Modal SDK in Vanilla JS",
    image: "banners/htmljs.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/modal", "javascript"],
    link: embed_links.PNP_MODAL_HTML,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/quick-starts/vanillajs-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_MODAL&framework=HTML&stepIndex=0&stepIndex=0",
  },
  {
    title: "Custom Authentication in PnP Modal SDK",
    description:
      "Implementing custom authentication in Plug and Play Modal SDK with Google, Facebook, Discord, Auth0 Twitter and Aggregate Verifier support",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "web",
      "@web3auth/modal",
      "javascript",
      "custom authentication",
      "google",
      "facebook",
      "discord",
      "auth0",
      "twitter",
      "aggregate verifier",
    ],
    link: "https://custom-authentication-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/custom-authentication-modal-example",
    guideLink: "/sdk/pnp/web/modal/custom-authentication",
  },
  {
    title: "Integrate PnP Modal SDK with EVM based chains",
    description:
      "Use any EVM Blockchain like Ethereum, Polygon, Arbitrum, Base etc. with Plug and Play Modal SDK",
    image: "banners/ethereum.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "evm"],
    link: "https://evm-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/blockchain-connection-examples/evm-modal-example",
    guideLink: "/connect-blockchain/evm/",
  },
  {
    title: "Integrate PnP Modal SDK with Solana Blockchain",
    description: "Use Solana with Plug and Play Modal SDK",
    image: "banners/solana.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "solana", "ed25519"],
    link: "https://solana-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/blockchain-connection-examples/solana-modal-example",
    guideLink: "/connect-blockchain/solana/",
  },
  {
    title: "Integrate PnP Modal SDK with XRP Ledger",
    description: "Use XRP Ledger with Plug and Play Modal SDK",
    image: "banners/xrpl.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "xrpl"],
    link: "https://xrpl-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/blockchain-connection-examples/xrpl-modal-example",
    guideLink: "/connect-blockchain/xrpl/",
  },
  {
    title: "PnP Web SDK React Playground",
    description: "A playground to test all the features of Plug and Play SDKs in React",
    image: "banners/react.png",
    type: PLAYGROUND,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "react", "hooks"],
    link: "https://pnp-modal-playground.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/react-modal-playground",
  },
  {
    title: "Using PnP Modal SDK with WAGMI",
    description: "Using Plug and Play Modal SDK with WAGMI Hooks",
    image: "banners/wagmi.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "wagmi"],
    link: "https://wagmi-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/wagmi-examples/wagmi-modal-example",
  },
  {
    title: "Using PnP Modal SDK with Rainbow Kit",
    description: "Using Plug and Play Modal SDK with Rainbow Kit",
    image: "banners/rainbowkit.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/modal", "javascript", "wagmi", "rainbow"],
    link: "https://rainbowkit-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/wagmi-examples/rainbowkit-modal-example",
  },
];
export const pnpNoModalExamples = [
  {
    title: "PnP No Modal SDK React Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "react"],
    link: embed_links.PNP_NO_MODAL_REACT,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/react-no-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_NO_MODAL&framework=REACT&stepIndex=0",
  },
  {
    title: "PnP No Modal SDK Angular Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "angular"],
    link: embed_links.PNP_NO_MODAL_ANGULAR,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_NO_MODAL&framework=ANGULAR&stepIndex=0",
  },
  {
    title: "PnP No Modal SDK Vue Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "vue"],
    link: embed_links.PNP_NO_MODAL_VUE,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_NO_MODAL&framework=VUE&stepIndex=0",
  },
  {
    title: "PnP No Modal SDK NextJS Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "nextjs"],
    link: embed_links.PNP_NO_MODAL_NEXTJS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_NO_MODAL&framework=NEXTJS&stepIndex=0",
  },
  {
    title: "PnP No Modal SDK Nuxt Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in Nuxt",
    image: "banners/nuxt.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "nuxt"],
    link: "https://nuxt-no-modal-quick-start.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/nuxt-no-modal-quick-start",
  },
  {
    title: "PnP No Modal SDK Vanilla JS Quick Start",
    description: "A quick integration of Plug and Play No Modal SDK in Vanilla JS",
    image: "banners/htmljs.png",
    type: QUICK_START,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript"],
    link: embed_links.PNP_NO_MODAL_HTML,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_NO_MODAL&framework=HTML&stepIndex=0&stepIndex=0",
  },
  {
    title: "Integrate PnP No Modal SDK with EVM based chains",
    description:
      "Use any EVM Blockchain like Ethereum, Polygon, Arbitrum, Base etc. with Plug and Play No Modal SDK",
    image: "banners/ethereum.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "evm"],
    link: "https://evm-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/evm-no-modal-example",
    guideLink: "/connect-blockchain/evm/",
  },
  {
    title: "Integrate PnP No Modal SDK with Solana Blockchain",
    description: "Use Solana with Plug and Play No Modal SDK",
    image: "banners/solana.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "solana", "ed25519"],
    link: "https://solana-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/solana-no-modal-example",
    guideLink: "/connect-blockchain/solana/",
  },
  {
    title: "Integrate PnP No Modal SDK with XRP Ledger",
    description: "Use XRP Ledger with Plug and Play No Modal SDK",
    image: "banners/xrpl.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "xrpl"],
    link: "https://xrpl-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/xrpl-no-modal-example",
    guideLink: "/connect-blockchain/xrpl/",
  },
  {
    title: "Integrate PnP No Modal SDK with Algorand",
    description: "Use Algorand with Plug and Play No Modal SDK",
    image: "banners/algorand.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "algorand"],
    link: "https://algorand-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/algorand-no-modal-example",
    guideLink: "/connect-blockchain/other/algorand/",
  },
  {
    title: "Integrate PnP No Modal SDK with Aptos",
    description: "Use Aptos with Plug and Play No Modal SDK",
    image: "banners/aptos.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "aptos", "ed25519"],
    link: "https://aptos-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/aptos-no-modal-example",
    guideLink: "/connect-blockchain/other/aptos/",
  },
  {
    title: "Integrate PnP No Modal SDK with Cosmos",
    description: "Use Cosmos with Plug and Play No Modal SDK",
    image: "banners/cosmos.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "cosmos"],
    link: "https://cosmos-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/cosmos-no-modal-example",
    guideLink: "/connect-blockchain/other/cosmos/",
  },
  {
    title: "Integrate PnP No Modal SDK with ImmutableX",
    description: "Use ImmutableX with Plug and Play No Modal SDK",
    image: "banners/immutablex.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "immutablex"],
    link: "https://immutablex-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/immutablex-no-modal-example",
    guideLink: "/connect-blockchain/other/immutablex/",
  },
  {
    title: "Integrate PnP No Modal SDK with Multiple Chains",
    description: "Use Multiple Chains at once with Plug and Play No Modal SDK",
    image: "banners/multichain.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "web",
      "@web3auth/no-modal",
      "javascript",
      "multi-chain",
      "evm",
      "solana",
      "tezos",
      "starknet",
      "polkadot",
    ],
    link: "https://multi-chain-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/multi-chain-no-modal-example",
    guideLink: "/guides/pnp-no-modal-multichain",
  },
  {
    title: "Integrate PnP No Modal SDK with Polkadot",
    description: "Use Polkadot with Plug and Play No Modal SDK",
    image: "banners/polkadot.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "polkadot"],
    link: "https://polkadot-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/polkadot-no-modal-example",
    guideLink: "/connect-blockchain/other/polkadot/",
  },
  {
    title: "Integrate PnP No Modal SDK with Polymesh",
    description: "Use Polymesh with Plug and Play No Modal SDK",
    image: "banners/polymesh.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "polymesh"],
    link: "https://polymesh-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/polymesh-no-modal-example",
    guideLink: "/connect-blockchain/other/polymesh/",
  },
  {
    title: "Integrate PnP No Modal SDK with StarkEx",
    description: "Use StarkEx with Plug and Play No Modal SDK",
    image: "banners/starkex.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "starkex"],
    link: "https://starkex-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/starkex-no-modal-example",
    guideLink: "/connect-blockchain/other/starkex/",
  },
  {
    title: "Integrate PnP No Modal SDK with StarkNet",
    description: "Use StarkNet with Plug and Play No Modal SDK",
    image: "banners/starknet.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "starknet"],
    link: "https://starknet-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/starknet-no-modal-example",
    guideLink: "/connect-blockchain/other/starknet/",
  },
  {
    title: "Integrate PnP No Modal SDK with Sui",
    description: "Use Sui with Plug and Play No Modal SDK",
    image: "banners/sui.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "sui"],
    link: "https://sui-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/sui-no-modal-example",
    guideLink: "/connect-blockchain/other/sui/",
  },
  {
    title: "Integrate PnP No Modal SDK with Tezos",
    description: "Use Tezos with Plug and Play No Modal SDK",
    image: "banners/tezos.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "tezos"],
    link: "https://tezos-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/blockchain-connection-examples/tezos-no-modal-example",
    guideLink: "/connect-blockchain/other/tezos/",
  },
  {
    title: "Integrate PnP No Modal SDK in a Chrome Extension",
    description: "Use Plug and Play No Modal SDK withih a Chrome Extension",
    image: "banners/chrome-extension.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "chrome extension"],
    link: "/guides/browser-extension",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/chrome-extension-no-modal-example",
    guideLink: "/guides/browser-extension",
  },
  {
    title: "Use Aggregate Verifiers in PnP No Modal SDK [Firebase ID Token Example]",
    description:
      "Aggregate Google and ID token based Firebase GitHub login in Plug and Play No Modal SDK",
    image: "banners/firebase.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "@web3auth/no-modal",
      "javascript",
      "aggregate verifier",
      "google",
      "github",
      "firebase",
      "id token login",
    ],
    link: "https://firebase-google-aggregate-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/aggregate-verifier-examples/firebase-google-aggregate-no-modal-example",
    guideLink: "/auth-provider-setup/aggregate-verifier",
  },
  {
    title: "Use Aggregate Verifiers in PnP No Modal SDK [Auth0 Implicit Mode Example]",
    description:
      "Aggregate Google, Auth0 GitHub, Facebook and Auth0 Email Passwordless in Plug and Play No Modal SDK, all in implicit mode",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "@web3auth/no-modal",
      "javascript",
      "aggregate verifier",
      "google",
      "github",
      "facebook",
      "auth0",
      "email passwordless",
      "implicit mode",
    ],
    link: "https://auth0-google-aggregate-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/aggregate-verifier-examples/auth0-google-aggregate-no-modal-example",
    guideLink: "/auth-provider-setup/aggregate-verifier",
  },
  {
    title: "Integrate Auth0 SPA in PnP No Modal SDK",
    description: "Use Auth0 Single Page App (Implicit Mode) with Plug and Play No Modal SDK",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "@web3auth/no-modal",
      "javascript",
      "auth0",
      "email passwordless",
      "implicit mode",
    ],
    link: "https://auth0-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/auth0-no-modal-example",
    guideLink: "/guides/auth0",
  },
  {
    title: "Integrate AWS Cognito in PnP No Modal SDK",
    description: "Use AWS Cognito (Implicit Mode) with Plug and Play No Modal SDK",
    image: "banners/cognito.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "@web3auth/no-modal",
      "javascript",
      "cognito",
      "email passwordless",
      "implicit mode",
    ],
    link: "https://cognito-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/cognito-no-modal-example",
    guideLink: "/guides/cognito",
  },
  {
    title: "Integrate Custom JWT based Login in PnP No Modal SDK",
    description: "Use your own Custom JWT Express Server Login with Plug and Play No Modal SDK",
    image: "banners/jwt.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "jwt", "id token login", "react", "express"],
    link: "https://custom-jwt-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/custom-jwt-no-modal-example",
    guideLink: "/auth-provider-setup/byo-jwt-provider",
  },
  {
    title: "Integrate Discord Login in PnP No Modal SDK",
    description: "Use Discord Custom Authentication with Plug and Play No Modal SDK",
    image: "banners/discord.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "discord", "implicit mode"],
    link: "https://discord-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/discord-no-modal-example",
    guideLink: "/guides/discord",
  },
  {
    title: "Integrate Facebook Login in PnP No Modal SDK",
    description: "Use Facebook Custom Authentication with Plug and Play No Modal SDK",
    image: "banners/facebook.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "facebook", "implicit mode"],
    link: "https://facebook-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/facebook-no-modal-example",
    guideLink: "/guides/facebook",
  },
  {
    title: "Integrate Google Login in PnP No Modal SDK",
    description: "Use Google Custom Authentication with Plug and Play No Modal SDK",
    image: "banners/google.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "google", "implicit mode"],
    link: "https://google-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/google-no-modal-example",
    guideLink: "/guides/google",
  },
  {
    title: "Integrate Telegram Login in PnP No Modal SDK",
    description: "Use Telegram Custom Authentication with Plug and Play No Modal SDK",
    image: "banners/telegram.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "telegram", "implicit mode"],
    link: "https://telegram-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/telegram-no-modal-example",
    guideLink: "/guides/telegram",
  },
  {
    title: "Integrate Twitch Login in PnP No Modal SDK",
    description: "Use Twitch Custom Authentication with Plug and Play No Modal SDK",
    image: "banners/twitch.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "twitch", "implicit mode"],
    link: "https://twitch-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/twitch-no-modal-example",
    guideLink: "/guides/twitch",
  },
  {
    title: "Integrate WorldCoin ID in PnP No Modal SDK",
    description: "Use WorldCoin ID with Plug and Play No Modal SDK",
    image: "banners/worldcoin.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "worldcoin", "implicit mode"],
    link: "https://worldcoin-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/worldcoin-no-modal-example",
  },
  {
    title: "Integrate Firebase based Login in PnP No Modal SDK",
    description: "Use your own Firebase ID Token based Login with Plug and Play No Modal SDK",
    image: "banners/firebase.png",
    type: SAMPLE_APP,
    tags: ["pnp", "@web3auth/no-modal", "javascript", "firebase", "id token login"],
    link: "https://firebase-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/custom-authentication/single-verifier-examples/firebase-no-modal-example",
    guideLink: "/guides/firebase",
  },
  {
    title: "Using Server Side Verification with PnP No Modal SDK",
    description: "Use the Server Side Verification Feature in Plug and Play No Modal SDK",
    image: "banners/ssv.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "@web3auth/no-modal",
      "javascript",
      "google",
      "server side verification",
      "nextjs",
    ],
    link: "https://server-side-verification-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/server-side-verification-no-modal-example",
    guideLink: "/features/server-side-verification",
  },
  {
    title: "Using PnP No Modal SDK with WAGMI",
    description: "Using Plug and Play No Modal SDK with WAGMI Hooks",
    image: "banners/wagmi.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "wagmi", "react"],
    link: "https://wagmi-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/wagmi/wagmi-no-modal-example",
  },
  {
    title: "Using PnP No Modal SDK with Rainbow Kit",
    description: "Using Plug and Play No Modal SDK with Rainbow Kit",
    image: "banners/rainbowkit.png",
    type: SAMPLE_APP,
    tags: ["pnp", "web", "@web3auth/no-modal", "javascript", "wagmi", "react", "rainbow"],
    link: "https://rainbowkit-no-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-no-modal-sdk/wagmi/rainbowkit-no-modal-example",
  },
];
export const pnpiOSExamples = [
  {
    title: "Web3Auth PnP iOS SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play iOS SDK",
    image: "banners/ios-swift.png",
    type: QUICK_START,
    tags: ["pnp", "ios", "swift"],
    link: embed_links.PNP_IOS_IOS,
    githubLink: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_IOS&framework=IOS&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP iOS SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play iOS SDK",
    image: "banners/ios-solana.png",
    type: SAMPLE_APP,
    tags: ["pnp", "ios", "swift", "solana", "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-solana-example",
    guideLink: "/connect-blockchain/solana/ios",
  },
  {
    title: "PnP iOS SDK Playground",
    description: "A playground to test all the features of Plug and Play iOS SDK",
    image: "banners/ios-swift.png",
    type: PLAYGROUND,
    tags: ["pnp", "ios", "swift", "solana", "evm", "secp256k1"],
    link: "https://w3a.link/pnp-ios-playground",
    githubLink: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP iOS SDK",
    description: "Use your own Firebase ID Token based Login with Plug and Play iOS SDK",
    image: "banners/ios-firebase.png",
    type: SAMPLE_APP,
    tags: ["pnp", "ios", "swift", "firebase", "id token login"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-firebase-example",
  },
  {
    title: "Integrate Auth0 SPA in PnP iOS SDK",
    description: "Use Auth0 Single Page App (Implicit Mode) with Plug and Play iOS SDK",
    image: "banners/ios-auth0.png",
    type: SAMPLE_APP,
    tags: ["pnp", "ios", "swift", "auth0", "email passwordless", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-auth0-example",
    githubLink: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-auth0-example",
    guideLink: "/guides/ios-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP iOS SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play iOS SDK",
    image: "banners/ios-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "ios",
      "swift",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-aggregate-verifier-example",
    guideLink: "/sdk/pnp/ios/custom-authentication",
  },
];
export const pnpAndroidExamples = [
  {
    title: "Web3Auth PnP Android SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Android SDK",
    image: "banners/android.png",
    type: QUICK_START,
    tags: ["pnp", "android", "kotlin"],
    link: embed_links.PNP_ANDROID_ANDROID,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_ANDROID&framework=ANDROID&stepIndex=0&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP Android SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play Android SDK",
    image: "banners/android-solana.png",
    type: SAMPLE_APP,
    tags: ["pnp", "android", "kotlin", "solana", "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-solana-example",
    guideLink: "/connect-blockchain/solana/android",
  },
  {
    title: "PnP Android SDK Playground",
    description: "A playground to test all the features of Plug and Play Android SDK",
    image: "banners/android.png",
    type: PLAYGROUND,
    tags: ["pnp", "android", "kotlin", "solana", "evm", "secp256k1"],
    link: "https://w3a.link/pnp-android-playground",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP Android SDK",
    description: "Use your own Firebase ID Token based Login with Plug and Play Android SDK",
    image: "banners/android-firebase.png",
    type: SAMPLE_APP,
    tags: ["pnp", "android", "kotlin", "firebase", "id token login"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-firebase-example",
  },
  {
    title: "Integrate Auth0 SPA in PnP Android SDK",
    description: "Use Auth0 Single Page App (Implicit Mode) with Plug and Play Android SDK",
    image: "banners/android-auth0.png",
    type: SAMPLE_APP,
    tags: ["pnp", "android", "kotlin", "auth0", "email passwordless", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-auth0-example",
    guideLink: "/guides/android-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Android SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Android SDK",
    image: "banners/android-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "android",
      "kotlin",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-aggregate-verifier-example",
    guideLink: "/sdk/pnp/android/custom-authentication",
  },
];
export const pnpReactNativeExamples = [
  {
    title: "Web3Auth PnP React Native SDK Quick Start",
    description:
      "A quick integration of Web3Auth Plug and Play React Native SDK in Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: ["pnp", "javascript", "android", "ios", "react-native"],
    link: embed_links.PNP_REACT_NATIVE_IOS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_REACT_NATIVE&framework=IOS&stepIndex=0",
  },
  {
    title: "Using Auth0 with Web3Auth PnP React Native SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play React Native SDK in Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: ["pnp", "javascript", "android", "ios", "react-native", "auth0", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-auth0-example",
    guideLink: "/guides/react-native-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP React Native SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play React Native SDK for Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "javascript",
      "android",
      "ios",
      "react-native",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-aggregate-verifier-example",
    guideLink: "/sdk/pnp/react-native/custom-authentication",
  },
  {
    title: "Using Web3Auth PnP React Native SDK in Expo",
    description: "Using Web3Auth Plug and Play React Native SDK in an Expo App",
    image: "banners/expo.png",
    type: SAMPLE_APP,
    tags: ["pnp", "javascript", "android", "ios", "react-native", "expo"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-expo-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-expo-example",
    guideLink: "/guides/react-native-expo",
  },
];
export const pnpFlutterExamples = [
  {
    title: "Web3Auth PnP Flutter SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: QUICK_START,
    tags: ["pnp", "flutter", "ios", "android", "dart"],
    link: embed_links.PNP_FLUTTER_ANDROID,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_ANDROID&framework=ANDROID&stepIndex=0&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP Flutter SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-solana.png",
    type: SAMPLE_APP,
    tags: ["pnp", "flutter", "ios", "android", "dart", "solana", "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-solana-example",
    guideLink: "/connect-blockchain/solana/flutter",
  },
  {
    title: "PnP Flutter SDK Playground",
    description:
      "A playground to test all the features of Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: PLAYGROUND,
    tags: ["pnp", "flutter", "ios", "android", "dart", "solana", "evm", "secp256k1"],
    link: "https://w3a.link/pnp-flutter-ios-playground",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP Flutter SDK",
    description:
      "Use your own Firebase ID Token based Login with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-firebase.png",
    type: SAMPLE_APP,
    tags: ["pnp", "flutter", "ios", "android", "dart", "firebase", "id token login"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-firebase-example",
  },
  {
    title: "Integrate Auth0 SPA in PnP Flutter SDK",
    description:
      "Use Auth0 Single Page App (Implicit Mode) with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "flutter",
      "ios",
      "android",
      "dart",
      "auth0",
      "email passwordless",
      "implicit mode",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-auth0-example",
    guideLink: "/guides/flutter-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Flutter SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "flutter",
      "ios",
      "android",
      "dart",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-aggregate-verifier-example",
    guideLink: "/sdk/pnp/flutter/custom-authentication",
  },
];
export const pnpUnityExamples = [
  {
    title: "Web3Auth PnP Unity SDK Quick Start",
    description:
      "A quick integration of Web3Auth Plug and Play Unity SDK in Android, iOS and WebGL",
    image: "banners/unity.png",
    type: QUICK_START,
    tags: ["pnp", "unity", "csharp", "android", "ios", "webgl"],
    link: embed_links.PNP_UNITY_ANDROID,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_UNITY&framework=ANDROID&stepIndex=0",
  },
  {
    title: "Using Auth0 with Web3Auth PnP Unity SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play Unity SDK in Android, iOS and WebGL",
    image: "banners/unity-auth0.png",
    type: SAMPLE_APP,
    tags: ["pnp", "unity", "csharp", "android", "ios", "webgl", "auth0", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-auth0-example",
    guideLink: "/sdk/pnp/unity/custom-authentication",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Unity SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Unity SDK for Android, iOS and WebGL",
    image: "banners/unity-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "unity",
      "csharp",
      "android",
      "ios",
      "webgl",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-aggregate-verifier-example",
    guideLink: "/sdk/pnp/unity/custom-authentication",
  },
];

export const pnpUnrealExamples = [
  {
    title: "Web3Auth PnP Unreal Engine SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Unreal Engine SDK in Android & iOS",
    image: "banners/unreal.png",
    type: QUICK_START,
    tags: ["pnp", "unreal", "csharp", "android", "ios"],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/master",
    githubLink: "https://github.com/Web3Auth/web3auth-unreal-example/tree/master",
  },
  {
    title: "Using Auth0 with Web3Auth PnP Unreal Engine SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play Unreal Engine SDK in Android & iOS",
    image: "banners/unreal-auth0.png",
    type: SAMPLE_APP,
    tags: ["pnp", "unreal", "android", "ios", "auth0", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/auth0-example",
    githubLink: "https://github.com/Web3Auth/web3auth-unreal-example/tree/auth0-example",
    guideLink: "/sdk/pnp/unreal/custom-authentication",
  },
  {
    title: "Using Google in Web3Auth PnP Unreal Engine SDK",
    description:
      "Using Google Custom Authentication in Web3Auth Plug and Play Unreal Engine SDK for Android & iOS",
    image: "banners/unreal-google.png",
    type: SAMPLE_APP,
    tags: [
      "pnp",
      "unreal",
      "android",
      "ios",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/custom-google",
    githubLink: "https://github.com/Web3Auth/web3auth-unreal-example/tree/custom-google",
    guideLink: "/sdk/pnp/unreal/custom-authentication",
  },
];

export const coreKitSfaWebExamples = [
  {
    title: "Single Factor Auth React Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "react",
      "id token login",
    ],
    link: embed_links.SFA_WEB_REACT,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/quick-starts/sfa-react-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=REACT&stepIndex=0",
  },
  {
    title: "Single Factor Auth Angular Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "angular",
      "id token login",
    ],
    link: embed_links.SFA_WEB_ANGULAR,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/quick-starts/sfa-angular-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=ANGULAR&stepIndex=0",
  },
  {
    title: "Single Factor Auth Vue Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "vue",
      "id token login",
    ],
    link: embed_links.SFA_WEB_VUE,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/quick-starts/sfa-vue-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=VUE&stepIndex=0",
  },
  {
    title: "Single Factor Auth NextJS Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "nextjs",
      "id token login",
    ],
    link: embed_links.SFA_WEB_NEXTJS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/quick-starts/sfa-nextjs-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=NEXTJS&stepIndex=0",
  },
  {
    title: "Single Factor Auth Vanilla JS Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth SDK in Vanilla JS",
    image: "banners/htmljs.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "id token login",
    ],
    link: embed_links.SFA_WEB_HTML,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/quick-starts/sfa-vanillajs-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_WEB&framework=HTML&stepIndex=0",
  },
  {
    title: "Use Aggregate Verifiers in Core Kit SFA SDK",
    description: "Aggregate Google, Auth0 GitHub in Core Kit Single Factor Auth SDK",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "aggregate verifier",
      "google",
      "github",
      "auth0",
      "id token login",
    ],
    link: "https://sfa-web-aggregate-verifier-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/blob/main/single-factor-auth-web/sfa-web-aggregate-verifier-example",
    guideLink: "/auth-provider-setup/aggregate-verifier",
  },
  {
    title: "Integrate Core Kit SFA SDK with Bitcoin",
    description: "Use Bitcoin with Core Kit Single Factor Auth SDK",
    image: "banners/bitcoin.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "bitcoin",
      "id token login",
      "secp256k1",
    ],
    link: "https://sfa-web-bitcoin-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-bitcoin-example",
    guideLink: "/connect-blockchain/other/bitcoin/",
  },
  {
    title: "Integrate Custom JWT based Login in Core Kit SFA SDK",
    description:
      "Use your own Custom JWT Express Server Login with Core Kit Single Factor Auth SDK",
    image: "banners/jwt.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "jwt",
      "id token login",
      "react",
      "express",
    ],
    link: "https://sfa-web-custom-jwt-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-custom-jwt-example",
    guideLink: "/auth-provider-setup/byo-jwt-provider",
  },
  {
    title: "Integrate Google Login in Core Kit SFA SDK",
    description: "Use Google with Core Kit Single Factor Auth SDK",
    image: "banners/google.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "google",
      "id token login",
    ],
    link: "https://sfa-web-google-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-google-example",
    guideLink: "/guides/sfa-web-google",
  },
  {
    title: "Integrate Farcaster Login in Core Kit SFA SDK",
    description: "Use Farcaster with Core Kit Single Factor Auth SDK",
    image: "banners/farcaster.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "farcaster",
      "id token login",
    ],
    link: "https://sfa-web-farcaster.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-farcaster",
    guideLink: "/guides/farcaster-sfa-web",
  },
  {
    title: "Integrate Email Passwordless Login in Core Kit SFA SDK",
    description: "Use Firebase Email Passwordless login with Core Kit Single Factor Auth SDK",
    image: "banners/firebase.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "sfa",
      "web",
      "@web3auth/single-factor-auth",
      "javascript",
      "email passwordless",
      "firebase",
      "id token login",
    ],
    link: "https://sfa-web-passwordless-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-passwordless-example",
    guideLink: "/auth-provider-setup/authentication-service-providers/firebase-service-provider",
  },
];
export const coreKitSfaiOSExamples = [
  {
    title: "Web3Auth Core Kit SFA iOS SDK Quick Start",
    description: "A quick integration of Core Kit Single Factor Auth iOS SDK",
    image: "banners/ios-swift.png",
    type: QUICK_START,
    tags: ["core-kit", "sfa", "ios", "swift"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-ios/sfa-ios-quick-start",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-ios/sfa-ios-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_IOS&framework=IOS&stepIndex=0",
  },
];
export const coreKitSfaAndroidExamples = [
  {
    title: "Web3Auth Core Kit SFA Android SDK Quick Start",
    description: "A quick integration of Web3Auth Core Kit Single Factor Auth Android SDK",
    image: "banners/android.png",
    type: QUICK_START,
    tags: ["core-kit", "sfa", "android", "kotlin"],
    link: embed_links.SFA_ANDROID_ANDROID,
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_ANDROID&framework=ANDROID&stepIndex=0",
  },
];
export const coreKitSfaReactNativeExamples = [
  {
    title: "Web3Auth Core Kit SFA React Native SDK Quick Start",
    description:
      "A quick integration of Web3Auth Core Kit Single Factor Auth React Native SDK in Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: ["core-kit", "sfa", "javascript", "android", "ios", "react-native"],
    link: embed_links.SFA_REACT_NATIVE_IOS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-react-native/sfa-rn-bare-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_REACT_NATIVE&framework=IOS&stepIndex=0",
  },
  {
    title: "Using Web3Auth Core Kit SFA React Native SDK in Expo",
    description: "Using Web3Auth Core Kit Single Factor Auth React Native SDK in an Expo App",
    image: "banners/expo.png",
    type: SAMPLE_APP,
    tags: ["core-kit", "sfa", "android", "ios", "react-native", "expo"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-react-native/sfa-rn-expo-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-react-native/sfa-rn-expo-auth0-example",
  },
];
export const coreKitSfaFlutterExamples = [
  {
    title: "Web3Auth Core Kit SFA Flutter SDK Quick Start",
    description:
      "A quick integration of Web3Auth Core Kit Single Factor Auth Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: QUICK_START,
    tags: ["core-kit", "sfa", "flutter", "ios", "android", "dart"],
    link: embed_links.SFA_FLUTTER_ANDROID,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-flutter/sfa_flutter_quick_start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=SFA_FLUTTER&framework=ANDROID&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth Core Kit SFA Flutter SDK with Solana Blockchain",
    description:
      "Use Solana Blockchain with Core Kit Single Factor Auth Flutter SDK for Android and iOS",
    image: "banners/flutter-solana.png",
    type: SAMPLE_APP,
    tags: ["core-kit", "sfa", "flutter", "ios", "android", "dart", "solana", "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-flutter/sfa_flutter_solana",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-flutter/sfa_flutter_solana",
    guideLink: "/connect-blockchain/solana/flutter",
  },
];

export const coreKitMPCWebExamples = [
  {
    title: "MPC Core Kit React Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "react",
      "id token login",
    ],
    link: embed_links.MPC_CORE_KIT_REACT,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start",
    qsLink:
      "/quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=REACT&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit Angular Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "angular",
      "id token login",
    ],
    link: embed_links.MPC_CORE_KIT_ANGULAR,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/quick-starts/mpc-core-kit-angular-quick-start",
    qsLink:
      "/quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=ANGULAR&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit Vue Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "vue",
      "id token login",
    ],
    link: embed_links.MPC_CORE_KIT_VUE,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/quick-starts/mpc-core-kit-vue-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=VUE&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit NextJS Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "nextjs",
      "id token login",
    ],
    link: embed_links.MPC_CORE_KIT_NEXTJS,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/quick-starts/mpc-core-kit-nextjs-quick-start",
    qsLink:
      "/quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=NEXTJS&stepIndex=0&stepIndex=0",
  },
  {
    title: "Use Aggregate Verifiers in MPC Core Kit SDK",
    description:
      "Aggregate Google, Auth0 GitHub & Email Passwordless in Multi Party Computation Core Kit SDK",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "aggregate verifier",
      "google",
      "github",
      "email passwordless",
      "auth0",
      "id token login",
    ],
    link: "https://mpc-core-kit-aggregate-verifier-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/blob/main/mpc-core-kit-web/mpc-core-kit-aggregate-verifier-example/",
    guideLink: "/auth-provider-setup/aggregate-verifier",
  },
  {
    title: "Integrate Farcaster Login in MPC Core Kit SDK",
    description: "Use Farcaster with Multi Party Computation Core Kit SDK",
    image: "banners/farcaster.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "mpc",
      "web",
      "@web3auth/mpc-core-kit",
      "javascript",
      "farcaster",
      "id token login",
    ],
    link: "https://mpc-core-kit-farcaster.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/mpc-core-kit-farcaster",
    guideLink: "/guides/farcaster-mpc-core-kit-web",
  },
  {
    title: "Integrate MPC Core Kit SDK with Solana Blockchain",
    description: "Use Solana with MPC Core Kit SDK",
    image: "banners/solana.png",
    type: SAMPLE_APP,
    tags: ["core-kit", "web", "@web3auth/mpc-core-kit", "javascript", "solana", "ed25519"],
    link: "https://mpc-core-kit-solana.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/mpc-core-kit-solana",
    guideLink: "https://web3auth.io/docs/sdk/core-kit/mpc-core-kit/signing#solana",
  },
];
export const coreKitMPCReactNativeExamples = [
  {
    title: "Web3Auth MPC Core Kit SDK Quick Start in React Native",
    description:
      "A quick integration of Web3Auth Multi Party Computation Core Kit in React Native for Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: ["core-kit", "mpc", "javascript", "android", "ios", "react-native"],
    link: embed_links.MPC_CORE_KIT_REACT_NATIVE,
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-quick-start",
    qsLink: "/quick-start?product=CORE_KIT&sdk=MPC_CORE_KIT&framework=REACT_NATIVE&stepIndex=0",
  },
  {
    title: "Using Auth0 with MPC Core Kit SDK Quick Start in React Native",
    description:
      "Integrate Auth0 with Web3Auth Multi Party Computation Core Kit in React Native for Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: [
      "core-kit",
      "mpc",
      "javascript",
      "android",
      "ios",
      "react-native",
      "auth0",
      "id token login",
    ],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-auth0",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-auth0",
  },
];

export const exampleMap = [
  ...pnpModalExamples,
  ...pnpNoModalExamples,
  ...pnpiOSExamples,
  ...pnpAndroidExamples,
  ...pnpReactNativeExamples,
  ...pnpFlutterExamples,
  ...pnpUnityExamples,
  ...pnpUnrealExamples,
  ...coreKitSfaWebExamples,
  ...coreKitSfaiOSExamples,
  ...coreKitSfaAndroidExamples,
  ...coreKitSfaReactNativeExamples,
  ...coreKitSfaFlutterExamples,
  ...coreKitMPCWebExamples,
  ...coreKitMPCReactNativeExamples,
];
