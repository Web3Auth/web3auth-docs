export const getLoginCodeAndroid = (isMFA: boolean, isDappShare: boolean) => {
  let mfaCode = "";
  let dappShareCode = "";
  if (isMFA) {
    mfaCode = `, mfaLevel = MFALevel.MANDATORY`;
  }
  if (isDappShare) {
    dappShareCode = `, dappShare = "<24 words seed phrase>"`;
  }
  return `
        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> = web3Auth.login(LoginParams(selectedLoginProvider${mfaCode}${dappShareCode}))
  `;
};
