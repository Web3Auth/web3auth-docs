import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const torusWalletIntegrationBuilder: IntegrationBuilder = {
  displayName: "Torus Wallet",

  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum"],
    },
    lang: {
      displayName: "Language/Framework",
      default: "React",
      choices: ["React", "Vue"],
    },
  },

  getAvailableOptions(optionKey, optionValue) {
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        availableOptions.push({ lang: "React" }, { lang: "Vue" });
        break;
      case "lang":
        availableOptions.push({ chain: "Ethereum" });
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  build(values: Record<string, string>) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];

    if (values.lang === "React") {
      filenames.push("react/App.js", "react/index.js");
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "react/App.js", range: "2" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "react/App.js", range: "13-16" },
        },
        {
          ...STEPS.triggerLogin,
          pointer: { filename: "react/App.js", range: "17" },
        },
        {
          ...STEPS.integrateWithWeb3,
          pointer: { filename: "react/App.js", range: "19-22" },
        }
      );
    } else if (values.lang === "Vue") {
      filenames.push("vue/components/Home.vue", "vue/App.vue", "vue/main.js");
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "vue/components/Home.vue", range: "19" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "vue/components/Home.vue", range: "33-34" },
        },
        {
          ...STEPS.triggerLogin,
          pointer: { filename: "vue/components/Home.vue", range: "35" },
        },
        {
          ...STEPS.integrateWithWeb3,
          pointer: { filename: "vue/components/Home.vue", range: "36-42" },
        }
      );
    }

    return {
      filenames: filenames.map((it) => `wallet/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer
          ? { ...it.pointer, filename: `wallet/${it.pointer.filename}` }
          : undefined,
      })),
    };
  },
};

export default torusWalletIntegrationBuilder;
