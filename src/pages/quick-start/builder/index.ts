/* eslint-disable camelcase */
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import { quickStartHostedLinks, quickStartSourceCode } from "../../../common/maps";
import {
  LANGS_ANDROID,
  LANGS_FLUTTER,
  LANGS_IOS,
  LANGS_NODE,
  LANGS_REACT_NATIVE,
  LANGS_UNITY,
  LANGS_WEB,
  LANGS_WEB_WITHOUT_HTML,
  PNP,
  PNP_MODAL,
  PNP_NO_MODAL,
  PNP_ANDROID,
  PNP_FLUTTER,
  PNP_IOS,
  PNP_REACT_NATIVE,
  PNP_UNITY,
  PRODUCTS,
  SDKS_MPC_CORE_KIT,
  SDKS_PNP,
  SDKS_SFA,
  SFA_WEB,
  SFA_ANDROID,
  SFA_IOS,
  SFA_FLUTTER,
  SFA_NODE,
  SFA_REACT_NATIVE,
  MPC_CORE_KIT_WEB,
  MPC_CORE_KIT_NODE,
  MPC_CORE_KIT_REACT_NATIVE,
  SFA,
  LANGS_WEB_PNP,
  MPC_CORE_KIT,
} from "./choices";
import mpc_core_kit_web_angular from "./mpc_core_kit/web/angular";
import mpc_core_kit_web_nextjs from "./mpc_core_kit/web/nextjs";
import mpc_core_kit_web_react from "./mpc_core_kit/web/react";
import mpc_core_kit_web_vue from "./mpc_core_kit/web/vue";
import mpc_core_kit_react_native from "./mpc_core_kit/react_native";
import mpc_core_kit_node from "./mpc_core_kit/node";
import sfa_android from "./sfa/android";
import sfa_ios from "./sfa/ios";
import sfa_flutter from "./sfa/flutter";
import sfa_node from "./sfa/node";
import sfa_react_native from "./sfa/react_native";
import sfa_web_angular from "./sfa/web/angular";
import sfa_web_html from "./sfa/web/html";
import sfa_web_nextjs from "./sfa/web/nextjs";
import sfa_web_react from "./sfa/web/react";
import sfa_web_vue from "./sfa/web/vue";
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
import pnp_web_modal_react_hooks from "./pnp/web_modal/react_hooks";
import pnp_web_modal_vue from "./pnp/web_modal/vue";
import pnp_web_modal_vue_composables from "./pnp/web_modal/vue_composables";
import pnp_web_no_modal_angular from "./pnp/web_no_modal/angular";
import pnp_web_no_modal_html from "./pnp/web_no_modal/html";
import pnp_web_no_modal_nextjs from "./pnp/web_no_modal/nextjs";
import pnp_web_no_modal_react from "./pnp/web_no_modal/react";
import pnp_web_no_modal_react_hooks from "./pnp/web_no_modal/react_hooks";
import pnp_web_no_modal_vue from "./pnp/web_no_modal/vue";
import pnp_web_no_modal_vue_composables from "./pnp/web_no_modal/vue_composables";

const sdks = {
  // PNP Modal SDK
  PNP_MODAL_ANGULAR: pnp_web_modal_angular,
  PNP_MODAL_HTML: pnp_web_modal_html,
  PNP_MODAL_NEXTJS: pnp_web_modal_nextjs,
  PNP_MODAL_REACT: pnp_web_modal_react,
  PNP_MODAL_REACT_HOOKS: pnp_web_modal_react_hooks,
  PNP_MODAL_VUE: pnp_web_modal_vue,
  PNP_MODAL_VUE_COMPOSABLES: pnp_web_modal_vue_composables,
  // PNP No Modal SDK
  PNP_NO_MODAL_ANGULAR: pnp_web_no_modal_angular,
  PNP_NO_MODAL_NEXTJS: pnp_web_no_modal_nextjs,
  PNP_NO_MODAL_REACT: pnp_web_no_modal_react,
  PNP_NO_MODAL_REACT_HOOKS: pnp_web_no_modal_react_hooks,
  PNP_NO_MODAL_VUE: pnp_web_no_modal_vue,
  PNP_NO_MODAL_VUE_COMPOSABLES: pnp_web_no_modal_vue_composables,
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
  // SFA JS SDK
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
  MPC_CORE_KIT_WEB_ANGULAR: mpc_core_kit_web_angular,
  MPC_CORE_KIT_WEB_NEXTJS: mpc_core_kit_web_nextjs,
  MPC_CORE_KIT_WEB_REACT: mpc_core_kit_web_react,
  MPC_CORE_KIT_WEB_VUE: mpc_core_kit_web_vue,
  MPC_CORE_KIT_REACT_NATIVE_ANDROID: mpc_core_kit_react_native,
  MPC_CORE_KIT_REACT_NATIVE_IOS: mpc_core_kit_react_native,
  MPC_CORE_KIT_NODE_NODE: mpc_core_kit_node,
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
      default: LANGS_WEB_PNP[0].key,
      type: "dropdown",
      choices: LANGS_WEB_PNP,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>, stepIndex: number) {
    const finalValues = values;

    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];

    let sdkDefault, sdkChoices, frameworkDefault, frameworkChoices;

    if (finalValues.product === SFA) {
      sdkChoices = SDKS_SFA;
    } else if (finalValues.product === MPC_CORE_KIT) {
      sdkChoices = SDKS_MPC_CORE_KIT;
    } else if (
      finalValues.product === "CORE_KIT" &&
      SDKS_SFA.some((sdk) => sdk.key === finalValues.sdk)
    ) {
      finalValues.product = SFA;
      sdkChoices = SDKS_SFA;
    } else if (
      finalValues.product === "CORE_KIT" &&
      SDKS_MPC_CORE_KIT.some((sdk) => sdk.key === finalValues.sdk)
    ) {
      finalValues.product = MPC_CORE_KIT;
      sdkChoices = SDKS_MPC_CORE_KIT;
    } else {
      sdkChoices = SDKS_PNP;
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
      case PNP_MODAL:
        frameworkChoices = LANGS_WEB_PNP;
        break;
      case PNP_NO_MODAL:
        frameworkChoices = LANGS_WEB_PNP;
        break;
      case SFA_WEB:
        frameworkChoices = LANGS_WEB;
        break;
      case MPC_CORE_KIT_WEB:
        frameworkChoices = LANGS_WEB_WITHOUT_HTML;
        break;
      case MPC_CORE_KIT_REACT_NATIVE:
        frameworkChoices = LANGS_REACT_NATIVE;
        break;
      case MPC_CORE_KIT_NODE:
        frameworkChoices = LANGS_NODE;
        break;
      case SFA_NODE:
        frameworkChoices = LANGS_NODE;
        break;
      default:
        frameworkChoices = LANGS_WEB;
    }
    sdkDefault = sdkChoices[0].key;
    frameworkDefault = frameworkChoices[0].key;

    if (!sdkChoices.map((item) => item.key).includes(finalValues.sdk)) {
      finalValues.sdk = sdkDefault;
    }
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

    let sourceCodeLink;

    if (LANGS_WEB_PNP.map((it) => it.key).includes(finalValues.framework)) {
      sourceCodeLink = quickStartSourceCode[selectedSDK];
    } else {
      sourceCodeLink = quickStartSourceCode[finalValues.sdk];
    }

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
      embedLink: quickStartHostedLinks[selectedSDK],
      sourceCodeLink,
    };
  },
};

export default builder;
