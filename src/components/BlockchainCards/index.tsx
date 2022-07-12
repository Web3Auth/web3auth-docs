import classNames from "classnames";

import styles from "./styles.module.css";

import Tiles from "@theme/Tiles";

export const tileGroupsData = [
  {
    name: "",
    description: "",
    tiles: [
      {
        key: "ethereum",
        title: "Ethereum",
        icon: "logo-ethereum.png",
        path: "./connect-blockchain/ethereum",
      },
      {
        key: "solana",
        title: "Solana",
        icon: "logo-solana.png",
        path: "./connect-blockchain/solana",
      },
      {
        key: "polygon",
        title: "Polygon",
        icon: "logo-polygon.png",
        path: "./connect-blockchain/polygon",
      },
      {
        key: "bnb",
        title: "BNB Chain (Binance)",
        icon: "logo-binance.png",
        path: "./connect-blockchain/bnb",
      },

      {
        key: "avalanche",
        title: "Avalanche",
        icon: "logo-avalanche.png",
        path: "./connect-blockchain/avalanche",
      },
      {
        key: "arbitrum",
        title: "Arbitrum",
        icon: "logo-arbitrum.png",
        path: "./connect-blockchain/arbitrum",
      },
      {
        key: "optimism",
        title: "Optimism",
        icon: "logo-optimism.png",
        path: "./connect-blockchain/optimism",
      },
      {
        key: "starkex",
        title: "StarkEx",
        icon: "logo-starkex.png",
        path: "./connect-blockchain/starkex",
      },
      {
        key: "starknet",
        title: "StarkNet",
        icon: "logo-starknet.png",
        path: "./connect-blockchain/starknet",
      },
      {
        key: "tezos",
        title: "Tezos",
        icon: "logo-tezos.png",
        path: "./connect-blockchain/tezos",
      },
    ],
  },
];

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>Build on any Blockchain</strong>
      </h2>
      <Tiles tileGroups={tileGroupsData} />
    </div>
  );
}
