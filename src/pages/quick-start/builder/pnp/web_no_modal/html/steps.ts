import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.htmlQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.NO_MODAL_HTML_INDEX_HTML],
        "Quick Start",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.chainConfig,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Chain Config",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.configureExternalWallets,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Configuring External Wallets",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS,
        files[hostedFileLinks.NO_MODAL_HTML_SCRIPT_JS],
        "Logout",
      ),
    },
  );
}
