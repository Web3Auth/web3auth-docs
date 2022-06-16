import {
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
import * as installationTezos from "../common/installation/installationTezos.mdx";
import * as instantiateSDK from "../common/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../common/instantiateSDKWhitelabeled.mdx";
import * as login from "../common/login.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/registerApp.mdx";
import * as evmRPCFunctions from "../common/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../common/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../common/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../common/rpcFunctions/starkNetRPCFunctions.mdx";
import * as tezosRPCFunctions from "../common/rpcFunctions/tezosRPCFunctions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as buildingApp from "./buildingApp.mdx";

const STEPS = toSteps({
  buildingApp,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
  installationTezos,
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
  getUserInfo,
  evmRPCFunctions,
  solanaRPCFunctions,
  starkExRPCFunctions,
  starkNetRPCFunctions,
  tezosRPCFunctions,
  logout,
});

const nextjsSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
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

    const RPCFunctionsButtonsReact = getRPCFunctionsButtonsReact(chain);
    newFiles["frameworks/nextjs/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/nextjs/App.tsx"],
      "frameworks/nextjs/App.tsx",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsReact
    );

    filenames.push("frameworks/nextjs/App.tsx");
    filenames.push("frameworks/nextjs/package.json");
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solana.ts");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkex.ts");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknet.ts");
        filenames.push("chains/starknet/ArgentAccount.json");
        break;
      case "tezos":
        filenames.push("chains/tezos/tezos.ts");
        break;
      default:
        filenames.push("chains/evm/evm.ts");
    }
    filenames.push("frameworks/nextjs/index.tsx");
    filenames.push("frameworks/nextjs/global.css");

    steps.push({
      ...STEPS.buildingApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "1-2" }),
    });

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
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starkex/starkex.ts", range: "1-7" }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.installationStarkNet,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starknet/starknet.ts", range: "1-9" }),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.installationTezos,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/tezos/tezos.ts", range: "1-6" }),
        });
        break;
      default:
        steps.push({
          ...STEPS.installationEVM,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/evm/evm.ts", range: "1-2" }),
        });
    }

    if (customAuthentication === "yes" || whitelabel === "yes" || chain === "starkex" || chain === "starknet" || chain === "tezos") {
      steps.push(
        {
          ...STEPS.installationCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/package.json", range: "12-13" }),
        },
        {
          ...STEPS.importModulesCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "2-3" }),
        }
      );
    } else {
      steps.push(
        {
          ...STEPS.installation,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/package.json", range: "12-13" }),
        },
        {
          ...STEPS.importModules,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "2-3" }),
        }
      );
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "6" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "15-16" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "18-19" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "15-16" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "18-19" }),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/nextjs/App.tsx", range: "22-23" }),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "37",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/nextjs/App.tsx",
          range: "46",
        }),
      }
    );

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
            range: "20-39",
          }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starknet/starknet.ts",
            range: "18-37",
          }),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.tezosRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/tezos/tezos.ts",
            range: "17-26",
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
        filename: "frameworks/nextjs/App.tsx",
        range: "55",
      }),
    });

    return { filenames, files, steps };
  },
};

export default nextjsSteps;
