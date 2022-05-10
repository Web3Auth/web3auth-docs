import { ReplaceFileAggregator, toSteps } from "../../../../utils";
import { getChainRpcImport, getConstructorCode, getInitCode, PLACEHOLDERS } from "../../../commonSnippets";
import * as initialize from "../../frameworks/common/initializing.mdx";
// web
import * as instantiateCoreSdk from "../../frameworks/common/instantiateCoreSdk.mdx";
import * as instantiate from "../../frameworks/common/instantiateSDK.mdx";
import * as registerApp from "../../frameworks/common/register-app.mdx";
import * as subscribe from "../../frameworks/common/subscribe.mdx";
import * as triggeringLogin from "../../frameworks/common/triggering-login.mdx";
import * as whiteLabeling from "../../frameworks/common/whitelabeling.mdx";
import * as usingW3AFunctions from "../../frameworks/common/using-w3a-functions.mdx";
import * as logout from "../../frameworks/common/logout.mdx";
import * as initializeProvider from "./initializing.mdx";
import * as installationWeb from "./installation.mdx";

const STEPS = toSteps({
  initialize,
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  triggeringLogin,
  logout,
  instantiateCoreSdk,
  whiteLabeling,
  usingW3AFunctions,
  initializeProvider,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, lang, chain }) {
    const newFiles = files;

    if (lang === "react") {
      const reactFileRoute = "web3auth/react-starkex";
      filenames.push(`${reactFileRoute}/package.json`);

      const replacementAggregator = new ReplaceFileAggregator();
      const { code } = getConstructorCode(whitelabel === "yes", chain);
      newFiles[`${reactFileRoute}/App.tsx`] = replacementAggregator.replaceFileVariable(
        files[`${reactFileRoute}/App.tsx`],
        `${reactFileRoute}/App.tsx`,
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );

      const initRes = getInitCode(whitelabel === "yes");
      newFiles[`${reactFileRoute}/App.tsx`] = replacementAggregator.replaceFileVariable(
        files[`${reactFileRoute}/App.tsx`],
        `${reactFileRoute}/App.tsx`,
        PLACEHOLDERS.INIT,
        initRes.code
      );

      filenames.push(`${reactFileRoute}/App.tsx`);

      const chainImportRes = getChainRpcImport(chain);
      newFiles[`${reactFileRoute}/App.tsx`] = replacementAggregator.replaceFileVariable(
        files[`${reactFileRoute}/App.tsx`],
        `${reactFileRoute}/App.tsx`,
        PLACEHOLDERS.CHAIN_RPC_IMPORT,
        chainImportRes.code
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: `${reactFileRoute}/package.json`, range: "6-12" }),
        },
        {
          ...STEPS.registerApp,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: `${reactFileRoute}/App.tsx`, range: "8" }),
        }
      );
      if (whitelabel === "yes") {
        steps.push({
          ...STEPS.whiteLabeling,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: `${reactFileRoute}/App.tsx`, range: "17-18" }),
        });
      }
      steps.push(
        {
          ...STEPS.instantiate,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: `${reactFileRoute}/App.tsx`, range: "21" }),
        },
        {
          ...STEPS.subscribe,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: `${reactFileRoute}/App.tsx`,
            range: "33-51",
          }),
        },
        {
          ...STEPS.initialize,
          pointer: replacementAggregator.rangeOffsetEditor({ filename: `${reactFileRoute}/App.tsx`, range: "27" }),
        },
        {
          ...STEPS.triggeringLogin,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: `${reactFileRoute}/App.tsx`,
            range: "56-63",
          }),
        },
        {
          ...STEPS.usingW3AFunctions,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: `${reactFileRoute}/App.tsx`,
            range: "65-72",
          }),
        },
        {
          ...STEPS.logout,
          pointer: replacementAggregator.rangeOffsetEditor({
            filename: `${reactFileRoute}/App.tsx`,
            range: "74-81",
          }),
        }
      );
    }

    if (lang === "vue") {
      const vueFileRoute = "web3auth/vue-starkex";
      // replace stuff in Home.vue
      const { code } = getConstructorCode(whitelabel === "yes", "eth");

      const replacementAggregator = new ReplaceFileAggregator();

      newFiles[`${vueFileRoute}/Home.vue`] = replacementAggregator.replaceFileVariable(
        files[`${vueFileRoute}/Home.vue`],
        `${vueFileRoute}/Home.vue`,
        PLACEHOLDERS.CONSTRUCTOR,
        code
      );

      const initRes = getInitCode(whitelabel === "yes");
      newFiles[`${vueFileRoute}/Home.vue`] = replacementAggregator.replaceFileVariable(
        files[`${vueFileRoute}/Home.vue`],
        `${vueFileRoute}/Home.vue`,
        PLACEHOLDERS.INIT,
        initRes.code
      );

      filenames.push(`${vueFileRoute}/package.json`);
      filenames.push(`${vueFileRoute}/Home.vue`);

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: `${vueFileRoute}/package.json`, range: "11-17" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: `${vueFileRoute}/Home.vue`, range: "40" },
        }
      );
      if (whitelabel === "yes") {
        steps.push(
          {
            ...STEPS.whiteLabeling,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "56-66" },
          },
          {
            ...STEPS.instantiate,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "68" },
          },
          {
            ...STEPS.subscribe,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "88-107" },
          },
          {
            ...STEPS.initialize,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "79" },
          },
          {
            ...STEPS.triggeringLogin,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "108-116" },
          },
          {
            ...STEPS.usingW3AFunctions,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "121-123" },
          },
          {
            ...STEPS.logout,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "117-120" },
          }
        );
      } else {
        steps.push(
          {
            ...STEPS.instantiate,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "49" },
          },
          {
            ...STEPS.subscribe,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "69-88" },
          },
          {
            ...STEPS.initialize,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "60" },
          },
          {
            ...STEPS.triggeringLogin,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "89-97" },
          },
          {
            ...STEPS.usingW3AFunctions,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "102-105" },
          },
          {
            ...STEPS.logout,
            pointer: { filename: `${vueFileRoute}/Home.vue`, range: "98-101" },
          }
        );
      }
    }

    filenames.push("starkex/starkex.ts");

    steps.push({
      ...STEPS.initializeProvider,
      pointer: { filename: "starkex/starkex.ts", range: "17-43" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
