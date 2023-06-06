import {
  openloginAdapterVersion,
  web3authBaseVersion,
  web3authModalVersion,
  web3authNoModalVersion,
  web3authSolanaProviderVersion,
} from "../../../common/versions";
import { ETHERS, OTHER_CHAINS, SOL, STARKEX, STARKNET, TEZOS } from "../builder/choices";

export const getPackageJson = (chain: string, whitelabel: boolean, customAuth: boolean, evmFramework: string, useModal: boolean) => {
  let code = `
    // HIGHLIGHTSTART-installation
    "@web3auth/base": "^${web3authBaseVersion}",`;

  if (useModal) {
    code += `
    "@web3auth/modal": "^${web3authModalVersion}",`;
  } else {
    code += `
    "@web3auth/no-modal": "^${web3authNoModalVersion}",`;
  }

  if (whitelabel || customAuth || chain in OTHER_CHAINS) {
    code += `
    "@web3auth/openlogin-adapter": "^${openloginAdapterVersion}",`;
  }
  switch (chain) {
    case SOL:
      code += `
    "@web3auth/solana-provider": "^${web3authSolanaProviderVersion}",
    "@solana/web3.js": "^1.66.1",`;
      break;

    case STARKEX:
      code += `
    "@starkware-industries/starkex-js": "0.1.0",
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",`;
      break;

    case STARKNET:
      code += `
    "@starkware-industries/starkware-crypto-utils": "^0.0.2",
    "elliptic": "^6.5.4",
    "starknet": "^4.4.2",
    "web3": "^1.8.2",`;
      break;

    case TEZOS:
      code += `
    "@taquito/signer": "^13.0.0",
    "@taquito/taquito": "^13.0.0",
    "@taquito/utils": "^13.0.0",
    "@tezos-core-tools/crypto-utils": "^0.0.7",`;
      break;

    default:
      if (evmFramework === ETHERS) {
        code += `
    "ethers": "^6.4.0",`;
      } else {
        code += `
    "web3": "^1.8.2",`;
      }
  }
  code += `
    // HIGHLIGHTEND-installation`;

  return code;
};
