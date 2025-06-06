import hostedFileLinks from "../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.flutterQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Quick Start",
      ),
    },
    {
      ...STEPS.requirementsAndroid,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_BUILD_GRADLE,
        files[hostedFileLinks.PNP_FLUTTER_BUILD_GRADLE],
        "Requirements Android",
      ),
    },
    {
      ...STEPS.requirementsIOS,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_PODFILE,
        files[hostedFileLinks.PNP_FLUTTER_PODFILE],
        "Requirements iOS",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_PUBSPEC_YAML,
        files[hostedFileLinks.PNP_FLUTTER_PUBSPEC_YAML],
        "Installation",
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Get your Web3Auth Client ID from Dashboard",
      ),
    },
    {
      ...STEPS.whitelist,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_BUILD_GRADLE,
        files[hostedFileLinks.PNP_FLUTTER_BUILD_GRADLE],
        "Whitelist bundle ID",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Initialize Web3Auth",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Login",
      ),
    },
    {
      ...STEPS.getUserInfo,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Get User Info",
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Blockchain Calls",
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_FLUTTER_MAIN_DART,
        files[hostedFileLinks.PNP_FLUTTER_MAIN_DART],
        "Logout",
      ),
    },
  );
}
