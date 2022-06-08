import {
  getConstructorCodeHTML,
  getInitCodeHTML,
  getOpenloginAdapterHTML,
  getRPCFunctionsButtonsHTML,
  getRPCFunctionsHTML,
  getScriptImport,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as customAuthenticationStep from "../common/customAuthenticationStep.mdx";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as importModules from "../common/importModules.mdx";
import * as importModulesCustom from "../common/importModulesCustom.mdx";
import * as initialize from "../common/initialize.mdx";
import * as installationEVM from "../common/installation/installationEVM.mdx";
import * as installationSolana from "../common/installation/installationSolana.mdx";
import * as installationStarkEx from "../common/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../common/installation/installationStarkNet.mdx";
import * as instantiateSDK from "../common/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../common/instantiateSDKWhitelabeled.mdx";
import * as login from "../common/login.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/registerApp.mdx";
import * as evmRPCFunctions from "../common/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../common/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../common/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../common/rpcFunctions/starkNetRPCFunctions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as installation from "./installation.mdx";
import * as installationCustom from "./installationCustom.mdx";
import * as usingQuickStart from "./usingQuickStart.mdx";

const STEPS = toSteps({
  usingQuickStart,
  installationSolana,
  installationStarkEx,
  installationStarkNet,
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
  logout,
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const ConstructorCodeHTML = getConstructorCodeHTML(chain, whitelabel === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeHTML
    );

    const InitCodeHTML = getInitCodeHTML(whitelabel === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.INIT_CODE,
      InitCodeHTML
    );

    const OpenloginAdapterHTML = getOpenloginAdapterHTML(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapterHTML
    );

    const RPCFunctionsHTML = getRPCFunctionsHTML(chain);
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctionsHTML
    );

    const RPCFunctionsButtonsHTML = getRPCFunctionsButtonsHTML(chain);
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsHTML
    );

    const ScriptImport = getScriptImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.SCRIPT_IMPORT,
      ScriptImport
    );

    filenames.push(`frameworks/html/index.html`);
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solana.js");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkex.js");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknet.js");
        filenames.push("chains/starknet/ArgentAccount.json");
        break;
      default:
        filenames.push("chains/evm/evm.js");
        break;
    }
    filenames.push("frameworks/html/style.css");

    steps.push({
      ...STEPS.usingQuickStart,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "1-2" }),
    });

    if (customAuthentication === "yes" || whitelabel === "yes") {
      steps.push({
        ...STEPS.installationCustom,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "35-38" }),
      });
    } else {
      steps.push({
        ...STEPS.installation,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "35-38" }),
      });
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "47" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "49-50" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "51-52" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "49-50" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "51-52" }),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "53-54" }),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "69",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "79",
        }),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/solana/solana.js",
            range: "71-84",
          }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.starkExRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starkex/starkex.js",
            range: "15-21",
          }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starknet/starknet.js",
            range: "6-17",
          }),
        });
        break;
      default:
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/evm/evm.js",
            range: "22-43",
          }),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/html/index.html",
        range: "90",
      }),
    });

    return { filenames, files, steps };
  },
};

export default htmlSteps;
