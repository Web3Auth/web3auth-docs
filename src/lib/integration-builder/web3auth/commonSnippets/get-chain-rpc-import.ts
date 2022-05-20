export const getChainRpcImport = (
  chain: "eth" | "sol" | "starkex" | "starknet"
): {
  code: string;
} => {
  let code = `
import RPC from "./evm";`;
  if (chain === "sol") {
    code = `
import RPC from "./solana";`;
  }
  if (chain === "starkex") {
    code = `
import RPC from "./starkex";`;
  }
  if (chain === "starknet") {
    code = `
import RPC from "./starknet";`;
  }
  return {
    code,
  };
};
