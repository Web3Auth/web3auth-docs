import {
  getConstructorCode,
  getInitCode,
  getModuleImport,
  getOpenloginAdapter,
  getPackageJson,
  getRPCFunctions,
  getRPCFunctionsButtonsReact,
  PLACEHOLDERS,
} from "../../commonCode";
import { FILENAME_APP_TSX, FILENAME_PACKAGE_JSON } from "./filenames";

export default function getUpdatedFiles(files, whitelabel, customAuth, chain, evmFramework, replacementAggregator) {
  const newFiles = files;

  const ConstructorCode = getConstructorCode(chain, whitelabel === "yes");
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCode
  );

  const InitCode = getInitCode(whitelabel === "yes");
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TSX], FILENAME_APP_TSX, PLACEHOLDERS.INIT_CODE, InitCode);

  const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuth === "yes", evmFramework);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.OPENLOGIN_ADAPTER,
    OpenloginAdapter
  );

  const PackageJson = getPackageJson(chain, whitelabel === "yes", customAuth === "yes", evmFramework);
  newFiles[FILENAME_PACKAGE_JSON] = replacementAggregator.replaceFileVariable(
    files[FILENAME_PACKAGE_JSON],
    FILENAME_PACKAGE_JSON,
    PLACEHOLDERS.PACKAGE_JSON,
    PackageJson
  );

  const RPCFunctions = getRPCFunctions(chain);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.RPC_FUNCTIONS,
    RPCFunctions
  );

  const RPCFunctionsButtonsReact = getRPCFunctionsButtonsReact(chain);
  newFiles[FILENAME_APP_TSX] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TSX],
    FILENAME_APP_TSX,
    PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
    RPCFunctionsButtonsReact
  );
}
