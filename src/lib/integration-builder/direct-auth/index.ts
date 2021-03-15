import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const directAuthIntegrationBuilder: IntegrationBuilder = {
  displayName: "DirectAuth",

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
        // if (optionValue === "Ethereum")
        //   availableOptions.push({ lang: "iOS" }, { lang: "Android" });
        break;
      case "lang":
        availableOptions.push({ chain: "Ethereum" });
        // if (optionValue === "React" || optionValue === "Vue")
        //   availableOptions.push({ chain: "Conflux" });
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  build(values) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];

    if (values.lang === "React") {
      filenames.push("react/App.js", "react/index.js");
      steps.push(
        {
          ...STEPS.installWebSDK,
          pointer: { filename: "react/App.js", range: "2" },
        },
        {
          ...STEPS.instantiateWebSDK,
          pointer: { filename: "react/App.js", range: "137-143" },
        },
        {
          ...STEPS.serveWebSw,
          pointer: { filename: "web/sw.js" },
        },
        {
          ...STEPS.serveWebRedirect,
          pointer: { filename: "web/redirect.html" },
        },
        {
          ...STEPS.triggerWebLogin,
          pointer: { filename: "react/App.js", range: "158-163" },
        }
      );
    } else if (values.lang === "Vue") {
      filenames.push("vue/App.vue", "vue/main.js");
      steps.push(
        {
          ...STEPS.installWebSDK,
          pointer: { filename: "vue/App.vue", range: "50" },
        },
        {
          ...STEPS.instantiateWebSDK,
          pointer: { filename: "vue/App.vue", range: "272-277" },
        },
        {
          ...STEPS.serveWebSw,
          pointer: { filename: "web/sw.js" },
        },
        {
          ...STEPS.serveWebRedirect,
          pointer: { filename: "web/redirect.html" },
        },
        {
          ...STEPS.triggerWebLogin,
          pointer: { filename: "vue/App.vue", range: "210-217" },
        }
      );
    }

    filenames.push("web/sw.js", "web/redirect.html");

    return {
      filenames: filenames.map((it) => `direct-auth/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer
          ? { ...it.pointer, filename: `direct-auth/${it.pointer.filename}` }
          : undefined,
      })),
    };
  },
};

export default directAuthIntegrationBuilder;
