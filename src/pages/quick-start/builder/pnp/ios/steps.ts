import hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.iOSQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT],
        "Quick Start",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_CONTENTVIEW_SWIFT,
        files[hostedFileLinks.PNP_IOS_CONTENTVIEW_SWIFT],
        "Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT],
        "Get your Web3Auth Client ID from Dashboard",
      ),
    },
    {
      ...STEPS.whitelist,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT],
        "Whitelist bundle ID",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT],
        "Initialize Web3Auth",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_VIEWMODEL_SWIFT,
        files[hostedFileLinks.PNP_IOS_USERDETAILVIEW_SWIFT],
        "Get User Info",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_WEB3RPC_SWIFT,
        files[hostedFileLinks.PNP_IOS_WEB3RPC_SWIFT],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_IOS_USERDETAILVIEW_SWIFT,
        files[hostedFileLinks.PNP_IOS_USERDETAILVIEW_SWIFT],
        "Logout",
      ),
    },
  );
}
