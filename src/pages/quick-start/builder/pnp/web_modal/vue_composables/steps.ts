import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueComposablesQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_PACKAGE_JSON,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_CONFIG_JS,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX],
        "Chain Config",
      ),
    },
    {
      ...STEPS.instantiate,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX],
        "Instantiate SDK",
      ),
    },
    {
      ...STEPS.configureExternalWallets,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_WEB3AUTHCONTEXT_TSX],
        "Configuring External Wallets",
      ),
    },
    {
      ...STEPS.setupWeb3AuthProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_APP_VUE,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_APP_VUE],
        "Setup Web3Auth Provider",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE,
        files[hostedFileLinks.MODAL_VUE_COMPOSABLES_HOME_VUE],
        "Logout",
      ),
    },
  );
}
