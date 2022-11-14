import { PLACEHOLDERS } from "../../commonCode";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeAndroid, getLoginCodeAndroid } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, mfa, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAndroid = getConstructorCodeAndroid(whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAndroid
  );

  const LoginCodeAndroid = getLoginCodeAndroid(mfa === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.ANDROID_LOGIN_CONFIG,
    LoginCodeAndroid
  );
}
