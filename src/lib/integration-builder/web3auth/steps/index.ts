import { toSteps } from "../../utils";
// web
import * as installationWeb from "./web/installation.mdx";
import * as registerApp from "./web/register-app.mdx";
import * as instantiate from "./web/instantiateSDK.mdx";
import * as subscribe from "./web/subscribe.mdx";
import * as initialize from "./web/initializing.mdx";
import * as triggeringLogin from "./web/triggering-login.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
});

export default STEPS;
