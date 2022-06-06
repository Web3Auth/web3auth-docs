export const getModuleImport = (chain: "eth" | "sol" | "starkex" | "starknet", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let code = `
import { Web3Auth } from "@web3auth/web3auth";
import { WALLET_ADAPTERS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";`;

  if (isWhiteLabled || isCustomAuth) {
    code += `
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";`;
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
    default:
      code += `
import RPC from "./evm";`;
  }
  return code;
};
