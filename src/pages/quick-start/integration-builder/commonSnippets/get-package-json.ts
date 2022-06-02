export const getPackageJson = (chain: "eth" | "sol" | "starkex" | "starknet", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let code = `
    "@web3auth/base": "^0.9.4",
    "@web3auth/web3auth": "^0.9.4",`;

  if (isWhiteLabled || isCustomAuth) {
    code += `
    "@web3auth/openlogin-adapter": "^0.9.4",`;
  }
  switch (chain) {
    case "sol":
      code += `
    "@web3auth/solana-provider": "^0.9.4",
    "@solana/web3.js": "^1.36.0",`;
      break;

    case "starkex":
      code += `
    "@starkware-industries/starkex-js": "0.0.6",
    "@toruslabs/starkware-crypto": "^1.1.0",
    "bn.js": "^5.2.0",
    "elliptic": "^6.5.4",`;
      break;

    case "starknet":
      code += `
    "@toruslabs/openlogin-starkkey": "^1.7.0",
    "bn.js": "^5.2.0",
    "elliptic": "^6.5.4",
    "starknet": "^3.11.0",
    "web3": "^1.7.0",`;
      break;

    default:
      code += `
    "@web3auth/ethereum-provider": "^0.9.4",
    "web3": "^1.7.0",`;
  }

  return code;
};
