import React from "react";
import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import * as Steps from "./steps";

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
          title: "Install Torus Embed SDK",
          content: <Steps.InstallSDK />,
          pointer: { filename: "react/App.js", range: "2" },
        },
        {
          title: "Instantiate the SDK",
          content: <Steps.InstantiateSDK />,
          pointer: { filename: "react/App.js", range: "13-16" },
        },
        {
          title: "Trigger user login",
          content: <Steps.TriggerLogin />,
          pointer: { filename: "react/App.js", range: "17" },
        },
        {
          title: "Integrate with Web3/ether.js",
          content: <Steps.IntegrateWithWeb3 />,
          pointer: { filename: "react/App.js", range: "19-22" },
        }
      );
    } else if (values.lang === "Vue") {
      filenames.push("vue/components/Home.vue", "vue/App.vue", "vue/main.js");
      steps.push(
        {
          title: "Install Torus Embed SDK",
          content: <Steps.InstallSDK />,
          pointer: { filename: "vue/components/Home.vue", range: "19" },
        },
        {
          title: "Instantiate the SDK",
          content: <Steps.InstantiateSDK />,
          pointer: { filename: "vue/components/Home.vue", range: "33-34" },
        },
        {
          title: "Trigger user login",
          content: <Steps.TriggerLogin />,
          pointer: { filename: "vue/components/Home.vue", range: "35" },
        },
        {
          title: "Integrate with Web3/ether.js",
          content: <Steps.IntegrateWithWeb3 />,
          pointer: { filename: "vue/components/Home.vue", range: "36-42" },
        }
      );
    }

    return {
      filenames: filenames.map((it) => `torus-wallet/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer
          ? { ...it.pointer, filename: `torus-wallet/${it.pointer.filename}` }
          : undefined,
      })),
    };
  },
};

export default torusWalletIntegrationBuilder;
