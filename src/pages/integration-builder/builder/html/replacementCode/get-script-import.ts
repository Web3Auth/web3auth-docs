import { openloginAdapterVersion, web3authModalVersion, web3authSolanaProviderVersion } from "../../../../../common/versions";
import { ETHERS, NONE, OTHER_CHAINS, SOL } from "../../choices";

export const getScriptImport = (chain: string, whitelabel: boolean, customAuth: string, evmFramework: string, useModal: boolean) => {
  const openloginAdapterScript = `https://cdn.jsdelivr.net/npm/@web3auth/openlogin-adapter@${openloginAdapterVersion}/dist/openloginAdapter.umd.min.js`;
  const web3authModalScript = `https://cdn.jsdelivr.net/npm/@web3auth/modal@${web3authModalVersion}/dist/modal.umd.min.js`;
  const web3authCoreScript = `https://cdn.jsdelivr.net/npm/@web3auth/no-modal@${web3authModalVersion}/dist/core.umd.min.js`;
  const web3authSolanaProviderScript = `https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@${web3authSolanaProviderVersion}/dist/solanaProvider.umd.min.js`;
  let code = ``;

  if (useModal) {
    code += `
    // HIGHLIGHTSTART-installationweb3Auth
    <script src="${web3authModalScript}"></script>
    // HIGHLIGHTEND-installationweb3Auth`;
  } else {
    code += `
    // HIGHLIGHTSTART-installationweb3Auth
    <script src="${web3authCoreScript}"></script>
    // HIGHLIGHTEND-installationweb3Auth`;
  }

  if (whitelabel || customAuth !== NONE || chain in OTHER_CHAINS) {
    code += `
    // HIGHLIGHTSTART-installationweb3Auth
    <script src="${openloginAdapterScript}"></script>
    // HIGHLIGHTEND-installationweb3Auth`;
  }

  switch (chain) {
    case SOL:
      code += `
    // HIGHLIGHTSTART-installationSolana
    <script src="https://cdn.jsdelivr.net/npm/@solana/web3.js@1.43.5/lib/index.iife.min.js"></script>
    <script src="${web3authSolanaProviderScript}"></script>
    <script src="./solanaRPC.js"></script>
    // HIGHLIGHTEND-installationSolana`;
      break;
    default:
      if (evmFramework === ETHERS) {
        code += `
    // HIGHLIGHTSTART-installationEthers
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"></script>
    <script src="./ethersRPC.js"></script>
    // HIGHLIGHTEND-installationEthers`;
      } else {
        code += `
    // HIGHLIGHTSTART-installationWeb3
    <script src="https://cdn.jsdelivr.net/npm/web3@1.7.3/dist/web3.min.js"></script>
    <script src="./web3RPC.js"></script>
    // HIGHLIGHTEND-installationWeb3`;
      }
      break;
  }

  return code;
};
