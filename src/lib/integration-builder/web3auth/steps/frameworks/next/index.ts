import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import { getConstructorCode, PLACEHOLDERS } from "../../../commonSnippets";
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

const nextjsSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    const newFiles = files;
    // replace stuff in Home.vue
    const { code } = getConstructorCode(whitelabel === "yes", chain);

    const replacementAggregator = new ReplaceFileAggregator();

    newFiles["web3auth/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/nextjs/App.tsx"],
      "web3auth/nextjs/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      code
    );

    let walletProvider = "ethereum";
    let chainNamespace = "eip155";
    if (chain === "sol") {
      walletProvider = "solana";
      chainNamespace = "solana";
    }

    if (customAuthentication === "yes") {
      filenames.push("web3auth/nextjs/custom-auth/App.tsx");
      filenames.push("web3auth/nextjs/custom-auth/package.json");

      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
`
      );

      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        "chain-namespace",
        `
          chainConfig: { chainNamespace: ${chainNamespace} },
        `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/package.json", range: "6-8" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "27" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "17-19" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "38-56" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "23-30" }),
        },
        {
          ...STEPS.loginWithFirebaseAuth,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "61-92" }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "94-101" }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "103-110" }),
        }
      );
    }

    if (customLogin === "yes") {
      filenames.push("web3auth/nextjs/custom-ui/App.tsx");
      filenames.push("web3auth/nextjs/custom-ui/package.json");

      newFiles["web3auth/nextjs/custom-ui/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-ui/App.tsx"],
        "web3auth/nextjs/custom-ui/App.tsx",
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
`
      );

      newFiles["web3auth/nextjs/custom-ui/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-ui/App.tsx"],
        "web3auth/nextjs/custom-ui/App.tsx",
        "chain-namespace",
        `
          chainConfig: { chainNamespace: ${chainNamespace} },
        `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/package.json", range: "6-8" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "23" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "15-17" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "36-54" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "21-28" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "59-66" }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "68-75" }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-ui/App.tsx", range: "77-84" }),
        }
      );
    }

    if (customLogin === "no" && customAuthentication === "no") {
      filenames.push("web3auth/nextjs/App.tsx");
      filenames.push("web3auth/web/input.js");
      filenames.push("web3auth/nextjs/package.json");

      newFiles["web3auth/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/App.tsx"],
        "web3auth/nextjs/App.tsx",
        "wallet-provider",
        `import { getAccounts, getBalance, sendTransaction, signMessage, signTransaction } from "./${walletProvider}";
      `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/package.json", range: "6-7" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "15" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "14-16" }),
        });
      }

      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "18" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "27-44" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "21" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "49-56" }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "58-65" }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/App.tsx", range: "67-74" }),
        }
      );
    }

    filenames.push("web3auth/nextjs/App.css");

    return { filenames, files, steps };
  },
};

export default nextjsSteps;
