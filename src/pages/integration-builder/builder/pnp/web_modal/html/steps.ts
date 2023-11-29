import * as hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.htmlQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.MODAL_HTML_INDEX_HTML],
        "Quick Start"
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.MODAL_HTML_INDEX_HTML],
        "Dashboard Registration"
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.MODAL_HTML_INDEX_HTML],
        "SDK Initialization"
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.MODAL_HTML_INDEX_HTML, files[hostedFileLinks.MODAL_HTML_INDEX_HTML], "Login"),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.MODAL_HTML_INDEX_HTML],
        "Get User Information"
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.MODAL_HTML_INDEX_HTML,
        files[hostedFileLinks.MODAL_HTML_INDEX_HTML],
        "Blockchain Calls"
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.MODAL_HTML_INDEX_HTML, files[hostedFileLinks.MODAL_HTML_INDEX_HTML], "Logout"),
    }
  );
}
