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
import * as webpackIssues from "./webpackIssues.mdx";

const STEPS = toSteps({
  buildingApp,
  webpackIssues,
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

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

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

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/react/App.tsx"] = replacementAggregator.replaceFileVariable(
      files["frameworks/react/App.tsx"],
      "frameworks/react/App.tsx",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
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
        filenames.push("chains/solana/solanaRPC.ts");
        filenames.push("frameworks/react/config-overrides.js");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkexRPC.ts");
        filenames.push("frameworks/react/config-overrides.js");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknetRPC.ts");
        filenames.push("chains/starknet/ArgentAccount.json");
        filenames.push("frameworks/react/starknet/config-overrides.js");
        break;
      case "tezos":
        filenames.push("chains/tezos/tezosRPC.ts");
        filenames.push("frameworks/react/config-overrides.js");
        break;
      default:
        filenames.push(evmFramework === "ethers" ? "chains/evm/ethersRPC.ts" : "chains/evm/web3RPC.ts");
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
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/solana/solanaRPC.ts", range: "1-4" }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.installationStarkEx,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starkex/starkexRPC.ts", range: "1-7" }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.installationStarkNet,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starknet/starknetRPC.ts", range: "1-9" }),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.installationTezos,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/tezos/tezosRPC.ts", range: "1-6" }),
        });
        break;
      default:
        steps.push({
          ...STEPS.installationEVM,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: evmFramework === "ethers" ? "chains/evm/ethersRPC.ts" : "chains/evm/web3RPC.ts",
            range: "1-2",
          }),
        });
        filenames.push();
    }

    if (customAuthentication === "yes" || whitelabel === "yes" || chain === "starkex" || chain === "starknet" || chain === "tezos") {
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

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react/App.tsx", range: "23-24" }),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "39",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/react/App.tsx",
          range: "48",
        }),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/solana/solanaRPC.ts",
            range: "13-21",
          }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.starkExRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starkex/starkexRPC.ts",
            range: "20-39",
          }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starknet/starknetRPC.ts",
            range: "18-37",
          }),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.tezosRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/tezos/tezosRPC.ts",
            range: "17-26",
          }),
        });
        break;
      default:
        if (evmFramework === "ethers") {
          steps.push({
            ...STEPS.evmRPCFunctions,
            pointer: replacementAggregator.rangeOffsetEditor({
              filename: evmFramework === "ethers" ? "chains/evm/ethersRPC.ts" : "chains/evm/web3RPC.ts",
              range: "10-18",
            }),
          });
        } else {
          steps.push({
            ...STEPS.evmRPCFunctions,
            pointer: replacementAggregator.rangeOffsetEditor({
              filename: "chains/evm/web3RPC.ts",
              range: "10-18",
            }),
          });
        }
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/react/App.tsx",
        range: "57",
      }),
    });

    return { filenames, files, steps };
  },
};

export default reactSteps;
