import { openloginAdapterVersion, web3authBaseVersion, web3authModalVersion, web3authSolanaProviderVersion } from "../../../common/versions";
import { SOL, STARKEX, STARKNET, TEZOS } from "../builder/choices";

export const getPackageJson = (chain: string, isWhiteLabled: boolean, isCustomAuth: boolean, evmFramework: "ethers") => {
  let code = `
    // HIGHLIGHTSTART-installation
    "@web3auth/base": "^${web3authBaseVersion}",
    "@web3auth/modal": "^${web3authModalVersion}",`;

  if (isWhiteLabled || isCustomAuth || chain === STARKEX || chain === STARKNET || chain === TEZOS) {
    code += `
    "@web3auth/openlogin-adapter": "^${openloginAdapterVersion}",`;
  }
  switch (chain) {
    case SOL:
      code += `
    "@web3auth/solana-provider": "^${web3authSolanaProviderVersion}",
    "@solana/web3.js": "^1.36.0",`;
      break;

    case STARKEX:
      code += `
    "@starkware-industries/starkex-js": "0.0.6",
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",`;
      break;

    case STARKNET:
      code += `
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",
    "starknet": "^3.11.0",
    "web3": "^1.7.0",`;
      break;

    case TEZOS:
      code += `
    "@taquito/signer": "^13.0.0",
    "@taquito/taquito": "^13.0.0",
    "@taquito/utils": "^13.0.0",
    "@tezos-core-tools/crypto-utils": "^0.0.7",`;
      break;

    default:
      if (evmFramework === "ethers") {
        code += `
    "ethers": "^5.6.9",`;
      } else {
        code += `
    "web3": "^1.7.0",`;
      }
  }
  code += `
    // HIGHLIGHTEND-installation`;

  return code;
};
