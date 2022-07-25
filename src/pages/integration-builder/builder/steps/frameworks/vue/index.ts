import {
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  getRPCFunctionsButtonsVue,
  getRPCFunctionsReturnsVue,
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
import * as installationEthers from "../common/installation/installationEthers.mdx";
import * as installationWeb3 from "../common/installation/installationWeb3.mdx";
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
  installationEthers,
  installationWeb3,
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

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles["frameworks/vue/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/package.json"],
      "frameworks/vue/package.json",
      PLACEHOLDERS.PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctions = getRPCFunctions(chain);
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsButtonsVue = getRPCFunctionsButtonsVue(chain);
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsVue
    );

    const RPCFunctionsReturnsVue = getRPCFunctionsReturnsVue(chain);
    newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["frameworks/vue/Home.vue"],
      "frameworks/vue/Home.vue",
      PLACEHOLDERS.RPC_FUNCTIONS_RETURNS_VUE,
      RPCFunctionsReturnsVue
    );

    filenames.push(`frameworks/vue/Home.vue`);
    filenames.push("frameworks/vue/package.json");
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solanaRPC.ts");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkexRPC.ts");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknetRPC.ts");
        filenames.push("chains/starknet/ArgentAccount.json");
        break;
      case "tezos":
        filenames.push("chains/tezos/tezosRPC.ts");
        break;
      default:
        filenames.push(evmFramework === "ethers" ? "chains/evm/ethersRPC.ts" : "chains/evm/web3RPC.ts");
    }
    filenames.push("frameworks/vue/vue.config.js");
    filenames.push("frameworks/vue/App.vue");

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "3" }),
      },
      {
        ...STEPS.webpackIssues,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/vue.config.js", range: "6-13" }),
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
        if (evmFramework === "ethers") {
          steps.push({
            ...STEPS.installationEthers,
            pointer: replacementAggregator.rangeOffsetEditor({
              filename: "chains/evm/ethersRPC.ts",
              range: "1-2",
            }),
          });
        } else {
          steps.push({
            ...STEPS.installationWeb3,
            pointer: replacementAggregator.rangeOffsetEditor({
              filename: "chains/evm/web3RPC.ts",
              range: "1-2",
            }),
          });
        }
    }

    if (customAuthentication === "yes" || whitelabel === "yes" || chain === "starkex" || chain === "starknet" || chain === "tezos") {
      steps.push(
        {
          ...STEPS.installationCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.importModulesCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "19-21" }),
        }
      );
    } else {
      steps.push(
        {
          ...STEPS.installation,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.importModules,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "19-21" }),
        }
      );
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "33" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "35-36" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "42-43" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "35-36" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "42-43" }),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "45-46" }),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/vue/Home.vue",
          range: "61",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/vue/Home.vue",
          range: "69",
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
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: evmFramework === "ethers" ? "chains/evm/ethersRPC.ts" : "chains/evm/web3RPC.ts",
            range: "10-18",
          }),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/vue/Home.vue",
        range: "78",
      }),
    });

    return { filenames, files, steps };
  },
};

export default htmlSteps;
