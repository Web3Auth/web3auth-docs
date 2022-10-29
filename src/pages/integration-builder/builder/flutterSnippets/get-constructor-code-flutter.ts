export const getConstructorCodeFlutter = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `,
      // HIGHLIGHTSTART-whiteLabeling
      whiteLabel: WhiteLabelData(
        dark: true,
        name: "Web3Auth Flutter App",
        theme: themeMap
      )
      // HIGHLIGHTEND-whiteLabeling`;
  }
  if (isCustomAuth) {
    customAuthCode = `,
      // HIGHLIGHTSTART-customAuthn
      loginConfig: loginConfig
      // HIGHLIGHTEND-customAuthn`;
  }
  return `
    // HIGHLIGHTSTART-instantiate
    await Web3AuthFlutter.init(Web3AuthOptions(
      // HIGHLIGHTSTART-registerApp
      clientId:
          'BHZPoRIHdrfrdXj5E8G5Y72LGnh7L8UFuM8O0KrZSOs4T8lgiZnebB5Oc6cbgYSo3qSz7WBZXIs8fs6jgZqFFgw',
      // HIGHLIGHTEND-registerApp
      network: Network.testnet,
      redirectUrl: redirectUrl${whitelabelCode}${customAuthCode}
      ));
    // HIGHLIGHTEND-instantiate
  `;
};
