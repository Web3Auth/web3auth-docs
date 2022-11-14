import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_MAINACTIVITY } from "./filenames";
import { getConstructorCodeFlutter, getLoginCodeFlutter } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, mfa, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeFlutter = getConstructorCodeFlutter(whitelabel === YES, customAuth === YES);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeFlutter
  );

  const LoginCodeFlutter = getLoginCodeFlutter(mfa === YES);
  newFiles[FILENAME_MAINACTIVITY] = replacementAggregator.replaceFileVariable(
    files[FILENAME_MAINACTIVITY],
    FILENAME_MAINACTIVITY,
    PLACEHOLDERS.FLUTTER_LOGIN_CONFIG,
    LoginCodeFlutter
  );
}
