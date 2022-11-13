/* eslint-disable camelcase */
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import android from "./android";
import angular from "./angular";
import { CHAINS, CHAINS_HTML, EVM, EVM_FRAMEWORK, LANGS, MOBILE, RN_MODE, TOGGLE } from "./choices";
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
  html,
  react,
  next,
  vue,
  ios,
  android,
  flutter,
  angular,
  "react-native": react_native,
  unity,
};

const builder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Web3Auth",

  // Options that will be displayed in the UI for selection
  options: {
    lang: {
      displayName: "Language/Framework",
      default: LANGS[0].key,
      type: "dropdown",
      choices: LANGS,
    },
    chain: {
      displayName: "Blockchain",
      default: CHAINS[0].key,
      type: "dropdown",
      choices: CHAINS,
    },
    customAuthentication: {
      displayName: "Custom Authentication",
      default: TOGGLE[0].key,
      type: "toggle",
      choices: TOGGLE,
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: TOGGLE[0].key,
      type: "toggle",
      choices: TOGGLE,
    },
    mfaParams: {
      displayName: "MFA",
      default: TOGGLE[0].key,
      type: "toggle",
      choices: TOGGLE,
    },
    usingEmailPasswordless: {
      displayName: "Using Email Passwordless",
      default: TOGGLE[0].key,
      type: "toggle",
      choices: TOGGLE,
    },
    rnWorkflowMode: {
      displayName: "Workflow",
      default: RN_MODE[0].key,
      type: "dropdown",
      choices: RN_MODE,
    },
    evmFramework: {
      displayName: "EVM Chain Framework",
      default: EVM_FRAMEWORK[0].key,
      type: "dropdown",
      choices: EVM_FRAMEWORK,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>, stepIndex: number) {
    const finalValues = values;

    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];

    this.options = {
      lang: {
        displayName: "Language/Framework",
        default: LANGS[0].key,
        type: "dropdown",
        choices: LANGS,
      },
    };
    if (values.lang === "html") {
      this.options = {
        ...this.options,
        chain: {
          displayName: "Blockchain",
          default: CHAINS_HTML[0].key,
          type: "dropdown",
          choices: CHAINS_HTML,
        },
      };
    } else if (!(values.lang in MOBILE)) {
      this.options = {
        ...this.options,
        chain: {
          displayName: "Blockchain",
          default: CHAINS[0].key,
          type: "dropdown",
          choices: CHAINS,
        },
      };
    }
    this.options = {
      ...this.options,
      customAuthentication: {
        displayName: "Custom Authentication",
        default: TOGGLE[0].key,
        type: "toggle",
        choices: TOGGLE,
      },
      whitelabel: {
        displayName: "Whitelabel",
        default: TOGGLE[0].key,
        type: "toggle",
        choices: TOGGLE,
      },
    };

    if (values.lang in MOBILE) {
      // this.options = {
      //   ...this.options,
      //   usingEmailPasswordless: {
      //     displayName: "Using Email Passwordless",
      //     default: TOGGLE[0].key,
      //     type: "toggle",
      //     choices: TOGGLE,
      //   },
      // };

      if (values.lang === "react-native") {
        this.options = {
          ...this.options,
          rnWorkflowMode: {
            displayName: "Workflow",
            default: RN_MODE[0].key,
            type: "dropdown",
            choices: RN_MODE,
          },
        };
      } else {
        this.options = {
          ...this.options,
          mfa: {
            displayName: "Multi Factor Authentication",
            default: TOGGLE[0].key,
            type: "toggle",
            choices: TOGGLE,
          },
        };
      }
    }

    this.options = {
      ...this.options,
      customAuthentication: {
        displayName: "Custom Authentication",
        default: TOGGLE[0].key,
        type: "toggle",
        choices: TOGGLE,
      },
      whitelabel: {
        displayName: "Whitelabel",
        default: TOGGLE[0].key,
        type: "toggle",
        choices: TOGGLE,
      },
    };
    if (values.chain in EVM && !(values.lang in MOBILE)) {
      this.options = {
        ...this.options,
        evmFramework: {
          displayName: "EVM Chain Framework",
          default: EVM_FRAMEWORK[0].key,
          type: "dropdown",
          choices: EVM_FRAMEWORK,
        },
      };
    }

    frameworks[finalValues.lang].build({ ...finalValues, filenames, files: newFiles, steps, chain: finalValues.chain });

    const highlightedFiles = highlight(stepIndex, filenames, newFiles, steps);

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `${it}`),
      files: highlightedFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default builder;
