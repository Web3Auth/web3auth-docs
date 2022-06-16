export const getRPCFunctionsReturnsVue = (chain: "eth" | "sol" | "starkex" | "starknet") => {
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
  return code;
};
