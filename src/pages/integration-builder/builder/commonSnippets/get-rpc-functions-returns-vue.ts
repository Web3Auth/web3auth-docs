export const getRPCFunctionsReturnsVue = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos") => {
  let code = `
      getChainId,
      getAccounts,
      getBalance,
      sendTransaction,
      signMessage,
      getPrivateKey`;
  if (chain === "starkex") {
    code = `
      onGetStarkAccount,
      getStarkKey,
      onMintRequest,
      onDepositRequest,
      onWithdrawalRequest`;
  }
  if (chain === "starknet") {
    code = `
      onGetStarkAccount,
      getStarkKey,
      onDeployAccount`;
  }
  if (chain === "tezos") {
    code = `
      onGetTezosKeyPair,
      getAccounts,
      getBalance,
      signMessage,
      signAndSendTransaction`;
  }
  return code;
};
