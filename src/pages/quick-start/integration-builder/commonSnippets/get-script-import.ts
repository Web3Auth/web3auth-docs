export const getScriptImport = (chain: "eth" | "sol" | "starkex" | "starknet", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let code = `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/web3auth.umd.min.js"></script>`;
  if (isWhiteLabled || isCustomAuth) {
    code += `
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/openlogin-adapter@0/dist/openloginAdapter.umd.min.js"></script>`;
  }
  switch (chain) {
    case "sol":
      code += `
    <script src="https://cdn.jsdelivr.net/npm/@solana/web3.js@1.43.5/lib/index.iife.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@0.9.0/dist/solanaProvider.umd.min.js"></script>
    <script src="./solana.js"></script>`;
      break;
    case "starkex":
      code += `
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@toruslabs/starkware-crypto@1.1.0/dist/starkwareCrypto.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@starkware-industries/starkex-js@0.0.6/dist/browser.min.js"></script>
    <script src="./starkex.js"></script>`;
      break;
    case "starknet":
      code += `
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@toruslabs/starkware-crypto@1.1.0/dist/starkwareCrypto.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/starknet@3.9.0/dist/index.min.js"></script>
    <script src="./starknet.js"></script>`;
      break;
    default:
      code += `
    <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
    <script src="./evm.js"></script>`;
      break;
  }

  return code;
};
