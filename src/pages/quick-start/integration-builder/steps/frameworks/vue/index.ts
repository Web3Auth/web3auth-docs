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

    filenames.push("frameworks/vue/main.js");
    filenames.push("frameworks/vue/App.vue");

    if (["starkex", "starknet"].includes(chain)) {
      return { filenames, files, steps };
    }

    filenames.push("frameworks/vue/package.json");
    if (customAuthentication === "yes") {
      const coreConstructorCode = getCoreConstructorCode(chain);

      const connectRes = getConnectCode(customAuthentication === "yes");

      newFiles["frameworks/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/CustomLogin.vue"],
        "frameworks/vue/CustomLogin.vue",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
      newFiles["frameworks/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/CustomLogin.vue"],
        "frameworks/vue/CustomLogin.vue",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      newFiles["frameworks/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/CustomLogin.vue"],
        "frameworks/vue/CustomLogin.vue",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );

      const chainImportRes = getChainRpcImport(chain);
      newFiles["frameworks/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/CustomLogin.vue"],
        "frameworks/vue/CustomLogin.vue",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      filenames.push("frameworks/vue/CustomLogin.vue");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/CustomLogin.vue", range: "36" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/CustomLogin.vue", range: "48" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/CustomLogin.vue", range: "44-47" }),
        });
      }
      steps.push(
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/CustomLogin.vue", range: "52" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/CustomLogin.vue",
            range: "81-90",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/CustomLogin.vue",
            range: "95-98",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/CustomLogin.vue",
            range: "91-94",
          }),
        }
      );
    }

    if (customAuthentication === "no") {
      // replace stuff in Home.vue
      const { code } = getConstructorCode(whitelabel === "yes", chain);

      newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/Home.vue"],
        "frameworks/vue/Home.vue",
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );

      const initRes = getInitCode(whitelabel === "yes", customAuthentication === "yes");
      newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/Home.vue"],
        "frameworks/vue/Home.vue",
        PLACEHOLDERS.INIT,
        initRes.code
      );
      newFiles["frameworks/vue/custom/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/custom/Home.vue"],
        "frameworks/vue/custom/Home.vue",
        PLACEHOLDERS.INIT,
        initRes.code
      );

      const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
      newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/Home.vue"],
        "frameworks/vue/Home.vue",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginRes.code
      );

      const chainImportRes = getChainRpcImport(chain);
      newFiles["frameworks/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["frameworks/vue/Home.vue"],
        "frameworks/vue/Home.vue",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      filenames.push(`frameworks/vue/Home.vue`);
      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "37" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "40-42" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "48" }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/vue/Home.vue", range: "54" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/Home.vue",
            range: "83-91",
          }),
        },
        {
          ...STEPS.usingRPCFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/Home.vue",
            range: "100-107",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "frameworks/vue/Home.vue",
            range: "92-99",
          }),
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default htmlSteps;
