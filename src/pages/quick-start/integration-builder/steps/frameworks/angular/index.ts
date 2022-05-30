import { ReplaceFileAggregator, toSteps } from "../../../utils";
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
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as logout from "../common/logout.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  initialize,
  triggeringLogin,
  // loginWithFirebaseAuth,
  usingRPCFunctions,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
});

const angularSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;

    const { code } = getConstructorCode(whitelabel === "yes", chain);

    const replacementAggregator = new ReplaceFileAggregator();

    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CONSTRUCTOR,
      code
    );

    const initRes = getInitCode(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.INIT,
      initRes.code
    );
    newFiles["frameworks/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/custom/app.component.ts"],
      "frameworks/angular/custom/app.component.ts",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    filenames.push("frameworks/angular/package.json");

    if (customAuthentication === "yes") {
      const chainImportRes = getChainRpcImport(chain);
      newFiles["frameworks/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["frameworks/angular/custom/app.component.ts"],
        "frameworks/angular/custom/app.component.ts",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      const connectRes = getConnectCode(customAuthentication === "yes");
      newFiles["frameworks/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["frameworks/angular/custom/app.component.ts"],
        "frameworks/angular/custom/app.component.ts",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
      newFiles["frameworks/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["frameworks/angular/custom/app.component.ts"],
        "frameworks/angular/custom/app.component.ts",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      const coreConstructorCode = getCoreConstructorCode(chain);
      newFiles["frameworks/angular/custom/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["frameworks/angular/custom/app.component.ts"],
        "frameworks/angular/custom/app.component.ts",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );
      filenames.push("frameworks/angular/custom/app.component.ts");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/package.json", range: "21-23" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/custom/app.component.ts", range: "7" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/custom/app.component.ts", range: "23" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/custom/app.component.ts", range: "24-26" }),
        });
      }
      steps.push(
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/custom/app.component.ts", range: "29" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/custom/app.component.ts",
            range: "52-61",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/custom/app.component.ts",
            range: "73-80",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/custom/app.component.ts",
            range: "63-71",
          }),
        }
      );
    }

    if (customAuthentication === "no") {
      filenames.push(`frameworks/angular/app.component.ts`);
      const chainImportRes = getChainRpcImport(chain);
      newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
        files["frameworks/angular/app.component.ts"],
        "frameworks/angular/app.component.ts",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/package.json", range: "21-23" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "7" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "23-24" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "25" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "30" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/app.component.ts",
            range: "53-60",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/app.component.ts",
            range: "72-79",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/angular/app.component.ts",
            range: "62-70",
          }),
        }
      );
    }

    filenames.push("frameworks/angular/app.component.html");
    filenames.push("frameworks/angular/app.component.css");
    filenames.push("frameworks/angular/app.module.ts");

    return { filenames, files, steps };
  },
};

export default angularSteps;
