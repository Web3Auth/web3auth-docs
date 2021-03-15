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
      choices: ["React", "Vue", "Android"],
    },
  },

  getAvailableOptions(optionKey, optionValue) {
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        availableOptions.push(
          { lang: "React" },
          { lang: "Vue" },
          { lang: "Android" }
        );
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

    if (values.lang === "React" || values.lang === "Vue") {
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
      } else {
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
    } else if (values.lang === "Android") {
      filenames.push(
        "android/build.gradle",
        "android/app/build.gradle",
        "android/app/MainActivity.java"
      );
      steps.push(
        {
          ...STEPS.addAndroidJitpack,
          pointer: { filename: "android/build.gradle", range: "17" },
        },
        {
          ...STEPS.installAndroidSDK,
          pointer: { filename: "android/app/build.gradle", range: "50" },
        },
        {
          ...STEPS.registerAndroidRedirect,
          pointer: { filename: "android/app/build.gradle", range: "16-20" },
        },
        {
          ...STEPS.instantiateAndroidSDK,
          pointer: {
            filename: "android/app/MainActivity.java",
            range: "56-57",
          },
        },
        {
          ...STEPS.triggerAndroidLogin,
          pointer: {
            filename: "android/app/MainActivity.java",
            range: "74-83",
          },
        }
      );
    }

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
