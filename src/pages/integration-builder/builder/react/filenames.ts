import { SOL, STARKEX, STARKNET, TEZOS } from "../choices";

export const FILENAME_APP_TSX = "frameworks/react/App.tsx";
export const FILENAME_APP_CSS = "frameworks/react/App.css";
export const FILENAME_PACKAGE_JSON = "frameworks/react/package.json";
export const FILENAME_SOLANARPC = "chains/solana/solanaRPC.ts";
export const FILENAME_CONFIG_OVERRIDES = "frameworks/react/config-overrides.js";
export const FILENAME_STARKNET_CONFIG_OVERRIDES = "frameworks/react/starknet/config-overrides.js";
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
      filenames.push(FILENAME_CONFIG_OVERRIDES);
      break;
    case STARKEX:
      filenames.push(FILENAME_STARKEXRPC);
      filenames.push(FILENAME_CONFIG_OVERRIDES);
      break;
    case STARKNET:
      filenames.push(FILENAME_STARKNETRPC);
      filenames.push(FILENAME_ARGENT_ACCOUNT);
      filenames.push(FILENAME_STARKNET_CONFIG_OVERRIDES);
      break;
    case TEZOS:
      filenames.push(FILENAME_TEZOSRPC);
      filenames.push(FILENAME_CONFIG_OVERRIDES);
      break;
    default:
      filenames.push(evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
      filenames.push(FILENAME_CONFIG_OVERRIDES);
  }
  filenames.push(FILENAME_APP_CSS);
}
