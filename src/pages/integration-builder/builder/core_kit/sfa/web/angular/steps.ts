import * as hostedFileLinks from "../../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Quick Start"
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_PACKAGE_JSON,
        files[hostedFileLinks.NO_MODAL_ANGULAR_PACKAGE_JSON],
        "Web3Auth Installation"
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_POLYFILL_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_POLYFILL_TS],
        "Bundler Issues"
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Dashboard Registration"
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "SDK Initialization"
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Login"
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Get User Information"
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Blockchain Calls"
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS,
        files[hostedFileLinks.NO_MODAL_ANGULAR_APP_COMPONENT_TS],
        "Logout"
      ),
    }
  );
}
