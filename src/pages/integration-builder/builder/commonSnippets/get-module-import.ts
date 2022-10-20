export const getModuleImport = (
  chain: "eth" | "sol" | "starkex" | "starknet" | "tezos",
  isWhiteLabled: boolean,
  isCustomAuth: boolean,
  evmFramework: "web3" | "ethers"
) => {
  let code = `
import { Web3Auth } from "@web3auth/modal";`;

  if (isWhiteLabled || isCustomAuth || chain === "starkex" || chain === "starknet" || chain === "tezos") {
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
import RPC from "./solanaRPC";`;
      break;
    case "starkex":
      code += `
import RPC from "./starkexRPC";`;
      break;
    case "starknet":
      code += `
import RPC from "./starknetRPC";`;
      break;
    case "tezos":
      code += `
import RPC from "./tezosRPC";`;
      break;
    default:
      if (evmFramework === "ethers") {
        code += `
import RPC from "./ethersRPC";`;
      } else {
        code += `
import RPC from "./web3RPC";`;
      }
  }
  return code;
};
