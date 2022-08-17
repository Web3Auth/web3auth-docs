export const getLoginCodeAndroid = (isMFA: boolean, isDappShare: boolean) => {
  let mfaCode = "";
  let dappShareCode = "";
  if (isMFA) {
    mfaCode = `, mfaLevel = MFALevel.MANDATORY`;
  }
  if (isDappShare) {
    dappShareCode = `, dappShare = "afford join neutral spoon bike glue ahead floor giant match primary style cycle front address gossip embark rose boy muscle tuition melt left question"`;
  }
  return `
        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> = web3Auth.login(LoginParams(selectedLoginProvider${mfaCode}${dappShareCode}))
  `;
};
