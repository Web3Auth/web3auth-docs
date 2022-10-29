export const getLoginCodeFlutter = (isMFA: boolean) => {
  let mfaCode = "";
  if (isMFA) {
    mfaCode = `,
        // HIGHLIGHTSTART-multiFactorAuthentication
        mfaLevel: MFALevel.DEFAULT
        // HIGHLIGHTEND-multiFactorAuthentication`;
  }
  return `
    // HIGHLIGHTSTART-triggeringLogin
    return Web3AuthFlutter.login(LoginParams(
        loginProvider: Provider.google${mfaCode}));
    // HIGHLIGHTEND-triggeringLogin
  `;
};
