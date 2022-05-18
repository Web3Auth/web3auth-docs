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
  usingW3AFunctions,
  logout,
  whiteLabeling,
  instantiateCoreSdk,
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, chain }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    filenames.push("web3auth/vue/main.js");
    filenames.push("web3auth/vue/App.vue");

    if (["starkex", "starknet"].includes(chain)) {
      return { filenames, files, steps };
    }

    filenames.push("web3auth/vue/package.json");
    if (customAuthentication === "yes") {
      const coreConstructorCode = getCoreConstructorCode(chain);

      const connectRes = getConnectCode(customAuthentication === "yes");

      newFiles["web3auth/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/CustomLogin.vue"],
        "web3auth/vue/CustomLogin.vue",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );

      const openloginAdRes = getOpenloginAdapter(whitelabel === "yes", customAuthentication === "yes");
      newFiles["web3auth/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/CustomLogin.vue"],
        "web3auth/vue/CustomLogin.vue",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginAdRes.code
      );

      newFiles["web3auth/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/CustomLogin.vue"],
        "web3auth/vue/CustomLogin.vue",
        PLACEHOLDERS.CORE_CONSTRUCTOR,
        coreConstructorCode.code
      );

      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/vue/CustomLogin.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/CustomLogin.vue"],
        "web3auth/vue/CustomLogin.vue",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      filenames.push("web3auth/vue/CustomLogin.vue");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "36" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "48" }),
        }
      );

      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "44-47" }),
        });
      }
      steps.push(
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "61-80",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "52" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "81-90",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "95-98",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "91-94",
          }),
        }
      );
    }

    if (customAuthentication === "no") {
      // replace stuff in Home.vue
      const { code } = getConstructorCode(whitelabel === "yes", chain);

      newFiles["web3auth/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Home.vue"],
        "web3auth/vue/Home.vue",
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );

      const initRes = getInitCode(whitelabel === "yes");
      newFiles["web3auth/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Home.vue"],
        "web3auth/vue/Home.vue",
        PLACEHOLDERS.INIT,
        initRes.code
      );

      const openloginRes = getOpenloginAdapter(whitelabel === "yes", false, false);
      newFiles["web3auth/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Home.vue"],
        "web3auth/vue/Home.vue",
        PLACEHOLDERS.OPENLOGIN_CONFIGURE,
        openloginRes.code
      );

      const chainImportRes = getChainRpcImport(chain);
      newFiles["web3auth/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Home.vue"],
        "web3auth/vue/Home.vue",
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      filenames.push(`web3auth/vue/Home.vue`);
      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "37" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "40-42" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "48" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "63-82",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "54" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "83-91",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "100-107",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "92-99",
          }),
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default htmlSteps;
