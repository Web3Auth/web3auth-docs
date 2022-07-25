import { getConstructorCodeHTML, getInitCodeHTML, getOpenloginAdapterHTML, getScriptImport, PLACEHOLDERS } from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as customAuthenticationStep from "../common/customAuthenticationStep.mdx";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as importModules from "../common/importModules.mdx";
import * as importModulesCustom from "../common/importModulesCustom.mdx";
import * as initialize from "../common/initialize.mdx";
import * as installationEthers from "../common/installation/installationEthers.mdx";
import * as installationWeb3 from "../common/installation/installationWeb3.mdx";
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

    const ScriptImport = getScriptImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.SCRIPT_IMPORT,
      ScriptImport
    );

    filenames.push(`frameworks/html/index.html`);
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solanaRPC.js");
        break;
      default:
        filenames.push(evmFramework === "ethers" ? "chains/evm/ethersRPC.js" : "chains/evm/web3RPC.js");
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
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "37-41" }),
      });
    } else {
      steps.push({
        ...STEPS.installation,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "37-41" }),
      });
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "49" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "51-52" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "53-54" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "51-52" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "53-54" }),
      });
    }

    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "55-56" }),
      },
      {
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "69-77",
        }),
      },
      {
        ...STEPS.getUserInfo,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "79-86",
        }),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/solana/solanaRPC.js",
            range: "71-84",
          }),
        });
        break;
      default:
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: evmFramework === "ethers" ? "chains/evm/ethersRPC.js" : "chains/evm/web3RPC.js",
            range: "22-43",
          }),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/html/index.html",
        range: "115-123",
      }),
    });

    return { filenames, files, steps };
  },
};

export default htmlSteps;
