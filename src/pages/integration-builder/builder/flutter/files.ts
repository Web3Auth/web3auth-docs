import { PLACEHOLDERS } from "../../commonCode";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeFlutter, getLoginCodeFlutter } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, mfa, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeFlutter = getConstructorCodeFlutter(whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeFlutter
  );

  const LoginCodeFlutter = getLoginCodeFlutter(mfa === "yes");
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.FLUTTER_LOGIN_CONFIG,
    LoginCodeFlutter
  );
}
