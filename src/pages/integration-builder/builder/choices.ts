import { DisplayChoice } from "../interfaces";

// Blockchain choices

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
export const FLR = "FLR";
export const SGB = "SGB";

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
  "FLR",
  "SGB",
}

export enum OTHER_CHAINS {
  "STARKEX",
  "STARKNET",
  "TEZOS",
}

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
  { key: FLR, displayName: "Flare" },
  { key: SGB, displayName: "Songbird" },
];

export const CHAINS_MOBILE: DisplayChoice[] = [
  { key: ETH, displayName: "Ethereum" },
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
  { key: FLR, displayName: "Flare" },
  { key: SGB, displayName: "Songbird" },
];

export const CHAINS: DisplayChoice[] = [
  ...CHAINS_HTML,
  { key: STARKEX, displayName: "StarkEx" },
  { key: STARKNET, displayName: "StarkNet" },
  { key: TEZOS, displayName: "Tezos" },
];

export const WEB3 = "WEB3";
export const ETHERS = "ETHERS";

export const EVM_LIBRARY: DisplayChoice[] = [
  { key: WEB3, displayName: "web3.js" },
  { key: ETHERS, displayName: "ethers" },
];

// Platform choices

export const REACT = "REACT";
export const NEXT = "NEXT";
export const VUE = "VUE";
export const ANGULAR = "ANGULAR";
export const HTML = "HTML";
export const ANDROID = "ANDROID";
export const IOS = "IOS";
export const REACT_NATIVE = "REACT_NATIVE";
export const FLUTTER = "FLUTTER";
export const UNITY = "UNITY";
export const UNREAL = "UNREAL";

export const LANGS: DisplayChoice[] = [
  { key: REACT, displayName: "React" },
  { key: NEXT, displayName: "Next JS" },
  { key: VUE, displayName: "Vue" },
  { key: ANGULAR, displayName: "Angular" },
  { key: HTML, displayName: "HTML/JS" },
  { key: ANDROID, displayName: "Android" },
  { key: IOS, displayName: "iOS/Swift" },
  { key: REACT_NATIVE, displayName: "React Native" },
  { key: FLUTTER, displayName: "Flutter" },
  { key: UNITY, displayName: "Unity" },
];

export enum MOBILE {
  "ANDROID",
  "IOS",
  "REACT_NATIVE",
  "FLUTTER",
}

export enum GAMING {
  "UNITY",
  "UNREAL",
}

export const EXPO = "EXPO";
export const BARE_RN = "BARE_RN";

export const RN_MODE: DisplayChoice[] = [
  { key: "EXPO", displayName: "Expo" },
  { key: "BARE_RN", displayName: "Bare RN" },
];

// Auth Choices

export const NONE = "NONE";
export const GOOGLE = "GOOGLE";
export const FACEBOOK = "FACEBOOK";
export const DISCORD = "DISCORD";
export const TWITCH = "TWITCH";
export const JWT = "JWT";
export const AUTH0 = "AUTH0";

export const CUSTOM_AUTH: DisplayChoice[] = [
  { key: NONE, displayName: "None" },
  { key: GOOGLE, displayName: "Google" },
  { key: FACEBOOK, displayName: "Facebook" },
  { key: DISCORD, displayName: "Discord" },
  { key: TWITCH, displayName: "Twitch" },
];

export const CUSTOM_AUTH_MOBILE: DisplayChoice[] = [...CUSTOM_AUTH, { key: AUTH0, displayName: "Auth0" }, { key: JWT, displayName: "JWT" }];

// Misc choices

export const YES = "YES";
export const NO = "NO";

export const TOGGLE: DisplayChoice[] = [
  { key: NO, displayName: "No" },
  { key: YES, displayName: "Yes" },
];

export const DEFAULT = "DEFAULT";
export const OPTIONAL = "OPTIONAL";
export const MANDATORY = "MANDATORY";

export const MFA: DisplayChoice[] = [
  { key: DEFAULT, displayName: "Default" },
  { key: OPTIONAL, displayName: "Optional" },
  { key: MANDATORY, displayName: "Mandatory" },
  { key: NONE, displayName: "None" },
];

export const TESTNET = "TESTNET";
export const MAINNET = "MAINNET";
export const CYAN = "CYAN";
export const AQUA = "AQUA";

export const WEB3AUTH_NETWORK: DisplayChoice[] = [
  { key: TESTNET, displayName: "Testnet" },
  { key: MAINNET, displayName: "Mainnet" },
  { key: CYAN, displayName: "Cyan Mainnet" },
  { key: AQUA, displayName: "Aqua Mainnet" },
];
