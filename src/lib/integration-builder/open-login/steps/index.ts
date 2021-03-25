import * as installSDK from "./install-sdk.mdx";
import * as registerApp from "./register-app.mdx";
import * as instantiateSDK from "./instantiate-sdk.mdx";
import * as retrievePrivateKey from "./retrieve-private-key.mdx";
import * as triggerLogin from "./trigger-login.mdx";
import * as connectWithWeb3 from "./connect-with-web3.mdx";
import * as logout from "./logout.mdx";
import { toSteps } from "../../utils";

const STEPS = toSteps({
  installSDK,
  registerApp,
  instantiateSDK,
  retrievePrivateKey,
  triggerLogin,
  connectWithWeb3,
  logout,
});

export default STEPS;
