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
      default: "React",
      choices: ["React", "Vue"],
    },
  },

  // Return available options when user selects a value, .e.g there're integrations with Conflux for React and Vue, but not for Android
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

  // Build integrations based on input values
  build(values: Record<string, string>) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];

    if (values.lang === "React") {
      filenames.push("react/App.js", "react/index.js"); // Show code files in browsers

      // Add markdown steps
      steps.push(
        {
          ...STEPS.step1,
          pointer: { filename: "react/App.js", range: "7-9" }, // this step will point to react/App,js at lines 7-9
        },
        {
          ...STEPS.step2,
          pointer: { filename: "react/App.js", range: "11-13" },
        },
        {
          ...STEPS.step3,
          pointer: { filename: "react/App.js", range: "7-9" },
        },
        {
          ...STEPS.step4,
          pointer: { filename: "react/App.js", range: "11-13" },
        }
      );
    } else if (values.lang === "Vue") {
      filenames.push("vue/components/Home.vue", "vue/App.vue", "vue/main.js"); // Show code in browsers

      // Add markdown steps
      steps.push(
        {
          ...STEPS.step1,
          pointer: { filename: "vue/App.vue", range: "9-11" },
        },
        {
          ...STEPS.step2,
          pointer: { filename: "vue/App.vue", range: "13-15" },
        },
        {
          ...STEPS.step3,
          pointer: { filename: "vue/App.vue", range: "9-11" },
        },
        {
          ...STEPS.step4,
          pointer: { filename: "vue/App.vue", range: "13-15" },
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
