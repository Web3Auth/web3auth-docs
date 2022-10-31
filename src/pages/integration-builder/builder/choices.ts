import { DisplayChoice } from "../interfaces";

export const CHAINS: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "starkex", displayName: "StarkEx" },
  { key: "starknet", displayName: "StarkNet" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "optimism", displayName: "Optimism" },
  { key: "cronos", displayName: "Cronos" },
  { key: "harmony", displayName: "Harmony" },
  { key: "celo", displayName: "Celo" },
  { key: "moonbeam", displayName: "Moonbeam" },
  { key: "moonriver", displayName: "Moonriver" },
  { key: "tezos", displayName: "Tezos" },
];

export const CHAINS_HTML: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "optimism", displayName: "Optimism" },
  { key: "cronos", displayName: "Cronos" },
  { key: "harmony", displayName: "Harmony" },
  { key: "celo", displayName: "Celo" },
  { key: "moonbeam", displayName: "Moonbeam" },
  { key: "moonriver", displayName: "Moonriver" },
];

export const LANGS: DisplayChoice[] = [
  { key: "react", displayName: "React" },
  { key: "next", displayName: "Next JS" },
  { key: "vue", displayName: "Vue" },
  { key: "angular", displayName: "Angular" },
  { key: "html", displayName: "HTML/JS" },
  { key: "android", displayName: "Android" },
  { key: "ios", displayName: "iOS/Swift" },
  { key: "react-native", displayName: "React Native" },
  { key: "flutter", displayName: "Flutter" },
  { key: "unity", displayName: "Unity" },
];

export const TOGGLE_CHOICES: DisplayChoice[] = [
  { key: "no", displayName: "No" },
  { key: "yes", displayName: "Yes" },
];

export const EVM_FRAMEWORK_CHOICES: DisplayChoice[] = [
  { key: "web3", displayName: "web3.js" },
  { key: "ethers", displayName: "ethers" },
];

export const RN_MODE_CHOICES: DisplayChoice[] = [
  { key: "expo", displayName: "Expo" },
  { key: "bare", displayName: "Bare React Native" },
];

export enum EVM {
  "eth",
  "matic",
  "bnb",
  "avax",
  "arbitrum",
  "optimism",
  "cronos",
  "harmony",
  "celo",
  "moonbeam",
  "moonriver",
}
export enum MOBILE {
  "android",
  "ios",
  "react-native",
  "flutter",
  "unity",
}
