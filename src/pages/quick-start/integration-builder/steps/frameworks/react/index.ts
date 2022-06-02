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

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const ConnectCode = getConnectCode(customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.CONNECT,
      ConnectCode
    );

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.INIT,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/package.json"],
      "frameworks/react/package.json",
      PLACEHOLDERS.REACT_PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctions = getRPCFunctions(chain);
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsUIButtonsReact = getRPCFunctionsUIButtonsReact(chain);
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsUIButtonsReact
    );

    filenames.push("frameworks/react/App.tsx");
    filenames.push("frameworks/react/package.json");
    filenames.push("frameworks/react/App.css");
    filenames.push("frameworks/react/index.tsx");
    if (chain === "starknet") {
      filenames.push("frameworks/react/starknet/config-overrides.js");
    } else {
      filenames.push("frameworks/react/config-overrides.js");
    }

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/index.tsx", range: "1-11" }),
      },
      {
        ...STEPS.installation,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/package.json", range: "6-11" }),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "8" }),
      }
    );
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "17-18" }),
      });
    }
    steps.push(
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "19-20" }),
      },
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "27" }),
      },
      {
        ...STEPS.triggeringLogin,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "56-63",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "65-72",
        }),
      },
      {
        ...STEPS.usingRPCFunctions,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "82-84",
        }),
      },
      {
        ...STEPS.logout,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "74-81",
        }),
      }
    );

    return { filenames, files, steps };
  },
};

export default reactSteps;
