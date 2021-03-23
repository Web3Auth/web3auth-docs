import * as installSDK from "./install-sdk.mdx";
import * as installSDKWithScriptTags from "./install-sdk-with-script-tags.mdx";
import * as instantiateSDK from "./instantiate-sdk.mdx";
import * as triggerLogin from "./trigger-login.mdx";
import * as getUserInfo from "./get-user-info.mdx";
import * as integrateWithWeb3 from "./integrate-with-web3.mdx";
import * as logout from "./logout.mdx";
import { toSteps } from "../../utils";

const STEPS = toSteps({
  installSDK,
  installSDKWithScriptTags,
  instantiateSDK,
  triggerLogin,
  getUserInfo,
  integrateWithWeb3,
  logout,
});

export default STEPS;
