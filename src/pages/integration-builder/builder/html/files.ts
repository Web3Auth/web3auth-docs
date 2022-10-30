import { PLACEHOLDERS } from "../../commonCode";
import { FILENAME_INDEX_HTML } from "./filenames";
import { getConstructorCodeHTML, getInitCodeHTML, getOpenloginAdapterHTML, getScriptImport } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuthentication, chain, evmFramework, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeHTML = getConstructorCodeHTML(chain, whitelabel === "yes");
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeHTML
  );

  const InitCodeHTML = getInitCodeHTML(whitelabel === "yes");
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.INIT_CODE,
    InitCodeHTML
  );

  const OpenloginAdapterHTML = getOpenloginAdapterHTML(whitelabel === "yes", customAuthentication === "yes");
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapterHTML
  );

  const ScriptImport = getScriptImport(chain, whitelabel === "yes", customAuthentication === "yes", evmFramework);
  newFiles[FILENAME_INDEX_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_INDEX_HTML],
    FILENAME_INDEX_HTML,
    PLACEHOLDERS.SCRIPT_IMPORT,
    ScriptImport
  );
}
