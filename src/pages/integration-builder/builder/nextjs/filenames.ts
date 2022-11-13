import { ETHERS, SOL, STARKEX, STARKNET, TEZOS } from "../choices";

export const FILENAME_GLOBALS_CSS = "frameworks/nextjs/globals.css";
export const FILENAME_INDEX_TSX = "frameworks/nextjs/index.tsx";
export const FILENAME_APP_TSX = "frameworks/nextjs/App.tsx";
export const FILENAME_PACKAGE_JSON = "frameworks/nextjs/package.json";
export const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
export const FILENAME_STARKEXRPC = "chains/starkex/starkexRPC.ts";
export const FILENAME_STARKNETRPC = "chains/starknet/starknetRPC.ts";
export const FILENAME_TEZOSRPC = "chains/tezos/tezosRPC.ts";
export const FILENAME_WEB3RPC = "chains/evm/web3RPC.ts";
export const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.ts";
export const FILENAME_ARGENT_ACCOUNT = "chains/starknet/ArgentAccount.json";

export default function getFileNames(filenames, chain, evmFramework) {
  filenames.push(FILENAME_APP_TSX);
  filenames.push(FILENAME_PACKAGE_JSON);
  switch (chain) {
    case SOL:
      filenames.push(FILENAME_SOLANARPC);
      break;
    case STARKEX:
      filenames.push(FILENAME_STARKEXRPC);
      break;
    case STARKNET:
      filenames.push(FILENAME_STARKNETRPC);
      filenames.push(FILENAME_ARGENT_ACCOUNT);
      break;
    case TEZOS:
      filenames.push(FILENAME_TEZOSRPC);
      break;
    default:
      filenames.push(evmFramework === ETHERS ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
  }
  filenames.push(FILENAME_INDEX_TSX);
  filenames.push(FILENAME_GLOBALS_CSS);
}
