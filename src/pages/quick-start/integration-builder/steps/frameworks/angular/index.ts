import { getChainRpcImport, getConnectCode, getConstructorCode, getInitCode, getOpenloginAdapter, PLACEHOLDERS } from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as initialize from "../common/initializing.mdx";
// web
import * as installationWeb from "../common/installation.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as usingRPCFunctions from "../common/using-rpc-functions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";

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

    filenames.push("frameworks/angular/package.json");

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

    const openloginRes = getOpenloginAdapter(whitelabel === "yes", false);
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      openloginRes.code
    );

    const connectRes = getConnectCode(customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CONNECT,
      connectRes.code
    );

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

    filenames.push("frameworks/angular/app.component.html");
    filenames.push("frameworks/angular/app.component.css");
    filenames.push("frameworks/angular/app.module.ts");

    return { filenames, files, steps };
  },
};

export default angularSteps;
