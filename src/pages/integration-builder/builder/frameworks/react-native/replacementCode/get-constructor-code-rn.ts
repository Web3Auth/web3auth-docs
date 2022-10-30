export const getConstructorCodeRN = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `
          // HIGHLIGHTSTART-whiteLabeling
          whiteLabel: {
            name: "YOUR_APP_NAME",
            logoLight: "URL_TO_APP_LOGO_FOR_LIGHT_THEME",
            logoDark: "URL_TO_APP_LOGO_FOR_DARK_THEME",
            defaultLanguage: "en", // or other language
            dark: true // or false,
            theme: {},
          },
          // HIGHLIGHTEND-whiteLabeling
      `;
  }
  if (isCustomAuth) {
    customAuthCode = `
          // HIGHLIGHTSTART-loginWithJwt
          loginConfig: {
            jwt: {
              name: "BRAND_NAME",
              verifier: "VERIFIER_NAME",
              typeOfLogin: "jwt",
              clientId: "CLIENT_ID"
            },
          },
          // HIGHLIGHTEND-loginWithJwt
      `;
  }
  return `
        // HIGHLIGHTSTART-instantiate
        const web3auth = new Web3Auth(WebBrowser, {
          // HIGHLIGHTSTART-registerApp
          clientId: "CLIENT_ID",
          // HIGHLIGHTEND-registerApp
          network: OPENLOGIN_NETWORK.TESTNET, // or other networks
  ${whitelabelCode}
  ${customAuthCode}
        });
      // HIGHLIGHTEND-instantiate`;
};
