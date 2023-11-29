import { DisplayChoice } from "../interfaces";

// Product Choice
export const PNP = "PNP";
export const CORE_KIT = "CORE_KIT";

export const PRODUCTS: DisplayChoice[] = [
  { key: PNP, displayName: "Plug and Play SDKs" },
  { key: CORE_KIT, displayName: "Core Kit SDKs" },
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
export const SFA_ANDROID = "SFA_ANDROID";
export const SFA_IOS = "SFA_IOS";
export const SFA_NODE = "SFA_NODE";
export const MPC_CORE_KIT = "MPC_CORE_KIT";

// Platform choices
export const REACT = "REACT";
export const NEXTJS = "NEXTJS";
export const VUE = "VUE";
export const ANGULAR = "ANGULAR";
export const HTML = "HTML";
export const ANDROID = "ANDROID";
export const IOS = "IOS";
export const REACT_NATIVE = "REACT_NATIVE";
export const FLUTTER = "FLUTTER";
export const UNITY = "UNITY";
export const UNREAL = "UNREAL";
export const NODE = "NODE";

export const WEB_SDKS = [PNP_MODAL, PNP_NO_MODAL, SFA_WEB, MPC_CORE_KIT];
export const WEB_FRAMEWORKS = [REACT, NEXTJS, VUE, ANGULAR];

export const SDKS_PNP: DisplayChoice[] = [
  { key: PNP_MODAL, displayName: "Web - Modal SDK" },
  { key: PNP_NO_MODAL, displayName: "Web - No Modal SDK" },
  { key: PNP_ANDROID, displayName: "Android SDK" },
  { key: PNP_IOS, displayName: "iOS SDK" },
  { key: PNP_REACT_NATIVE, displayName: "React Native SDK" },
  { key: PNP_FLUTTER, displayName: "Flutter SDK" },
  { key: PNP_UNITY, displayName: "Unity SDK" },
];

export const SDKS_CORE_KIT: DisplayChoice[] = [
  { key: SFA_WEB, displayName: "Single Factor Auth Web SDK" },
  { key: SFA_REACT_NATIVE, displayName: "Single Factor Auth React Native SDK" },
  { key: SFA_ANDROID, displayName: "Single Factor Auth Android SDK" },
  { key: SFA_IOS, displayName: "Single Factor Auth iOS SDK" },
  { key: SFA_NODE, displayName: "Single Factor Auth Node SDK" },
  { key: MPC_CORE_KIT, displayName: "MPC Core Kit SDK" },
];

export const LANGS_WEB: DisplayChoice[] = [
  { key: REACT, displayName: "React" },
  { key: NEXTJS, displayName: "Next JS" },
  { key: VUE, displayName: "Vue" },
  { key: ANGULAR, displayName: "Angular" },
];

export const LANGS_WEB_PNP_MODAL: DisplayChoice[] = [...LANGS_WEB, { key: HTML, displayName: "HTML/JS" }];

export const LANGS_ANDROID: DisplayChoice[] = [{ key: ANDROID, displayName: "Android" }];

export const LANGS_IOS: DisplayChoice[] = [{ key: IOS, displayName: "iOS/Swift" }];

export const LANGS_REACT_NATIVE: DisplayChoice[] = [{ key: REACT_NATIVE, displayName: "React Native" }];

export const LANGS_FLUTTER: DisplayChoice[] = [{ key: FLUTTER, displayName: "Flutter" }];

export const LANGS_UNITY: DisplayChoice[] = [{ key: UNITY, displayName: "Unity" }];

export const LANGS_NODE: DisplayChoice[] = [{ key: NODE, displayName: "NodeJS" }];

// Misc choices

export const YES = "YES";
export const NO = "NO";

export const TOGGLE: DisplayChoice[] = [
  { key: NO, displayName: "No" },
  { key: YES, displayName: "Yes" },
];
