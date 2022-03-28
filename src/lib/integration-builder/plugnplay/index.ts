import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const AVAILABLE_EXAMPLES = {
  Ethereum: {
    langs: ["HTML", "Android", "iOS"],
  },
  Solana: {
    langs: ["React"],
  },
  Polygon: {
    langs: ["React"],
  },
  "Binance Smart Chain": {
    langs: ["React"],
  },
  Avalanche: {
    langs: ["React"],
  },
  ZkSync: {
    langs: ["React"],
  },
  Arbitrum: {
    langs: ["React"],
  },
};

const AVAILABLE_LANGS = {
  React: {
    examples: ["Solana", "Polygon", "Binance Smart Chain", "Avalanche", "ZkSync", "Arbitrum"],
  },
  HTML: {
    examples: ["Ethereum"],
  },
  Android: {
    examples: ["Ethereum"],
  },
  iOS: {
    examples: ["Ethereum"],
  },
};

const plugnplayIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Plug n Play",

  // Options that will be displayed in the UI for selection
  options: {
    lang: {
      displayName: "Language/Framework",
      default: "HTML",
      choices: ["HTML", "React", "Android", "iOS"],
    },
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum", "Solana", "Polygon", "Binance Smart Chain", "Avalanche", "ZkSync", "Arbitrum"],
    },
    customAuth: {
      displayName: "Custom Auth",
      default: "off",
      choices: ["on", "off"],
    },
    customLogin: {
      displayName: "Custom Login UI",
      default: "off",
      choices: ["on", "off"],
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: "off",
      choices: ["on", "off"],
    },
  },

  // Return available options when user selects a value,
  // .e.g there're integrations with Conflux for React and Vue, but not for Android
  getAvailableOptions(optionKey, optionValue) {
    // console.log("options", optionKey, optionValue);
    const availableOptions: Record<string, string>[] = [];
    const availableLangExamples = AVAILABLE_LANGS[optionValue]?.examples;
    const availableChainLangs = AVAILABLE_EXAMPLES[optionValue]?.langs;
    switch (optionKey) {
      case "chain":
        for (let i = 0; i < availableChainLangs.length; i += 1) {
          const lang = availableChainLangs[i];
          availableOptions.push({ lang });
        }
        break;
      case "lang":
        for (let i = 0; i < availableLangExamples.length; i += 1) {
          const example = availableLangExamples[i];
          availableOptions.push({ chain: example });
        }
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>) {
    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];
    const { chain, lang } = values;

    switch (lang) {
      case "HTML":
        // template filenames that your integration page will use
        filenames.push("web/index.html"); // Show code files in browsers

        // variable replacements come here


        // Add markdown steps
        steps.push(
          {
            ...STEPS.installSDK,
            pointer: { filename: "web/index.html", range: "20" },
          },
          {
            ...STEPS.registerApp,
            pointer: { filename: "web/index.html", range: "27-31" },
          },
          {
            ...STEPS.instantiateSDK,
            pointer: { filename: "web/index.html", range: "27-31" },
          },
          {
            ...STEPS.retrievePrivateKey,
            pointer: { filename: "web/index.html", range: "33-43" },
          },
          {
            ...STEPS.triggerLogin,
            pointer: { filename: "web/index.html", range: "55-56" },
          },
          {
            ...STEPS.connectWithWeb3,
            pointer: { filename: "web/index.html", range: "46-52" },
          },
          {
            ...STEPS.logout,
            pointer: { filename: "web/index.html", range: "59" },
          }
        );
      default:
    }

    // Add blockchain steps and files here. After integration steps have been settled
    switch (chain) {
      default:
    }

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `open-login/${it}`),
      files: newFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `open-login/${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default plugnplayIntegrationBuilder;
