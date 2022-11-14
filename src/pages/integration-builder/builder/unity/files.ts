import { PLACEHOLDERS } from "../../commonCode";
import { FILENAME_WEB3AUTH } from "./filenames";
import { getLoginCode, getWeb3AuthOptions } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, mfa, replacementAggregator) {
  const newFiles = files;

  const Web3AuthOptions = getWeb3AuthOptions(whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_WEB3AUTH] = replacementAggregator.replaceFileVariable(
    files[FILENAME_WEB3AUTH],
    FILENAME_WEB3AUTH,
    PLACEHOLDERS.WEB3AUTH_OPTIONS,
    Web3AuthOptions
  );

  const LoginCode = getLoginCode(mfa === "yes");
  newFiles[FILENAME_WEB3AUTH] = replacementAggregator.replaceFileVariable(
    files[FILENAME_WEB3AUTH],
    FILENAME_WEB3AUTH,
    PLACEHOLDERS.LOGIN_CONFIG,
    LoginCode
  );
}
