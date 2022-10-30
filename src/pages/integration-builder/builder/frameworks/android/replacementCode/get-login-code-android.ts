export const getLoginCodeAndroid = (isMFA: boolean) => {
  let mfaCode = "";
  if (isMFA) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = MFALevel.MANDATORY
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  return `
        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =
          web3Auth.login(
              LoginParams(
                  selectedLoginProvider${mfaCode}
              )
          )`;
};
