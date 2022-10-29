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
import * as installationSolana from "../common/installation/installationSolana.mdx";
import * as installationStarkEx from "../common/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../common/installation/installationStarkNet.mdx";
import * as installationTezos from "../common/installation/installationTezos.mdx";
import * as installationWeb3 from "../common/installation/installationWeb3.mdx";
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

    const FILENAME_VUE_CONFIG = "frameworks/vue/vue.config.js";
    const FILENAME_APP_VUE = "frameworks/vue/App.vue";
    const FILENAME_HOME_VUE = "frameworks/vue/Home.vue";
    const FILENAME_PACKAGE_JSON = "frameworks/vue/package.json";
    const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
    const FILENAME_STARKEXRPC = "chains/starkex/starkexRPC.ts";
    const FILENAME_STARKNETRPC = "chains/starknet/starknetRPC.ts";
    const FILENAME_TEZOSRPC = "chains/tezos/tezosRPC.ts";
    const FILENAME_WEB3RPC = "chains/evm/web3RPC.ts";
    const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.ts";
    const FILENAME_ARGENT_ACCOUNT = "chains/starknet/ArgentAccount.json";

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles[FILENAME_PACKAGE_JSON] = replacementAggregator.replaceFileVariable(
      files[FILENAME_PACKAGE_JSON],
      FILENAME_PACKAGE_JSON,
      PLACEHOLDERS.PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctions = getRPCFunctions(chain);
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsButtonsVue = getRPCFunctionsButtonsVue(chain);
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsVue
    );

    const RPCFunctionsReturnsVue = getRPCFunctionsReturnsVue(chain);
    newFiles[FILENAME_HOME_VUE] = replacementAggregator.replaceFileVariable(
      files[FILENAME_HOME_VUE],
      FILENAME_HOME_VUE,
      PLACEHOLDERS.RPC_FUNCTIONS_RETURNS_VUE,
      RPCFunctionsReturnsVue
    );

    filenames.push(`frameworks/vue/Home.vue`);
    filenames.push(FILENAME_PACKAGE_JSON);
    switch (chain) {
      case "sol":
        filenames.push(FILENAME_SOLANARPC);
        break;
      case "starkex":
        filenames.push(FILENAME_STARKEXRPC);
        break;
      case "starknet":
        filenames.push(FILENAME_STARKNETRPC);
        filenames.push(FILENAME_ARGENT_ACCOUNT);
        break;
      case "tezos":
        filenames.push(FILENAME_TEZOSRPC);
        break;
      default:
        filenames.push(evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
    }
    filenames.push(FILENAME_VUE_CONFIG);
    filenames.push(FILENAME_APP_VUE);

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "buildingApp"),
      },
      {
        ...STEPS.webpackIssues,
        pointer: replacementAggregator.highlightRange(FILENAME_VUE_CONFIG, files[FILENAME_VUE_CONFIG], "webpackIssues"),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.installationSolana,
          pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "installationSolana"),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.installationStarkEx,
          pointer: replacementAggregator.highlightRange(FILENAME_STARKEXRPC, files[FILENAME_STARKEXRPC], "installationStarkEx"),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.installationStarkNet,
          pointer: replacementAggregator.highlightRange(FILENAME_STARKNETRPC, files[FILENAME_STARKNETRPC], "installationStarkNet"),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.installationTezos,
          pointer: replacementAggregator.highlightRange(FILENAME_TEZOSRPC, files[FILENAME_TEZOSRPC], "installationTezos"),
        });
        break;
      default:
        if (evmFramework === "ethers") {
          steps.push({
            ...STEPS.installationEthers,
            pointer: replacementAggregator.highlightRange(FILENAME_ETHERSRPC, files[FILENAME_ETHERSRPC], "installationEthers"),
          });
        } else {
          steps.push({
            ...STEPS.installationWeb3,
            pointer: replacementAggregator.highlightRange(FILENAME_WEB3RPC, files[FILENAME_WEB3RPC], "installationWeb3"),
          });
        }
    }

    steps.push(
      {
        ...STEPS.installation,
        pointer: replacementAggregator.highlightRange(FILENAME_PACKAGE_JSON, files[FILENAME_PACKAGE_JSON], "installation"),
      },
      {
        ...STEPS.importModules,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "importModules"),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "registerApp"),
      },
      {
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "instantiateSDK"),
      }
    );

    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "whiteLabeling"),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "customAuthenticationStep"),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "initialize"),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "login"),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "getUserInfo"),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "solanaRPCFunctions"),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.starkExRPCFunctions,
          pointer: replacementAggregator.highlightRange(FILENAME_STARKEXRPC, files[FILENAME_STARKEXRPC], "starkExRPCFunctions"),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.highlightRange(FILENAME_STARKNETRPC, files[FILENAME_STARKNETRPC], "starkNetRPCFunctions"),
        });
        break;
      case "tezos":
        steps.push({
          ...STEPS.tezosRPCFunctions,
          pointer: replacementAggregator.highlightRange(FILENAME_TEZOSRPC, files[FILENAME_TEZOSRPC], "tezosRPCFunctions"),
        });
        break;
      default:
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.highlightRange(
            evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC,
            files[evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC],
            "evmRPCFunctions"
          ),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(FILENAME_HOME_VUE, files[FILENAME_HOME_VUE], "logout"),
    });

    return { filenames, files, steps };
  },
};

export default htmlSteps;
