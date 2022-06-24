export const getModuleImport = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let code = `
import { Web3Auth } from "@web3auth/web3auth";`;

  if (isWhiteLabled || isCustomAuth) {
    code += `
import { WALLET_ADAPTERS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";`;
  } else {
    code += `
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";`;
  }

  switch (chain) {
    case "sol":
      code += `
import RPC from "./solana";`;
      break;
    case "starkex":
      code += `
import RPC from "./starkex";`;
      break;
    case "starknet":
      code += `
import RPC from "./starknet";`;
      break;
    case "tezos":
      code += `
import RPC from "./tezos";`;
      break;
    default:
      code += `
import RPC from "./evm";`;
  }
  return code;
};
