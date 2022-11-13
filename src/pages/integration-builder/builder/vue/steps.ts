import { SOL, STARKEX, STARKNET, TEZOS } from "../choices";
import {
  FILENAME_ETHERSRPC,
  FILENAME_HOME_VUE,
  FILENAME_PACKAGE_JSON,
  FILENAME_SOLANARPC,
  FILENAME_STARKEXRPC,
  FILENAME_STARKNETRPC,
  FILENAME_TEZOSRPC,
  FILENAME_VUE_CONFIG,
  FILENAME_WEB3RPC,
} from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuthentication, evmFramework, chain) {
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
    case SOL:
      steps.push({
        ...STEPS.installationSolana,
        pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "installationSolana"),
      });
      break;
    case STARKEX:
      steps.push({
        ...STEPS.installationStarkEx,
        pointer: replacementAggregator.highlightRange(FILENAME_STARKEXRPC, files[FILENAME_STARKEXRPC], "installationStarkEx"),
      });
      break;
    case STARKNET:
      steps.push({
        ...STEPS.installationStarkNet,
        pointer: replacementAggregator.highlightRange(FILENAME_STARKNETRPC, files[FILENAME_STARKNETRPC], "installationStarkNet"),
      });
      break;
    case TEZOS:
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
    case SOL:
      steps.push({
        ...STEPS.solanaRPCFunctions,
        pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "solanaRPCFunctions"),
      });
      break;
    case STARKEX:
      steps.push({
        ...STEPS.starkExRPCFunctions,
        pointer: replacementAggregator.highlightRange(FILENAME_STARKEXRPC, files[FILENAME_STARKEXRPC], "starkExRPCFunctions"),
      });
      break;
    case STARKNET:
      steps.push({
        ...STEPS.starkNetRPCFunctions,
        pointer: replacementAggregator.highlightRange(FILENAME_STARKNETRPC, files[FILENAME_STARKNETRPC], "starkNetRPCFunctions"),
      });
      break;
    case TEZOS:
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
}
