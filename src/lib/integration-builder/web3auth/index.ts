import { DisplayChoice, IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const CHAINS: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  // { key: "avax", displayName: "Avalanche" },
  // { key: "zksync", displayName: "ZK Sync" },
  // { key: "arbitrum", displayName: "Arbitrum" },
  // { key: "luna", displayName: "Terra" },
  // { key: "xtz", displayName: "Tezos" },
  // { key: "dot", displayName: "Polkadot" },
  // { key: "near", displayName: "Near" },
  // { key: "klay", displayName: "Klaytn" },
  // { key: "optimism", displayName: "Optimism" },
  // { key: "starknet", displayName: "StarkNet" },
  // { key: "starkex", displayName: "StarkEx" },
];

const LANGS: DisplayChoice[] = [
  { key: "html", displayName: "HTML/JS" },
  { key: "react", displayName: "React" },
  { key: "vue", displayName: "Vue" },
  // { key: "next", displayName: "Next JS" },
  // { key: "angular", displayName: "Angular" },
  // { key: "android", displayName: "Android" },
  { key: "ios", displayName: "iOS/Swift" },
  // { key: "react-native", displayName: "React Native" },
  // { key: "flutter", displayName: "Flutter" },
];

const TOGGLE_CHOICES: DisplayChoice[] = [
  { key: "no", displayName: "No" },
  { key: "yes", displayName: "Yes" },
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
    customLogin: {
      displayName: "Custom Login UI",
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
    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];
    if (values.lang === "html") {
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
      };
    } else if (values.lang === "ios") {
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
        customLogin: {
          displayName: "Custom Login UI",
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

    STEPS.framework[values.lang].build({ ...values, filenames, files: newFiles, steps, chain: values.chain });
    STEPS.chains[values.chain].build({ ...values, filenames, files: newFiles, steps });

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
