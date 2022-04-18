import { ReplaceFileAggregator, replaceFileVariable, toSteps } from "../../../../utils";
import { getConstructorCode, getInitCode, PLACEHOLDERS } from "../../../commonSnippets";
import * as whiteLabeling from "../../frameworks/common/whitelabeling.mdx";
import * as getUserInfo from "../../frameworks/react/get-user-info.mdx";
import * as initialize from "../../frameworks/react/initializing.mdx";
import * as instantiate from "../../frameworks/react/instantiateSDK.mdx";
import * as logout from "../../frameworks/react/logout.mdx";
import * as registerApp from "../../frameworks/react/register-app.mdx";
import * as subscribe from "../../frameworks/react/subscribe.mdx";
import * as triggeringLogin from "../../frameworks/react/triggering-login.mdx";
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
  whiteLabeling,
  getUserInfo,
  initializeProvider,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, customLogin, customAuthentication, whitelabel, lang }) {
    const newFiles = files;
    const walletProvider = "starkex";

    if (lang === "react") {
      const reactFileRoute = "web3auth/react-starkex";

      if (customLogin !== "yes" && customAuthentication !== "yes") {
        filenames.push(`${reactFileRoute}/App.tsx`);
        filenames.push("web3auth/web/input.js");
        filenames.push(`${reactFileRoute}/package.json`);

        const providerMethods = `getStarkHDAccount, onMintRequest, onDepositRequest, onWithdrawalRequest`;

        newFiles[`${reactFileRoute}/App.tsx`] = replaceFileVariable(
          files[`${reactFileRoute}/App.tsx`],
          "wallet-provider",
          `import { ${providerMethods} } from "./${walletProvider}";
        `
        );

        steps.push(
          {
            ...STEPS.installationWeb,
            pointer: { filename: `${reactFileRoute}/package.json`, range: "6-10" },
          },
          {
            ...STEPS.registerApp,
            pointer: { filename: "web3auth/web/input.js", range: "4" },
          }
        );
        if (whitelabel === "yes") {
          steps.push({
            ...STEPS.whiteLabeling,
            pointer: { filename: "web3auth/web/input.js", range: "1-25" },
          });
        }

        steps.push(
          {
            ...STEPS.instantiate,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "15" },
          },
          {
            ...STEPS.subscribe,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "24-41" },
          },
          {
            ...STEPS.initialize,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "18" },
          },
          {
            ...STEPS.triggeringLogin,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "46-53" },
          },
          {
            ...STEPS.getUserInfo,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "55-62" },
          },
          {
            ...STEPS.logout,
            pointer: { filename: `${reactFileRoute}/App.tsx`, range: "64-71" },
          }
        );
      }
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

      if (customAuthentication !== "yes" && customLogin !== "yes") {
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
              ...STEPS.getUserInfo,
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
              ...STEPS.getUserInfo,
              pointer: { filename: `${vueFileRoute}/Home.vue`, range: "102-105" },
            },
            {
              ...STEPS.logout,
              pointer: { filename: `${vueFileRoute}/Home.vue`, range: "98-101" },
            }
          );
        }
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
