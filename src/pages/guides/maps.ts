export interface Props {
  guides: Record<
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

export const integrationBuilderMap = [
  {
    title: "How to Implement Web3Auth in a React Application",
    description: "Learn how to add a non custodial web3 login to a React Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/react.svg",
    type: "INTEGRATION BUILDER",
    tags: ["react", "web3auth"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=react&chain=eth&customAuthentication=no&whitelabel=no",
  },
  {
    title: "How to Implement Web3Auth in a Next.js Application",
    description: "Learn how to add a non custodial web3 login to a Next.js Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/nextjs.svg",
    type: "INTEGRATION BUILDER",
    tags: ["next.js", "web3auth"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=next&chain=eth&customAuthentication=no&whitelabel=no",
  },
  {
    title: "How to Implement Web3Auth in a Angular Application",
    description: "Learn how to add a non custodial web3 login to a Angular Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/angular.svg",
    type: "INTEGRATION BUILDER",
    tags: ["angular", "web3auth"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=angular&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in a HTML/JS Application",
    description: "Learn how to add a non custodial web3 login to a HTML/JS Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/htmljs.svg",
    type: "INTEGRATION BUILDER",
    tags: ["html/css", "web3auth"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=html&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in a Vue.js Application",
    description: "Learn how to add a non custodial web3 login to a Vue.js Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/vue.svg",
    type: "INTEGRATION BUILDER",
    tags: ["vue", "web3auth"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=vue&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in an Android Application",
    description: "Learn how to add a non custodial web3 login to an Android Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/android.svg",
    type: "INTEGRATION BUILDER",
    tags: ["android", "web3auth", "mobile"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=android&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in an iOS/Swift Application",
    description: "Learn how to add a non custodial web3 login to an iOS/Swift Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/ios-swift.svg",
    type: "INTEGRATION BUILDER",
    tags: ["ios", "web3auth", "mobile"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=ios&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in a Flutter Application",
    description: "Learn how to add a non custodial web3 login to a Flutter Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/flutter.svg",
    type: "INTEGRATION BUILDER",
    tags: ["flutter", "web3auth", "mobile"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=flutter&chain=eth&customAuthentication=no&whitelabel=no",
  },

  {
    title: "How to Implement Web3Auth in a React Native Application",
    description: "Learn how to add a non custodial web3 login to a React Native Applications using Web3Auth.",
    image: "/docs/contents/guides/banners/react-native.svg",
    type: "INTEGRATION BUILDER",
    tags: ["react native", "web3auth", "mobile"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/integration-builder?lang=react-native&chain=eth&customAuthentication=no&whitelabel=no",
  },
];

export const referenceMap = [
  {
    title: "Login with Web3Auth using your own JWT Token",
    description: "Learn how to authenticate a user with Web3Auth using your own JWT Token",
    image: "/docs/contents/guides/banners/jwt.svg",
    type: "REFERENCE",
    tags: ["jwt", "custom authentication"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/custom-authentication/byo-jwt-providers",
  },
  {
    title: "Integrate Web3Auth with the Ethereum Blockchain",
    description: "Learn how to add a non custodial social login to the Ethereum Blockchain",
    image: "/docs/contents/guides/banners/ethereum.svg",
    type: "REFERENCE",
    tags: ["ethereum", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/ethereum",
  },
  {
    title: "Integrate Web3Auth with the Solana Blockchain",
    description: "Learn how to add a non custodial social login to the Solana Blockchain",
    image: "/docs/contents/guides/banners/solana.svg",
    type: "REFERENCE",
    tags: ["solana", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/solana",
  },
  {
    title: "Integrate Web3Auth with the StarkEx Blockchain",
    description: "Learn how to add a non custodial social login to the StarkEx Blockchain",
    image: "/docs/contents/guides/banners/starkex.svg",
    type: "REFERENCE",
    tags: ["starkex", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/starkex",
  },

  {
    title: "Integrate Web3Auth with the StarkNet Blockchain",
    description: "Learn how to add a non custodial social login to the StarkNet Blockchain",
    image: "/docs/contents/guides/banners/starknet.svg",
    type: "REFERENCE",
    tags: ["starknet", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/starknet",
  },
  {
    title: "Integrate Web3Auth with the Polygon Blockchain",
    description: "Learn how to add a non custodial social login to the Polygon Blockchain",
    image: "/docs/contents/guides/banners/polygon.svg",
    type: "REFERENCE",
    tags: ["polygon", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/polygon",
  },
  {
    title: "Integrate Web3Auth with the Tezos Blockchain",
    description: "Learn how to add a non custodial social login to the Tezos Blockchain",
    image: "/docs/contents/guides/banners/tezos.svg",
    type: "REFERENCE",
    tags: ["tezos", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/tezos",
  },
  {
    title: "Integrate Web3Auth with the Avalanche Blockchain",
    description: "Learn how to add a non custodial social login to the Avalanche Blockchain",
    image: "/docs/contents/guides/banners/avalanche.svg",
    type: "REFERENCE",
    tags: ["avalanche", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/avalanche",
  },

  {
    title: "Integrate Web3Auth with the Binance Blockchain",
    description: "Learn how to add a non custodial social login to the Binance Blockchain",
    image: "/docs/contents/guides/banners/binance.svg",
    type: "REFERENCE",
    tags: ["binance", "bnb", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/bnb",
  },

  {
    title: "Integrate Web3Auth with the Optimism Blockchain",
    description: "Learn how to add a non custodial social login to the Optimism Blockchain",
    image: "/docs/contents/guides/banners/optimism.svg",
    type: "REFERENCE",
    tags: ["optimism", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/optimism",
  },

  {
    title: "Integrate Web3Auth with the Arbitrum Blockchain",
    description: "Learn how to add a non custodial social login to the Arbitrum Blockchain",
    image: "/docs/contents/guides/banners/arbitrum.svg",
    type: "REFERENCE",
    tags: ["arbitrum", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/arbitrum",
  },

  {
    title: "Integrate Web3Auth with the Cronos Blockchain",
    description: "Learn how to add a non custodial social login to the Cronos Blockchain",
    image: "/docs/contents/guides/banners/cronos.svg",
    type: "REFERENCE",
    tags: ["cronos", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/cronos",
  },

  {
    title: "Integrate Web3Auth with the Harmony Blockchain",
    description: "Learn how to add a non custodial social login to the Harmony Blockchain",
    image: "/docs/contents/guides/banners/harmony.svg",
    type: "REFERENCE",
    tags: ["harmony", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/harmony",
  },

  {
    title: "Integrate Web3Auth with the Celo Blockchain",
    description: "Learn how to add a non custodial social login to the Celo Blockchain",
    image: "/docs/contents/guides/banners/celo.svg",
    type: "REFERENCE",
    tags: ["celo", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/celo",
  },

  {
    title: "Integrate Web3Auth with the Moonbeam Blockchain",
    description: "Learn how to add a non custodial social login to the Moonbeam Blockchain",
    image: "/docs/contents/guides/banners/moonbeam.svg",
    type: "REFERENCE",
    tags: ["moonbeam", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/moonbeam",
  },

  {
    title: "Integrate Web3Auth with the Moonriver Blockchain",
    description: "Learn how to add a non custodial social login to the Moonriver Blockchain",
    image: "/docs/contents/guides/banners/moonriver.svg",
    type: "REFERENCE",
    tags: ["moonriver", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/moonriver",
  },

  {
    title: "Integrate Web3Auth with the Klaytn Blockchain",
    description: "Learn how to add a non custodial social login to the Klaytn Blockchain",
    image: "/docs/contents/guides/banners/klaytn.svg",
    type: "REFERENCE",
    tags: ["kalytn", "evm", "web3auth", "web3auth core"],
    date: "25th May 2022",
    author: "Web3Auth Team",
    link: "/docs/connect-blockchain/klaytn",
  },
];
