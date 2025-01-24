import * as createVerifier from "../../../../commonSteps/createVerifier.mdx";
import * as authProviderLogin from "./authProviderLogin.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactNativeBundlerIssues from "../../../../commonSteps/reactNativeBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as blockchainCalls from "./blockchainCallsReactNative.mdx";
import * as initialization from "./initializeReactNative.mdx";
import * as installation from "./installationReactNative.mdx";
import * as login from "./login.mdx";
import * as nodeQuickStart from "./nodeQuickStart.mdx";
import * as chainConfig from "../../../../commonSteps/chainConfig.mdx";

const STEPS = toSteps({
  nodeQuickStart,
  createVerifier,
  authProviderLogin,
  reactNativeBundlerIssues,
  installation,
  registerApp,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  chainConfig,
});

export default STEPS;
