/* eslint-disable camelcase */
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import {
  LANGS_ANDROID,
  LANGS_FLUTTER,
  LANGS_IOS,
  LANGS_NODE,
  LANGS_REACT_NATIVE,
  LANGS_UNITY,
  LANGS_WEB,
  LANGS_WEB_MPC_CORE_KIT,
  MPC_CORE_KIT,
  PNP,
  PNP_ANDROID,
  PNP_FLUTTER,
  PNP_IOS,
  PNP_REACT_NATIVE,
  PNP_UNITY,
  PRODUCTS,
  SDKS_CORE_KIT,
  SDKS_PNP,
  SFA_ANDROID,
  SFA_IOS,
  SFA_FLUTTER,
  SFA_NODE,
  SFA_REACT_NATIVE,
} from "./choices";
import mpc_core_kit_angular from "./core_kit/mpc_core_kit/angular";
import mpc_core_kit_nextjs from "./core_kit/mpc_core_kit/nextjs";
import mpc_core_kit_react from "./core_kit/mpc_core_kit/react";
import mpc_core_kit_vue from "./core_kit/mpc_core_kit/vue";
import mpc_core_kit_react_native from "./core_kit/mpc_core_kit/react_native";
import sfa_android from "./core_kit/sfa/android";
import sfa_ios from "./core_kit/sfa/ios";
import sfa_flutter from "./core_kit/sfa/flutter";
import sfa_node from "./core_kit/sfa/node";
import sfa_react_native from "./core_kit/sfa/react_native";
import sfa_web_angular from "./core_kit/sfa/web/angular";
import sfa_web_html from "./core_kit/sfa/web/html";
import sfa_web_nextjs from "./core_kit/sfa/web/nextjs";
import sfa_web_react from "./core_kit/sfa/web/react";
import sfa_web_vue from "./core_kit/sfa/web/vue";
import highlight from "./highlight";
import pnp_android from "./pnp/android";
import pnp_flutter from "./pnp/flutter";
import pnp_ios from "./pnp/ios";
import pnp_react_native from "./pnp/react_native";
import pnp_unity from "./pnp/unity";
import pnp_web_modal_angular from "./pnp/web_modal/angular";
import pnp_web_modal_html from "./pnp/web_modal/html";
import pnp_web_modal_nextjs from "./pnp/web_modal/nextjs";
import pnp_web_modal_react from "./pnp/web_modal/react";
import pnp_web_modal_vue from "./pnp/web_modal/vue";
import pnp_web_no_modal_angular from "./pnp/web_no_modal/angular";
import pnp_web_no_modal_html from "./pnp/web_no_modal/html";
import pnp_web_no_modal_nextjs from "./pnp/web_no_modal/nextjs";
import pnp_web_no_modal_react from "./pnp/web_no_modal/react";
import pnp_web_no_modal_vue from "./pnp/web_no_modal/vue";

const sdks = {
  // PNP Modal SDK
  PNP_MODAL_ANGULAR: pnp_web_modal_angular,
  PNP_MODAL_HTML: pnp_web_modal_html,
  PNP_MODAL_NEXTJS: pnp_web_modal_nextjs,
  PNP_MODAL_REACT: pnp_web_modal_react,
  PNP_MODAL_VUE: pnp_web_modal_vue,
  // PNP No Modal SDK
  PNP_NO_MODAL_ANGULAR: pnp_web_no_modal_angular,
  PNP_NO_MODAL_NEXTJS: pnp_web_no_modal_nextjs,
  PNP_NO_MODAL_REACT: pnp_web_no_modal_react,
  PNP_NO_MODAL_VUE: pnp_web_no_modal_vue,
  PNP_NO_MODAL_HTML: pnp_web_no_modal_html,
  // PNP Android SDK
  PNP_ANDROID_ANDROID: pnp_android,
  // PNP iOS SDK
  PNP_IOS_IOS: pnp_ios,
  // PNP React Native SDK
  PNP_REACT_NATIVE_ANDROID: pnp_react_native,
  PNP_REACT_NATIVE_IOS: pnp_react_native,
  // PNP Flutter SDK
  PNP_FLUTTER_ANDROID: pnp_flutter,
  PNP_FLUTTER_IOS: pnp_flutter,
  // PNP Unity SDK
  PNP_UNITY_ANDROID: pnp_unity,
  PNP_UNITY_IOS: pnp_unity,
  PNP_UNITY_WEBGL: pnp_unity,
  // SFA Web SDK
  SFA_WEB_ANGULAR: sfa_web_angular,
  SFA_WEB_NEXTJS: sfa_web_nextjs,
  SFA_WEB_REACT: sfa_web_react,
  SFA_WEB_VUE: sfa_web_vue,
  SFA_WEB_HTML: sfa_web_html,
  // SFA React Native SDK
  SFA_REACT_NATIVE_ANDROID: sfa_react_native,
  SFA_REACT_NATIVE_IOS: sfa_react_native,
  // SFA Android SDK
  SFA_ANDROID_ANDROID: sfa_android,
  // SFA iOS SDK
  SFA_IOS_IOS: sfa_ios,
  // SFA Flutter SDK
  SFA_FLUTTER_ANDROID: sfa_flutter,
  SFA_FLUTTER_IOS: sfa_flutter,
  // SFA Node SDK
  SFA_NODE_NODE: sfa_node,
  // MPC Core Kit SDK
  MPC_CORE_KIT_ANGULAR: mpc_core_kit_angular,
  MPC_CORE_KIT_NEXTJS: mpc_core_kit_nextjs,
  MPC_CORE_KIT_REACT: mpc_core_kit_react,
  MPC_CORE_KIT_VUE: mpc_core_kit_vue,
  MPC_CORE_KIT_REACT_NATIVE: mpc_core_kit_react_native,
};

