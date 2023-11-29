import * as hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.htmlQuickStart,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.MODAL_HTML_STYLE_CSS, files[hostedFileLinks.MODAL_HTML_STYLE_CSS], "Quick Start"),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_STYLE_CSS,
        files[hostedFileLinks.MODAL_HTML_STYLE_CSS],
        "Dashboard Registration"
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_STYLE_CSS,
        files[hostedFileLinks.MODAL_HTML_STYLE_CSS],
        "SDK Initialization"
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.MODAL_HTML_STYLE_CSS, files[hostedFileLinks.MODAL_HTML_STYLE_CSS], "Login"),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_STYLE_CSS,
        files[hostedFileLinks.MODAL_HTML_STYLE_CSS],
        "Get User Information"
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_STYLE_CSS,
        files[hostedFileLinks.MODAL_HTML_STYLE_CSS],
        "Blockchain Calls"
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.MODAL_HTML_STYLE_CSS, files[hostedFileLinks.MODAL_HTML_STYLE_CSS], "Logout"),
    }
  );
}
