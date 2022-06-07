import {
  getConnectCode,
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctionsAngular,
  getRPCFunctionsButtonsAngular,
  PLACEHOLDERS,
} from "../../../commonSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as customAuthenticationStep from "../common/customAuthenticationStep.mdx";
import * as getUserInfo from "../common/getUserInfo.mdx";
import * as importModules from "../common/importModules.mdx";
import * as importModulesCustom from "../common/importModulesCustom.mdx";
import * as initialize from "../common/initialize.mdx";
import * as installation from "../common/installation/installation.mdx";
import * as installationCustom from "../common/installation/installationCustom.mdx";
import * as installationEVM from "../common/installation/installationEVM.mdx";
import * as installationSolana from "../common/installation/installationSolana.mdx";
import * as installationStarkEx from "../common/installation/installationStarkEx.mdx";
import * as installationStarkNet from "../common/installation/installationStarkNet.mdx";
import * as instantiateSDK from "../common/instantiateSDK.mdx";
import * as instantiateSDKWhitelabeled from "../common/instantiateSDKWhitelabeled.mdx";
import * as login from "../common/login.mdx";
import * as loginCustom from "../common/loginCustom.mdx";
import * as logout from "../common/logout.mdx";
import * as registerApp from "../common/registerApp.mdx";
import * as evmRPCFunctions from "../common/rpcFunctions/evmRPCFunctions.mdx";
import * as solanaRPCFunctions from "../common/rpcFunctions/solanaRPCFunctions.mdx";
import * as starkExRPCFunctions from "../common/rpcFunctions/starkExRPCFunctions.mdx";
import * as starkNetRPCFunctions from "../common/rpcFunctions/starkNetRPCFunctions.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as buildingApp from "./buildingApp.mdx";
import * as webpackIssues from "./webpackIssues.mdx";

const STEPS = toSteps({
  buildingApp,
  webpackIssues,
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
  loginCustom,
  getUserInfo,
  evmRPCFunctions,
  solanaRPCFunctions,
  starkExRPCFunctions,
  starkNetRPCFunctions,
  logout,
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
      PLACEHOLDERS.CONNECT_CODE,
      ConnectCode
    );

    const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCode
    );

    const InitCode = getInitCode(whitelabel === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.INIT_CODE,
      InitCode
    );

    const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImport
    );

    const OpenloginAdapter = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
    newFiles["frameworks/angular/app.component.ts"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.ts"],
      "frameworks/angular/app.component.ts",
      PLACEHOLDERS.OPENLOGIN_ADAPTER,
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

    const RPCFunctionsButtonsAngular = getRPCFunctionsButtonsAngular(chain);
    newFiles["frameworks/angular/app.component.html"] = replacementAggregator.replaceFileVariable(
      files["frameworks/angular/app.component.html"],
      "frameworks/angular/app.component.html",
      PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
      RPCFunctionsButtonsAngular
    );

    filenames.push(`frameworks/angular/app.component.ts`);
    filenames.push("frameworks/angular/package.json");
    switch (chain) {
      case "sol":
        filenames.push("chains/solana/solana.ts");
        break;
      case "starkex":
        filenames.push("chains/starkex/starkex.ts");
        break;
      case "starknet":
        filenames.push("chains/starknet/starknet.ts");
        break;
      default:
        filenames.push("chains/evm/evm.ts");
    }
    filenames.push("frameworks/angular/app.component.html");
    filenames.push("frameworks/angular/app.component.css");
    filenames.push("frameworks/angular/polyfills.ts");
    filenames.push("frameworks/angular/tsconfig.json");

    steps.push(
      {
        ...STEPS.buildingApp,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "1-2" }),
      },
      {
        ...STEPS.webpackIssues,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/tsconfig.json", range: "26-33" }),
      }
    );

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.installationSolana,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/solana/solana.ts", range: "1-4" }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.installationStarkEx,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starkex/starkex.ts", range: "1-6" }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.installationStarkNet,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/starknet/starknet.ts", range: "1-7" }),
        });
        break;
      default:
        steps.push({
          ...STEPS.installationEVM,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "chains/evm/evm.ts", range: "1-2" }),
        });
    }

    if (customAuthentication === "yes" || whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.installationCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/package.json", range: "21-22" }),
        },
        {
          ...STEPS.importModulesCustom,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "2-3" }),
        }
      );
    } else {
      steps.push(
        {
          ...STEPS.installation,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/package.json", range: "21-22" }),
        },
        {
          ...STEPS.importModules,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "2-3" }),
        }
      );
    }

    steps.push({
      ...STEPS.registerApp,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "4" }),
    });

    if (whitelabel === "yes") {
      steps.push(
        {
          ...STEPS.instantiateSDKWhitelabeled,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "18-19" }),
        },
        {
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "21-22" }),
        }
      );
    } else {
      steps.push({
        ...STEPS.instantiateSDK,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "18-19" }),
      });
    }

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.customAuthenticationStep,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "21-22" }),
      });
    }

    steps.push({
      ...STEPS.initialize,
      pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/angular/app.component.ts", range: "24-25" }),
    });

    if (customAuthentication === "yes") {
      steps.push({
        ...STEPS.loginCustom,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/angular/app.component.ts",
          range: "36-37",
        }),
      });
    } else {
      steps.push({
        ...STEPS.login,
        pointer: replacementAggregator.rangeOffsetEditor({
          filename: "frameworks/angular/app.component.ts",
          range: "36-37",
        }),
      });
    }

    steps.push({
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/angular/app.component.ts",
        range: "42-49",
      }),
    });

    switch (chain) {
      case "sol":
        steps.push({
          ...STEPS.solanaRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/solana/solana.ts",
            range: "13-21",
          }),
        });
        break;
      case "starkex":
        steps.push({
          ...STEPS.starkExRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starkex/starkex.ts",
            range: "24-34",
          }),
        });
        break;
      case "starknet":
        steps.push({
          ...STEPS.starkNetRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/starknet/starknet.ts",
            range: "25-35",
          }),
        });
        break;
      default:
        steps.push({
          ...STEPS.evmRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "chains/evm/evm.ts",
            range: "10-18",
          }),
        });
        break;
    }

    steps.push({
      ...STEPS.logout,
      pointer: replacementAggregator.rangeOffsetEditor({
        filename: "frameworks/angular/app.component.ts",
        range: "54-62",
      }),
    });

    return { filenames, files, steps };
  },
};

export default angularSteps;
