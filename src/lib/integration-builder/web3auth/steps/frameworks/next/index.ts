import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import {
  getChainRpcImport,
  getConnectCode,
  getConstructorCode,
  getCoreConstructorCode,
  getOpenloginAdapter,
  PLACEHOLDERS,
} from "../../../commonSnippets";
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
    const replacementAggregator = new ReplaceFileAggregator();

    if (customLogin === "yes" || customAuthentication === "yes") {
      const coreConstructorCode = getCoreConstructorCode(chain);

      const connectRes = getConnectCode(customLogin === "yes", customAuthentication === "yes");

      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes", customLogin === "yes");
      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );

      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/nextjs/custom-auth/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/custom-auth/App.tsx"],
        "web3auth/nextjs/custom-auth/App.tsx",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      filenames.push("web3auth/nextjs/custom-auth/App.tsx");
      filenames.push("web3auth/nextjs/custom-auth/package.json");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/package.json", range: "6-8" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "11" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "23-25" }),
        });
      }

      steps.push(
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "20" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "34-52" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "28" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "57-66" }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "68-75" }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/nextjs/custom-auth/App.tsx", range: "77-84" }),
        }
      );
    }

    if (customLogin === "no" && customAuthentication === "no") {
      const { code } = getConstructorCode(whitelabel === "yes", chain);

      newFiles["web3auth/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/App.tsx"],
        "web3auth/nextjs/App.tsx",
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );
      filenames.push("web3auth/nextjs/App.tsx");
      filenames.push("web3auth/nextjs/package.json");

      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/nextjs/App.tsx"],
        "web3auth/nextjs/App.tsx",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
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
