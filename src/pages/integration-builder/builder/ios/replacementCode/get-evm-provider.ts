import { rpcTargetMap } from "../../../commonCode";
import { ARB, AVAX, BNB, CELO, CRO, GLMR, KLAY, MATIC, MOVR, ONE, OP } from "../../choices";

export const getEVMProvider = (chain: string) => {
  let target = "";
  switch (chain) {
    case MATIC:
      target = rpcTargetMap.MATIC;
      break;
    case BNB:
      target = rpcTargetMap.BNB;
      break;
    case AVAX:
      target = rpcTargetMap.AVAX;
      break;
    case ARB:
      target = rpcTargetMap.ARB;
      break;
    case OP:
      target = rpcTargetMap.OP;
      break;
    case CRO:
      target = rpcTargetMap.CRO;
      break;
    case ONE:
      target = rpcTargetMap.ONE;
      break;
    case CELO:
      target = rpcTargetMap.CELO;
      break;
    case GLMR:
      target = rpcTargetMap.GLMR;
      break;
    case MOVR:
      target = rpcTargetMap.MOVR;
      break;
    case KLAY:
      target = rpcTargetMap.KLAY;
      break;
    default:
      target = rpcTargetMap.ETH;
      break;
  }

  return `
// HIGHLIGHTSTART-evmRPCFunctions
    private var RPC_URL = "${target}";
// HIGHLIGHTEND-evmRPCFunctions`;
};
