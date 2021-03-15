import { IntegrationBuilder } from "../interfaces";

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

    if (values.lang === "React") {
      filenames.push("react/App.js", "react/index.js");
    } else if (values.lang === "Vue") {
      filenames.push("vue/components/Home.vue", "vue/App.vue", "vue/main.js");
    }

    return {
      filenames: filenames.map((it) => `torus-wallet/${it}`),
      steps: [],
    };
  },
};

export default torusWalletIntegrationBuilder;
