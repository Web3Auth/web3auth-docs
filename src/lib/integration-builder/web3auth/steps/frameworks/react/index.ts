import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import {
  getChainRpcImport,
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getOpenloginAdapter,
  getRPCFunctions,
  getRPCFunctionsUIButtonsReact,
  getReactPackageJson,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import * as initialize from "../common/initializing.mdx";
// web
import * as installation from "./installation.mdx";
import * as installationCustom from "./installationCustom.mdx";
import * as buildingApp from "./buildingApp.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as subscribe from "../common/subscribe.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as logout from "../common/logout.mdx";

const STEPS = toSteps({
  installation,
  installationCustom,
  registerApp,
  getUserInfo,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
  // loginWithFirebaseAuth,
  usingRPCFunctions,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
  buildingApp,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const { code } = getConstructorCode(whitelabel === "yes", chain);

    const replacementAggregator = new ReplaceFileAggregator();

    if (["starknet"].includes(chain)) {
      return { filenames, files, steps };
    }
    filenames.push("web3auth/react/package.json");
    filenames.push(`web3auth/react/index.tsx`);

    const reactPackageJson = getReactPackageJson(chain);
    newFiles["web3auth/react/package.json"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/package.json"],
      "web3auth/react/package.json",
      PLACEHOLDERS.REACT_PACKAGE_JSON,
      reactPackageJson.code
    );

    //Plug n Play Replacements

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

    const rpcFunctionsUIButtonsReact = getRPCFunctionsUIButtonsReact(chain);
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      rpcFunctionsUIButtonsReact.code
    );

    const chainImportRes = getChainRpcImport(chain);
    newFiles["web3auth/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/App.tsx"],
      "web3auth/react/App.tsx",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      chainImportRes.code
    );

    // Custom Authentication Replacements

    const rpcFunctionsCustom = getRPCFunctions(chain);
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      rpcFunctionsCustom.code
    );

    const rpcFunctionsUIButtonsReactCustom = getRPCFunctionsUIButtonsReact(chain);
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      rpcFunctionsUIButtonsReactCustom.code
    );

    const chainImportResCustom = getChainRpcImport(chain);
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      chainImportResCustom.code
    );

    const connectRes = getConnectCode(customAuthentication === "yes");
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.CONNECT,
      connectRes.code
    );

    const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginAdRes.code
    );

    const coreConstructorCode = getConstructorCode(whitelabel === "yes", chain);
    newFiles["web3auth/react/custom/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["web3auth/react/custom/App.tsx"],
      "web3auth/react/custom/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      coreConstructorCode.code
    );

    steps.push({
      ...STEPS.buildingApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/index.tsx", range: "1-11" }),
    });

    if (customAuthentication === "no") {
      filenames.push(`web3auth/react/App.tsx`);

      steps.push(
        {
          ...STEPS.installation,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/package.json", range: "6-11" }),
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
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "65-72",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "82-84",
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

    if (customAuthentication === "yes") {
      filenames.push("web3auth/react/custom/App.tsx");

      steps.push(
        {
          ...STEPS.installationCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/react/package.json", range: "6-11" }),
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
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/App.tsx",
            range: "65-72",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/react/custom/App.tsx",
            range: "82-84",
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

    filenames.push(`web3auth/react/App.css`);
    filenames.push(`web3auth/react/config-overrides.js`);

    return { filenames, files, steps };
  },
};

export default reactSteps;
