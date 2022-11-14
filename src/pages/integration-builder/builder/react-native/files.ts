import { PLACEHOLDERS } from "../../commonCode";
import { FILENAME_APP_TSX } from "./filenames";
import { getConstructorCodeRN, getInitCodeRN, getModuleImportRN, getResolvedRedirectUrl } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, rnWorkflowMode, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeRN = getConstructorCodeRN(whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeRN
  );

  const InitCodeRN = getInitCodeRN(customAuth === "yes");
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
}
