export const getLoginCodeAndroid = (isMFA: boolean) => {
  let mfaCode = "";
  if (isMFA) {
    mfaCode = `,
                  mfaLevel = MFALevel.MANDATORY`;
  }
  return `
        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =
          web3Auth.login(
              LoginParams(
                  selectedLoginProvider${mfaCode}
              )
          )`;
};
