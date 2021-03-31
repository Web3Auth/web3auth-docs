import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const openLoginIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "OpenLogin",

  // Options that will be displayed in the UI for selection
  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum"],
    },
    lang: {
      displayName: "Language/Framework",
      default: "HTML",
      choices: ["HTML"],
    },
  },

  // Return available options when user selects a value, .e.g there're integrations with Conflux for React and Vue, but not for Android
  getAvailableOptions(optionKey, optionValue) {
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        availableOptions.push({ lang: "HTML" });
        break;
      case "lang":
        availableOptions.push({ chain: "Ethereum" });
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
