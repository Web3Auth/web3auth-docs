import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.nextjsQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_LAYOUT_TSX,
        files[hostedFileLinks.NEXTJS_LAYOUT_TSX],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_PACKAGE_JSON,
        files[hostedFileLinks.NEXTJS_PACKAGE_JSON],
        "Web3Auth Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX],
        "Dashboard Registration",
      ),
    },
    {
      ...STEPS.config,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX],
        "Config",
      ),
    },
    {
      ...STEPS.setupWeb3AuthProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX],
        "Setup Web3Auth Provider",
      ),
    },
    {
      ...STEPS.setupWagmiProvider,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_PROVIDER_TSX],
        "Setup Wagmi Provider",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX],
        "Login",
      ),
    },
    {
      ...STEPS.wagmiCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX,
        files[hostedFileLinks.NEXTJS_COMPONENTS_APP_TSX],
        "Logout",
      ),
    },
  );
}
