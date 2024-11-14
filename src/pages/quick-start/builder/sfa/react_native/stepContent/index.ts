import * as createVerifier from "../../../../commonSteps/createVerifier.mdx";
import * as authProviderLogin from "../../../../commonSteps/authProviderLogin.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactNativeBundlerIssues from "../../../../commonSteps/reactNativeBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import { toSteps } from "../../../../utils";
import * as blockchainCalls from "./blockchainCallsReactNative.mdx";
import * as initialization from "./initializeReactNative.mdx";
import * as installation from "./installationReactNative.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as rnQuickStart from "./rnQuickStart.mdx";
import * as requirementsAndroid from "./requirementsAndroid.mdx";
import * as requirementsIOS from "./requirementsIOS.mdx";
import * as chainConfig from "../../../../commonSteps/chainConfig.mdx";

const STEPS = toSteps({
  rnQuickStart,
  createVerifier,
  requirementsAndroid,
  requirementsIOS,
  authProviderLogin,
  reactNativeBundlerIssues,
  installation,
  registerApp,
  initialization,
  login,
  getUserInfo,
  blockchainCalls,
  logout,
  chainConfig,
});

export default STEPS;
