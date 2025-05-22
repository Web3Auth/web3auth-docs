export const quickStartHostedLinks = {
  // PNP Modal SDK
  ANGULAR: "https://w3a.link/pnp-angular-modal-quick-start",
  HTML: "https://w3a.link/pnp-vanillajs-modal-quick-start",
  NEXTJS: "https://w3a.link/pnp-nextjs-modal-quick-start",
  REACT: "https://w3a.link/pnp-react-modal-quick-start",
  VUE: "https://w3a.link/pnp-vue-modal-quick-start",
  ANDROID: "https://w3a.link/pnp-android-quick-start",
  IOS: "https://w3a.link/pnp-ios-quick-start", // https://w3a.link/pnp-ios-quick-start",
  REACT_NATIVE: "https://w3a.link/pnp-react-native-android-quick-start",
  FLUTTER: "https://w3a.link/pnp-flutter-android-quick-start",
  UNITY: "https://w3a.link/pnp-unity-android-quick-start",
};

export const quickStartSourceCode = {
  REACT:
    "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/react-quick-start",
  REACT_SOLANA:
    "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/react-solana-quick-start",
  ANGULAR:
    "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/angular-quick-start",
  VUE: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/vue-quick-start",
  VUE_SOLANA:
    "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/vue-solana-quick-start",
  NEXTJS:
    "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/nextjs-quick-start",
  HTML: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/v10-testing/quick-starts/vanillajs-quick-start",
  ANDROID: "https://github.com/Web3Auth/web3auth-android-examples/tree/main/android-quick-start",
  IOS: "https://github.com/Web3Auth/web3auth-ios-examples/tree/main/ios-quick-start",
  REACT_NATIVE:
    "https://github.com/Web3Auth/web3auth-react-native-examples/tree/main/rn-bare-quick-start",
  FLUTTER: "https://github.com/Web3Auth/web3auth-flutter-examples/tree/main/flutter-quick-start",
  UNITY: "https://github.com/Web3Auth/web3auth-unity-examples/tree/main/unity-quick-start",
  UNREAL: "https://github.com/Web3Auth/web3auth-unreal-example/tree/master",
};

export interface GuidesInterface {
  content: Record<
    string,
    {
      title: string;
      image: string;
      description: string;
      type: string;
      tags: string[];
      date: string;
      author: string;
      communityPortalTopicId: string;
      pinned: string;
    }
  >;
}

export interface ExamplesInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  tags: string[];
  link: string;
  githubLink: string;
  qsLink?: string;
  guideLink?: string;
}

export const tags = {
  pnp: "plug and play",
  mpcCoreKit: "mpc core kit",
  sfa: "single factor auth",
  sfaJS: "@web3auth/single-factor-auth",
  mpcCoreKitJS: "@web3auth/mpc-core-kit",
  web: "web",
  android: "android",
  ios: "ios",
  wagmi: "wagmi",
  reactNative: "react native",
  flutter: "flutter",
  node: "node",
  unity: "unity",
  unreal: "unreal engine",
  evm: "evm",
  solana: "solana",
  multiChain: "multi chain",
  xrpl: "xrpl",
  algorand: "algorand",
  aptos: "aptos",
  bitcoin: "bitcoin",
  cosmos: "cosmos",
  immutablex: "immutablex",
  near: "near",
  polkadot: "polkadot",
  polymesh: "polymesh",
  starkex: "starkex",
  starknet: "starknet",
  sui: "sui",
  tezos: "tezos",
  tron: "tron",
  ton: "ton",
  customAuthentication: "custom authentication",
  accountAbstraction: "account abstraction",
  onRamp: "on ramp",
  mfa: "mfa",
};

export const productMap = [
  {
    label: "Plug and Play",
    value: tags.pnp,
  },
  {
    label: "Single Factor Auth",
    value: tags.sfa,
  },
  {
    label: "MPC Core Kit",
    value: tags.mpcCoreKit,
  },
];

export const platformMap = [
  {
    label: "Web",
    value: tags.web,
  },
  {
    label: "Android",
    value: tags.android,
  },
  {
    label: "iOS/ Swift",
    value: tags.ios,
  },
  {
    label: "React Native",
    value: tags.reactNative,
  },
  {
    label: "Flutter",
    value: tags.flutter,
  },
  {
    label: "Unity",
    value: tags.unity,
  },
  {
    label: "Unreal Engine",
    value: tags.unreal,
  },
  {
    label: "Node.js",
    value: tags.node,
  },
];

export const pnpPlatformMap = [
  {
    label: "Web",
    value: tags.web,
  },
  {
    label: "Android",
    value: tags.android,
  },
  {
    label: "iOS/ Swift",
    value: tags.ios,
  },
  {
    label: "React Native",
    value: tags.reactNative,
  },
  {
    label: "Flutter",
    value: tags.flutter,
  },
  {
    label: "Unity",
    value: tags.unity,
  },
  {
    label: "Unreal Engine",
    value: tags.unreal,
  },
];

export const sfaPlatformMap = [
  {
    label: "Android",
    value: tags.android,
  },
  {
    label: "iOS/ Swift",
    value: tags.ios,
  },
  {
    label: "React Native",
    value: tags.reactNative,
  },
  {
    label: "Flutter",
    value: tags.flutter,
  },
];

