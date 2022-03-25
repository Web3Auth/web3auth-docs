import CommonSteps from "../common/steps";
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const directAuthIntegrationBuilder: IntegrationBuilder = {
  displayName: "CustomAuth & Login UI",

  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: ["Ethereum", "Solana", "Starkware"],
    },
    lang: {
      displayName: "Language/Framework",
      default: "HTML",
      choices: ["HTML", "React", "Vue", "Android", "iOS"],
    },
  },

  getAvailableOptions(optionKey, optionValue) {
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        if (optionValue === "Ethereum")
          availableOptions.push({ lang: "HTML" }, { lang: "React" }, { lang: "Vue" }, { lang: "Android" }, { lang: "iOS" });
        else if (optionValue === "Starkware") availableOptions.push({ lang: "React" });
        else {
          availableOptions.push({ lang: "HTML" });
        }
        break;
      case "lang":
        availableOptions.push({ chain: "Ethereum" });
        if (optionValue === "HTML") availableOptions.push({ chain: "Solana" });
        if (optionValue === "React") availableOptions.push({ chain: "Starkware" });
        break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  build(values) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];

    if (values.lang === "HTML" || values.lang === "React" || values.lang === "Vue") {
      if (values.lang === "HTML") {
        if (values.chain === "Solana") {
          filenames.push("web/solana/index.html");
          steps.push(
            {
              ...STEPS.installWebSDK,
              pointer: { filename: "web/solana/index.html", range: "18" },
            },
            { ...STEPS.registerVerifier },
            {
              ...STEPS.instantiateWebSDK,
              pointer: { filename: "web/solana/index.html", range: "26-30" },
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
              ...STEPS.connectWithSolana,
              pointer: { filename: "web/solana/index.html", range: "32-34" },
            },
            {
              ...STEPS.triggerWebLogin,
              pointer: { filename: "web/solana/index.html", range: "42-47" },
            },
            {
              ...STEPS.getSolanaKeys,
              pointer: { filename: "web/solana/index.html", range: "48-61" },
            },
            {
              ...STEPS.useSolanaKeys,
              pointer: { filename: "web/solana/index.html", range: "48-61" },
            }
          );
        } else {
          filenames.push("web/index.html");
          steps.push(
            {
              ...STEPS.installWebSDK,
              pointer: { filename: "web/index.html", range: "18" },
            },
            { ...STEPS.registerVerifier },
            {
              ...STEPS.instantiateWebSDK,
              pointer: { filename: "web/index.html", range: "24-30" },
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
              pointer: { filename: "web/index.html", range: "37-54" },
            }
          );
        }
      } else if (values.lang === "React") {
        if (values.chain === "Ethereum") {
          filenames.push("react/App.js", "react/index.js");
          steps.push(
            {
              ...STEPS.installWebSDK,
              pointer: { filename: "react/App.js", range: "2" },
            },
            { ...STEPS.registerVerifier },
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
        } else if (values.chain === "Starkware") {
          filenames.push("react/starkware/App.js");
          steps.push(
            {
              ...STEPS.installWebSDK,
              pointer: { filename: "react/starkware/App.js", range: "3" },
            },
            { ...STEPS.registerVerifier },
            {
              ...STEPS.instantiateWebSDK,
              pointer: { filename: "react/starkware/App.js", range: "152-158" },
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
              pointer: { filename: "react/starkware/App.js", range: "173-178" },
            },
            {
              ...CommonSteps.getStarkKey,
              pointer: { filename: "react/starkware/App.js", range: "213-216" },
            },
            {
              ...CommonSteps.signMessageWithStarkKey,
              pointer: { filename: "react/starkware/App.js", range: "255-269" },
            },
            {
              ...CommonSteps.validateMessageWithStarkKey,
              pointer: { filename: "react/starkware/App.js", range: "271-279" },
            }
          );
        }
      } else {
        filenames.push("vue/App.vue", "vue/main.js");
        steps.push(
          {
            ...STEPS.installWebSDK,
            pointer: { filename: "vue/App.vue", range: "50" },
          },
          { ...STEPS.registerVerifier },
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
      filenames.push("android/build.gradle", "android/app/build.gradle", "android/app/MainActivity.java");
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
    } else if (values.lang === "iOS") {
      filenames.push("ios/Package.swift", "ios/ContentView.swift", "ios/SceneDelegate.swift");
      steps.push(
        {
          ...STEPS.installSwiftPackage,
          pointer: { filename: "ios/Package.swift", range: "3-8" },
        },
        {
          ...STEPS.setupSwiftUrlSchema,
          pointer: { filename: "ios/SceneDelegate.swift", range: "18-23" },
        },
        {
          ...STEPS.setupSwiftUniversalLinks,
          pointer: { filename: "ios/SceneDelegate.swift", range: "9-15" },
        },
        {
          ...STEPS.triggerSwiftLogin,
          pointer: { filename: "ios/ContentView.swift", range: "21-32" },
        }
      );
    }

    return {
      filenames: filenames.map((it) => `customauth/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `customauth/${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default directAuthIntegrationBuilder;
