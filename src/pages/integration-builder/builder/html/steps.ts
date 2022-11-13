import { ETHERS, SOL } from "../choices";
import { FILENAME_ETHERSRPC, FILENAME_INDEX_HTML, FILENAME_SOLANARPC, FILENAME_WEB3RPC } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator, whitelabel, customAuthentication, evmFramework, chain) {
  steps.push({
    ...STEPS.usingQuickStart,
    pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "usingQuickStart"),
  });

  steps.push(
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installation"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "registerApp"),
    },
    {
      ...STEPS.instantiateSDK,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "instantiateSDK"),
    }
  );

  if (whitelabel === "yes") {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "whiteLabeling"),
    });
  }

  if (customAuthentication === "yes") {
    steps.push({
      ...STEPS.customAuthenticationStep,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "customAuthenticationStep"),
    });
  }

  steps.push(
    {
      ...STEPS.initialize,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "initialize"),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "login"),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "getUserInfo"),
    }
  );

  switch (chain) {
    case SOL:
      steps.push({
        ...STEPS.solanaRPCFunctions,
        pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "solanaRPCFunctions"),
      });
      break;
    default:
      steps.push({
        ...STEPS.evmRPCFunctions,
        pointer: replacementAggregator.highlightRange(
          evmFramework === ETHERS ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC,
          files[evmFramework === ETHERS ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC],
          "evmRPCFunctions"
        ),
      });
      break;
  }

  steps.push({
    ...STEPS.logout,
    pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "logout"),
  });
}
