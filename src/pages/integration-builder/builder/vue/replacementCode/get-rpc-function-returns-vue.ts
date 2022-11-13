import { SOL, STARKEX, STARKNET, TEZOS } from "../../choices";

export const getRPCFunctionsReturnsVue = (chain: string) => {
  let code = `
      getChainId,
      getAccounts,
      getBalance,
      sendTransaction,
      signMessage,
      getPrivateKey`;
  if (chain === SOL) {
    code = `
      getAccounts,
      getBalance,
      sendTransaction,
      signMessage,
      getPrivateKey`;
  }
  if (chain === STARKEX) {
    code = `
      onGetStarkAccount,
      getStarkKey,
      onMintRequest,
      onDepositRequest,
      onWithdrawalRequest`;
  }
  if (chain === STARKNET) {
    code = `
      onGetStarkAccount,
      getStarkKey,
      onDeployAccount`;
  }
  if (chain === TEZOS) {
    code = `
      onGetTezosKeyPair,
      getAccounts,
      getBalance,
      signMessage,
      signAndSendTransaction`;
  }
  return code;
};
