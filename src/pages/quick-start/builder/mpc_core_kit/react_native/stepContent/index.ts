import * as angularBundlerIssues from "../../../../commonSteps/angularBundlerIssues.mdx";
import * as authProviderLogin from "../../../../commonSteps/authProviderLogin.mdx";
import * as blockchainCalls from "../../../../commonSteps/blockchainCalls.mdx";
import * as createVerifier from "../../../../commonSteps/createFirebaseVerifier.mdx";
import * as getUserInfo from "../../../../commonSteps/getUserInfo.mdx";
import * as reactBundlerIssues from "../../../../commonSteps/reactBundlerIssues.mdx";
import * as registerApp from "../../../../commonSteps/registerApp.mdx";
import * as vueBundlerIssues from "../../../../commonSteps/vueBundlerIssues.mdx";
import { toSteps } from "../../../../utils";
import * as initialization from "./initializeMPCCK.mdx";
import * as reactNativeBundlerIssues from "../../../../commonSteps/reactNativeBundlerIssues.mdx";
import * as installation from "./installationMPCCK.mdx";
import * as login from "./login.mdx";
import * as logout from "./logout.mdx";
import * as angularQuickStart from "./mpcckAngularQuickStart.mdx";
import * as nextQuickStart from "./mpcckNextQuickStart.mdx";
import * as reactQuickStart from "./mpcckReactQuickStart.mdx";
import * as rnQuickStart from "./mpcckReactNativeQuickStart.mdx";
import * as vueQuickStart from "./mpcckVueQuickStart.mdx";
import * as requirementsAndroid from "./requirementsAndroid.mdx";
import * as requirementsIOS from "./requirementsIOS.mdx";
import * as chainConfig from "./chainConfigMPC.mdx";
import * as enableMFA from "../../../../commonSteps/enableMFAMPC.mdx";
import * as recoverAccount from "../../../../commonSteps/recoverAccount.mdx";
import * as socialRecoveryFactor from "../../../../commonSteps/socialRecoveryFactor.mdx";

const STEPS = toSteps({
  recoverAccount,
  reactQuickStart,
  rnQuickStart,
  installation,
  reactBundlerIssues,
  registerApp,
  enableMFA,
  createVerifier,
  authProviderLogin,
  initialization,
  login,
  chainConfig,
  getUserInfo,
  blockchainCalls,
  logout,
  nextQuickStart,
  angularQuickStart,
  vueQuickStart,
  vueBundlerIssues,
  angularBundlerIssues,
  requirementsAndroid,
  requirementsIOS,
  reactNativeBundlerIssues,
  socialRecoveryFactor,
});

export default STEPS;
