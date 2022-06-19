import { DisplayChoice, IntegrationBuilder, IntegrationStep } from "../interfaces";
import frameworks from "./frameworks/index";

export const CHAINS: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "optimism", displayName: "Optimism" },
  { key: "starkex", displayName: "StarkEx" },
  { key: "starknet", displayName: "StarkNet" },
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
];

export const TOGGLE_CHOICES: DisplayChoice[] = [
  { key: "no", displayName: "No" },
  { key: "yes", displayName: "Yes" },
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
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>) {
    const finalValues = values;
    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];

    if (values.lang === "android" || values.lang === "ios" || values.lang === "flutter") {
      this.options = {
        lang: {
          displayName: "Language/Framework",
          default: LANGS[0].key,
          type: "dropdown",
          choices: LANGS,
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
        dynamicConstructorParams: {
          displayName: "Dynamic Constructor Params",
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
      };
    } else if (values.lang === "html") {
      this.options = {
        lang: {
          displayName: "Language/Framework",
          default: LANGS[0].key,
          type: "dropdown",
          choices: LANGS,
        },
        chain: {
          displayName: "Blockchain",
          default: CHAINS_HTML[0].key,
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
      };
    } else if (values.lang === "react-native") {
      this.options = {
        lang: {
          displayName: "Language/Framework",
          default: LANGS[0].key,
          type: "dropdown",
          choices: LANGS,
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
        usingEmailPasswordless: {
          displayName: "Using Email Passwordless",
          default: TOGGLE_CHOICES[0].key,
          type: "toggle",
          choices: TOGGLE_CHOICES,
        },
        mode: {
          displayName: "Workflow",
          default: RN_MODE_CHOICES[0].key,
          type: "dropdown",
          choices: RN_MODE_CHOICES,
        },
      };
    } else {
      this.options = {
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
      };
    }

    frameworks[finalValues.lang].build({ ...finalValues, filenames, files: newFiles, steps, chain: finalValues.chain });

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `${it}`),
      files: newFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default web3authIntegrationBuilder;
