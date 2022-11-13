import { SOL } from "../choices";

export const FILENAME_INDEX_HTML = "frameworks/html/index.html";
export const FILENAME_STYLE_CSS = "frameworks/html/style.css";
export const FILENAME_SOLANARPC = "chains/solana/solanaRPC.js";
export const FILENAME_WEB3RPC = "chains/evm/web3RPC.js";
export const FILENAME_ETHERSRPC = "chains/evm/ethersRPC.js";

export default function getFileNames(filenames, chain, evmFramework) {
  filenames.push(FILENAME_INDEX_HTML);
  switch (chain) {
    case SOL:
      filenames.push(FILENAME_SOLANARPC);
      break;
    default:
      filenames.push(evmFramework === "ethers" ? FILENAME_ETHERSRPC : FILENAME_WEB3RPC);
      break;
  }
  filenames.push(FILENAME_STYLE_CSS);
}
