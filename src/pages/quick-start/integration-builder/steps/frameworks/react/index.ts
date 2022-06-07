import {
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  getRPCFunctionsButtonsReact,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as customAuthenticationStep from "../common/customAuthenticationStep.mdx";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as importModules from "../common/importModules.mdx";
import * as importModulesCustom from "../common/importModulesCustom.mdx";
import * as initialize from "../common/initialize.mdx";
import * as installation from "../common/installation/installation.mdx";
import * as installationCustom from "../common/installation/installationCustom.mdx";
import * as installationEVM from "../common/installation/installationEVM.mdx";
import * as installationSolana from "../common/installation/installationSolana.mdx";
import * as installationStarkEx from "../common/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../common/installation/installationStarkNet.mdx";
import * as instantiateSDK from "../common/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../common/instantiateSDKWhitelabeled.mdx";
import * as login from "../common/login.mdx";
import * as loginCustom from "../common/loginCustom.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/registerApp.mdx";
import * as evmRPCFunctions from "../common/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../common/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../common/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../common/rpcFunctions/starkNetRPCFunctions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as buildingApp from "./buildingApp.mdx";
import * as webpackIssues from "./webpackIssues.mdx";

const STEPS = toSteps({
  buildingApp,
  webpackIssues,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
  installationEVM,
  installation,
  installationCustom,
  importModules,
  importModulesCustom,
  registerApp,
  instantiateSDK,
  instantiateSDKWhitelabeled,
  whiteLabeling,
  customAuthenticationStep,
  initialize,
  login,
  loginCustom,
  getUserInfo,
  evmRPCFunctions,
  solanaRPCFunctions,
  starkExRPCFunctions,
  starkNetRPCFunctions,
  logout,
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
      PLACEHOLDERS.CONNECT_CODE,
      ConnectCode
    );

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/package.json"],
      "frameworks/react/package.json",
      PLACEHOLDERS.PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctions = getRPCFunctions(chain);
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsButtonsReact = getRPCFunctionsButtonsReact(chain);
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsReact
    );

    filenames.push("frameworks/react/App.tsx");
    filenames.push("frameworks/react/package.json");
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solana.ts");
        filenames.push("frameworks/react/config-overrides.js");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkex.ts");
        filenames.push("frameworks/react/config-overrides.js");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknet.ts");
        filenames.push("chains/starknet/ArgentAccount.json");
        filenames.push("frameworks/react/starknet/config-overrides.js");
        break;
      default:
        filenames.push("chains/evm/evm.ts");
        filenames.push("frameworks/react/config-overrides.js");
    }
    filenames.push("frameworks/react/App.css");

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "1-2" }),
      },
      {
        ...STEPS.webpackIssues,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/package.json", range: "39-56" }),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.installationSolana,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/solana/solana.ts", range: "1-4" }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.installationStarkEx,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starkex/starkex.ts", range: "1-6" }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.installationStarkNet,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starknet/starknet.ts", range: "1-7" }),
        });
        break;
      default:
        steps.push({
          ...STEPS.installationEVM,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/evm/evm.ts", range: "1-2" }),
        });
    }

    if (customAuthentication === "yes" || whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.installationCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/package.json", range: "13-14" }),
        },
        {
          ...STEPS.importModulesCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "2-3" }),
        }
      );
    } else {
      steps.push(
        {
          ...STEPS.installation,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/package.json", range: "13-14" }),
        },
        {
          ...STEPS.importModules,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "2-3" }),
        }
      );
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "6" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "16-17" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "19-20" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "16-17" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "19-20" }),
      });
    }

    steps.push({
      ...STEPS.initialize,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "23-24" }),
    });

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.loginCustom,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "39-41",
        }),
      });
    } else {
      steps.push({
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "39-41",
        }),
      });
    }

    steps.push({
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/react/App.tsx",
        range: "44-51",
      }),
    });

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/solana/solana.ts",
            range: "13-21",
          }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.starkExRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starkex/starkex.ts",
            range: "24-34",
          }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starknet/starknet.ts",
            range: "25-35",
          }),
        });
        break;
      default:
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/evm/evm.ts",
            range: "10-18",
          }),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/react/App.tsx",
        range: "53-60",
      }),
    });

    return { filenames, files, steps };
  },
};

export default reactSteps;
