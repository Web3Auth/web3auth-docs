import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.angularQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_PACKAGE_JSON,
        files[hostedFileLinks.SFA_WEB_ANGULAR_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_POLYFILL_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_POLYFILL_TS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.SFA_WEB_ANGULAR_APP_COMPONENT_TS],
        "Logout",
      ),
    },
  );
}
