const uiConfig = {
  theme: "dark",
  loginMethodsOrder: ["facebook", "twitter"],
  appLogo: "https://your-logo-url.com",
};

export const getConstructorCode = (
  isWhiteLabled: boolean
): {
  code: string;
  offset: number;
} => {
  const code = `
  const web3AuthCtorParams = {
        clientId: "YOUR_CLIENT_ID",
        chainConfig: { chainNamespace: chainNamespace },
        ${isWhiteLabled ? uiConfig : ""}
      };`;
  return {
    code,
    offset: isWhiteLabled ? 5 : 2,
  };
};

export const getInitCode = (isWhiteLabled: boolean) => {
  let code = `
  const initParams = {}`;
  if (isWhiteLabled) {
    code = `
    const initParams = {
        modalConfig: {
          [WALLET_ADAPTERS.OPENLOGIN]: {
            label: "openlogin",
            loginMethods: {
              reddit: {
                showOnModal: false,
                name: "reddit",
              },
            },
          },
        },
      };`;
  }
  return {
    code,
    offset: isWhiteLabled ? 12 : 0,
  };
};

export const getChainRpcImport = (
  chain: "eth" | "sol"
): {
  code: string;
  offset: number;
} => {
  let code = `
    import EthereumRpc from "./ethereum";
  `;
  if (chain === "sol") {
    code = `
    import SolanaRpc from "./solana"
  `;
  }
  return {
    code,
    offset: 0,
  };
};

export const getChainRpc = (
  chain: "eth" | "sol"
): {
  code: string;
  offset: number;
} => {
  let code = `
    const rpc = new EthereumRpc(web3auth.provider);
  `;
  if (chain === "sol") {
    code = `
    const rpc = new SolanaRpc(web3auth.provider);
    `;
  }
  return {
    code,
    offset: 0,
  };
};

export const getChainNamespace = (chain: "eth" | "sol") => {
  const code =
    chain === "eth"
      ? `
  const chainNamespace = eip155
  `
      : `
    const chainNamespace = solana
  `;
  return {
    code,
    offset: 0,
  };
};

export const PLACEHOLDERS = {
  CONSTRUCTOR: "web3authConstructor",
  INIT: "web3authInit",
  CHAIN_RPC: "web3authChainRpc",
  CHAIN_RPC_IMPORT: "web3authChainRpcImport",
  CHAIN_NAMESPACE: "web3authChainNamespace",
};
