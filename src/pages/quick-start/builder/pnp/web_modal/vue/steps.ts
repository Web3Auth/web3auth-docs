import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_PACKAGE_JSON,
        files[hostedFileLinks.MODAL_VUE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_CONFIG_JS,
        files[hostedFileLinks.MODAL_VUE_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.configureExternalWallets,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Configuring External Wallets",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_HOME_VUE],
        "Logout",
      ),
    },
  );
}
