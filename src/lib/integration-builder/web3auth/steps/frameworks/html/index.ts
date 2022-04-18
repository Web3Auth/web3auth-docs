import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import {
  getConnectCode,
  getConstructorCode,
  getCoreConstructorCode,
  getOpenloginAdapter,
  getScriptImportsCode,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as logout from "./logout.mdx";
import * as registerApp from "./register-app.mdx";
import * as subscribe from "./subscribe.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
  getUserInfo,
  logout,
  whiteLabeling,
  instantiateCoreSdk,
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    const newFiles = files;

    const replacementAggregator = new ReplaceFileAggregator();

    if (customAuthentication === "yes" || customLogin === "yes") {
      const coreConstructorCode = getCoreConstructorCode(chain);

      const connectRes = getConnectCode(customLogin === "yes", customAuthentication === "yes");

      newFiles["web3auth/web/custom.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/custom.html"],
        "web3auth/web/custom.html",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes", customLogin === "yes");
      newFiles["web3auth/web/custom.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/custom.html"],
        "web3auth/web/custom.html",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      newFiles["web3auth/web/custom.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/custom.html"],
        "web3auth/web/custom.html",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );

      const chainScriptsImportRes = getScriptImportsCode(chain, true);
      newFiles["web3auth/web/custom.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/custom.html"],
        "web3auth/web/custom.html",
        PLACEHOLDERS.SCRIPTS_IMPORT,
        chainScriptsImportRes.code
      );

      filenames.push("web3auth/web/custom.html");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/custom.html", range: "40-42" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/custom.html", range: "53" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/custom.html", range: "57" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/custom.html", range: "58-60" }),
        });
      }
      steps.push(
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/custom.html",
            range: "77-97",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/custom.html", range: "63" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/custom.html",
            range: "99-108",
          }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/custom.html",
            range: "120-127",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/custom.html",
            range: "110-118",
          }),
        }
      );
    }
    if (customAuthentication === "no" && customLogin === "no") {
      const { code } = getConstructorCode(whitelabel === "yes", chain);

      newFiles["web3auth/web/index.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/index.html"],
        "web3auth/web/index.html",
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );

      if (whitelabel === "yes") {
        const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
        newFiles["web3auth/web/index.html"] = replacementAggregator.replaceFileVariable(
          files["web3auth/web/index.html"],
          "web3auth/web/index.html",
          PLACEHOLDERS.OPENLOGIN_CONFIGURE,
          openloginRes.code
        );
      }

      const chainScriptsImportRes = getScriptImportsCode(chain, false);
      newFiles["web3auth/web/index.html"] = replacementAggregator.replaceFileVariable(
        files["web3auth/web/index.html"],
        "web3auth/web/index.html",
        PLACEHOLDERS.SCRIPTS_IMPORT,
        chainScriptsImportRes.code
      );

      filenames.push(`web3auth/web/index.html`);
      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/index.html", range: "39-42" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/index.html", range: "53" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/index.html", range: "58-60" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/index.html", range: "57" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/index.html",
            range: "77-97",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/index.html", range: "63" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/index.html",
            range: "99-108",
          }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/index.html",
            range: "120-127",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/web/index.html",
            range: "110-118",
          }),
        }
      );
    }

    filenames.push("web3auth/web/style.css");

    return { filenames, files, steps };
  },
};

export default htmlSteps;
