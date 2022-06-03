import {
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctionsAngular,
  getRPCFunctionsUIButtonsAngular,
  PLACEHOLDERS,
} from "../../../commonSnippets";
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

    const replacementAggregator = new ReplaceFileAggregator();

    const ConnectCode = getConnectCode(customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CONNECT,
      ConnectCode
    );

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CONSTRUCTOR,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.INIT,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.OPENLOGIN_CONFIGURE,
      OpenloginAdapter
    );

    const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/package.json"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/package.json"],
      "frameworks/angular/package.json",
      PLACEHOLDERS.PACKAGE_JSON,
      PackageJson
    );

    const RPCFunctionsAngular = getRPCFunctionsAngular(chain);
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.RPC_FUNCTIONS,
      RPCFunctionsAngular
    );

    const RPCFunctionsUIButtonsAngular = getRPCFunctionsUIButtonsAngular(chain);
    newFiles["frameworks/angular/app.component.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.html"],
      "frameworks/angular/app.component.html",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsUIButtonsAngular
    );

    filenames.push(`frameworks/angular/app.component.ts`);
    filenames.push("frameworks/angular/package.json");
    filenames.push("frameworks/angular/app.component.html");
    filenames.push("frameworks/angular/app.component.css");
    filenames.push("frameworks/angular/app.module.ts");
    filenames.push("frameworks/angular/angular.json");
    filenames.push("frameworks/angular/polyfills.ts");
    filenames.push("frameworks/angular/tsconfig.json");

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

    return { filenames, files, steps };
  },
};

export default angularSteps;
