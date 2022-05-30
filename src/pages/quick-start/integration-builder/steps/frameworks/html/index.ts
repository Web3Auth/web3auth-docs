import { ReplaceFileAggregator, toSteps } from "../../../utils";
import {
  getConnectCodeHTML,
  getConstructorCodeHTML,
  getInitCode,
  getRPCFunctionsHTML,
  getRPCFunctionsUIButtonsHTML,
  getOpenloginAdapter,
  getScriptImportsCode,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as logout from "../common/logout.mdx";
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

    const ConstructorCode = getConstructorCodeHTML(whitelabel === "yes", chain);
    const openloginRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    const chainScriptsImportRes = getScriptImportsCode(chain, customAuthentication === "yes");
    const connectRes = getConnectCodeHTML(customAuthentication === "yes");
    const getRPCFunctionRes = getRPCFunctionsHTML(chain);
    const getRPCFunctionUIButtonsRes = getRPCFunctionsUIButtonsHTML(chain);
    const initRes = getInitCode(whitelabel === "yes", customAuthentication === "yes");

    //index.html replacements
    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode.code
    );

    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.SCRIPTS_IMPORT,
      chainScriptsImportRes.code
    );

    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS,
      getRPCFunctionRes.code
    );

    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      getRPCFunctionUIButtonsRes.code
    );

    newFiles["frameworks/web/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/index.html"],
      "frameworks/web/index.html",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    // custom/index.html replacements
    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.CONNECT,
      connectRes.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.SCRIPTS_IMPORT,
      chainScriptsImportRes.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS,
      getRPCFunctionRes.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      getRPCFunctionUIButtonsRes.code
    );

    newFiles["frameworks/web/custom/index.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/web/custom/index.html"],
      "frameworks/web/custom/index.html",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    if (customAuthentication === "yes") {
      filenames.push("frameworks/web/custom/index.html");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/custom/index.html", range: "40-42" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/custom/index.html", range: "53" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/custom/index.html", range: "57" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/custom/index.html", range: "58-60" }),
        });
      }
      steps.push(
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/custom/index.html", range: "63" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/custom/index.html",
            range: "99-108",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/custom/index.html",
            range: "120-127",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/custom/index.html",
            range: "110-118",
          }),
        }
      );
    }
    if (customAuthentication === "no") {
      filenames.push(`frameworks/web/index.html`);
      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/index.html", range: "37-41" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/index.html", range: "52" }),
        },
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/index.html", range: "54-56" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/index.html", range: "57-59" }),
        });
      }
      steps.push(
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/web/index.html", range: "62" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/index.html",
            range: "98-107",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/index.html",
            range: "119-153",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/web/index.html",
            range: "109-117",
          }),
        }
      );
    }

    filenames.push("frameworks/web/style.css");

    return { filenames, files, steps };
  },
};

export default htmlSteps;
