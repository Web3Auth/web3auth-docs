import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import {
  getChainRpcImport,
  getConnectCode,
  getConstructorCode,
  getCoreConstructorCode,
  getInitCode,
  getOpenloginAdapter,
  getRPCFunctions,
  getRPCFunctionsUIButtonsReact,
  getReactPackageJson,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import * as initialize from "../common/initializing.mdx";
// web
import * as installationWeb from "../common/installation.mdx";
import * as buildingApp from "../react/buildingApp.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as subscribe from "../common/subscribe.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as usingW3AFunctions from "../common/using-w3a-functions.mdx";
import * as logout from "../common/logout.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
  // loginWithFirebaseAuth,
  usingW3AFunctions,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
  buildingApp,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    const newFiles = files;

    const { code } = getConstructorCode(whitelabel === "yes", chain);

    const replacementAggregator = new ReplaceFileAggregator();

    if (["starknet"].includes(chain)) {
      return { filenames, files, steps };
    }

    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      code
    );

    const initRes = getInitCode(whitelabel === "yes");
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    const rpcFunctions = getRPCFunctions(chain);
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      rpcFunctions.code
    );

    const reactPackageJson = getRPCFunctionsUIButtonsReact(chain);
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_REACT_BUTTONS,
      reactPackageJson.code
    );

    const rpcFunctionsUIButtonsReact = getReactPackageJson(chain);
    newFiles["web3auth/react/package.json"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/package.json"],
      "web3auth/react/package.json",
      PLACEHOLDERS.REACT_PACKAGE_JSON,
      rpcFunctionsUIButtonsReact.code
    );

    filenames.push("web3auth/react/package.json");

    if (customAuthentication === "yes" || customLogin === "yes") {
      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/react/custom/App.tsx"],
        "web3auth/react/custom/App.tsx",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      const connectRes = getConnectCode(customLogin === "yes", customAuthentication === "yes");
      newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/react/custom/App.tsx"],
        "web3auth/react/custom/App.tsx",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes", customLogin === "yes");
      newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/react/custom/App.tsx"],
        "web3auth/react/custom/App.tsx",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      const coreConstructorCode = getCoreConstructorCode(chain);
      newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/react/custom/App.tsx"],
        "web3auth/react/custom/App.tsx",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );
      filenames.push("web3auth/react/custom/App.tsx");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/package.json", range: "6-9" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/custom/App.tsx", range: "8" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/custom/App.tsx", range: "19" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/custom/App.tsx", range: "20-22" }),
        });
      }
      steps.push(
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/custom/App.tsx",
            range: "31-49",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/custom/App.tsx", range: "25" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/custom/App.tsx",
            range: "54-63",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/custom/App.tsx",
            range: "65-72",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/custom/App.tsx",
            range: "74-81",
          }),
        }
      );
    }

    if (customAuthentication === "no" && customLogin === "no") {
      filenames.push(`web3auth/react/App.tsx`);
      filenames.push(`web3auth/react/App.css`);
      filenames.push(`web3auth/react/index.tsx`);
      filenames.push(`web3auth/react/config-overrides.js`);
      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
        files["web3auth/react/App.tsx"],
        "web3auth/react/App.tsx",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      steps.push(
        {
          ...STEPS.buildingApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/index.tsx", range: "1-11" }),
        },
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/package.json", range: "6-7" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/App.tsx", range: "8" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/App.tsx", range: "17-18" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/App.tsx", range: "21" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "33-51",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/App.tsx", range: "27" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "56-63",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "65-72",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "74-81",
          }),
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default reactSteps;
