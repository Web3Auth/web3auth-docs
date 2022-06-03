import {
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
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

    const ConnectCode = getConnectCode(customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CONNECT,
      ConnectCode
    );

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.INIT,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/package.json"],
      "frameworks/nextjs/package.json",
      PLACEHOLDERS.PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctions = getRPCFunctions(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsUIButtonsReact = getRPCFunctionsUIButtonsReact(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsUIButtonsReact
    );

    steps.push({
      ...STEPS.buildingApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/index.tsx", range: "1-11" }),
    });

    filenames.push("frameworks/nextjs/App.tsx");
    filenames.push("frameworks/nextjs/package.json");
    filenames.push("frameworks/nextjs/index.tsx");
    filenames.push("frameworks/nextjs/global.css");

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

    return { filenames, files, steps };
  },
};

export default nextjsSteps;
