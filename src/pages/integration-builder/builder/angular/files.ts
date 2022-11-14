import { getInitCode, getModuleImport, getOpenloginAdapter, getPackageJson, PLACEHOLDERS } from "../../commonCode";
import { FILENAME_APP_HTML, FILENAME_APP_TS, FILENAME_PACKAGE_JSON } from "./filenames";
import { getConstructorCodeAngular, getRPCFunctionsAngular, getRPCFunctionsButtonsAngular } from "./replacementCode";

export default function getUpdatedFiles(files, whitelabel, customAuth, chain, evmFramework, replacementAggregator) {
  const newFiles = files;

  const ConstructorCodeAngular = getConstructorCodeAngular(chain, whitelabel === "yes");
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.CONSTRUCTOR_CODE,
    ConstructorCodeAngular
  );

  const InitCode = getInitCode(whitelabel === "yes");
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(files[FILENAME_APP_TS], FILENAME_APP_TS, PLACEHOLDERS.INIT_CODE, InitCode);

  const ModuleImport = getModuleImport(chain, whitelabel === "yes", customAuth === "yes", evmFramework);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.MODULE_IMPORT,
    ModuleImport
  );

  const OpenloginAdapter = getOpenloginAdapter(chain, whitelabel === "yes", customAuth === "yes");
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
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

  const RPCFunctionsAngular = getRPCFunctionsAngular(chain);
  newFiles[FILENAME_APP_TS] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_TS],
    FILENAME_APP_TS,
    PLACEHOLDERS.RPC_FUNCTIONS,
    RPCFunctionsAngular
  );

  const RPCFunctionsButtonsAngular = getRPCFunctionsButtonsAngular(chain);
  newFiles[FILENAME_APP_HTML] = replacementAggregator.replaceFileVariable(
    files[FILENAME_APP_HTML],
    FILENAME_APP_HTML,
    PLACEHOLDERS.RPC_FUNCTIONS_BUTTONS,
    RPCFunctionsButtonsAngular
  );
}
