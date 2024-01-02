import * as hostedFileLinks from "../../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.flutterQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART,
        files[hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART],
        "Quick Start",
      ),
    },
    {
      ...STEPS.requirementsAndroid,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_APP_BUILD_GRADLE,
        files[hostedFileLinks.SFA_FLUTTER_APP_BUILD_GRADLE],
        "Requirements Android",
      ),
    },
    {
      ...STEPS.requirementsIOS,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_PODFILE,
        files[hostedFileLinks.SFA_FLUTTER_PODFILE],
        "Requirements iOS",
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_PUBSPEC_YAML,
        files[hostedFileLinks.SFA_FLUTTER_PUBSPEC_YAML],
        "Installation",
      ),
    },
    {
      ...STEPS.createVerifier,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART,
        files[hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART],
        "Verifier Creation",
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART,
        files[hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART],
        "Initialize Web3Auth SFA",
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART,
        files[hostedFileLinks.SFA_FLUTTER_AUTH_SERVICE_DART],
        "Get Key",
      ),
    },
  );
}
