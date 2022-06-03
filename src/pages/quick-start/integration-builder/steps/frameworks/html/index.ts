import {
  getConnectCodeHTML,
  getConstructorCodeHTML,
  getInitCode,
  getOpenloginAdapter,
  getRPCFunctionsHTML,
  getRPCFunctionsButtonsHTML,
  getScriptImport,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as logout from "../common/logout.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  initialize,
  triggeringLogin,
  usingRPCFunctions,
  logout,
  whiteLabeling,
  instantiateCoreSdk,
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    const ConnectCodeHTML = getConnectCodeHTML(customAuthentication === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.CONNECT_CODE,
      ConnectCodeHTML
    );

    const ConstructorCodeHTML = getConstructorCodeHTML(chain, whitelabel === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeHTML
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/html/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/html/index.html"],
      "frameworks/html/index.html",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
      OpenloginAdapter
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
    filenames.push("frameworks/html/style.css");

    steps.push(
      {
        ...STEPS.installationWeb,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "37-41" }),
      },
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "52" }),
      },
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "54-56" }),
      }
    );
    if (whitelabel === "yes") {
      steps.push({
        ...STEPS.whiteLabeling,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "57-59" }),
      });
    }
    steps.push(
      {
        ...STEPS.initialize,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/html/index.html", range: "62" }),
      },
      {
        ...STEPS.triggeringLogin,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "98-107",
        }),
      },
      {
        ...STEPS.usingRPCFunctions,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "119-153",
        }),
      },
      {
        ...STEPS.logout,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/html/index.html",
          range: "109-117",
        }),
      }
    );

    return { filenames, files, steps };
  },
};

export default htmlSteps;
