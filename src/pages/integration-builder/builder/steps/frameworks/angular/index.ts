import {
  getConstructorCodeAngular,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctionsAngular,
  getRPCFunctionsButtonsAngular,
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

const angularSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_APP_HTML = "frameworks/angular/app.component.html";
    const FILENAME_POLYFILLS = "frameworks/angular/polyfills.ts";
    const FILENAME_TSCONFIG = "frameworks/angular/tsconfig.json";
    const FILENAME_APP_CSS = "frameworks/angular/app.component.css";
    const FILENAME_APP_TS = "frameworks/angular/app.component.ts";
    const FILENAME_PACKAGE_JSON = "frameworks/angular/package.json";
    const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
    const FILENAME_STARKEXRPC = "chains/starkex/starkexRPC.ts";
    const FILENAME_STARKNETRPC = "chains/starknet/starknetRPC.ts";
    const FILENAME_TEZOSRPC = "chains/tezos/tezosRPC.ts";
    const FILENAME_WEB3RPC = "chains/evm/web3RPC.ts";
    const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.ts";
    const FILENAME_ARGENT_ACCOUNT = "chains/starknet/ArgentAccount.json";

    const ConstructorCodeAngular = getConstructorCodeAngular(chain, whitelabel === "yes");
    newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TS],
      FILENAME_APP_TS,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeAngular
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TS], FILENAME_APP_TS, PLACEHOLDERS.INIT_CODE, InitCode);

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TS],
      FILENAME_APP_TS,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TS],
      FILENAME_APP_TS,
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

    const RPCFunctionsAngular = getRPCFunctionsAngular(chain);
    newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TS],
      FILENAME_APP_TS,
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctionsAngular
    );

    const RPCFunctionsButtonsAngular = getRPCFunctionsButtonsAngular(chain);
    newFiles[FILENAME_APP_HTML] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_HTML],
      FILENAME_APP_HTML,
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsAngular
    );

    filenames.push(`frameworks/angular/app.component.ts`);
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
    filenames.push(FILENAME_APP_HTML);
    filenames.push(FILENAME_POLYFILLS);
    filenames.push(FILENAME_TSCONFIG);
    filenames.push(FILENAME_APP_CSS);

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "buildingApp"),
      },
      {
        ...STEPS.webpackIssues,
        pointer: replacementAggregator.highlightRange(FILENAME_TSCONFIG, files[FILENAME_TSCONFIG], "webpackIssues"),
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
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "importModules"),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "registerApp"),
      },
      {
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "instantiateSDK"),
      }
    );

    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "whiteLabeling"),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "customAuthenticationStep"),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "initialize"),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "login"),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "getUserInfo"),
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
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TS, files[FILENAME_APP_TS], "logout"),
    });

    return { filenames, files, steps };
  },
};

export default angularSteps;
