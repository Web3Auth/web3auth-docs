import {
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  getRPCFunctionsButtonsReact,
  PLACEHOLDERS,
} from "../../commonSnippets";
import * as customAuthenticationStep from "../../commonSteps/customAuthenticationStep.mdx";
import * as getUserInfo from "../../commonSteps/getUserInfo.mdx";
import * as importModules from "../../commonSteps/importModules.mdx";
import * as importModulesCustom from "../../commonSteps/importModulesCustom.mdx";
import * as initialize from "../../commonSteps/initialize.mdx";
import * as installation from "../../commonSteps/installation/installation.mdx";
import * as installationCustom from "../../commonSteps/installation/installationCustom.mdx";
import * as installationEthers from "../../commonSteps/installation/installationEthers.mdx";
import * as installationSolana from "../../commonSteps/installation/installationSolana.mdx";
import * as installationStarkEx from "../../commonSteps/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../../commonSteps/installation/installationStarkNet.mdx";
import * as installationTezos from "../../commonSteps/installation/installationTezos.mdx";
import * as installationWeb3 from "../../commonSteps/installation/installationWeb3.mdx";
import * as instantiateSDK from "../../commonSteps/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../../commonSteps/instantiateSDKWhitelabeled.mdx";
import * as login from "../../commonSteps/login.mdx";
import * as logout from "../../commonSteps/logout.mdx";
import * as registerApp from "../../commonSteps/registerApp.mdx";
import * as evmRPCFunctions from "../../commonSteps/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../../commonSteps/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../../commonSteps/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../../commonSteps/rpcFunctions/starkNetRPCFunctions.mdx";
import * as tezosRPCFunctions from "../../commonSteps/rpcFunctions/tezosRPCFunctions.mdx";
import * as whiteLabeling from "../../commonSteps/whitelabeling.mdx";
import { ReplaceFileAggregator, toSteps } from "../../utils";
import * as buildingApp from "./buildingApp.mdx";

const STEPS = toSteps({
  buildingApp,
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

const nextjsSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_GLOBALS_CSS = "frameworks/nextjs/globals.css";
    const FILENAME_INDEX_TSX = "frameworks/nextjs/index.tsx";
    const FILENAME_APP_TSX = "frameworks/nextjs/App.tsx";
    const FILENAME_PACKAGE_JSON = "frameworks/nextjs/package.json";
    const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
    const FILENAME_STARKEXRPC = "chains/starkex/starkexRPC.ts";
    const FILENAME_STARKNETRPC = "chains/starknet/starknetRPC.ts";
    const FILENAME_TEZOSRPC = "chains/tezos/tezosRPC.ts";
    const FILENAME_WEB3RPC = "chains/evm/web3RPC.ts";
    const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.ts";
    const FILENAME_ARGENT_ACCOUNT = "chains/starknet/ArgentAccount.json";

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
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
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctions
    );

    const RPCFunctionsButtonsReact = getRPCFunctionsButtonsReact(chain);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsReact
    );

    filenames.push(FILENAME_APP_TSX);
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
    filenames.push(FILENAME_INDEX_TSX);
    filenames.push(FILENAME_GLOBALS_CSS);

    steps.push({
      ...STEPS.buildingApp,
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "buildingApp"),
    });

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
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "importModules"),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "registerApp"),
      },
      {
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "instantiateSDK"),
      }
    );

    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "whiteLabeling"),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "customAuthenticationStep"),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "initialize"),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "login"),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "getUserInfo"),
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
      pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "logout"),
    });

    return { filenames, files, steps };
  },
};

export default nextjsSteps;
