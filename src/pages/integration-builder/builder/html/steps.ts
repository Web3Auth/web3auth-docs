import { DEFAULT, ETHERS, NONE, SOL, YES } from "../choices";
import { FILENAME_ETHERSRPC, FILENAME_INDEX_HTML, FILENAME_SOLANARPC, FILENAME_WEB3RPC } from "./filenames";
import STEPS from "./stepContent";

export default function getSteps(steps, files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, replacementAggregator) {
  steps.push({
    ...STEPS.buildingApp,
    pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "buildingApp"),
  });

  if (useModal === YES) {
    if (customAuth !== NONE || whitelabel === YES || mfa !== DEFAULT) {
      steps.push({
        ...STEPS.installationCustom,
        pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationweb3Auth"),
      });
    } else {
      steps.push({
        ...STEPS.installation,
        pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationweb3Auth"),
      });
    }
  } else if (customAuth !== NONE || whitelabel === YES) {
    steps.push({
      ...STEPS.installationCustomCore,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationweb3Auth"),
    });
  } else {
    steps.push({
      ...STEPS.installationCore,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationweb3Auth"),
    });
  }

  switch (chain) {
    case SOL:
      steps.push({
        ...STEPS.installationSolana,
        pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationSolana"),
      });
      break;
    default:
      if (evmFramework === ETHERS) {
        steps.push({
          ...STEPS.installationEthers,
          pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationEthers"),
        });
      } else {
        steps.push({
          ...STEPS.installationWeb3,
          pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "installationWeb3"),
        });
      }
  }

  steps.push(
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "registerApp"),
    },
    {
      ...STEPS.instantiateSDK,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "instantiateSDK"),
    }
  );

  if (whitelabel === YES) {
    steps.push({
      ...STEPS.whiteLabeling,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "whiteLabeling"),
    });
  }

  if (customAuth !== NONE) {
    if (useModal === YES) {
      steps.push({
        ...STEPS.customAuth,
        pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "customAuthStep"),
      });
    } else {
      steps.push({
        ...STEPS.customAuthCore,
        pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "customAuthStep"),
      });
    }
  }

  if (
    useModal !== YES ||
    (mfa !== DEFAULT && useModal === YES) ||
    (customAuth !== NONE && useModal === YES) ||
    (whitelabel === YES && useModal === YES)
  ) {
    steps.push({
      ...STEPS.mfa,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "mfa"),
    });
  }

  if (useModal === YES) {
    steps.push({
      ...STEPS.initialize,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "initialize"),
    });
  } else {
    steps.push({
      ...STEPS.initializeCore,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "initialize"),
    });
  }

  if (useModal === YES) {
    steps.push({
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "login"),
    });
  } else {
    steps.push({
      ...STEPS.loginCore,
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "login"),
    });
  }

  steps.push({
    ...STEPS.getUserInfo,
    pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "getUserInfo"),
  });

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
