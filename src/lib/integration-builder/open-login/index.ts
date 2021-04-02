import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const AVAILABLE_EXAMPLES = {
  "Ethereum": {
    langs: ["HTML"]
  },
   "Solana": {
     langs: ["REACT"]
   },
  "Polygon": {
    langs: ["REACT"]
  },
  "Binance Smart Chain": {
    langs: ["REACT"]
  },
  "Avalanche": {
    langs: ["REACT"]
  },
}

const AVAILABLE_LANGS = {
  "REACT": {
    examples: ["Solana","Polygon", "Binance Smart Chain", "Avalanche" ]
  },
  "HTML": {
    examples: ["Ethereum"]
 },
}

const openLoginIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "OpenLogin",

  // Options that will be displayed in the UI for selection
  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum","Solana","Polygon", "Binance Smart Chain","Avalanche"],
    },
    lang: {
      displayName: "Language/Framework",
      default: "HTML",
      choices: ["HTML", "REACT"],
    },
  },

  // Return available options when user selects a value,
  // .e.g there're integrations with Conflux for React and Vue, but not for Android
  getAvailableOptions(optionKey, optionValue) {
    console.log("options", optionKey, optionValue)
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        const availableChainLangs = AVAILABLE_EXAMPLES[optionValue].langs;
        for(let i = 0; i < availableChainLangs.length; i++) {
          let lang = availableChainLangs[i];
          availableOptions.push({ lang });
        }
        break;
      case "lang":
        const availableLangExamples = AVAILABLE_LANGS[optionValue].examples;
        for(let i = 0; i < availableLangExamples.length; i++) {
          let example = availableLangExamples[i];
          availableOptions.push({ chain: example });
        }
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  // Build integrations based on input values
  build(values: Record<string, string>) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];
    const { chain, lang } = values;
    if(chain === "Solana"  && lang === "REACT") {
      filenames.push("solana/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "solana/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "solana/login.js", range: "28-32" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "solana/login.js", range: "61-75" },
        },
        {
          ...STEPS.generateSolanaKey,
          pointer: { filename: "solana/login.js", range: "46-49" },
        },
        {
          ...STEPS.connectSolana,
          pointer: { filename: "solana/login.js", range: "51-59" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "solana/login.js", range: "77-81" },
        },
      );


    } else if(chain === "Polygon" && lang === "REACT") {
      filenames.push("polygon/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "polygon/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "polygon/login.js", range: "50-54" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "polygon/login.js", range: "64-77" },
        },
        {
          ...STEPS.connectPolygon,
          pointer: { filename: "polygon/login.js", range: "16-45" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "polygon/login.js", range: "79-83" },
        },
      );


    } else if(chain === "Binance Smart Chain" && lang === "REACT") {
      filenames.push("binance/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "binance/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "binance/login.js", range: "14-18" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "binance/login.js", range: "18-52" },
        },
        {
          ...STEPS.connectBinance,
          pointer: { filename: "binance/login.js", range: "30-36" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "binance/login.js", range: "54-58" },
        },
      );


    } else if(chain === "Avalanche" && lang === "REACT") {
      filenames.push("avalanche/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "avalanche/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "avalanche/login.js", range: "14-18" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "avalanche/login.js", range: "46-60" },
        },
        {
          ...STEPS.connectAvalanche,
          pointer: { filename: "avalanche/login.js", range: "30-44" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "avalanche/login.js", range: "62-66" },
        },
      );


    } else if(chain === "Ethereum" && lang === "HTML") {
      filenames.push("web/index.html"); // Show code files in browsers

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
    }


    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `open-login/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer
          ? { ...it.pointer, filename: `open-login/${it.pointer.filename}` }
          : undefined,
      })),
    };
  },
};

export default openLoginIntegrationBuilder;
