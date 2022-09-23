export const getConstructorCodeFlutter = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `,
      whiteLabel: WhiteLabelData(
        dark: true, name: "Web3Auth Flutter App", theme: themeMap)`;
  }
  if (isCustomAuth) {
    customAuthCode = `,
      loginConfig: loginConfig`;
  }
  return `
    await Web3AuthFlutter.init(Web3AuthOptions(
      clientId:
          'BHZPoRIHdrfrdXj5E8G5Y72LGnh7L8UFuM8O0KrZSOs4T8lgiZnebB5Oc6cbgYSo3qSz7WBZXIs8fs6jgZqFFgw',
      network: Network.testnet,
      redirectUrl: redirectUrl${whitelabelCode}${customAuthCode}
      ));
  `;
};
