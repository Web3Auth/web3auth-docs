export const getScriptImportsCode = (
  chain: "eth" | "sol" | "starkex" | "starknet",
  customAuth
): {
  code: string;
} => {
  let code = "";
  if (chain === "eth") {
    code = `
      <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
    }.umd.min.js"></script>
      <script src="./evm.js"></script>
      `;
  } else if (chain === "sol") {
    code = `
      <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
    }.umd.min.js"></script>
      <script src="https://unpkg.com/@solana/web3.js@1/lib/index.iife.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/buffer@6"></script>
      <script src="https://cdn.jsdelivr.net/npm/@web3auth/solana-provider@0.9.0/dist/solanaProvider.umd.min.js"></script>
      <script src="./solana.js"></script>
      `;
  } else if (chain === "starkex") {
    code = `
      <script src="https://cdn.jsdelivr.net/npm/@web3auth/${customAuth ? "core" : "web3auth"}@0/dist/${
      customAuth ? "core" : "web3auth"
    }.umd.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1/dist/web3.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@toruslabs/starkware-crypto@1.1.0/dist/starkwareCrypto.umd.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@starkware-industries/starkex-js@0.0.6/dist/browser.min.js"></script>
      <script src="./starkex.js"></script>
      `;
  }

  return {
    code,
  };
};
