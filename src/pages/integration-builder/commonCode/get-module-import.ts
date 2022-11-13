import { ETHERS, OTHER_CHAINS, SOL, STARKEX, STARKNET, TEZOS } from "../builder/choices";

export const getModuleImport = (chain: string, isWhiteLabled: boolean, isCustomAuth: boolean, evmFramework: string) => {
  let code = `
// HIGHLIGHTSTART-importModules
import { Web3Auth } from "@web3auth/modal";`;

  if (isWhiteLabled || isCustomAuth || chain in OTHER_CHAINS) {
    code += `
import { WALLET_ADAPTERS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";`;
  } else {
    code += `
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";`;
  }

  switch (chain) {
    case SOL:
      code += `
import RPC from "./solanaRPC";`;
      break;
    case STARKEX:
      code += `
import RPC from "./starkexRPC";`;
      break;
    case STARKNET:
      code += `
import RPC from "./starknetRPC";`;
      break;
    case TEZOS:
      code += `
import RPC from "./tezosRPC";`;
      break;
    default:
      if (evmFramework === ETHERS) {
        code += `
import RPC from "./ethersRPC";`;
      } else {
        code += `
import RPC from "./web3RPC";`;
      }
  }

  code += `
// HIGHLIGHTEND-importModules`;
  return code;
};
