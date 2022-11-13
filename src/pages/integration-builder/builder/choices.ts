import { DisplayChoice } from "../interfaces";

export const ETH = "ETH";
export const SOL = "SOL";
export const STARKEX = "STARKEX";
export const STARKNET = "STARKNET";
export const MATIC = "MATIC";
export const BNB = "BNB";
export const AVAX = "AVAX";
export const ARB = "ARB";
export const OP = "OP";
export const CRO = "CRO";
export const ONE = "ONE";
export const CELO = "CELO";
export const GLMR = "GLMR";
export const MOVR = "MOVR";
export const KLAY = "KLAY";
export const TEZOS = "TEZOS";

export enum EVM {
  "ETH",
  "MATIC",
  "BNB",
  "AVAX",
  "ARB",
  "OP",
  "CRO",
  "ONE",
  "CELO",
  "GLMR",
  "MOVR",
  "KLAY",
}

export const CHAINS: DisplayChoice[] = [
  { key: ETH, displayName: "Ethereum" },
  { key: SOL, displayName: "Solana" },
  { key: STARKEX, displayName: "StarkEx" },
  { key: STARKNET, displayName: "StarkNet" },
  { key: MATIC, displayName: "Polygon" },
  { key: BNB, displayName: "BNB Chain" },
  { key: AVAX, displayName: "Avalanche" },
  { key: ARB, displayName: "Arbitrum" },
  { key: OP, displayName: "Optimism" },
  { key: CRO, displayName: "Cronos" },
  { key: ONE, displayName: "Harmony" },
  { key: CELO, displayName: "Celo" },
  { key: GLMR, displayName: "Moonbeam" },
  { key: MOVR, displayName: "Moonriver" },
  { key: KLAY, displayName: "Klaytn" },
  { key: TEZOS, displayName: "Tezos" },
];

export const CHAINS_HTML: DisplayChoice[] = [
  { key: ETH, displayName: "Ethereum" },
  { key: SOL, displayName: "Solana" },
  { key: MATIC, displayName: "Polygon" },
  { key: BNB, displayName: "BNB Chain" },
  { key: AVAX, displayName: "Avalanche" },
  { key: ARB, displayName: "Arbitrum" },
  { key: OP, displayName: "Optimism" },
  { key: CRO, displayName: "Cronos" },
  { key: ONE, displayName: "Harmony" },
  { key: CELO, displayName: "Celo" },
  { key: GLMR, displayName: "Moonbeam" },
  { key: MOVR, displayName: "Moonriver" },
  { key: KLAY, displayName: "Klaytn" },
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

export enum MOBILE {
  "android",
  "ios",
  "react-native",
  "flutter",
  "unity",
}
