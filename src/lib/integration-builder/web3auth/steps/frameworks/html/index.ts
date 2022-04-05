import { toSteps } from "../../../../utils";
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

const htmlSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, customLogin }) {
    if (whitelabel === "yes") {
      // replace stuff in input.js
    }

    if (customAuthentication === "yes") {
      // replace stuff in input.js
    }

    if (customLogin === "no") {
      filenames.push("web3auth/web/index.html");
      filenames.push("web3auth/web/input.js");

      steps.push(
        {
          ...STEPS.installationWeb,
          pointer: { filename: "web3auth/web/index.html", range: "43" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web3auth/web/input.js", range: "3" },
        },
        {
          ...STEPS.instantiate,
          pointer: { filename: "web3auth/web/index.html", range: "52" },
        },
        {
          ...STEPS.subscribe,
          pointer: { filename: "web3auth/web/index.html", range: "70-90" },
        },
        {
          ...STEPS.initialize,
          pointer: { filename: "web3auth/web/index.html", range: "56" },
        },
        {
          ...STEPS.triggeringLogin,
          pointer: { filename: "web3auth/web/index.html", range: "92-101" },
        },
        {
          ...STEPS.getUserInfo,
          pointer: { filename: "web3auth/web/index.html", range: "113-120" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web3auth/web/index.html", range: "103-111" },
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

    filenames.push("web3auth/web/style.css");

    return { filenames, files, steps };
  },
};

export default htmlSteps;