const embed_links = {
  // PNP Modal SDK
  PNP_MODAL_ANGULAR: "https://w3a.link/pnp-angular-modal-quick-start",
  PNP_MODAL_HTML: "https://w3a.link/pnp-vanillajs-modal-quick-start",
  PNP_MODAL_NEXTJS: "https://w3a.link/pnp-nextjs-modal-quick-start",
  PNP_MODAL_REACT: "https://w3a.link/pnp-react-modal-quick-start",
  PNP_MODAL_VUE: "https://w3a.link/pnp-vue-modal-quick-start",
  // PNP No Modal SDK
  PNP_NO_MODAL_ANGULAR: "https://w3a.link/pnp-angular-no-modal-quick-start",
  PNP_NO_MODAL_NEXTJS: "https://w3a.link/pnp-nextjs-no-modal-quick-start",
  PNP_NO_MODAL_REACT: "https://w3a.link/pnp-react-no-modal-quick-start",
  PNP_NO_MODAL_VUE: "https://w3a.link/pnp-vue-no-modal-quick-start",
  PNP_NO_MODAL_HTML: "https://w3a.link/pnp-vanillajs-no-modal-quick-start",
  // PNP Android SDK
  PNP_ANDROID_ANDROID: "https://w3a.link/pnp-android-quick-start",
  // PNP iOS SDK
  PNP_IOS_IOS: "https://w3a.link/pnp-ios-quick-start", // https://w3a.link/pnp-ios-quick-start",
  // PNP React Native SDK
  PNP_REACT_NATIVE_ANDROID: "https://w3a.link/pnp-react-native-android-quick-start",
  PNP_REACT_NATIVE_IOS: "https://w3a.link/pnp-react-native-ios-quick-start",
  // PNP Flutter SDK
  PNP_FLUTTER_ANDROID: "https://w3a.link/pnp-flutter-android-quick-start",
  PNP_FLUTTER_IOS: "https://w3a.link/pnp-flutter-ios-quick-start",
  // PNP Unity SDK
  PNP_UNITY_ANDROID: "https://w3a.link/pnp-unity-android-quick-start",
  PNP_UNITY_IOS: "", // "https://w3a.link/pnp-unity-ios-quick-start"
  PNP_UNITY_WEBGL: "https://w3a.link/pnp-unity-webgl-quick-start",
  // SFA Web SDK
  SFA_WEB_ANGULAR: "https://w3a.link/sfa-angular-quick-start",
  SFA_WEB_NEXTJS: "https://w3a.link/sfa-nextjs-quick-start",
  SFA_WEB_REACT: "https://w3a.link/sfa-react-quick-start",
  SFA_WEB_VUE: "https://w3a.link/sfa-vue-quick-start",
  SFA_WEB_HTML: "https://w3a.link/sfa-vanillajs-quick-start",
  // SFA React Native SDK
  SFA_REACT_NATIVE_ANDROID: "https://w3a.link/sfa-react-native-android-quick-start",
  SFA_REACT_NATIVE_IOS: "https://w3a.link/sfa-react-native-ios-quick-start",
  // SFA Android SDK
  SFA_ANDROID_ANDROID: "https://w3a.link/sfa-android-quick-start",
  // SFA iOS SDK
  SFA_IOS_IOS: "", // "https://w3a.link/sfa-ios-quick-start",
  // SFA Flutter SDK
  SFA_FLUTTER_ANDROID: "https://w3a.link/sfa-flutter-android-quick-start",
  SFA_FLUTTER_IOS: "", //"https://w3a.link/sfa-flutter-ios-quick-start",
  // SFA Node SDK
  SFA_NODE_NODE: "",
  // MPC Core Kit SDK
  MPC_CORE_KIT_ANGULAR: "https://w3a.link/mpc-core-kit-angular-quick-start",
  MPC_CORE_KIT_NEXTJS: "https://w3a.link/mpc-core-kit-nextjs-quick-start",
  MPC_CORE_KIT_REACT: "https://w3a.link/mpc-core-kit-react-quick-start",
  MPC_CORE_KIT_VUE: "https://w3a.link/mpc-core-kit-vue-quick-start",
  MPC_CORE_KIT_REACT_NATIVE: "https://w3a.link/mpc-core-kit-rn-quick-start",
};