export const mpcPlatformMap = [
  {
    label: "Web",
    value: tags.web,
  },
  {
    label: "React Native",
    value: tags.reactNative,
  },
  {
    label: "Node.js",
    value: tags.node,
  },
];

export const blockchainMap = [
  {
    label: "Ethereum/ EVM",
    value: tags.evm,
  },
  {
    label: "Solana",
    value: tags.solana,
  },
  {
    label: "Multiple Chains",
    value: tags.multiChain,
  },
  {
    label: "XRPL",
    value: tags.xrpl,
  },
  {
    label: "Algorand",
    value: tags.algorand,
  },
  {
    label: "Aptos",
    value: tags.aptos,
  },
  {
    label: "Bitcoin",
    value: tags.bitcoin,
  },
  {
    label: "Cosmos",
    value: tags.cosmos,
  },
  {
    label: "ImmutableX",
    value: tags.immutablex,
  },
  {
    label: "Near",
    value: tags.near,
  },
  {
    label: "Polkadot",
    value: tags.polkadot,
  },
  {
    label: "Polymesh",
    value: tags.polymesh,
  },
  {
    label: "StarkEx",
    value: tags.starkex,
  },
  {
    label: "StarkNet",
    value: tags.starknet,
  },
  {
    label: "Sui",
    value: tags.sui,
  },
  {
    label: "Tezos",
    value: tags.tezos,
  },
  {
    label: "TRON",
    value: tags.tron,
  },
  {
    label: "TON",
    value: tags.ton,
  },
];

export const pnpFeatureMap = [
  {
    label: "Custom Authentication",
    value: tags.customAuthentication,
  },
  {
    label: "Account Abstraction",
    value: tags.accountAbstraction,
  },
  {
    label: "On Ramp",
    value: tags.onRamp,
  },
  {
    label: "Multi Factor Auth",
    value: tags.mfa,
  },
];

export const sfaFeatureMap = [
  {
    label: "Account Abstraction",
    value: tags.accountAbstraction,
  },
  {
    label: "On Ramp",
    value: tags.onRamp,
  },
];

export const PLAYGROUND = "PLAYGROUND";
export const QUICK_START = "QUICK START";
export const SAMPLE_APP = "SAMPLE APP";

export const typeMap = [
  {
    id: 1,
    type: PLAYGROUND,
  },
  {
    id: 2,
    type: SAMPLE_APP,
  },
  {
    id: 3,
    type: QUICK_START,
  },
];

