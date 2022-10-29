export const getScriptImport = (chain: "sol", isWhiteLabled: boolean, isCustomAuth: boolean, evmFramework: "ethers") => {
  let code = `
    // HIGHLIGHTSTART-installation
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/modal"></script>`;
  if (isWhiteLabled || isCustomAuth) {
    code += `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/openlogin-adapter@1.1.1/dist/openloginAdapter.umd.min.js"></script>`;
  }
  switch (chain) {
    case "sol":
      code += `
    <script src="https://cdn.jsdelivr.net/npm/@solana/web3.js@1.43.5/lib/index.iife.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@1.1.1/dist/solanaProvider.umd.min.js"></script>
    <script src="./solanaRPC.js"></script>`;
      break;
    default:
      if (evmFramework === "ethers") {
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
