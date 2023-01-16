/* eslint-disable camelcase */
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import android from "./android";
import angular from "./angular";
import {
  CHAINS,
  CHAINS_HTML,
  CHAINS_MOBILE,
  CUSTOM_AUTH,
  CUSTOM_AUTH_MOBILE,
  EVM,
  EVM_LIBRARY,
  GAMING,
  HTML,
  LANGS,
  MFA,
  MOBILE,
  REACT_NATIVE,
  RN_MODE,
  TOGGLE,
  WEB3AUTH_NETWORK,
  YES,
} from "./choices";
import flutter from "./flutter";
import highlight from "./highlight";
import html from "./html";
import ios from "./ios";
import next from "./nextjs";
import react from "./react";
import react_native from "./react-native";
import unity from "./unity";
import vue from "./vue";

const frameworks = {
  HTML: html,
  REACT: react,
  NEXT: next,
  VUE: vue,
  IOS: ios,
  ANDROID: android,
  FLUTTER: flutter,
  ANGULAR: angular,
  REACT_NATIVE: react_native,
  UNITY: unity,
};

const builder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Web3Auth",

  // Options that will be displayed in the UI for selection
  options: {
    lang: {
      displayName: "Platform",
      default: LANGS[0].key,
      type: "dropdown",
      choices: LANGS,
    },
    chain: {
      displayName: "Chain",
      default: CHAINS[0].key,
      type: "dropdown",
      choices: CHAINS,
    },
    evmFramework: {
      displayName: "EVM Library",
      default: EVM_LIBRARY[0].key,
      type: "dropdown",
      choices: EVM_LIBRARY,
    },
    customAuth: {
      displayName: "Custom Auth",
      default: CUSTOM_AUTH[0].key,
      type: "dropdown",
      choices: CUSTOM_AUTH,
    },
    mfa: {
      displayName: "MFA",
      default: MFA[0].key,
      type: "dropdown",
      choices: MFA,
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: TOGGLE[0].key,
      type: "toggle",
      choices: TOGGLE,
    },
    useModal: {
      displayName: "Use W3A Modal",
      default: TOGGLE[1].key,
      type: "toggle",
      choices: TOGGLE,
    },
    web3AuthNetwork: {
      displayName: "Web3Auth Network",
      default: WEB3AUTH_NETWORK[0].key,
      type: "dropdown",
      choices: WEB3AUTH_NETWORK,
    },
    rnMode: {
      displayName: "Workflow",
      default: RN_MODE[0].key,
      type: "dropdown",
      choices: RN_MODE,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>, stepIndex: number) {
    const finalValues = values;

    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];

    // Language/Framework
    this.options = {
      lang: {
        displayName: "Platform",
        default: LANGS[0].key,
        type: "dropdown",
        choices: LANGS,
      },
    };

    if (!(finalValues.lang in MOBILE || finalValues.lang in GAMING)) {
      this.options = {
        ...this.options,
        useModal: {
          displayName: "Use W3A Modal",
          default: TOGGLE[0].key,
          type: "toggle",
          choices: TOGGLE,
        },
      };
    }

    // React Native Workflow
    if (finalValues.lang === REACT_NATIVE) {
      this.options = {
        ...this.options,
        rnMode: {
          displayName: "Workflow",
          default: RN_MODE[0].key,
          type: "dropdown",
          choices: RN_MODE,
        },
      };
    }

    // Blockchain
    if (finalValues.lang === HTML) {
      this.options = {
        ...this.options,
        chain: {
          displayName: "Chain",
          default: CHAINS_HTML[0].key,
          type: "dropdown",
          choices: CHAINS_HTML,
        },
      };
    } else if (finalValues.lang in MOBILE) {
      this.options = {
        ...this.options,
        chain: {
          displayName: "Chain",
          default: CHAINS_MOBILE[0].key,
          type: "dropdown",
          choices: CHAINS_MOBILE,
        },
      };
    } else if (!(finalValues.lang in GAMING)) {
      this.options = {
        ...this.options,
        chain: {
          displayName: "Chain",
          default: CHAINS[0].key,
          type: "dropdown",
          choices: CHAINS,
        },
      };
    }

    // EVM Chain Framework
    if (finalValues.chain in EVM && !(finalValues.lang in MOBILE || finalValues.lang in GAMING)) {
      this.options = {
        ...this.options,
        evmFramework: {
          displayName: "EVM Library",
          default: EVM_LIBRARY[0].key,
          type: "dropdown",
          choices: EVM_LIBRARY,
        },
      };
    }

    // Custom Auth
    if (finalValues.lang in MOBILE || finalValues.lang in GAMING) {
      this.options = {
        ...this.options,
        customAuth: {
          displayName: "Custom Auth",
          default: CUSTOM_AUTH_MOBILE[0].key,
          type: "dropdown",
          choices: CUSTOM_AUTH_MOBILE,
        },
      };
    } else if (finalValues.useModal !== YES) {
      this.options = {
        ...this.options,
        customAuth: {
          displayName: "Custom Auth",
          default: CUSTOM_AUTH_MOBILE[0].key,
          type: "dropdown",
          choices: CUSTOM_AUTH_MOBILE,
        },
      };
    } else {
      this.options = {
        ...this.options,
        customAuth: {
          displayName: "Custom Auth",
          default: CUSTOM_AUTH[0].key,
          type: "dropdown",
          choices: CUSTOM_AUTH,
        },
      };
    }

    // WhiteLabel & MFA
    this.options = {
      ...this.options,
      mfa: {
        displayName: "MFA",
        default: MFA[0].key,
        type: "dropdown",
        choices: MFA,
      },
      whitelabel: {
        displayName: "Whitelabel",
        default: TOGGLE[0].key,
        type: "toggle",
        choices: TOGGLE,
      },
      web3AuthNetwork: {
        displayName: "Web3Auth Network",
        default: WEB3AUTH_NETWORK[0].key,
        type: "dropdown",
        choices: WEB3AUTH_NETWORK,
      },
    };

    frameworks[finalValues.lang].build({ ...finalValues, filenames, files: newFiles, steps, chain: finalValues.chain });

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
