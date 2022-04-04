import { replaceFileVariable, toSteps } from "../../../../utils";
import * as getUserInfo from "./get-user-info.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as logout from "./logout.mdx";
import * as registerApp from "./register-app.mdx";
import * as subscribe from "./subscribe.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
  getUserInfo,
  logout,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    let walletProvider = "ethereum";
    let chainNamespace = "eip155";
    if (chain === "sol") {
      walletProvider = "solana";
      chainNamespace = "solana";
    }

    if (whitelabel === "yes") {
      // replace stuff in input.js
      files["web3auth/web/input.js"] = replaceFileVariable(
        files["web3auth/web/input.js"],
        "const web3AuthCtorParams = {};",
        `
export const web3AuthParams = {
    chainConfig: { chainNamespace: "${chainNamespace}" },
    clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
    uiConfig: {
      appLogo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.svg",
      loginMethodsOrder: ["twitter", "facebook", "google"],
      theme: "dark",
    },
};
`
      );
    }

    if (customAuthentication === "yes") {
      // replace stuff in input.js
    }

    if (customLogin === "no") {
      filenames.push("web3auth/react/App.tsx");
      filenames.push("web3auth/web/input.js");
      filenames.push("web3auth/react/package.json");

      files["web3auth/react/App.tsx"] = replaceFileVariable(
        files["web3auth/react/App.tsx"],
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
      `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/react/package.json", range: "6-7" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/input.js", range: "4" },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/react/App.tsx", range: "15" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/react/App.tsx", range: "24-41" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/react/App.tsx", range: "18" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/react/App.tsx", range: "46-53" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/react/App.tsx", range: "55-62" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/react/App.tsx", range: "64-71" },
        }
      );
    } else {
      filenames.push("web3auth/react/custom-ui/App.tsx");
      filenames.push("web3auth/react/custom-ui/package.json");

      files["web3auth/react/custom-ui/App.tsx"] = replaceFileVariable(
        files["web3auth/react/custom-ui/App.tsx"],
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
`
      );

      files["web3auth/react/custom-ui/App.tsx"] = replaceFileVariable(
        files["web3auth/react/custom-ui/App.tsx"],
        "chain-namespace",
        `
          chainConfig: { chainNamespace: ${chainNamespace} },
        `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/react/custom-ui/package.json", range: "6-8" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "23" },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "15-17" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "36-54" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "21-28" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "59-66" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "68-75" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/react/custom-ui/App.tsx", range: "77-84" },
        }
      );
    }

    filenames.push("web3auth/react/App.css");

    return { filenames, files, steps };
  },
};

export default reactSteps;
