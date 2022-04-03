import { replaceFileVariable, toSteps } from "../../../../utils";
import * as getUserInfo from "./get-user-info.mdx";
import * as initialize from "./initializing.mdx";
// web
import * as installationWeb from "./installation.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as logout from "./logout.mdx";
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

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin }) {
    if (whitelabel === "yes") {
      // replace stuff in input.js
      files["web3auth/web/input.js"] = replaceFileVariable(
        files["web3auth/web/input.js"],
        "const web3AuthCtorParams = {};",
        `
export const web3AuthParams = {
    chainConfig: { chainNamespace: "solana" },
    clientId: "YOUR_CLIENT_ID_HERE", // get your clientId from https://dashboard.web3auth.io
    uiConfig: {
      appLogo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.svg",
      loginMethodsOrder: ["twitter", "facebook", "google"],
      theme: "dark",
    },
};
`
      );
    }

    if (customAuthentication === "yes") {
      // replace stuff in input.js
    }

    if (customLogin === "no") {
      filenames.push("web3auth/react/App.tsx");
      filenames.push("web3auth/web/input.js");
      filenames.push("web3auth/react/package.json");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/react/package.json", range: "7" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/input.js", range: "4" },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/react/App.tsx", range: "15" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/react/App.tsx", range: "24-41" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/react/App.tsx", range: "18" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/react/App.tsx", range: "46-53" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/react/App.tsx", range: "55-62" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/react/App.tsx", range: "64-71" },
        }
      );
    } else {
      filenames.push("web3auth/web/custom.html");
      filenames.push("web3auth/web/customInput.js");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/web/custom.html", range: "174" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/custom.html", range: "184" },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/web/custom.html", range: "182-186" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/web/custom.html", range: "204-224" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/web/custom.html", range: "190" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/web/custom.html", range: "226-235" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/web/custom.html", range: "247-253" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/web/custom.html", range: "237-245" },
        }
      );
    }

    filenames.push("web3auth/react/App.css");

    return { filenames, files, steps };
  },
};

export default reactSteps;
