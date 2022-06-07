export const getConnectCode = (isCustomAuth: boolean) => {
  let code = ``;
  if (isCustomAuth) {
    code = `
    const jwtToken = "YOUR_ID_TOKEN";
    const web3authProvider = await web3auth.connect(WALLET_ADAPTERS.OPENLOGIN, {
      relogin: true,
      loginProvider: "jwt",
      extraLoginOptions: {
        id_token: jwtToken,
        domain: "YOUR_APP_DOMAIN",
        verifierIdField: "sub",
      },
    });`;
  } else {
    code = `
    const web3authProvider = await web3auth.connect();`;
  }
  return code;
};
