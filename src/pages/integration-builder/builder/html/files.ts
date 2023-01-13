import { getInitCode, getLoginCode, getOpenloginAdapter, PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_INDEX_HTML } from "./filenames";
import { getConstructorCode, getScriptImport } from "./replacementCode";

export default function getUpdatedFiles(files, chain, evmFramework, customAuth, mfa, whitelabel, useModal, web3AuthNetwork, replacementAggregator) {
  const newFiles = files;

  const ConstructorCode = getConstructorCode(chain, whitelabel === YES, useModal === YES, web3AuthNetwork);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCode
  );

  const InitCode = getInitCode(whitelabel === YES, useModal === YES);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.INIT_CODE,
    InitCode
  );

  const OpenloginAdapter = getOpenloginAdapter(whitelabel === YES, customAuth, useModal === YES, mfa);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapter
  );

  const LoginCode = getLoginCode(useModal === YES, customAuth, mfa);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.LOGIN_CODE,
    LoginCode
  );

  const ScriptImport = getScriptImport(chain, whitelabel === YES, customAuth, evmFramework, useModal === YES);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.SCRIPT_IMPORT,
    ScriptImport
  );
}
