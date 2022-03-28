import { toSteps } from "../../../../utils";
// web
import * as installationWeb from "./installation.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as subscribe from "./subscribe.mdx";
import * as initialize from "./initializing.mdx";
import * as triggeringLogin from "./triggering-login.mdx";

const STEPS = toSteps({
  installationWeb,
  registerApp,
  instantiate,
  subscribe,
  initialize,
  triggeringLogin,
});

export default STEPS;
