export interface Props {
  content: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      type: string;
      tags: string[];
      date: string;
      author: string;
      order: number;
    }
  >;
}

const EVMBlockchains = [
  "ethereum",
  "evm",
  "polygon",
  "bnb",
  "avalanche",
  "arbitrum",
  "optimism",
  "cronos",
  "harmony",
  "celo",
  "moonbeam",
  "moonriver",
  "flare",
  "songbird",
];

export const integrationBuilderMap = [
  {
    title: "How to Implement Web3Auth in a React Application",
    description: "Learn how to add a non custodial web3 login to a React Applications using Web3Auth.",
    image: "content-hub/guides/banners/react.png",
    type: "INTEGRATION BUILDER",
    tags: ["web", "react", "@web3auth/modal", "whitelabel", "custom authentication", "solana", "starkex", "starknet", ...EVMBlockchains, "tezos"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=REACT",
  },
  {
    title: "How to Implement Web3Auth in a Next.js Application",
    description: "Learn how to add a non custodial web3 login to a Next.js Applications using Web3Auth.",
    image: "content-hub/guides/banners/nextjs.png",
    type: "INTEGRATION BUILDER",
    tags: ["web", "next.js", "@web3auth/modal", "whitelabel", "custom authentication", "solana", "starkex", "starknet", ...EVMBlockchains, "tezos"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=NEXT",
  },
  {
    title: "How to Implement Web3Auth in a Angular Application",
    description: "Learn how to add a non custodial web3 login to a Angular Applications using Web3Auth.",
    image: "content-hub/guides/banners/angular.png",
    type: "INTEGRATION BUILDER",
    tags: ["web", "angular", "@web3auth/modal", "whitelabel", "custom authentication", "solana", "starkex", "starknet", ...EVMBlockchains, "tezos"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=ANGULAR",
  },

  {
    title: "How to Implement Web3Auth in a HTML/JS Application",
    description: "Learn how to add a non custodial web3 login to a HTML/JS Applications using Web3Auth.",
    image: "content-hub/guides/banners/htmljs.png",
    type: "INTEGRATION BUILDER",
    tags: ["web", "html/js", "@web3auth/modal", "whitelabel", "custom authentication", ...EVMBlockchains],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=HTML",
  },

  {
    title: "How to Implement Web3Auth in a Vue.js Application",
    description: "Learn how to add a non custodial web3 login to a Vue.js Applications using Web3Auth.",
    image: "content-hub/guides/banners/vue.png",
    type: "INTEGRATION BUILDER",
    tags: ["web", "vue", "@web3auth/modal", "whitelabel", "custom authentication", "solana", "starkex", "starknet", ...EVMBlockchains, "tezos"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=VUE",
  },

  {
    title: "How to Implement Web3Auth in an Android Application",
    description: "Learn how to add a non custodial web3 login to an Android Applications using Web3Auth.",
    image: "content-hub/guides/banners/android.png",
    type: "INTEGRATION BUILDER",
    tags: ["mobile", "android", "whitelabel", "custom authentication", "dapp share"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=ANDROID",
  },

  {
    title: "How to Implement Web3Auth in an iOS/Swift Application",
    description: "Learn how to add a non custodial web3 login to an iOS/Swift Applications using Web3Auth.",
    image: "content-hub/guides/banners/ios-swift.png",
    type: "INTEGRATION BUILDER",
    tags: ["mobile", "ios", "whitelabel", "custom authentication", "dapp share"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=IOS",
  },

  {
    title: "How to Implement Web3Auth in a Flutter Application",
    description: "Learn how to add a non custodial web3 login to a Flutter Applications using Web3Auth.",
    image: "content-hub/guides/banners/flutter.png",
    type: "INTEGRATION BUILDER",
    tags: ["mobile", "flutter", "whitelabel", "custom authentication", "dapp share"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=FLUTTER",
  },

  {
    title: "How to Implement Web3Auth in a React Native Application",
    description: "Learn how to add a non custodial web3 login to a React Native Applications using Web3Auth.",
    image: "content-hub/guides/banners/react-native.png",
    type: "INTEGRATION BUILDER",
    tags: ["mobile", "react native", "whitelabel", "custom authentication", "dapp share"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/integration-builder?lang=REACT_NATIVE",
  },
];

export const referenceMap = [
  {
    title: "Login with Web3Auth using your own JWT Token",
    description: "Learn how to authenticate a user with Web3Auth using your own JWT Token",
    image: "content-hub/guides/banners/jwt.png",
    type: "REFERENCE",
    tags: ["jwt", "custom authentication", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/auth-provider-setup/byo-jwt-providers",
  },
  {
    title: "Integrate Web3Auth with Multiple Chains!!",
    description: "Learn how to interact with multiple chains using Web3Auth",
    image: "content-hub/guides/banners/multichain.png",
    type: "REFERENCE",
    tags: ["multichain", "@web3auth/modal", "@web3auth/no-modal"],
    date: "20th Oct 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/multi-chain",
  },
  {
    title: "Integrate Web3Auth with the Ethereum Blockchain",
    description: "Learn how to add a non custodial social login to the Ethereum Blockchain",
    image: "content-hub/guides/banners/ethereum.png",
    type: "REFERENCE",
    tags: ["ethereum", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/ethereum",
  },
  {
    title: "Integrate Web3Auth with the Solana Blockchain",
    description: "Learn how to add a non custodial social login to the Solana Blockchain",
    image: "content-hub/guides/banners/solana.png",
    type: "REFERENCE",
    tags: ["solana", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/solana",
  },
  {
    title: "Integrate Web3Auth with the StarkEx Blockchain",
    description: "Learn how to add a non custodial social login to the StarkEx Blockchain",
    image: "content-hub/guides/banners/starkex.png",
    type: "REFERENCE",
    tags: ["starkex", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/starkex",
  },

  {
    title: "Integrate Web3Auth with the StarkNet Blockchain",
    description: "Learn how to add a non custodial social login to the StarkNet Blockchain",
    image: "content-hub/guides/banners/starknet.png",
    type: "REFERENCE",
    tags: ["starknet", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/starknet",
  },
  {
    title: "Integrate Web3Auth with the Polygon Blockchain",
    description: "Learn how to add a non custodial social login to the Polygon Blockchain",
    image: "content-hub/guides/banners/polygon.png",
    type: "REFERENCE",
    tags: ["polygon", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/polygon",
  },
  {
    title: "Integrate Web3Auth with the Tezos Blockchain",
    description: "Learn how to add a non custodial social login to the Tezos Blockchain",
    image: "content-hub/guides/banners/tezos.png",
    type: "REFERENCE",
    tags: ["tezos", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/tezos",
  },
  {
    title: "Integrate Web3Auth with the Avalanche Blockchain",
    description: "Learn how to add a non custodial social login to the Avalanche Blockchain",
    image: "content-hub/guides/banners/avalanche.png",
    type: "REFERENCE",
    tags: ["avalanche", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/avalanche",
  },
  {
    title: "Integrate Web3Auth with the Binance Blockchain",
    description: "Learn how to add a non custodial social login to the Binance Blockchain",
    image: "content-hub/guides/banners/binance.png",
    type: "REFERENCE",
    tags: ["binance", "bnb", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/bnb",
  },
  {
    title: "Integrate Web3Auth with the Optimism Blockchain",
    description: "Learn how to add a non custodial social login to the Optimism Blockchain",
    image: "content-hub/guides/banners/optimism.png",
    type: "REFERENCE",
    tags: ["optimism", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/optimism",
  },
  {
    title: "Integrate Web3Auth with the Arbitrum Blockchain",
    description: "Learn how to add a non custodial social login to the Arbitrum Blockchain",
    image: "content-hub/guides/banners/arbitrum.png",
    type: "REFERENCE",
    tags: ["arbitrum", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/arbitrum",
  },
  {
    title: "Integrate Web3Auth with the Cronos Blockchain",
    description: "Learn how to add a non custodial social login to the Cronos Blockchain",
    image: "content-hub/guides/banners/cronos.png",
    type: "REFERENCE",
    tags: ["cronos", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/cronos",
  },
  {
    title: "Integrate Web3Auth with the Harmony Blockchain",
    description: "Learn how to add a non custodial social login to the Harmony Blockchain",
    image: "content-hub/guides/banners/harmony.png",
    type: "REFERENCE",
    tags: ["harmony", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/harmony",
  },
  {
    title: "Integrate Web3Auth with the Celo Blockchain",
    description: "Learn how to add a non custodial social login to the Celo Blockchain",
    image: "content-hub/guides/banners/celo.png",
    type: "REFERENCE",
    tags: ["celo", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/celo",
  },
  {
    title: "Integrate Web3Auth with the Moonbeam Blockchain",
    description: "Learn how to add a non custodial social login to the Moonbeam Blockchain",
    image: "content-hub/guides/banners/moonbeam.png",
    type: "REFERENCE",
    tags: ["moonbeam", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/moonbeam",
  },
  {
    title: "Integrate Web3Auth with the Moonriver Blockchain",
    description: "Learn how to add a non custodial social login to the Moonriver Blockchain",
    image: "content-hub/guides/banners/moonriver.png",
    type: "REFERENCE",
    tags: ["moonriver", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/moonriver",
  },
  {
    title: "Integrate Web3Auth with the Klaytn Blockchain",
    description: "Learn how to add a non custodial social login to the Klaytn Blockchain",
    image: "content-hub/guides/banners/klaytn.png",
    type: "REFERENCE",
    tags: ["kalytn", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/klaytn",
  },
  {
    title: "Integrate Web3Auth with the Algorand Blockchain",
    description: "Learn how to add a non custodial social login to the Algorand Blockchain",
    image: "content-hub/guides/banners/algorand.png",
    type: "REFERENCE",
    tags: ["algorand", "@web3auth/modal", "@web3auth/no-modal"],
    date: "3rd Oct 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/algorand",
  },
  {
    title: "Integrate Web3Auth with the ImmutableX Blockchain",
    description: "Learn how to add a non custodial social login to the ImmutableX Blockchain",
    image: "content-hub/guides/banners/immutablex.png",
    type: "REFERENCE",
    tags: ["immutablex", "@web3auth/modal", "@web3auth/no-modal"],
    date: "14th Nov 2022",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/immutablex",
  },
  {
    title: "Integrate Web3Auth with the Polkadot Blockchain",
    description: "Learn how to add a non custodial social login to the Polkadot Blockchain",
    image: "content-hub/guides/banners/polkadot.png",
    type: "REFERENCE",
    tags: ["polkadot", "@web3auth/modal", "@web3auth/no-modal"],
    date: "8th Jan 2023",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/polkadot",
  },
  {
    title: "Integrate Web3Auth with the Aptos Blockchain",
    description: "Learn how to add a non custodial social login to the Aptos Blockchain",
    image: "content-hub/guides/banners/aptos.png",
    type: "REFERENCE",
    tags: ["aptos", "@web3auth/modal", "@web3auth/no-modal"],
    date: "19th Jan 2023",
    author: "Web3Auth Team",
    order: 1,
    link: "/connect-blockchain/aptos",
  },
  {
    title: "Integrate Web3Auth with the Flare Blockchain",
    description: "Learn how to add a non custodial social login to the Flare Blockchain",
    image: "content-hub/guides/banners/flare.png",
    type: "REFERENCE",
    tags: ["flare", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "14th August 2023",
    author: "Flare Labs Team",
    order: 1,
    link: "/connect-blockchain/flare",
  },
  {
    title: "Integrate Web3Auth with the Songbird Blockchain",
    description: "Learn how to add a non custodial social login to the Songbird Blockchain",
    image: "content-hub/guides/banners/songbird.png",
    type: "REFERENCE",
    tags: ["songbird", "evm", "@web3auth/modal", "@web3auth/no-modal"],
    date: "14th August 2023",
    author: "Flare Labs Team",
    order: 1,
    link: "/connect-blockchain/songbird",
  },
];

export const featuresMap = [
  {
    title: "Web3Auth Plug and Play Modal",
    tag: "@web3auth/modal",
  },
  {
    title: "Web3Auth Plug and Play No Modal",
    tag: "@web3auth/no-modal",
  },
  {
    title: "Web3Auth Core Kit tKey SDK",
    tag: "tkey",
  },
  {
    title: "Web3Auth Single Factor Auth",
    tag: "@web3auth/single-factor-auth",
  },
  {
    title: "Web3Auth MPC",
    tag: "mpc",
  },
  {
    title: "Custom Authentication",
    tag: "custom authentication",
  },
  {
    title: "Whitelabel",
    tag: "whitelabel",
  },
  {
    title: "dApp Share",
    tag: "dapp share",
  },
  {
    title: "Server Side Verification",
    tag: "server side verification",
  },
];

export const languageMap = [
  {
    title: "React",
    tag: "react",
  },
  {
    title: "Next JS",
    tag: "next.js",
  },
  {
    title: "Vue",
    tag: "vue",
  },
  {
    title: "Angular",
    tag: "angular",
  },
  {
    title: "HTML/ JavaScript",
    tag: "html/js",
  },
  {
    title: "Android",
    tag: "android",
  },
  {
    title: "iOS/ Swift",
    tag: "ios",
  },
  {
    title: "React Native",
    tag: "react native",
  },
  {
    title: "Flutter",
    tag: "flutter",
  },
];

export const blockchainMap = [
  {
    title: "Ethereum",
    tag: "ethereum",
  },
  {
    title: "Solana",
    tag: "solana",
  },
  {
    title: "EVM Compatible Chains",
    tag: "evm",
  },
  {
    title: "StarkEx",
    tag: "starkex",
  },
  {
    title: "StarkNet",
    tag: "starknet",
  },
  {
    title: "Polygon",
    tag: "polygon",
  },
  {
    title: "BNB Chain",
    tag: "bnb",
  },
  {
    title: "Avalanche",
    tag: "avalanche",
  },
  {
    title: "Arbitrum",
    tag: "arbitrum",
  },
  {
    title: "Optimism",
    tag: "optimism",
  },
  {
    title: "Cronos",
    tag: "cronos",
  },
  {
    title: "Harmony",
    tag: "harmony",
  },
  {
    title: "Celo",
    tag: "celo",
  },
  {
    title: "Moonbeam",
    tag: "moonbeam",
  },
  {
    title: "Moonriver",
    tag: "moonriver",
  },
  {
    title: "Tezos",
    tag: "tezos",
  },
  {
    title: "Algorand",
    tag: "algorand",
  },
  {
    title: "ImmutableX",
    tag: "immutablex",
  },
  {
    title: "Polkadot",
    tag: "polkadot",
  },
];
export const platformMap = [
  {
    title: "Web",
    tag: "web",
  },

  {
    title: "Mobile",
    tag: "mobile",
  },

  {
    title: "Gaming",
    tag: "gaming",
  },
];
