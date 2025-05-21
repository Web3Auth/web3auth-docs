import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.vueQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_PACKAGE_JSON,
        files[hostedFileLinks.VUE_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.vueBundlerIssues,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_CONFIG_JS,
        files[hostedFileLinks.VUE_CONFIG_JS],
        "Bundler Issues",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.config,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX,
        files[hostedFileLinks.VUE_WEB3AUTHCONTEXT_TSX],
        "Config",
      ),
    },
    {
      ...STEPS.setupWeb3AuthProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_APP_VUE,
        files[hostedFileLinks.VUE_APP_VUE],
        "Setup Web3Auth Provider",
      ),
    },
    {
      ...STEPS.setupWagmiProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_APP_VUE,
        files[hostedFileLinks.VUE_APP_VUE],
        "Setup Wagmi Provider",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_HOME_VUE,
        files[hostedFileLinks.VUE_HOME_VUE],
        "Login",
      ),
    },
    {
      ...STEPS.wagmiCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_HOME_VUE,
        files[hostedFileLinks.VUE_HOME_VUE],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.VUE_HOME_VUE,
        files[hostedFileLinks.VUE_HOME_VUE],
        "Logout",
      ),
    },
  );
}