export const webExamples: ExamplesInterface[] = [
  {
    title: "React Quick Start",
    description: "A quick integration of Web3Auth SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm, tags.wagmi, "react"],
    link: quickStartHostedLinks.REACT,
    githubLink: quickStartSourceCode.REACT,
    id: "react-quick-start",
    qsLink: "/quick-start?framework=REACT&stepIndex=0",
  },
  {
    title: "React Solana Quick Start",
    description: "A quick integration of Web3Auth SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm, tags.wagmi, "react"],
    link: quickStartHostedLinks.REACT,
    githubLink: quickStartSourceCode.REACT,
    id: "react-quick-start",
    qsLink: "/quick-start?framework=REACT&stepIndex=0",
  },
  {
    title: "Angular Quick Start",
    description: "A quick integration of Web3Auth SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm, "angular"],
    link: quickStartHostedLinks.ANGULAR,
    githubLink: quickStartSourceCode.ANGULAR,
    id: "angular-quick-start",
    qsLink: "/quick-start?framework=ANGULAR&stepIndex=0",
  },
  {
    title: "Vue Quick Start",
    description: "A quick integration of Web3Auth SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm, tags.wagmi, "vue"],
    link: quickStartHostedLinks.VUE,
    githubLink: quickStartSourceCode.VUE,
    id: "vue-quick-start",
    qsLink: "/quick-start?framework=VUE&stepIndex=0",
  },
  {
    title: "NextJS Quick Start",
    description: "A quick integration of Web3Auth SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm, "nextjs"],
    link: quickStartHostedLinks.NEXTJS,
    githubLink: quickStartSourceCode.NEXTJS,
    id: "nextjs-quick-start",
    qsLink: "/quick-start?framework=NEXTJS&stepIndex=0",
  },
  {
    title: "Vanilla JS Quick Start",
    description: "A quick integration of Web3Auth SDK in Vanilla JS",
    image: "banners/htmljs.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.web, tags.evm],
    link: quickStartHostedLinks.HTML,
    githubLink: quickStartSourceCode.HTML,
    id: "vanillajs-quick-start",
    qsLink: "/quick-start?framework=HTML&stepIndex=0",
  },
  {
    title: "Custom Authentication in Web3Auth Modal",
    description: "Implementing custom authentication in Web3Auth Modal Logins",
    image: "banners/react.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.web,

      tags.evm,
      "custom authentication",
      "google",
      "facebook",
      "discord",
      "auth0",
      "twitter",
      "aggregate verifier",
    ],
    link: "https://custom-authentication-modal-example.vercel.app/",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/custom-authentication-modal-example",
    id: "custom-authentication-modal-example",
    guideLink: "/sdk/pnp/web/modal/custom-authentication",
  },
  {
    title: "PnP Web SDK React Playground",
    description: "A playground to test all the features of Plug and Play SDKs in React",
    image: "banners/react.png",
    type: PLAYGROUND,
    tags: [tags.pnp, tags.web, tags.evm, tags.wagmi, "react", "hooks"],
    link: "https://pnp-modal-playground.vercel.app/",
    id: "react-modal-playground",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/web-modal-sdk/react-modal-playground",
  },
];
export const pnpiOSExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP iOS SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play iOS SDK",
    image: "banners/ios-swift.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.ios, tags.evm, "swift"],
    link: quickStartHostedLinks.PNP_IOS_IOS,
    id: "ios-quick-start",
    githubLink: quickStartSourceCode.PNP_IOS,
    qsLink: "/quick-start?product=PNP&sdk=PNP_IOS&framework=IOS&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP iOS SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play iOS SDK",
    image: "banners/ios-solana.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.ios, "swift", tags.solana, "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-solana-example",
    id: "ios-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-solana-example",
    guideLink: "/connect-blockchain/solana/ios",
  },
  {
    title: "PnP iOS SDK Playground",
    description: "A playground to test all the features of Plug and Play iOS SDK",
    image: "banners/ios-swift.png",
    type: PLAYGROUND,
    tags: [tags.pnp, tags.ios, "swift", tags.solana, tags.evm, "secp256k1"],
    link: "https://w3a.link/pnp-ios-playground",
    id: "pnp-ios-playground",
    githubLink: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP iOS SDK",
    description: "Use your own Firebase ID Token based Login with Plug and Play iOS SDK",
    image: "banners/ios-firebase.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.ios, "swift", "firebase", tags.evm, "id token login"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-firebase-example",
    id: "ios-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-firebase-example",
  },
  // {
  //   title: "Integrate Auth0 SPA in PnP iOS SDK",
  //   description: "Use Auth0 Single Page App (Implicit Mode) with Plug and Play iOS SDK",
  //   image: "banners/ios-auth0.png",
  //   type: SAMPLE_APP,
  //   tags: [tags.pnp, tags.ios, "swift", "auth0", "email passwordless", tags.evm, "implicit mode"],
  //   link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-auth0-example",
  //   id: "ios-auth0-example",
  //   githubLink: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-auth0-example",
  //   guideLink: "/guides/ios-auth0",
  // },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP iOS SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play iOS SDK",
    image: "banners/ios-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.ios,
      "swift",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
      tags.evm,
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-aggregate-verifier-example",
    id: "ios-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/ios/ios-aggregate-verifier-example",
    guideLink: "/sdk/pnp/ios/custom-authentication",
  },
];
export const pnpAndroidExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP Android SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Android SDK",
    image: "banners/android.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.android, tags.evm, "kotlin"],
    link: quickStartHostedLinks.PNP_ANDROID_ANDROID,
    githubLink: quickStartSourceCode.PNP_ANDROID,
    id: "android-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_ANDROID&framework=ANDROID&stepIndex=0&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP Android SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play Android SDK",
    image: "banners/android-solana.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.android, "kotlin", tags.solana, "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-solana-example",
    id: "android-solana-example",
    guideLink: "/connect-blockchain/solana/android",
  },
  {
    title: "PnP Android SDK Playground",
    description: "A playground to test all the features of Plug and Play Android SDK",
    image: "banners/android.png",
    type: PLAYGROUND,
    tags: [tags.pnp, tags.android, "kotlin", tags.solana, tags.evm, "secp256k1"],
    link: "https://w3a.link/pnp-android-playground",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-playground",
    id: "android-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP Android SDK",
    description: "Use your own Firebase ID Token based Login with Plug and Play Android SDK",
    image: "banners/android-firebase.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.android, "kotlin", "firebase", tags.evm, "id token login"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-firebase-example",
    id: "android-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-firebase-example",
  },
  {
    title: "Integrate Auth0 SPA in PnP Android SDK",
    description: "Use Auth0 Single Page App (Implicit Mode) with Plug and Play Android SDK",
    image: "banners/android-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.android,
      tags.evm,
      "kotlin",
      "auth0",
      "email passwordless",
      "implicit mode",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-auth0-example",
    id: "android-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-auth0-example",
    guideLink: "/guides/android-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Android SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Android SDK",
    image: "banners/android-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.android,
      tags.evm,
      "kotlin",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-aggregate-verifier-example",
    id: "android-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/android/android-aggregate-verifier-example",
    guideLink: "/sdk/pnp/android/custom-authentication",
  },
];
export const pnpReactNativeExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP React Native SDK Quick Start",
    description:
      "A quick integration of Web3Auth Plug and Play React Native SDK in Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.android, tags.ios, tags.evm, tags.reactNative],
    link: quickStartHostedLinks.PNP_REACT_NATIVE_IOS,
    githubLink: quickStartSourceCode.PNP_REACT_NATIVE,
    id: "rn-bare-quick-start",
    qsLink: "/quick-start?product=PNP&sdk=PNP_REACT_NATIVE&framework=IOS&stepIndex=0",
  },
  {
    title: "Using Auth0 with Web3Auth PnP React Native SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play React Native SDK in Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.android, tags.ios, tags.reactNative, tags.evm, "auth0", "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-auth0-example",
    id: "rn-bare-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-auth0-example",
    guideLink: "/guides/react-native-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP React Native SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play React Native SDK for Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,

      tags.android,
      tags.ios,
      tags.evm,
      tags.reactNative,
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-aggregate-verifier-example",
    id: "rn-bare-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-bare-aggregate-verifier-example",
    guideLink: "/sdk/pnp/react-native/custom-authentication",
  },
  {
    title: "Using Web3Auth PnP React Native SDK in Expo",
    description: "Using Web3Auth Plug and Play React Native SDK in an Expo App",
    image: "banners/expo.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.android, tags.ios, tags.evm, tags.reactNative, "expo"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-expo-example",
    id: "rn-expo-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/react-native/rn-expo-example",
    guideLink: "/guides/react-native-expo",
  },
];
export const pnpFlutterExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP Flutter SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.flutter, tags.ios, tags.android, tags.evm, "dart"],
    link: quickStartHostedLinks.PNP_FLUTTER_ANDROID,
    id: "flutter-quick-start",
    githubLink: quickStartSourceCode.PNP_FLUTTER,
    qsLink: "/quick-start?product=PNP&sdk=PNP_ANDROID&framework=ANDROID&stepIndex=0&stepIndex=0",
  },
  {
    title: "Integrate Web3Auth PnP Flutter SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-solana.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.flutter, tags.ios, tags.android, "dart", tags.solana, "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-solana-example",
    id: "flutter-solana-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-solana-example",
    guideLink: "/connect-blockchain/solana/flutter",
  },
  {
    title: "PnP Flutter SDK Playground",
    description:
      "A playground to test all the features of Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: PLAYGROUND,
    tags: [
      tags.pnp,
      tags.flutter,
      tags.ios,
      tags.android,
      "dart",
      tags.solana,
      tags.evm,
      "secp256k1",
    ],
    link: "https://w3a.link/pnp-flutter-ios-playground",
    githubLink: "https://w3a.link/pnp-flutter-ios-playground",
    id: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-playground",
  },
  {
    title: "Integrate Firebase based Login in PnP Flutter SDK",
    description:
      "Use your own Firebase ID Token based Login with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-firebase.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.flutter,
      tags.ios,
      tags.android,
      tags.evm,
      "dart",
      "firebase",
      "id token login",
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-firebase-example",
    id: "flutter-firebase-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-firebase-example",
  },
  {
    title: "Integrate Auth0 SPA in PnP Flutter SDK",
    description:
      "Use Auth0 Single Page App (Implicit Mode) with Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.flutter,
      tags.ios,
      tags.android,
      "dart",
      "auth0",
      "email passwordless",
      "implicit mode",
      tags.evm,
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-auth0-example",
    id: "flutter-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-auth0-example",
    guideLink: "/guides/flutter-auth0",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Flutter SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Flutter SDK for Android and iOS",
    image: "banners/flutter-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.flutter,
      tags.ios,
      tags.android,
      "dart",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
      tags.evm,
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-aggregate-verifier-example",
    id: "flutter-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/flutter/flutter-aggregate-verifier-example",
    guideLink: "/sdk/pnp/flutter/custom-authentication",
  },
];
export const pnpUnityExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP Unity SDK Quick Start",
    description:
      "A quick integration of Web3Auth Plug and Play Unity SDK in Android, iOS and WebGL",
    image: "banners/unity.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.unity, "csharp", tags.android, tags.ios, tags.evm, "webgl"],
    link: quickStartHostedLinks.PNP_UNITY_ANDROID,
    id: "unity-quick-start",
    githubLink: quickStartSourceCode.PNP_UNITY,
    qsLink: "/quick-start?product=PNP&sdk=PNP_UNITY&framework=ANDROID&stepIndex=0",
  },
  {
    title: "Using Auth0 with Web3Auth PnP Unity SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play Unity SDK in Android, iOS and WebGL",
    image: "banners/unity-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.unity,
      "csharp",
      tags.android,
      tags.ios,
      "webgl",
      "auth0",
      "implicit mode",
      tags.evm,
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-auth0-example",
    id: "unity-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-auth0-example",
    guideLink: "/sdk/pnp/unity/custom-authentication",
  },
  {
    title: "Using Aggregate Verifiers in Web3Auth PnP Unity SDK",
    description:
      "Combine multiple logins (Google, Facebook and GitHub) using Aggregate Verifiers in Web3Auth Plug and Play Unity SDK for Android, iOS and WebGL",
    image: "banners/unity-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.unity,
      "csharp",
      tags.android,
      tags.ios,
      "webgl",
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
      tags.evm,
    ],
    link: "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-aggregate-verifier-example",
    id: "unity-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-pnp-examples/tree/main/unity/unity-aggregate-verifier-example",
    guideLink: "/sdk/pnp/unity/custom-authentication",
  },
];
export const pnpUnrealExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth PnP Unreal Engine SDK Quick Start",
    description: "A quick integration of Web3Auth Plug and Play Unreal Engine SDK in Android & iOS",
    image: "banners/unreal.png",
    type: QUICK_START,
    tags: [tags.pnp, tags.unreal, "csharp", tags.android, tags.evm, tags.ios],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/master",
    id: "unreal-quick-start",
    githubLink: quickStartSourceCode.PNP_UNREAL,
  },
  {
    id: "unreal-auth0-example",
    title: "Using Auth0 with Web3Auth PnP Unreal Engine SDK",
    description:
      "Using Auth0 Single Page App (Implicit Mode) in Web3Auth Plug and Play Unreal Engine SDK in Android & iOS",
    image: "banners/unreal-auth0.png",
    type: SAMPLE_APP,
    tags: [tags.pnp, tags.unreal, tags.android, tags.ios, "auth0", tags.evm, "implicit mode"],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/auth0-example",
    githubLink: "https://github.com/Web3Auth/web3auth-unreal-example/tree/auth0-example",
    guideLink: "/sdk/pnp/unreal/custom-authentication",
  },
  {
    id: "unreal-google-example",
    title: "Using Google in Web3Auth PnP Unreal Engine SDK",
    description:
      "Using Google Custom Authentication in Web3Auth Plug and Play Unreal Engine SDK for Android & iOS",
    image: "banners/unreal-google.png",
    type: SAMPLE_APP,
    tags: [
      tags.pnp,
      tags.unreal,
      tags.android,
      tags.ios,
      tags.evm,
      "aggregate verifier",
      "implicit mode",
      "auth0",
      "google",
      "github",
      "facebook",
    ],
    link: "https://github.com/Web3Auth/web3auth-unreal-example/tree/custom-google",
    githubLink: "https://github.com/Web3Auth/web3auth-unreal-example/tree/custom-google",
    guideLink: "/sdk/pnp/unreal/custom-authentication",
  },
];
export const coreKitSfaWebExamples: ExamplesInterface[] = [
  {
    title: "Single Factor Auth React Quick Start",
    description: "A quick integration of Single Factor Auth SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [tags.mpcCoreKit, "sfa", tags.web, tags.sfaJS, tags.evm, "react", "id token login"],
    link: quickStartHostedLinks.SFA_WEB_REACT,
    githubLink: quickStartSourceCode.SFA_WEB_REACT,
    id: "sfa-react-quick-start",
    qsLink: "/quick-start?product=SFA&sdk=SFA_WEB&framework=REACT&stepIndex=0",
  },
  {
    title: "Single Factor Auth Angular Quick Start",
    description: "A quick integration of Single Factor Auth SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "angular", "id token login"],
    link: quickStartHostedLinks.SFA_WEB_ANGULAR,
    githubLink: quickStartSourceCode.SFA_WEB_ANGULAR,
    id: "sfa-angular-quick-start",
    qsLink: "/quick-start?product=SFA&sdk=SFA_WEB&framework=ANGULAR&stepIndex=0",
  },
  {
    title: "Single Factor Auth Vue Quick Start",
    description: "A quick integration of Single Factor Auth SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "vue", "id token login"],
    link: quickStartHostedLinks.SFA_WEB_VUE,
    githubLink: quickStartSourceCode.SFA_WEB_VUE,
    id: "sfa-vue-quick-start",
    qsLink: "/quick-start?product=SFA&sdk=SFA_WEB&framework=VUE&stepIndex=0",
  },
  {
    title: "Single Factor Auth NextJS Quick Start",
    description: "A quick integration of Single Factor Auth SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "nextjs", "id token login"],
    link: quickStartHostedLinks.SFA_WEB_NEXTJS,
    githubLink: quickStartSourceCode.SFA_WEB_NEXTJS,
    id: "sfa-nextjs-quick-start",
    qsLink: "/quick-start?product=SFA&sdk=SFA_WEB&framework=NEXTJS&stepIndex=0",
  },
  {
    title: "Single Factor Auth Vanilla JS Quick Start",
    description: "A quick integration of Single Factor Auth SDK in Vanilla JS",
    image: "banners/htmljs.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "id token login"],
    link: quickStartHostedLinks.SFA_WEB_HTML,
    githubLink: quickStartSourceCode.SFA_WEB_HTML,
    id: "sfa-vanillajs-quick-start",
    qsLink: "/quick-start?product=SFA&sdk=SFA_WEB&framework=HTML&stepIndex=0",
  },
  {
    title: "Use Aggregate Verifiers in Single Factor Auth SDK",
    description: "Aggregate Google, Auth0 GitHub in Single Factor Auth SDK",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.sfa,
      "sfa",
      tags.web,
      tags.sfaJS,

      tags.evm,
      "aggregate verifier",
      "google",
      "github",
      "auth0",
      "id token login",
    ],
    link: "https://sfa-web-aggregate-verifier-example.vercel.app/",
    id: "sfa-web-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/blob/main/single-factor-auth-web/sfa-web-aggregate-verifier-example",
    guideLink: "/authentication/group-connections",
  },
  {
    title: "Integrate Single Factor Auth SDK with Bitcoin",
    description: "Use Bitcoin with Single Factor Auth SDK",
    image: "banners/bitcoin.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.bitcoin, "id token login", "secp256k1"],
    link: "https://sfa-web-bitcoin-example.vercel.app/",
    id: "sfa-web-bitcoin-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-bitcoin-example",
    guideLink: "/connect-blockchain/other/bitcoin/",
  },
  {
    title: "Integrate Custom JWT based Login in Single Factor Auth SDK",
    description: "Use your own Custom JWT Express Server Login with Single Factor Auth SDK",
    image: "banners/jwt.png",
    type: SAMPLE_APP,
    tags: [
      tags.sfa,
      "sfa",
      tags.web,
      tags.sfaJS,
      tags.evm,

      "jwt",
      "id token login",
      "react",
      "express",
    ],
    link: "https://sfa-web-custom-jwt-example.vercel.app/",
    id: "sfa-web-custom-jwt-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-custom-jwt-example",
    guideLink: "/authentication/custom-connections/custom-jwt",
  },
  {
    title: "Integrate Google Login in Single Factor Auth SDK",
    description: "Use Google with Single Factor Auth SDK",
    image: "banners/google.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "google", "id token login"],
    link: "https://sfa-web-google-example.vercel.app/",
    id: "sfa-web-google-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-google-example",
    guideLink: "/guides/sfa-web-google",
  },
  {
    title: "Integrate Farcaster Login in Single Factor Auth SDK",
    description: "Use Farcaster with Single Factor Auth SDK",
    image: "banners/farcaster.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.web, tags.sfaJS, tags.evm, "farcaster", "id token login"],
    link: "https://sfa-web-farcaster.vercel.app/",
    id: "sfa-web-farcaster",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-farcaster",
    guideLink: "/guides/farcaster-sfa-web",
  },
  {
    title: "Integrate Email Passwordless Login in Single Factor Auth SDK",
    description: "Use Firebase Email Passwordless login with Single Factor Auth SDK",
    image: "banners/firebase.png",
    type: SAMPLE_APP,
    tags: [
      tags.sfa,
      "sfa",
      tags.web,
      tags.sfaJS,

      tags.evm,
      "email passwordless",
      "firebase",
      "id token login",
    ],
    link: "https://sfa-web-passwordless-example.vercel.app/",
    id: "sfa-web-passwordless-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-web/sfa-web-passwordless-example",
    guideLink: "/authentication/custom-connections/firebase",
  },
];
export const coreKitSfaiOSExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth Single Factor Auth iOS SDK Quick Start",
    description: "A quick integration of Single Factor Auth iOS SDK",
    image: "banners/ios-swift.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.ios, tags.evm, "swift"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-ios/sfa-ios-quick-start",
    id: "sfa-ios-quick-start",
    githubLink: quickStartSourceCode.SFA_IOS,
    qsLink: "/quick-start?product=SFA&sdk=SFA_IOS&framework=IOS&stepIndex=0",
  },
];
export const coreKitSfaAndroidExamples: ExamplesInterface[] = [
  {
    title: "Web3Auth Single Factor Auth Android SDK Quick Start",
    description: "A quick integration of Web3Auth Single Factor Auth Android SDK",
    image: "banners/android.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.android, tags.evm, "kotlin"],
    link: quickStartHostedLinks.SFA_ANDROID_ANDROID,
    id: "sfa-ios-quick-start",
    githubLink: quickStartSourceCode.SFA_ANDROID,
    qsLink: "/quick-start?product=SFA&sdk=SFA_ANDROID&framework=ANDROID&stepIndex=0",
  },
];
export const coreKitSfaNodeExamples: ExamplesInterface[] = [
  {
    id: "sfa-node-quick-start",
    title: "Web3Auth Single Factor Auth Node SDK Quick Start",
    description: "A quick integration of Web3Auth Single Factor Auth Node SDK",
    image: "banners/nodejs.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.node, tags.evm],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-node-quick-start",
    githubLink: quickStartSourceCode.SFA_NODE,
    qsLink: "/quick-start?product=SFA&sdk=SFA_NODE&framework=NODE&stepIndex=0",
  },
  {
    id: "sfa-telegram-oauth-server",
    title: "Using Telegram Login with Web3Auth Single Factor Auth Node SDK",
    description: "Use Telegram Login in your backend with Single Factor Auth Node SDK",
    image: "banners/telegram.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.node, tags.evm, "telegram"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-telegram-oauth-server",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/sfa-telegram-oauth-server",
  },
  {
    id: "microsoft-oauth-connection",
    title: "Using Microsoft Login with Web3Auth Single Factor Auth Node SDK",
    description: "Use Microsoft Login in your backend with Single Factor Auth Node SDK",
    image: "banners/microsoft.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.node, tags.evm, "microsoft"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/microsoft-oauth-connection",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/microsoft-oauth-connection",
  },
  {
    id: "github-oauth-connection",
    title: "Using GitHub Login with Web3Auth Single Factor Auth Node SDK",
    description: "Use GitHub Login in your backend with Single Factor Auth Node SDK",
    image: "banners/github.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.node, tags.evm, "github"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/github-oauth-connection",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-node/github-oauth-connection",
  },
];
export const coreKitSfaReactNativeExamples: ExamplesInterface[] = [
  {
    id: "sfa-rn-bare-quick-start",
    title: "Web3Auth Single Factor Auth React Native SDK Quick Start",
    description:
      "A quick integration of Web3Auth Single Factor Auth React Native SDK in Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.android, tags.ios, tags.evm, tags.reactNative],
    link: quickStartHostedLinks.SFA_REACT_NATIVE_IOS,
    githubLink: quickStartSourceCode.SFA_REACT_NATIVE,
    qsLink: "/quick-start?product=SFA&sdk=SFA_REACT_NATIVE&framework=IOS&stepIndex=0",
  },
  {
    id: "sfa-rn-expo-auth0-example",
    title: "Using Web3Auth Single Factor Auth React Native SDK in Expo",
    description: "Using Web3Auth Single Factor Auth React Native SDK in an Expo App",
    image: "banners/expo.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.android, tags.ios, tags.reactNative, "expo"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-react-native/sfa-rn-expo-auth0-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-react-native/sfa-rn-expo-auth0-example",
  },
];
export const coreKitSfaFlutterExamples: ExamplesInterface[] = [
  {
    id: "sfa_flutter_quick_start",
    title: "Web3Auth Single Factor Auth Flutter SDK Quick Start",
    description:
      "A quick integration of Web3Auth Single Factor Auth Flutter SDK for Android and iOS",
    image: "banners/flutter.png",
    type: QUICK_START,
    tags: [tags.sfa, "sfa", tags.flutter, tags.ios, tags.android, tags.evm, "dart"],
    link: quickStartHostedLinks.SFA_FLUTTER_ANDROID,
    githubLink: quickStartSourceCode.SFA_FLUTTER,
    qsLink: "/quick-start?product=SFA&sdk=SFA_FLUTTER&framework=ANDROID&stepIndex=0",
  },
  {
    id: "sfa_flutter_solana",
    title: "Integrate Web3Auth Single Factor Auth Flutter SDK with Solana Blockchain",
    description: "Use Solana Blockchain with Single Factor Auth Flutter SDK for Android and iOS",
    image: "banners/flutter-solana.png",
    type: SAMPLE_APP,
    tags: [tags.sfa, "sfa", tags.flutter, tags.ios, tags.android, "dart", tags.solana, "ed25519"],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-flutter/sfa_flutter_solana",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/single-factor-auth-flutter/sfa_flutter_solana",
    guideLink: "/connect-blockchain/solana/flutter",
  },
];
export const coreKitMPCWebExamples: ExamplesInterface[] = [
  {
    title: "MPC Core Kit React Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in React",
    image: "banners/react.png",
    type: QUICK_START,
    tags: [
      tags.mpcCoreKit,
      "mpc",
      tags.web,
      tags.mpcCoreKitJS,
      tags.evm,

      "react",
      "id token login",
    ],
    link: quickStartHostedLinks.MPC_CORE_KIT_WEB_REACT,
    githubLink: quickStartSourceCode.MPC_CORE_KIT_WEB_REACT,
    id: "mpc-core-kit-react-quick-start",
    qsLink:
      "/quick-start?product=MPC_CORE_KIT&sdk=MPC_CORE_KIT_WEB&framework=REACT&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit Angular Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in angular",
    image: "banners/angular.png",
    type: QUICK_START,
    tags: [
      tags.mpcCoreKit,
      "mpc",
      tags.web,
      tags.mpcCoreKitJS,
      tags.evm,

      "angular",
      "id token login",
    ],
    link: quickStartHostedLinks.MPC_CORE_KIT_WEB_ANGULAR,
    githubLink: quickStartSourceCode.MPC_CORE_KIT_WEB_ANGULAR,
    id: "mpc-core-kit-angular-quick-start",
    qsLink:
      "/quick-start?product=MPC_CORE_KIT&sdk=MPC_CORE_KIT_WEB&framework=ANGULAR&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit Vue Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in Vue",
    image: "banners/vue.png",
    type: QUICK_START,
    tags: [tags.mpcCoreKit, "mpc", tags.web, tags.mpcCoreKitJS, tags.evm, "vue", "id token login"],
    link: quickStartHostedLinks.MPC_CORE_KIT_WEB_VUE,
    githubLink: quickStartSourceCode.MPC_CORE_KIT_WEB_VUE,
    id: "mpc-core-kit-vue-quick-start",
    qsLink:
      "/quick-start?product=MPC_CORE_KIT&sdk=MPC_CORE_KIT_WEB&framework=VUE&stepIndex=0&stepIndex=0",
  },
  {
    title: "MPC Core Kit NextJS Quick Start",
    description: "A quick integration of Multi Party Computation Core Kit SDK in NextJS",
    image: "banners/next.js.png",
    type: QUICK_START,
    tags: [
      tags.mpcCoreKit,
      "mpc",
      tags.web,
      tags.mpcCoreKitJS,
      tags.evm,

      "nextjs",
      "id token login",
    ],
    link: quickStartHostedLinks.MPC_CORE_KIT_WEB_NEXTJS,
    githubLink: quickStartSourceCode.MPC_CORE_KIT_WEB_NEXTJS,
    id: "mpc-core-kit-nextjs-quick-start",
    qsLink:
      "/quick-start?product=MPC_CORE_KIT&sdk=MPC_CORE_KIT_WEB&framework=NEXTJS&stepIndex=0&stepIndex=0",
  },
  {
    title: "Use Aggregate Verifiers in MPC Core Kit SDK",
    description:
      "Aggregate Google, Auth0 GitHub & Email Passwordless in Multi Party Computation Core Kit SDK",
    image: "banners/auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.mpcCoreKit,
      "mpc",
      tags.web,
      tags.mpcCoreKitJS,
      tags.evm,

      "aggregate verifier",
      "google",
      "github",
      "email passwordless",
      "auth0",
      "id token login",
    ],
    link: "https://mpc-core-kit-aggregate-verifier-example.vercel.app/",
    id: "mpc-core-kit-aggregate-verifier-example",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/blob/main/mpc-core-kit-web/mpc-core-kit-aggregate-verifier-example/",
    guideLink: "/authentication/group-connections",
  },
  {
    title: "Integrate Farcaster Login in MPC Core Kit SDK",
    description: "Use Farcaster with Multi Party Computation Core Kit SDK",
    image: "banners/farcaster.png",
    type: SAMPLE_APP,
    tags: [
      tags.mpcCoreKit,
      "mpc",
      tags.web,
      tags.mpcCoreKitJS,
      tags.evm,

      "farcaster",
      "id token login",
    ],
    link: "https://mpc-core-kit-farcaster.vercel.app/",
    id: "mpc-core-kit-farcaster",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/mpc-core-kit-farcaster",
    guideLink: "/guides/farcaster-mpc-core-kit-web",
  },
  {
    title: "Integrate MPC Core Kit SDK with Solana Blockchain",
    description: "Use Solana with MPC Core Kit SDK",
    image: "banners/solana.png",
    type: SAMPLE_APP,
    tags: [tags.mpcCoreKit, tags.web, tags.mpcCoreKitJS, tags.evm, tags.solana, "ed25519"],
    link: "https://mpc-core-kit-solana.vercel.app/",
    id: "mpc-core-kit-solana",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/mpc-core-kit-solana",
    guideLink: "https://web3auth.io/docs/sdk/mpc-core-kit/mpc-core-kit-js/signing#solana",
  },
];
export const coreKitMPCReactNativeExamples: ExamplesInterface[] = [
  {
    id: "mpc-core-kit-rn-quick-start",
    title: "Web3Auth MPC Core Kit SDK Quick Start in React Native",
    description:
      "A quick integration of Web3Auth Multi Party Computation Core Kit in React Native for Android and iOS",
    image: "banners/react-native.png",
    type: QUICK_START,
    tags: [tags.mpcCoreKit, "mpc", tags.android, tags.evm, tags.ios, tags.reactNative],
    link: quickStartHostedLinks.MPC_CORE_KIT_REACT_NATIVE_ANDROID,
    githubLink: quickStartSourceCode.MPC_CORE_KIT_REACT_NATIVE,
  },
  {
    id: "mpc-core-kit-rn-auth0",
    title: "Using Auth0 with MPC Core Kit SDK Quick Start in React Native",
    description:
      "Integrate Auth0 with Web3Auth Multi Party Computation Core Kit in React Native for Android and iOS",
    image: "banners/react-native-auth0.png",
    type: SAMPLE_APP,
    tags: [
      tags.mpcCoreKit,
      "mpc",

      tags.android,
      tags.ios,
      tags.reactNative,
      tags.evm,
      "auth0",
      "id token login",
    ],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-auth0",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-auth0",
  },
  {
    id: "mpc-core-kit-rn-solana",
    title: "Using Solana MPC Core Kit SDK React Native",
    description: "Integrate Solana with Web3Auth MPC Core Kit in React Native for Android and iOS",
    image: "banners/solana.png",
    type: SAMPLE_APP,
    tags: [
      tags.mpcCoreKit,
      "mpc",

      tags.android,
      tags.ios,
      tags.reactNative,
      tags.evm,
      "auth0",
      "id token login",
    ],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-solana",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-solana",
  },
  {
    id: "mpc-core-kit-rn-expo-auth0",
    title: "Using MPC Core Kit SDK in Expo",
    description:
      "Integrate Auth0 with Web3Auth MPC Core Kit in React Native Expo for Android and iOS",
    image: "banners/expo.png",
    type: SAMPLE_APP,
    tags: [
      tags.mpcCoreKit,
      "mpc",

      tags.android,
      tags.ios,
      tags.reactNative,
      tags.evm,
      "auth0",
      "id token login",
    ],
    link: "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-expo-auth0",
    githubLink:
      "https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-react-native/mpc-core-kit-rn-expo-auth0",
  },
];

export const exampleMap: ExamplesInterface[] = [
  ...webExamples,
  ...pnpiOSExamples,
  ...pnpAndroidExamples,
  ...pnpReactNativeExamples,
  ...pnpFlutterExamples,
  ...pnpUnityExamples,
  ...pnpUnrealExamples,
  ...coreKitSfaWebExamples,
  ...coreKitSfaiOSExamples,
  ...coreKitSfaAndroidExamples,
  ...coreKitSfaReactNativeExamples,
  ...coreKitSfaFlutterExamples,
  ...coreKitMPCWebExamples,
  ...coreKitMPCReactNativeExamples,
  ...coreKitSfaNodeExamples,
];

function arrayToObjectById(array) {
  return array.reduce((acc, obj) => {
    acc[obj.id] = obj;
    return acc;
  }, {});
}

export const examples = arrayToObjectById(exampleMap);
