import { replaceFileVariable, toSteps } from "../../../../utils";
import * as whiteLabeling from "../../frameworks/common/whitelabeling.mdx";
import * as getUserInfo from "../../frameworks/react/get-user-info.mdx";
import * as initialize from "../../frameworks/react/initializing.mdx";
import * as instantiate from "../../frameworks/react/instantiateSDK.mdx";
import * as loginWithFirebaseAuth from "../../frameworks/react/login-with-firebase-auth.mdx";
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
  loginWithFirebaseAuth,
  logout,
  whiteLabeling,
  getUserInfo,
  initializeProvider,
});

const chainSteps = {
  STEPS,
  build({ filenames, files, steps, customLogin, customAuthentication, whitelabel }) {
    const newFiles = files;
    const walletProvider = "starknet";
    const fileRoute = "web3auth/react-starknet";

    if (customLogin !== "yes" && customAuthentication !== "yes") {
      filenames.push(`${fileRoute}/App.tsx`);
      filenames.push("web3auth/web/input.js");
      filenames.push(`${fileRoute}/package.json`);

      const providerMethods = `getStarkHDAccount, deployAccount`;

      newFiles[`${fileRoute}/App.tsx`] = replaceFileVariable(
        files[`${fileRoute}/App.tsx`],
        "wallet-provider",
        `import { ${providerMethods} } from "./${walletProvider}";
      `
      );

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: `${fileRoute}/package.json`, range: "6-10" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/input.js", range: "3" },
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
          pointer: { filename: `${fileRoute}/App.tsx`, range: "15" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "24-41" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "18" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "46-53" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "55-62" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: `${fileRoute}/App.tsx`, range: "64-71" },
        }
      );
    }

    filenames.push("starknet/starknet.ts");
    filenames.push("starknet/account.json");

    steps.push({
      ...STEPS.initializeProvider,
      pointer: { filename: "starknet/starknet.ts", range: "30-51" },
    });

    return { files: newFiles, steps, filenames };
  },
};

export default chainSteps;
