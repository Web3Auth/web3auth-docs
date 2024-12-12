import { DisplayChoice } from "../interfaces";

// Product Choice
export const PNP = "PNP";
export const SFA = "SFA";
export const MPC_CORE_KIT = "MPC_CORE_KIT";

export const PRODUCTS: DisplayChoice[] = [
  { key: PNP, displayName: "Plug and Play" },
  { key: SFA, displayName: "Single Factor Auth" },
  { key: MPC_CORE_KIT, displayName: "MPC Core Kit" },
];

// SDK Choices
export const PNP_MODAL = "PNP_MODAL";
export const PNP_NO_MODAL = "PNP_NO_MODAL";
export const PNP_ANDROID = "PNP_ANDROID";
export const PNP_IOS = "PNP_IOS";
export const PNP_REACT_NATIVE = "PNP_REACT_NATIVE";
export const PNP_FLUTTER = "PNP_FLUTTER";
export const PNP_UNITY = "PNP_UNITY";
export const SFA_WEB = "SFA_WEB";
export const SFA_REACT_NATIVE = "SFA_REACT_NATIVE";
export const SFA_NODE = "SFA_NODE";
export const SFA_ANDROID = "SFA_ANDROID";
export const SFA_IOS = "SFA_IOS";
export const SFA_FLUTTER = "SFA_FLUTTER";
export const MPC_CORE_KIT_WEB = "MPC_CORE_KIT_WEB";
export const MPC_CORE_KIT_REACT_NATIVE = "MPC_CORE_KIT_REACT_NATIVE";
export const MPC_CORE_KIT_NODE = "MPC_CORE_KIT_NODE";
// Platform choices
export const WEB = "WEB";
export const REACT = "REACT";
export const NEXTJS = "NEXTJS";
export const VUE = "VUE";
export const ANGULAR = "ANGULAR";
export const HTML = "HTML";
export const ANDROID = "ANDROID";
export const IOS = "IOS";
export const WEBGL = "WEBGL";
export const REACT_NATIVE = "REACT_NATIVE";
export const FLUTTER = "FLUTTER";
export const UNITY = "UNITY";
export const UNREAL = "UNREAL";
export const NODE = "NODE";
export const REACT_HOOKS = "REACT_HOOKS";
export const VUE_COMPOSABLES = "VUE_COMPOSABLES";

export const SDKS_PNP: DisplayChoice[] = [
  { key: PNP_MODAL, displayName: "Web - Modal SDK" },
  { key: PNP_NO_MODAL, displayName: "Web - No Modal SDK" },
  { key: PNP_ANDROID, displayName: "Android SDK" },
  { key: PNP_IOS, displayName: "iOS SDK" },
  { key: PNP_REACT_NATIVE, displayName: "React Native SDK" },
  { key: PNP_FLUTTER, displayName: "Flutter SDK" },
  { key: PNP_UNITY, displayName: "Unity SDK" },
];

export const SDKS_SFA: DisplayChoice[] = [
  { key: SFA_WEB, displayName: "Single Factor Auth JS SDK for Web" },
  { key: SFA_REACT_NATIVE, displayName: "Single Factor JS SDK for React Native" },
  { key: SFA_NODE, displayName: "Single Factor Auth JS SDK for NodeJS" },
  { key: SFA_ANDROID, displayName: "Single Factor Auth Android SDK" },
  { key: SFA_IOS, displayName: "Single Factor Auth iOS SDK" },
  { key: SFA_FLUTTER, displayName: "Single Factor Auth Flutter SDK" },
];

export const SDKS_MPC_CORE_KIT: DisplayChoice[] = [
  { key: MPC_CORE_KIT_WEB, displayName: "MPC Core Kit JS SDK for Web" },
  { key: MPC_CORE_KIT_REACT_NATIVE, displayName: "MPC Core Kit JS SDK for React Native" },
  { key: MPC_CORE_KIT_NODE, displayName: "MPC Core Kit JS SDK for NodeJS" },
];

export const LANGS_WEB: DisplayChoice[] = [
  { key: REACT, displayName: "React" },
  { key: NEXTJS, displayName: "Next JS" },
  { key: VUE, displayName: "Vue" },
  { key: ANGULAR, displayName: "Angular" },
  { key: HTML, displayName: "Vanilla JS" },
];

export const LANGS_WEB_PNP: DisplayChoice[] = [
  { key: REACT_HOOKS, displayName: "React Hooks" },
  { key: VUE_COMPOSABLES, displayName: "Vue Composables" },
  { key: REACT, displayName: "React" },
  { key: NEXTJS, displayName: "Next JS" },
  { key: VUE, displayName: "Vue" },
  { key: ANGULAR, displayName: "Angular" },
  { key: HTML, displayName: "Vanilla JS" },
];

export const LANGS_WEB_WITHOUT_HTML: DisplayChoice[] = LANGS_WEB.filter(
  (lang) => lang.key !== HTML,
);

const android = { key: ANDROID, displayName: "Android" };
const ios = { key: IOS, displayName: "iOS/Swift" };
const webgl = { key: WEBGL, displayName: "WebGL" };
const web = { key: WEB, displayName: "Web" };
const node = { key: NODE, displayName: "NodeJS" };
const flutter = { key: FLUTTER, displayName: "Flutter" };
const unity = { key: UNITY, displayName: "Unity" };
const unreal = { key: UNREAL, displayName: "Unreal" };
const react_native = { key: REACT_NATIVE, displayName: "React Native" };

export const LANGS_ANDROID: DisplayChoice[] = [android];

export const LANGS_IOS: DisplayChoice[] = [ios];

export const LANGS_REACT_NATIVE: DisplayChoice[] = [ios, android];

export const LANGS_FLUTTER: DisplayChoice[] = [android, ios];

export const LANGS_UNITY: DisplayChoice[] = [android, ios, webgl];

export const LANGS_NODE: DisplayChoice[] = [node];

// export const PLATFORMS_PNP: DisplayChoice[] = [
//   web,
//   android,
//   ios,
//   react_native,
//   flutter,
//   unity,
//   unreal,
// ];

// export const PLATFORMS_SFA: DisplayChoice[] = [web, android, ios, react_native, flutter, node];

// export const PLATFORMS_MPC_CORE_KIT: DisplayChoice[] = [web, react_native, node];

// Misc choices

export const YES = "YES";
export const NO = "NO";

export const TOGGLE: DisplayChoice[] = [
  { key: NO, displayName: "No" },
  { key: YES, displayName: "Yes" },
];
