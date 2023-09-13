
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
        key: "tezos",
        title: "Tezos",
        icon: "logo-tezos.png",
        path: "./connect-blockchain/tezos",
      },
      {
        key: "cronos",
        title: "Cronos",
        icon: "logo-cronos.png",
        path: "./connect-blockchain/cronos",
      },
      {
        key: "harmony",
        title: "Harmony",
        icon: "logo-harmony.png",
        path: "./connect-blockchain/harmony",
      },
      {
        key: "celo",
        title: "Celo",
        icon: "logo-celo.png",
        path: "./connect-blockchain/celo",
      },
      {
        key: "moonbeam",
        title: "Moonbeam",
        icon: "logo-moonbeam.png",
        path: "./connect-blockchain/moonbeam",
      },
      {
        key: "moonriver",
        title: "Moonriver",
        icon: "logo-moonriver.png",
        path: "./connect-blockchain/moonriver",
      },
      {
        key: "klaytn",
        title: "Klaytn",
        icon: "logo-klaytn.png",
        path: "./connect-blockchain/klaytn",
      },
      {
        key: "algorand",
        title: "Algorand",
        icon: "logo-algorand.png",
        path: "./connect-blockchain/algorand",
      },
      {
        key: "immutablex",
        title: "ImmutableX",
        icon: "logo-immutablex.png",
        path: "./connect-blockchain/immutablex",
      },
      {
        key: "polkadot",
        title: "Polkadot",
        icon: "logo-polkadot.png",
        path: "./connect-blockchain/polkadot",
      },
      {
        key: "aptos",
        title: "Aptos",
        icon: "logo-aptos.png",
        path: "./connect-blockchain/aptos",
      },
      {
        key: "cosmos",
        title: "Cosmos",
        icon: "logo-cosmos.png",
        path: "./connect-blockchain/cosmos",
      },
      {
        key: "flare",
        title: "Flare",
        icon: "logo-flare.png",
        path: "./connect-blockchain/flare",
      },
      {
        key: "songbird",
        title: "Songbird",
        icon: "logo-songbird.png",
        path: "./connect-blockchain/songbird",
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
