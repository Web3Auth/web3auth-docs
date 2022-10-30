import { PLACEHOLDERS } from "../../commonCode";
import * as customAuthenticationStep from "../../commonSteps/customAuthenticationStep.mdx";
import * as getUserInfo from "../../commonSteps/getUserInfo.mdx";
import * as importModules from "../../commonSteps/importModules.mdx";
import * as importModulesCustom from "../../commonSteps/importModulesCustom.mdx";
import * as initialize from "../../commonSteps/initialize.mdx";
import * as installationEthers from "../../commonSteps/installation/installationEthers.mdx";
import * as installationSolana from "../../commonSteps/installation/installationSolana.mdx";
import * as installationStarkEx from "../../commonSteps/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../../commonSteps/installation/installationStarkNet.mdx";
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
import * as whiteLabeling from "../../commonSteps/whitelabeling.mdx";
import { ReplaceFileAggregator, toSteps } from "../../utils";
import * as installation from "./installation.mdx";
import * as installationCustom from "./installationCustom.mdx";
import { getConstructorCodeHTML, getInitCodeHTML, getOpenloginAdapterHTML, getScriptImport } from "./replacementCode";
import * as usingQuickStart from "./usingQuickStart.mdx";

const STEPS = toSteps({
  usingQuickStart,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
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
  logout,
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain, evmFramework }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_INDEX_HTML = "frameworks/html/index.html";
    const FILENAME_STYLE_CSS = "frameworks/html/style.css";
    const FILENAME_SOLANARPC = "chains/solana/solanaRPC.js";
    const FILENAME_WEB3RPC = "chains/evm/web3RPC.js";
    const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.js";

    const ConstructorCodeHTML = getConstructorCodeHTML(chain, whitelabel === "yes");
    newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
      files[FILENAME_INDEX_HTML],
      FILENAME_INDEX_HTML,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeHTML
    );

    const InitCodeHTML = getInitCodeHTML(whitelabel === "yes");
    newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
      files[FILENAME_INDEX_HTML],
      FILENAME_INDEX_HTML,
      PLACEHOLDERS.INIT_CODE,
      InitCodeHTML
    );

    const OpenloginAdapterHTML = getOpenloginAdapterHTML(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
      files[FILENAME_INDEX_HTML],
      FILENAME_INDEX_HTML,
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapterHTML
    );

    const ScriptImport = getScriptImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
      files[FILENAME_INDEX_HTML],
      FILENAME_INDEX_HTML,
      PLACEHOLDERS.SCRIPT_IMPORT,
      ScriptImport
    );

    filenames.push(FILENAME_INDEX_HTML);
    switch (chain) {
      case "sol":
        filenames.push(FILENAME_SOLANARPC);
        break;
      default:
        filenames.push(evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
        break;
    }
    filenames.push(FILENAME_STYLE_CSS);

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
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.highlightRange(FILENAME_SOLANARPC, files[FILENAME_SOLANARPC], "solanaRPCFunctions"),
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
      pointer: replacementAggregator.highlightRange(FILENAME_INDEX_HTML, files[FILENAME_INDEX_HTML], "logout"),
    });

    return { filenames, files, steps };
  },
};

export default htmlSteps;
