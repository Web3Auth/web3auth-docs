import * as hostedFileLinks from "../../../../../../../common/hostedFileLinks.json";
import STEPS from "../stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.SFA_WEB_VUE_HOME_VUE, files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE], "Quick Start"),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_PACKAGE_JSON,
        files[hostedFileLinks.SFA_WEB_VUE_PACKAGE_JSON],
        "Web3Auth Installation"
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_CONFIG_JS,
        files[hostedFileLinks.SFA_WEB_VUE_CONFIG_JS],
        "Bundler Issues"
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE],
        "Dashboard Registration"
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Verifier Creation"
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE],
        "SDK Initialization"
      ),
    },
    {
      ...STEPS.authProviderLogin,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_REACT_APP_TSX,
        files[hostedFileLinks.SFA_WEB_REACT_APP_TSX],
        "Auth Provider Login"
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.SFA_WEB_VUE_HOME_VUE, files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE], "Login"),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE],
        "Get User Information"
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_WEB_VUE_HOME_VUE,
        files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE],
        "Blockchain Calls"
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(hostedFileLinks.SFA_WEB_VUE_HOME_VUE, files[hostedFileLinks.SFA_WEB_VUE_HOME_VUE], "Logout"),
    }
  );
}
