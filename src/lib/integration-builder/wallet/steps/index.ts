import * as installSDK from "./install-sdk.mdx";
import * as installSDKWithScriptTags from "./install-sdk-with-script-tags.mdx";
import * as instantiateSDK from "./instantiate-sdk.mdx";
import * as triggerLogin from "./trigger-login.mdx";
import * as integrateWithWeb3 from "./integrate-with-web3.mdx";
import { toSteps } from "../../utils";

const STEPS = toSteps({
  installSDK,
  installSDKWithScriptTags,
  instantiateSDK,
  triggerLogin,
  integrateWithWeb3,
});

export default STEPS;
