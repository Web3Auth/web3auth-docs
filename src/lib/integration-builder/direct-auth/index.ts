import { IntegrationBuilder } from "../interfaces";

const directAuthIntegrationBuilder: IntegrationBuilder = {
  displayName: "DirectAuth",

  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum", "Conflux"],
    },
    lang: {
      displayName: "Language/Framework",
      default: "React",
      choices: ["React", "Vue", "iOS", "Android"],
    },
  },

  getAvailableOptions(optionKey, optionValue) {
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        availableOptions.push({ lang: "React" }, { lang: "Vue" });
        if (optionValue === "Ethereum")
          availableOptions.push({ lang: "iOS" }, { lang: "Android" });
        break;
      case "lang":
        availableOptions.push({ chain: "Ethereum" });
        if (optionValue === "React" || optionValue === "Vue")
          availableOptions.push({ chain: "Conflux" });
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  build(values) {
    return {
      filenames: ["App.js", "redirect.html", "sw.js"].map(
        (it) => `direct-auth/${it}`
      ),
      steps: [],
    };
  },
};

export default directAuthIntegrationBuilder;
