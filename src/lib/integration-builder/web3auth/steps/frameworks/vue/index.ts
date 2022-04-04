import { replaceFileVariable, toSteps } from "../../../../utils";
import { getChainNamespace, getChainRpc, getChainRpcImport, getConstructorCode, getInitCode, PLACEHOLDERS } from "../../../commonSnippets";
import * as getUserInfo from "../html/get-user-info.mdx";
import * as logout from "../html/logout.mdx";
import { calculateStepOffsets, StepOffsets } from "../utils";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as registerApp from "./register-app.mdx";
import * as subscribe from "./subscribe.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

const placeHolderOffsets = {
  [PLACEHOLDERS.CONSTRUCTOR]: 0,
  [PLACEHOLDERS.INIT]: 0,
  [PLACEHOLDERS.CHAIN_NAMESPACE]: 0,
  [PLACEHOLDERS.CHAIN_RPC_IMPORT]: 0,
};
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

const stepOffsets: StepOffsets = {
  [STEPS.installationWeb.title]: {
    deps: [],
    offset: 0,
  },
  [STEPS.registerApp.title]: {
    deps: [],
    offset: 0,
  },
  [STEPS.instantiate.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
  [STEPS.subscribe.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
  [STEPS.initialize.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
  [STEPS.triggeringLogin.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
  [STEPS.getUserInfo.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
  [STEPS.logout.title]: {
    deps: [PLACEHOLDERS.CONSTRUCTOR, PLACEHOLDERS.INIT, PLACEHOLDERS.CHAIN_NAMESPACE, PLACEHOLDERS.CHAIN_RPC_IMPORT],
    offset: 0,
  },
};

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin, chain }) {
    // eslint-disable-next-line no-console
    console.log("chain", chain);
    const newFiles = files;

    // replace stuff in Home.vue
    const { code, offset } = getConstructorCode(whitelabel === "yes");
    placeHolderOffsets[PLACEHOLDERS.CONSTRUCTOR] = offset;

    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CONSTRUCTOR, code);

    const initRes = getInitCode(whitelabel === "yes");
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.INIT, initRes.code);
    placeHolderOffsets[PLACEHOLDERS.INIT] = initRes.offset;

    const chainNamespaceRes = getChainNamespace(chain);
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_NAMESPACE, chainNamespaceRes.code);
    placeHolderOffsets[PLACEHOLDERS.CHAIN_NAMESPACE] = chainNamespaceRes.offset;

    const chainImportRes = getChainRpcImport(chain);
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_RPC_IMPORT, chainImportRes.code);
    placeHolderOffsets[PLACEHOLDERS.CHAIN_RPC_IMPORT] = chainImportRes.offset;

    const chainRpcRes = getChainRpc(chain);
    newFiles["web3auth/vue/Home.vue"] = replaceFileVariable(files["web3auth/vue/Home.vue"], PLACEHOLDERS.CHAIN_RPC, chainRpcRes.code);
    placeHolderOffsets[PLACEHOLDERS.CHAIN_RPC] = chainRpcRes.offset;
    const finalStepOffsets = calculateStepOffsets(stepOffsets, placeHolderOffsets);
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
          pointer: { filename: "web3auth/vue/Home.vue", range: (27 + finalStepOffsets[STEPS.registerApp.title].offset).toString() },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/vue/Home.vue", range: (50 + finalStepOffsets[STEPS.instantiate.title].offset).toString() },
        },
        {
          ...STEPS.subscribe,
          pointer: {
            filename: "web3auth/vue/Home.vue",
            range: `${63 + finalStepOffsets[STEPS.subscribe.title].offset}-${82 + finalStepOffsets[STEPS.subscribe.title].offset}`,
          },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/vue/Home.vue", range: (54 + finalStepOffsets[STEPS.initialize.title].offset).toString() },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: {
            filename: "web3auth/vue/Home.vue",
            range: `${83 + finalStepOffsets[STEPS.triggeringLogin.title].offset}-${91 + finalStepOffsets[STEPS.triggeringLogin.title].offset}`,
          },
        },
        {
          ...STEPS.getUserInfo,
          pointer: {
            filename: "web3auth/vue/Home.vue",
            range: `${96 + finalStepOffsets[STEPS.getUserInfo.title].offset}-${99 + finalStepOffsets[STEPS.getUserInfo.title].offset}`,
          },
        },
        {
          ...STEPS.logout,
          pointer: {
            filename: "web3auth/vue/Home.vue",
            range: `${92 + finalStepOffsets[STEPS.logout.title].offset}-${95 + finalStepOffsets[STEPS.logout.title].offset}`,
          },
        }
      );
    }

    return { filenames, files, steps };
  },
};

export default htmlSteps;
