export const getRPCFunctionsReturnsVue = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos") => {
  let code = `
      getAccounts,
      getBalance,
      signMessage,
      signTransaction,
      sendTransaction`;
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
