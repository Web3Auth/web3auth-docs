import {
  getChainRpcImport,
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getOpenloginAdapter,
  getReactPackageJson,
  getRPCFunctions,
  getRPCFunctionsUIButtonsReact,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as initialize from "../common/initializing.mdx";
// web
import * as installation from "../common/installation.mdx";
import * as installationCustom from "../common/installationCustom.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as buildingApp from "./buildingApp.mdx";

const STEPS = toSteps({
  installation,
  installationCustom,
  registerApp,
  getUserInfo,
  instantiate,
  initialize,
  triggeringLogin,
  // loginWithFirebaseAuth,
  usingRPCFunctions,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
  buildingApp,
});

const nextjsSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    filenames.push("frameworks/nextjs/package.json");
    filenames.push("frameworks/nextjs/index.tsx");

    const nextPackageJson = getReactPackageJson(chain);
    newFiles["frameworks/nextjs/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/package.json"],
      "frameworks/nextjs/package.json",
      PLACEHOLDERS.REACT_PACKAGE_JSON,
      nextPackageJson.code
    );

    const ConstructorCode = getConstructorCode(whitelabel === "yes", chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode.code
    );

    const initRes = getInitCode(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    const openloginRes = getOpenloginAdapter(whitelabel === "yes", false);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    const rpcFunctions = getRPCFunctions(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      rpcFunctions.code
    );

    const rpcFunctionsUIButtonsNext = getRPCFunctionsUIButtonsReact(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      rpcFunctionsUIButtonsNext.code
    );

    const chainImportRes = getChainRpcImport(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      chainImportRes.code
    );

    const connectRes = getConnectCode(customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CONNECT,
      connectRes.code
    );

    steps.push({
      ...STEPS.buildingApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/index.tsx", range: "1-11" }),
    });

    filenames.push("frameworks/nextjs/App.tsx");

    steps.push(
      {
        ...STEPS.installation,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/package.json", range: "6-11" }),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "8" }),
      }
    );
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "17-18" }),
      });
    }
    steps.push(
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "21" }),
      },
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "27" }),
      },
      {
        ...STEPS.triggeringLogin,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "56-63",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "65-72",
        }),
      },
      {
        ...STEPS.usingRPCFunctions,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "82-84",
        }),
      },
      {
        ...STEPS.logout,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "74-81",
        }),
      }
    );

    filenames.push("frameworks/nextjs/global.css");

    return { filenames, files, steps };
  },
};

export default nextjsSteps;
