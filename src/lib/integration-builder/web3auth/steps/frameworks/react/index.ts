import { replaceFileVariable, toSteps } from "../../../../utils";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithFirebaseAuth from "./login-with-firebase-auth.mdx";
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
  loginWithFirebaseAuth,
  getUserInfo,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    const newFiles = files;

    const fileRoute = "web3auth/react";
    let walletProvider = "ethereum";
    let chainNamespace = "eip155";
    if (chain === "sol") {
      walletProvider = "solana";
      chainNamespace = "solana";
    }
    if (chain === "starkex") {
      walletProvider = "starkex";
      chainNamespace = "other";
    }
    filenames.push(`${fileRoute}/App.css`);

    if (whitelabel === "yes") {
      // replace stuff in input.js
      newFiles["web3auth/web/input.js"] = replaceFileVariable(
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
    } else {
      newFiles["web3auth/web/input.js"] = replaceFileVariable(
        files["web3auth/web/input.js"],
        "const web3AuthCtorParams = {};",
        `
            export const web3AuthParams = {
                chainConfig: { chainNamespace: "${chainNamespace}" },
                clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
            };
`
      );
    }

    if (chain === "starkex" || chain === "starknet") {
      return { filenames, files, steps };
    }

    if (customAuthentication === "yes") {
      filenames.push(`${fileRoute}/custom-auth/App.tsx`);
      filenames.push(`${fileRoute}/custom-auth/package.json`);

      newFiles[`${fileRoute}/custom-auth/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/custom-auth/App.tsx`],
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
`
      );

      newFiles[`${fileRoute}/custom-auth/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/custom-auth/App.tsx`],
        "chain-namespace",
        `
          chainConfig: { chainNamespace: ${chainNamespace} },
        `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: `${fileRoute}/custom-auth/package.json`, range: chain === "starkex" ? "6-12" : "6-8" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "27" },
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "17-19" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "38-56" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "23-30" },
        },
        {
          ...STEPS.loginWithFirebaseAuth,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "61-92" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "94-101" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: `${fileRoute}/custom-auth/App.tsx`, range: "103-110" },
        }
      );
    }

    if (customLogin === "yes") {
      filenames.push(`${fileRoute}/custom-ui/App.tsx`);
      filenames.push(`${fileRoute}/custom-ui/package.json`);

      newFiles[`${fileRoute}/custom-ui/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/custom-ui/App.tsx`],
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
`
      );
      newFiles[`${fileRoute}/custom-ui/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/custom-ui/App.tsx`],
        "chain-namespace",
        `
          chainConfig: { chainNamespace: ${chainNamespace} },
        `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: `${fileRoute}/custom-ui/package.json`, range: chain === "starkex" ? "6-12" : "6-8" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "23" },
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "15-17" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "36-54" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "21-28" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "59-66" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "68-75" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: `${fileRoute}/custom-ui/App.tsx`, range: "77-84" },
        }
      );
    }

    if (customLogin === "no" && customAuthentication === "no") {
      filenames.push(`${fileRoute}/App.tsx`);
      filenames.push("web3auth/web/input.js");
      filenames.push(`${fileRoute}/package.json`);

      let providerMethods = `getAccounts, getBalance, sendTransaction, signMessage, signTransaction`;
      if (chain === "starkex") {
        providerMethods = `getStarkHDAccount, onMintRequest, onDepositRequest, onWithdrawalRequest`;
      }

      newFiles[`${fileRoute}/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/App.tsx`],
        "wallet-provider",
        `import { ${providerMethods} } from "./${walletProvider}";
      `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: `${fileRoute}/package.json`, range: "6-10" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/input.js", range: "3" },
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: { filename: "web3auth/web/input.js", range: "1-25" },
        });
      }

      steps.push(
        {
          ...STEPS.instantiate,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "15" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "24-41" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "18" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "46-53" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "55-62" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "64-71" },
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default reactSteps;
