import * as installWebSDK from "./install-web-sdk.mdx";
import * as instantiateWebSDK from "./instantiate-web-sdk.mdx";
import * as serveWebSw from "./serve-web-sw.mdx";
import * as serveWebRedirect from "./serve-web-redirect.mdx";
import * as triggerWebLogin from "./trigger-web-login.mdx";
import { toSteps } from "../../utils";

const STEPS = toSteps({
  installWebSDK,
  instantiateWebSDK,
  serveWebSw,
  serveWebRedirect,
  triggerWebLogin,
});

export default STEPS;
