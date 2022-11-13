import { SOL, STARKEX, STARKNET, TEZOS } from "../choices";

export const FILENAME_APP_HTML = "frameworks/angular/app.component.html";
export const FILENAME_POLYFILLS = "frameworks/angular/polyfills.ts";
export const FILENAME_TSCONFIG = "frameworks/angular/tsconfig.json";
export const FILENAME_APP_CSS = "frameworks/angular/app.component.css";
export const FILENAME_APP_TS = "frameworks/angular/app.component.ts";
export const FILENAME_PACKAGE_JSON = "frameworks/angular/package.json";
export const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
export const FILENAME_STARKEXRPC = "chains/starkex/starkexRPC.ts";
export const FILENAME_STARKNETRPC = "chains/starknet/starknetRPC.ts";
export const FILENAME_TEZOSRPC = "chains/tezos/tezosRPC.ts";
export const FILENAME_WEB3RPC = "chains/evm/web3RPC.ts";
export const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.ts";
export const FILENAME_ARGENT_ACCOUNT = "chains/starknet/ArgentAccount.json";

export default function getFileNames(filenames, chain, evmFramework) {
  filenames.push(FILENAME_APP_TS, FILENAME_PACKAGE_JSON);
  switch (chain) {
    case SOL:
      filenames.push(FILENAME_SOLANARPC);
      break;
    case STARKEX:
      filenames.push(FILENAME_STARKEXRPC);
      break;
    case STARKNET:
      filenames.push(FILENAME_STARKNETRPC, FILENAME_ARGENT_ACCOUNT);
      break;
    case TEZOS:
      filenames.push(FILENAME_TEZOSRPC);
      break;
    default:
      filenames.push(evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
  }
  filenames.push(FILENAME_APP_HTML, FILENAME_POLYFILLS, FILENAME_TSCONFIG, FILENAME_APP_CSS);
}
