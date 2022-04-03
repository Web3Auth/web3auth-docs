import parserHtml from "prettier/parser-html";
import { format } from "prettier/standalone";

import { replaceFileVariable, toSteps } from "../../../../utils";
import { getChainNamespace, getChainRpc, getChainRpcImport, getConstructorCode, getInitCode, PLACEHOLDERS } from "../../../commonSnippets";
import * as getUserInfo from "../html/get-user-info.mdx";
import * as logout from "../html/logout.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
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
});

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    // eslint-disable-next-line no-console
    console.log("chain", chain);
    const newFiles = files;
    let aggregatedOffset = 0;
    // replace stuff in Home.vue
    const { code, offset } = getConstructorCode(whitelabel === "yes");
    aggregatedOffset += offset;
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CONSTRUCTOR, code);

    const initRes = getInitCode(whitelabel === "yes");
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.INIT, initRes.code);
    aggregatedOffset += initRes.offset;

    const chainNamespaceRes = getChainNamespace(chain);
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_NAMESPACE, chainNamespaceRes.code);
    aggregatedOffset += chainNamespaceRes.offset;

    const chainImportRes = getChainRpcImport(chain);
    aggregatedOffset += chainImportRes.offset;
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_RPC_IMPORT, chainImportRes.code);

    const chainRpcRes = getChainRpc(chain);
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_RPC, chainRpcRes.code);
    aggregatedOffset += chainRpcRes.offset;

    const formattedCode = format(newFiles["web3auth/vue/Home.vue"], { plugins: [parserHtml], parser: "vue" });
    newFiles["web3auth/vue/Home.vue"] = formattedCode;

    if (customAuthentication === "yes") {
      // replace stuff in input.js
    }

    if (customLogin === "no") {
      filenames.push("web3auth/vue/package.json");
      filenames.push("web3auth/vue/Home.vue");
      filenames.push("web3auth/vue/main.js");
      filenames.push("web3auth/vue/App.vue");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/vue/package.json", range: "11-12" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/vue/Home.vue", range: (52 + aggregatedOffset).toString() },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/vue/Home.vue", range: `50 + ${aggregatedOffset}` },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/vue/Home.vue", range: `63 + ${aggregatedOffset} - (82 + ${aggregatedOffset})` },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/vue/Home.vue", range: `54 + ${aggregatedOffset}` },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/vue/Home.vue", range: `83 + ${aggregatedOffset} - (91 + ${aggregatedOffset})` },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/vue/Home.vue", range: `96 + ${aggregatedOffset} - (99 + ${aggregatedOffset})` },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/vue/Home.vue", range: `92 + ${aggregatedOffset} - (95 + ${aggregatedOffset})` },
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default htmlSteps;
