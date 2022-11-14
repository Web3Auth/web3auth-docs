import { PLACEHOLDERS } from "../../commonCode";
import { YES } from "../choices";
import { FILENAME_INDEX_HTML } from "./filenames";
import { getConstructorCodeHTML, getInitCodeHTML, getOpenloginAdapterHTML, getScriptImport } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, chain, evmFramework, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeHTML = getConstructorCodeHTML(chain, whitelabel === YES);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeHTML
  );

  const InitCodeHTML = getInitCodeHTML(whitelabel === YES);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.INIT_CODE,
    InitCodeHTML
  );

  const OpenloginAdapterHTML = getOpenloginAdapterHTML(whitelabel === YES, customAuth === YES);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapterHTML
  );

  const ScriptImport = getScriptImport(chain, whitelabel === YES, customAuth === YES, evmFramework);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.SCRIPT_IMPORT,
    ScriptImport
  );
}
