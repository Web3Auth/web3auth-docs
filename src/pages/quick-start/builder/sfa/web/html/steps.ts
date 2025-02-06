import hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.htmlQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_INDEX_HTML,
        files[hostedFileLinks.SFA_WEB_HTML_INDEX_HTML],
        "Quick Start",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "SDK Initialization",
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Auth Provider Login",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Get User Information",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS,
        files[hostedFileLinks.SFA_WEB_HTML_SCRIPT_JS],
        "Logout",
      ),
    },
  );
}
