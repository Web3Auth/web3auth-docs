import { replaceFileVariable, toSteps } from "../../../utils";

import * as installationAndroid from "./installation.mdx";
import * as installationBuildGradle from "./install-build-gradle.mdx";
import * as installationAppManifest from "./install-app-manifest.mdx";
import * as registerApp from "./register-app.mdx";
import * as singleTop from "./singleTop.mdx";
import * as instantiate from "./instantiateSDK.mdx";
import * as setResultURL from "./setResultURL.mdx";
import * as triggeringLogin from "./triggering-login.mdx";
import * as triggeringLogout from "./triggering-logout.mdx";
import * as loginWithJwt from "./login-with-jwt.mdx";
import * as whiteLabeling from "../common/whitelabeling.mdx";

const STEPS = toSteps({
  installationAndroid,
  installationBuildGradle,
  installationAppManifest,
  registerApp,
  singleTop,
  instantiate,
  setResultURL,
  triggeringLogin,
  triggeringLogout,
  loginWithJwt,
  whiteLabeling,
});

const reactSteps = {
  STEPS,
  build({ filenames, files, steps, whitelabel, customAuthentication, dynamicConstructorParams, usingEmailPasswordless }) {
    filenames.push("frameworks/android/MainActivity.kt");
    filenames.push("frameworks/android/AndroidManifest.xml");
    filenames.push("frameworks/android/build.gradle");
    filenames.push("frameworks/android/settings.gradle");
    steps.push(
      {
        ...STEPS.installationAndroid,
        pointer: { filename: "frameworks/android/settings.gradle", range: "13" },
      },
      {
        ...STEPS.installationBuildGradle,
        pointer: { filename: "frameworks/android/build.gradle", range: "41" },
      },
      {
        ...STEPS.installationAppManifest,
        pointer: { filename: "frameworks/android/AndroidManifest.xml", range: "5" },
      },
      {
        ...STEPS.registerApp,
        pointer: { filename: "frameworks/android/AndroidManifest.xml", range: "27-35" },
      },
      {
        ...STEPS.singleTop,
        pointer: { filename: "frameworks/android/AndroidManifest.xml", range: "19" },
      },
      {
        ...STEPS.instantiate,
        pointer: { filename: "frameworks/android/MainActivity.kt", range: "30-40" },
      },
      {
        ...STEPS.setResultURL,
        pointer: { filename: "frameworks/android/MainActivity.kt", range: "52-57" },
      },
      {
        ...STEPS.triggeringLogin,
        pointer: { filename: "frameworks/android/MainActivity.kt", range: "59-70" },
      },
      {
        ...STEPS.triggeringLogout,
        pointer: { filename: "frameworks/android/MainActivity.kt", range: "72-82" },
      }
    );
    return { filenames, files, steps };
  },
};

export default reactSteps;
