import { PLACEHOLDERS } from "../../../commonSnippets";
import { getConstructorCodeRN, getInitCodeRN, getModuleImportRN, getResolvedRedirectUrl } from "../../../reactNativeSnippets";
import { ReplaceFileAggregator, toSteps } from "../../../utils";
import * as installation from "./installation.mdx";
import * as installWebBrowser from "./installWebBrowser.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as platformSetup from "./platform-setup.mdx";
import * as registerApp from "./register-app.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as whiteLabeling from "./whitelabeling.mdx";

const STEPS = toSteps({
  installation,
  installWebBrowser,
  registerApp,
  instantiate,
  triggeringLogin,
  loginWithJwt,
  whiteLabeling,
  platformSetup,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, usingEmailPasswordless, rnWorkflowMode }) {
    const newFiles = files;
    const replacementAggregator = new ReplaceFileAggregator();

    const FILENAME_APP_TSX = "frameworks/react-native/App.tsx";

    const ConstructorCodeRN = getConstructorCodeRN(whitelabel === "yes", customAuthentication === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.CONSTRUCTOR_CODE,
      ConstructorCodeRN
    );

    const InitCodeRN = getInitCodeRN(customAuthentication === "yes", usingEmailPasswordless === "yes");
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.INIT_CODE,
      InitCodeRN
    );

    const ModuleImportRN = getModuleImportRN(rnWorkflowMode);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.MODULE_IMPORT,
      ModuleImportRN
    );

    const ResolvedRedirectUrl = getResolvedRedirectUrl(rnWorkflowMode);
    newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
      files[FILENAME_APP_TSX],
      FILENAME_APP_TSX,
      PLACEHOLDERS.RN_RESOLVED_REDIRECT_URL,
      ResolvedRedirectUrl
    );

    filenames.push(FILENAME_APP_TSX);

    const isExpo = rnWorkflowMode === "expo";
    const isCustomAuth = customAuthentication === "yes";
    const isWhitelabel = whitelabel === "yes";

    if (isExpo) {
      filenames.push("frameworks/react-native/expo/package.json");
    } else {
      filenames.push("frameworks/react-native/package.json");
    }

    if (isExpo) {
      filenames.push("frameworks/react-native/app.json");
    } else {
      filenames.push("frameworks/react-native/AndroidManifest.xml");
    }

    steps.push(
      ...(isExpo
        ? [
            {
              ...STEPS.installation,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/expo/package.json", range: "23" }),
            },
          ]
        : [
            {
              ...STEPS.installation,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/package.json", range: "16" }),
            },
          ]),

      ...(isExpo
        ? [
            {
              ...STEPS.installWebBrowser,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/expo/package.json", range: "35" }),
            },
          ]
        : [
            {
              ...STEPS.installWebBrowser,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/package.json", range: "15" }),
            },
          ]),
      ...(isExpo
        ? [
            {
              ...STEPS.platformSetup,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/app.json", range: "8" }),
            },
          ]
        : [
            {
              ...STEPS.platformSetup,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/AndroidManifest.xml", range: "24-32" }),
            },
          ]),
      {
        ...STEPS.registerApp,
      },
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/App.tsx", range: "13-14" }),
      },
      {
        ...(isCustomAuth ? STEPS.loginWithJwt : STEPS.triggeringLogin),
        pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/App.tsx", range: "15-16" }),
      },
      ...(isWhitelabel
        ? [
            {
              ...STEPS.whiteLabeling,
              pointer: replacementAggregator.rangeOffsetEditor({ filename: "frameworks/react-native/App.tsx", range: "13-14" }),
            },
          ]
        : [])
    );

    return { filenames, files, steps };
  },
};

export default reactSteps;
