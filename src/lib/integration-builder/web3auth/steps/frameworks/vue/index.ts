import { replaceFileVariable, toSteps, ReplaceFileAggregator } from "../../../../utils";
import { getChainRpcImport, getConnectCode, getConstructorCode, getInitCode, PLACEHOLDERS } from "../../../commonSnippets";
import * as initialize from "../common/initializing.mdx";
// web
import * as installationWeb from "../common/installation.mdx";
import * as instantiateCoreSdk from "../common/instantiateCoreSdk.mdx";
import * as instantiate from "../common/instantiateSDK.mdx";
import * as registerApp from "../common/register-app.mdx";
import * as subscribe from "../common/subscribe.mdx";
import * as triggeringLogin from "../common/triggering-login.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";
import * as getUserInfo from "../html/get-user-info.mdx";
import * as logout from "../html/logout.mdx";

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
    // eslint-disable-next-line no-console
    console.log("chain", chain);
    const newFiles = files;
    // replace stuff in Home.vue
    const { code } = getConstructorCode(whitelabel === "yes", chain);

    let replacementAggregator = new ReplaceFileAggregator();

    newFiles["web3auth/web/input.js"] = replacementAggregator.replaceFileVariable(
      files["web3auth/web/input.js"],
      "web3auth/web/input.js",
      PLACEHOLDERS.CONSTRUCTOR,
      code
    );

    const initRes = getInitCode(whitelabel === "yes");
    newFiles["web3auth/web/input.js"] = replacementAggregator.replaceFileVariable(
      files["web3auth/web/input.js"],
      "web3auth/web/input.js",
      PLACEHOLDERS.INIT,
      initRes.code
    );

    const chainImportRes = getChainRpcImport(chain);
    newFiles["web3auth/vue/Home.vue"] = replacementAggregator.replaceFileVariable(
      files["web3auth/vue/Home.vue"],
      "web3auth/vue/Home.vue",
      PLACEHOLDERS.CHAIN_RPC_IMPORT,
      chainImportRes.code
    );

    filenames.push("web3auth/vue/package.json");
    filenames.push("web3auth/web/input.js");
    filenames.push("web3auth/vue/main.js");
    filenames.push("web3auth/vue/App.vue");

    if (customAuthentication === "yes") {
      const connectRes = getConnectCode(false, true);
      newFiles["web3auth/vue/Connect.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Connect.ts"],
        "web3auth/vue/Connect.ts",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );
      filenames.push("web3auth/vue/Connect.ts");
    }

    if (customLogin === "yes") {
      const connectRes = getConnectCode(true, false);
      newFiles["web3auth/vue/Connect.ts"] = replacementAggregator.replaceFileVariable(
        files["web3auth/vue/Connect.ts"],
        "web3auth/vue/Connect.ts",
        PLACEHOLDERS.CONNECT,
        connectRes.code
      );
      // eslint-disable-next-line no-console
      console.log("file", newFiles["web3auth/vue/Connect.ts"], connectRes.code);

      filenames.push("web3auth/vue/Connect.ts");
    }

    if (customAuthentication === "yes" || customLogin === "yes") {
      filenames.push("web3auth/vue/CustomLogin.vue");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/input.js", range: "3" }),
        },
        {
          ...STEPS.instantiateCoreSdk,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "44" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "71-90",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/CustomLogin.vue", range: "62" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Connect.ts",
            range: "1-16",
          }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "104-107",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/CustomLogin.vue",
            range: "100-103",
          }),
        }
      );
    }

    if (customAuthentication === "no" && customLogin === "no") {
      filenames.push("web3auth/vue/Home.vue");
      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/package.json", range: "11-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/input.js", range: "3" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/web/input.js", range: "1-25" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "44" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "57-76",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: "web3auth/vue/Home.vue", range: "48" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "77-85",
          }),
        },
        {
          ...STEPS.getUserInfo,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "90-93",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: "web3auth/vue/Home.vue",
            range: "86-89",
          }),
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default htmlSteps;
