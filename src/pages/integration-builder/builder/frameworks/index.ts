/* eslint-disable camelcase */
import { DisplayChoice, IntegrationBuilder, IntegrationStep } from "../interfaces";
import android from "./android";
import angular from "./angular";
import flutter from "./flutter";
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

function highlightStart(fileContent: string, variableName: string): string {
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes(`HIGHLIGHTSTART-${variableName}`)) {
      contentByLine[i] = "// highlight-start";
    }
  }
  return contentByLine.join("\n");
}
function highlightEnd(fileContent: string, variableName: string): string {
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes(`HIGHLIGHTEND-${variableName}`)) {
      contentByLine[i] = "// highlight-end";
    }
  }
  return contentByLine.join("\n");
}

function removeHighlightCode(fileContent: string): string {
  // 2. line that this occurs on
  const contentByLine = fileContent.split(`\n`);
  for (let i = 0; i < contentByLine.length; i += 1) {
    if (contentByLine[i].includes("HIGHLIGHT")) {
      contentByLine.splice(i, 1);
    }
  }
  return contentByLine.join("\n");
}

function highlightSection(fileContent: string, variableName: string): string {
  const highlightStartFile = highlightStart(fileContent, variableName);
  const highlightedFile = highlightEnd(highlightStartFile, variableName);
  return removeHighlightCode(highlightedFile);
}

function setHighlight(stepIndex, filenames, files, steps) {
  const { pointer } = steps[stepIndex];
  const newFiles = files;
  if (pointer) {
    for (let i = 0; i < filenames.length; i++) {
      if (filenames[i] === pointer.filename) {
        newFiles[filenames[i]] = highlightSection(pointer.fileContent || files[filenames[i]], pointer.variableName);
      }
      newFiles[filenames[i]] = removeHighlightCode(files[filenames[i]]);
    }
  }

  return newFiles;
}

export const CHAINS: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "starkex", displayName: "StarkEx" },
  { key: "starknet", displayName: "StarkNet" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "optimism", displayName: "Optimism" },
  { key: "cronos", displayName: "Cronos" },
  { key: "harmony", displayName: "Harmony" },
  { key: "celo", displayName: "Celo" },
  { key: "moonbeam", displayName: "Moonbeam" },
  { key: "moonriver", displayName: "Moonriver" },
  { key: "tezos", displayName: "Tezos" },
];

export const CHAINS_HTML: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "optimism", displayName: "Optimism" },
  { key: "cronos", displayName: "Cronos" },
  { key: "harmony", displayName: "Harmony" },
  { key: "celo", displayName: "Celo" },
  { key: "moonbeam", displayName: "Moonbeam" },
  { key: "moonriver", displayName: "Moonriver" },
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

const web3authIntegrationBuilder: IntegrationBuilder = {
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
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    mfaParams: {
      displayName: "MFA",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    usingEmailPasswordless: {
      displayName: "Using Email Passwordless",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    rnWorkflowMode: {
      displayName: "Workflow",
      default: RN_MODE_CHOICES[0].key,
      type: "dropdown",
      choices: RN_MODE_CHOICES,
    },
    evmFramework: {
      displayName: "EVM Chain Framework",
      default: EVM_FRAMEWORK_CHOICES[0].key,
      type: "dropdown",
      choices: EVM_FRAMEWORK_CHOICES,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>, stepIndex: number) {
    const finalValues = values;

    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];
    enum EVM {
      "eth",
      "matic",
      "bnb",
      "avax",
      "arbitrum",
      "optimism",
      "cronos",
      "harmony",
      "celo",
      "moonbeam",
      "moonriver",
    }
    enum Mobile {
      "android",
      "ios",
      "react-native",
      "flutter",
      "unity",
    }
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
    } else if (!(values.lang in Mobile)) {
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
        default: TOGGLE_CHOICES[0].key,
        type: "toggle",
        choices: TOGGLE_CHOICES,
      },
      whitelabel: {
        displayName: "Whitelabel",
        default: TOGGLE_CHOICES[0].key,
        type: "toggle",
        choices: TOGGLE_CHOICES,
      },
    };

    if (values.lang in Mobile) {
      // this.options = {
      //   ...this.options,
      //   usingEmailPasswordless: {
      //     displayName: "Using Email Passwordless",
      //     default: TOGGLE_CHOICES[0].key,
      //     type: "toggle",
      //     choices: TOGGLE_CHOICES,
      //   },
      // };

      if (values.lang === "react-native") {
        this.options = {
          ...this.options,
          rnWorkflowMode: {
            displayName: "Workflow",
            default: RN_MODE_CHOICES[0].key,
            type: "dropdown",
            choices: RN_MODE_CHOICES,
          },
        };
      } else {
        this.options = {
          ...this.options,
          mfa: {
            displayName: "Multi Factor Authentication",
            default: TOGGLE_CHOICES[0].key,
            type: "toggle",
            choices: TOGGLE_CHOICES,
          },
        };
      }
    }

    this.options = {
      ...this.options,
      customAuthentication: {
        displayName: "Custom Authentication",
        default: TOGGLE_CHOICES[0].key,
        type: "toggle",
        choices: TOGGLE_CHOICES,
      },
      whitelabel: {
        displayName: "Whitelabel",
        default: TOGGLE_CHOICES[0].key,
        type: "toggle",
        choices: TOGGLE_CHOICES,
      },
    };
    if (values.chain in EVM && !(values.lang in Mobile)) {
      this.options = {
        ...this.options,
        evmFramework: {
          displayName: "EVM Chain Framework",
          default: EVM_FRAMEWORK_CHOICES[0].key,
          type: "dropdown",
          choices: EVM_FRAMEWORK_CHOICES,
        },
      };
    }

    frameworks[finalValues.lang].build({ ...finalValues, filenames, files: newFiles, steps, chain: finalValues.chain });

    const highlightedFiles = setHighlight(stepIndex, filenames, newFiles, steps);

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

export default web3authIntegrationBuilder;
