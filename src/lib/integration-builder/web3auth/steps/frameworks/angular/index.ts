import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import {
  getChainRpcImport,
  getConnectCode,
  getConstructorCode,
  getCoreConstructorCode,
  getInitCode,
  getOpenloginAdapter,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import * as initialize from "../common/initializing.mdx";
// web
import * as installationWeb from "../common/installation.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as subscribe from "../common/subscribe.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as usingW3AFunctions from "../common/using-w3a-functions.mdx";
import * as logout from "../common/logout.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
  // loginWithFirebaseAuth,
  usingW3AFunctions,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
});

const angularSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    const newFiles = files;

    const { code } = getConstructorCode(whitelabel === "yes", chain);

    const replacementAggregator = new ReplaceFileAggregator();

    newFiles["web3auth/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["web3auth/angular/app.component.ts"],
      "web3auth/angular/app.component.ts",
      PLACEHOLDERS.CONSTRUCTOR,
      code
    );

    const initRes = getInitCode(whitelabel === "yes");
    newFiles["web3auth/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["web3auth/angular/app.component.ts"],
      "web3auth/angular/app.component.ts",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
    newFiles["web3auth/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["web3auth/angular/app.component.ts"],
      "web3auth/angular/app.component.ts",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    filenames.push("web3auth/angular/package.json");

    if (customAuthentication === "yes" || customLogin === "yes") {
      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/angular/custom/app.component.ts"],
        "web3auth/angular/custom/app.component.ts",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      const connectRes = getConnectCode(customLogin === "yes", customAuthentication === "yes");
      newFiles["web3auth/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/angular/custom/app.component.ts"],
        "web3auth/angular/custom/app.component.ts",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes", customLogin === "yes");
      newFiles["web3auth/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/angular/custom/app.component.ts"],
        "web3auth/angular/custom/app.component.ts",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      const coreConstructorCode = getCoreConstructorCode(chain);
      newFiles["web3auth/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/angular/custom/app.component.ts"],
        "web3auth/angular/custom/app.component.ts",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );
      filenames.push("web3auth/angular/custom/app.component.ts");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/package.json", range: "21-23" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/custom/app.component.ts", range: "7" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/custom/app.component.ts", range: "23" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/custom/app.component.ts", range: "24-26" }),
        });
      }
      steps.push(
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/custom/app.component.ts",
            range: "33-50",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/custom/app.component.ts", range: "29" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/custom/app.component.ts",
            range: "52-61",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/custom/app.component.ts",
            range: "73-80",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/custom/app.component.ts",
            range: "63-71",
          }),
        }
      );
    }

    if (customAuthentication === "no" && customLogin === "no") {
      filenames.push(`web3auth/angular/app.component.ts`);
      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/angular/app.component.ts"],
        "web3auth/angular/app.component.ts",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/package.json", range: "21-23" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/app.component.ts", range: "7" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/app.component.ts", range: "23-24" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/app.component.ts", range: "25" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/app.component.ts",
            range: "34-51",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/angular/app.component.ts", range: "30" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/app.component.ts",
            range: "53-60",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/app.component.ts",
            range: "72-79",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/angular/app.component.ts",
            range: "62-70",
          }),
        }
      );
    }

    filenames.push("web3auth/angular/app.component.html");
    filenames.push("web3auth/angular/app.component.css");
    filenames.push("web3auth/angular/app.module.ts");

    return { filenames, files, steps };
  },
};

export default angularSteps;
