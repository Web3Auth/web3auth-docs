/* eslint-disable camelcase */
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import {
  HTML,
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
  SFA_NODE,
  SFA_REACT_NATIVE,
  WEB_FRAMEWORKS,
  WEB_SDKS,
} from "./choices";
import mpc_core_kit_angular from "./core_kit/mpc_core_kit/angular";
import mpc_core_kit_nextjs from "./core_kit/mpc_core_kit/nextjs";
import mpc_core_kit_react from "./core_kit/mpc_core_kit/react";
import mpc_core_kit_vue from "./core_kit/mpc_core_kit/vue";
import sfa_android from "./core_kit/sfa/android";
import sfa_ios from "./core_kit/sfa/ios";
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
  PNP_MODAL_ANGULAR: pnp_web_modal_angular,
  PNP_MODAL_HTML: pnp_web_modal_html,
  PNP_MODAL_NEXTJS: pnp_web_modal_nextjs,
  PNP_MODAL_REACT: pnp_web_modal_react,
  PNP_MODAL_VUE: pnp_web_modal_vue,
  PNP_NO_MODAL_ANGULAR: pnp_web_no_modal_angular,
  PNP_NO_MODAL_NEXTJS: pnp_web_no_modal_nextjs,
  PNP_NO_MODAL_REACT: pnp_web_no_modal_react,
  PNP_NO_MODAL_VUE: pnp_web_no_modal_vue,
  PNP_NO_MODAL_HTML: pnp_web_no_modal_html,
  PNP_ANDROID: pnp_android,
  PNP_IOS: pnp_ios,
  PNP_REACT_NATIVE: pnp_react_native,
  PNP_FLUTTER: pnp_flutter,
  PNP_UNITY: pnp_unity,
  SFA_WEB_ANGULAR: sfa_web_angular,
  SFA_WEB_NEXTJS: sfa_web_nextjs,
  SFA_WEB_REACT: sfa_web_react,
  SFA_WEB_VUE: sfa_web_vue,
  SFA_WEB_HTML: sfa_web_html,
  SFA_REACT_NATIVE: sfa_react_native,
  SFA_ANDROID: sfa_android,
  SFA_IOS: sfa_ios,
  SFA_NODE: sfa_node,
  MPC_CORE_KIT_ANGULAR: mpc_core_kit_angular,
  MPC_CORE_KIT_NEXTJS: mpc_core_kit_nextjs,
  MPC_CORE_KIT_REACT: mpc_core_kit_react,
  MPC_CORE_KIT_VUE: mpc_core_kit_vue,
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
      sdkDefault = SDKS_PNP[0].key;
      sdkChoices = SDKS_PNP;

      switch (finalValues.sdk) {
        case PNP_ANDROID:
          frameworkDefault = LANGS_ANDROID[0].key;
          frameworkChoices = LANGS_ANDROID;
          break;
        case PNP_IOS:
          frameworkDefault = LANGS_IOS[0].key;
          frameworkChoices = LANGS_IOS;
          break;
        case PNP_REACT_NATIVE:
          frameworkDefault = LANGS_REACT_NATIVE[0].key;
          frameworkChoices = LANGS_REACT_NATIVE;
          break;
        case PNP_FLUTTER:
          frameworkDefault = LANGS_FLUTTER[0].key;
          frameworkChoices = LANGS_FLUTTER;
          break;
        case PNP_UNITY:
          frameworkDefault = LANGS_UNITY[0].key;
          frameworkChoices = LANGS_UNITY;
          break;
        default:
          frameworkDefault = LANGS_WEB[0].key;
          frameworkChoices = LANGS_WEB;
      }
    } else {
      sdkDefault = SDKS_CORE_KIT[0].key;
      sdkChoices = SDKS_CORE_KIT;

      switch (finalValues.sdk) {
        case MPC_CORE_KIT:
          frameworkDefault = LANGS_WEB_MPC_CORE_KIT[0].key;
          frameworkChoices = LANGS_WEB_MPC_CORE_KIT;
          break;
        case SFA_ANDROID:
          frameworkDefault = LANGS_ANDROID[0].key;
          frameworkChoices = LANGS_ANDROID;
          break;
        case SFA_IOS:
          frameworkDefault = LANGS_IOS[0].key;
          frameworkChoices = LANGS_IOS;
          break;
        case SFA_REACT_NATIVE:
          frameworkDefault = LANGS_REACT_NATIVE[0].key;
          frameworkChoices = LANGS_REACT_NATIVE;
          break;
        case SFA_NODE:
          frameworkDefault = LANGS_NODE[0].key;
          frameworkChoices = LANGS_NODE;
          break;
        default:
          frameworkDefault = LANGS_WEB[0].key;
          frameworkChoices = LANGS_WEB;
      }
    }

    this.options = {
      product: {
        displayName: "Select a Web3Auth Product to build upon",
        default: PRODUCTS[0].key,
        type: "product_selection",
        choices: PRODUCTS,
      },
      sdk: {
        displayName: "Select the SDK you want to use",
        default: sdkDefault,
        type: "dropdown",
        choices: sdkChoices,
      },
      framework: {
        displayName: "Select a Platform/ Framework",
        default: frameworkDefault,
        type: "dropdown",
        choices: frameworkChoices,
      },
    };

    let selectedSDK;

    if (WEB_SDKS.includes(finalValues.sdk)) {
      if (!WEB_FRAMEWORKS.includes(finalValues.framework)) {
        finalValues.framework = WEB_FRAMEWORKS[0];
      }
      if (finalValues.sdk === MPC_CORE_KIT && finalValues.framework === HTML) {
        finalValues.framework = WEB_FRAMEWORKS[0];
      }
      selectedSDK = `${finalValues.sdk}_${finalValues.framework}`;
    } else {
      selectedSDK = finalValues.sdk;
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
    };
  },
};

export default builder;
