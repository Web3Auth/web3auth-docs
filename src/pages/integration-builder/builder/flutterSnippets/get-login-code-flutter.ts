export const getLoginCodeFlutter = (isMFA: boolean) => {
  let mfaCode = "";
  if (isMFA) {
    mfaCode = `,
        mfaLevel: MFALevel.DEFAULT`;
  }
  return `
    return Web3AuthFlutter.login(LoginParams(
        loginProvider: Provider.google${mfaCode}));
  `;
};
