import { openloginAdapterVersion, web3authModalVersion, web3authSolanaProviderVersion } from "../../../../../common/versions";
import { ETHERS, SOL } from "../../choices";

export const getScriptImport = (chain: string, isWhiteLabled: boolean, isCustomAuth: boolean, evmFramework: string) => {
  const openloginAdapterScript = `https://cdn.jsdelivr.net/npm/@web3auth/openlogin-adapter@${openloginAdapterVersion}/dist/openloginAdapter.umd.min.js`;
  const web3authModalScript = `https://cdn.jsdelivr.net/npm/@web3auth/modal@${web3authModalVersion}/dist/modal.umd.min.js`;
  const web3authSolanaProviderScript = `https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@${web3authSolanaProviderVersion}/dist/solanaProvider.umd.min.js`;

  let code = `
    // HIGHLIGHTSTART-installation
    <script src="${web3authModalScript}"></script>`;
  if (isWhiteLabled || isCustomAuth) {
    code += `
    <script src="${openloginAdapterScript}"></script>`;
  }
  switch (chain) {
    case SOL:
      code += `
    <script src="https://cdn.jsdelivr.net/npm/@solana/web3.js@1.43.5/lib/index.iife.min.js"></script>
    <script src="${web3authSolanaProviderScript}"></script>
    <script src="./solanaRPC.js"></script>`;
      break;
    default:
      if (evmFramework === ETHERS) {
        code += `
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>
    <script src="./ethersRPC.js"></script>`;
      } else {
        code += `
    <script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
    <script src="./web3RPC.js"></script>`;
      }
      break;
  }

  code += `
    // HIGHLIGHTEND-installation`;

  return code;
};
