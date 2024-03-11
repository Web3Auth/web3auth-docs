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