const builder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Web3Auth",

  // Options that will be displayed in the UI for selection
  options: {
    product: {
      displayName: "Product",
      default: PRODUCTS[0].key,
      type: "product_selection",
      choices: PRODUCTS,
    },
    sdk: {
      displayName: "SDK",
      default: SDKS_PNP[0].key,
      type: "dropdown",
      choices: SDKS_PNP,
    },
    framework: {
      displayName: "Platform/ Framework",
      default: LANGS_WEB[0].key,
      type: "dropdown",
      choices: LANGS_WEB,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>, stepIndex: number) {
    const finalValues = values;

    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];

    let sdkDefault, sdkChoices, frameworkDefault, frameworkChoices;

    if (finalValues.product === PNP) {
      sdkChoices = SDKS_PNP;
    } else {
      sdkChoices = SDKS_CORE_KIT;
    }

    switch (finalValues.sdk) {
      case PNP_ANDROID:
        frameworkChoices = LANGS_ANDROID;
        break;
      case SFA_ANDROID:
        frameworkChoices = LANGS_ANDROID;
        break;
      case PNP_IOS:
        frameworkChoices = LANGS_IOS;
        break;
      case SFA_IOS:
        frameworkChoices = LANGS_IOS;
        break;
      case PNP_REACT_NATIVE:
        frameworkChoices = LANGS_REACT_NATIVE;
        break;
      case SFA_REACT_NATIVE:
        frameworkChoices = LANGS_REACT_NATIVE;
        break;
      case PNP_FLUTTER:
        frameworkChoices = LANGS_FLUTTER;
        break;
      case SFA_FLUTTER:
        frameworkChoices = LANGS_FLUTTER;
        break;
      case PNP_UNITY:
        frameworkChoices = LANGS_UNITY;
        break;
      case MPC_CORE_KIT:
        frameworkChoices = LANGS_WEB_MPC_CORE_KIT;
        break;
      case SFA_NODE:
        frameworkChoices = LANGS_NODE;
        break;
      default:
        frameworkChoices = LANGS_WEB;
    }

    sdkDefault = sdkChoices[0].key;
    frameworkDefault = frameworkChoices[0].key;

    if (!frameworkChoices.map((item) => item.key).includes(finalValues.framework)) {
      finalValues.framework = frameworkDefault;
    }

    this.options = {
      product: {
        displayName: "Product",
        default: PRODUCTS[0].key,
        type: "product_selection",
        choices: PRODUCTS,
      },
      sdk: {
        displayName: "SDK",
        default: sdkDefault,
        type: "dropdown",
        choices: sdkChoices,
      },
      framework: {
        displayName: "Platform",
        default: frameworkDefault,
        type: "dropdown",
        choices: frameworkChoices,
      },
    };

    let selectedSDK;

    selectedSDK = `${finalValues.sdk}_${finalValues.framework}`;

    sdks[selectedSDK].build({ ...finalValues, filenames, files: newFiles, steps });

    if (stepIndex >= steps.length) {
      // eslint-disable-next-line no-param-reassign
      stepIndex = steps.length - 1;
    }

    const highlightedFiles = highlight(stepIndex, filenames, newFiles, steps);

    return {
      filenames: filenames.map((it) => `${it}`),
      files: highlightedFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `${it.pointer.filename}` } : undefined,
      })),
      stepIndex,
      embedLink: embed_links[selectedSDK],
    };
  },
};

export default builder;
