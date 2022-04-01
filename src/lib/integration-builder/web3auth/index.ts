import { DisplayChoice, IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const CHAINS: DisplayChoice[] = [
  { key: "eth", displayName: "Ethereum" },
  { key: "sol", displayName: "Solana" },
  { key: "matic", displayName: "Polygon" },
  { key: "bnb", displayName: "BNB Chain" },
  { key: "avax", displayName: "Avalanche" },
  { key: "zksync", displayName: "ZK Sync" },
  { key: "arbitrum", displayName: "Arbitrum" },
  { key: "luna", displayName: "Terra" },
  { key: "xtz", displayName: "Tezos" },
  { key: "dot", displayName: "Polkadot" },
  { key: "near", displayName: "Near" },
  { key: "klay", displayName: "Klaytn" },
  { key: "optimism", displayName: "Optimism" },
  { key: "starknet", displayName: "StarkNet" },
  { key: "starkex", displayName: "StarkEx" },
];

const LANGS: DisplayChoice[] = [
  { key: "html", displayName: "HTML/JS" },
  { key: "react", displayName: "React" },
  { key: "vue", displayName: "Vue" },
  { key: "next", displayName: "Next JS" },
  { key: "angular", displayName: "Angular" },
  { key: "android", displayName: "Android" },
  { key: "ios", displayName: "iOS/Swift" },
  { key: "react-native", displayName: "React Native" },
  { key: "flutter", displayName: "Flutter" },
];

const TOGGLE_CHOICES: DisplayChoice[] = [
  { key: "no", displayName: "No" },
  { key: "yes", displayName: "Yes" },
];

function replaceFileVariable(fileContent: string, variableName: string, replacement: string) {
  const exp = `\n *// REPLACE-${variableName}-\n *`;
  const re = new RegExp(exp, "gm");
  return fileContent.replace(re, replacement);
}

const web3authIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "Web3Auth",

  // Options that will be displayed in the UI for selection
  options: {
    lang: {
      displayName: "Language/Framework",
      default: LANGS[0].key,
      type: "dropdown",
      choices: LANGS,
    },
    chain: {
      displayName: "Blockchain",
      default: CHAINS[0].key,
      type: "dropdown",
      choices: CHAINS,
    },
    customAuthentication: {
      displayName: "Custom Authentication",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    customLogin: {
      displayName: "Custom Login UI",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
    whitelabel: {
      displayName: "Whitelabel",
      default: TOGGLE_CHOICES[0].key,
      type: "toggle",
      choices: TOGGLE_CHOICES,
    },
  },

  // Build integrations based on input values
  build(values: Record<string, string>, files: Record<string, string>) {
    const filenames: string[] = [];
    const newFiles = JSON.parse(JSON.stringify(files));
    const steps: IntegrationStep[] = [];
    const { chain, lang, whitelabel } = values;

    switch (lang) {
      case "html":
        // STEP 1 OF BUILDING A GUIDE
        // template filenames that your integration page will use
        filenames.push("web3auth/web/index.html"); // Show code files in browsers

        // STEP 2 variable replacements come here
        // TEMPLATE ON YOUR STATIC FILE IS /\/\/ REPLACE-.*-/g
        // OR // REPLACE-yourVariableHere-
        // tip: need to restart docusaurus for changes to static file uploads
        switch (chain) {
          case "eth":
            newFiles["web3auth/web/index.html"] = replaceFileVariable(
              newFiles["web3auth/web/index.html"],
              "const web3AuthCtorParams = {};",
              `        const web3AuthCtorParams = {
              chainConfig: { chainNamespace: "eip155" },
              clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
            };`
            );
            break;

          case "sol":
            newFiles["web3auth/web/index.html"] = replaceFileVariable(
              newFiles["web3auth/web/index.html"],
              "const web3AuthCtorParams = {};",
              `        const web3AuthCtorParams = {
              chainConfig: { chainNamespace: "solana" },
              clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
            };`
            );
            break;

          default:
            break;
        }

        // STEP 3
        // Add markdown steps
        steps.push(
          {
            ...STEPS.framework.HTML.installationWeb,
            pointer: { filename: "web3auth/web/index.html", range: "174" },
          },
          {
            ...STEPS.framework.HTML.registerApp,
            pointer: { filename: "web3auth/web/index.html", range: "184" },
          },
          {
            ...STEPS.framework.HTML.instantiate,
            pointer: { filename: "web3auth/web/index.html", range: "182-186" },
          },
          {
            ...STEPS.framework.HTML.subscribe,
            pointer: { filename: "web3auth/web/index.html", range: "204-224" },
          },
          {
            ...STEPS.framework.HTML.initialize,
            pointer: { filename: "web3auth/web/index.html", range: "190" },
          },
          {
            ...STEPS.framework.HTML.triggeringLogin,
            pointer: { filename: "web3auth/web/index.html", range: "226-235" },
          },
          {
            ...STEPS.framework.HTML.getUserInfo,
            pointer: { filename: "web3auth/web/index.html", range: "247-253" },
          },
          {
            ...STEPS.framework.HTML.logout,
            pointer: { filename: "web3auth/web/index.html", range: "237-245" },
          }
        );
        break;
      default:
        break;
    }

    // STEP 4
    // Add blockchain steps and files here. After integration steps have been settled
    switch (chain) {
      case "eth":
        filenames.push("eth/ethereum.js");

        steps.push({
          ...STEPS.chains.ETH.initialize,
          pointer: { filename: "eth/ethereum.js", range: "10-18" },
        });
        break;
      case "sol":
        filenames.push("sol/solana.ts");

        steps.push({
          ...STEPS.chains.SOL.initialize,
          pointer: { filename: "sol/solana.ts" },
        });
        break;
      default:
    }

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `${it}`),
      files: newFiles,
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer ? { ...it.pointer, filename: `${it.pointer.filename}` } : undefined,
      })),
    };
  },
};

export default web3authIntegrationBuilder;
