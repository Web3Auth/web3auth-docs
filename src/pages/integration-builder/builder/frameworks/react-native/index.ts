import { PLACEHOLDERS } from "../../commonSnippets";
import { getConstructorCodeRN, getInitCodeRN, getModuleImportRN, getResolvedRedirectUrl } from "../../reactNativeSnippets";
import { ReplaceFileAggregator, toSteps } from "../../utils";
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
    const FILENAME_EXPO_PACKAGE_JSON = "frameworks/react-native/expo/package.json";
    const FILENAME_BARE_PACKAGE_JSON = "frameworks/react-native/package.json";
    const FILENAME_APP_JSON = "frameworks/react-native/app.json";
    const FILENAME_ANDROID_MANIFEST = "frameworks/react-native/AndroidManifest.xml";
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
      filenames.push(FILENAME_EXPO_PACKAGE_JSON);
    } else {
      filenames.push(FILENAME_BARE_PACKAGE_JSON);
    }

    if (isExpo) {
      filenames.push(FILENAME_APP_JSON);
    } else {
      filenames.push(FILENAME_ANDROID_MANIFEST);
    }

    steps.push(
      ...(isExpo
        ? [
            {
              ...STEPS.installation,
              pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installation"),
            },
          ]
        : [
            {
              ...STEPS.installation,
              pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installation"),
            },
          ]),

      ...(isExpo
        ? [
            {
              ...STEPS.installWebBrowser,
              pointer: replacementAggregator.highlightRange(FILENAME_EXPO_PACKAGE_JSON, files[FILENAME_EXPO_PACKAGE_JSON], "installWebBrowser"),
            },
          ]
        : [
            {
              ...STEPS.installWebBrowser,
              pointer: replacementAggregator.highlightRange(FILENAME_BARE_PACKAGE_JSON, files[FILENAME_BARE_PACKAGE_JSON], "installWebBrowser"),
            },
          ]),
      ...(isExpo
        ? [
            {
              ...STEPS.platformSetup,
              pointer: replacementAggregator.highlightRange(FILENAME_APP_JSON, files[FILENAME_APP_JSON], "platformSetup"),
            },
          ]
        : [
            {
              ...STEPS.platformSetup,
              pointer: replacementAggregator.highlightRange(FILENAME_ANDROID_MANIFEST, files[FILENAME_ANDROID_MANIFEST], "platformSetup"),
            },
          ]),
      {
        ...STEPS.registerApp,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "registerApp"),
      },
      {
        ...STEPS.instantiate,
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "instantiate"),
      },
      {
        ...(isCustomAuth ? STEPS.loginWithJwt : STEPS.triggeringLogin),
        pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], isCustomAuth ? "loginWithJwt" : "triggeringLogin"),
      },
      ...(isWhitelabel
        ? [
            {
              ...STEPS.whiteLabeling,
              pointer: replacementAggregator.highlightRange(FILENAME_APP_TSX, files[FILENAME_APP_TSX], "whiteLabeling"),
            },
          ]
        : [])
    );

    return { filenames, files, steps };
  },
};

export default reactSteps;
