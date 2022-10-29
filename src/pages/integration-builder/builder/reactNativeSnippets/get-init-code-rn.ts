export const getInitCodeRN = (isCustomAuth: boolean, isEmailPasswordless: boolean) => {
  let customAuthCode = "";
  if (isCustomAuth) {
    customAuthCode = `
          // HIGHLIGHTSTART-loginWithJwt
          extraLoginOptions: {
            domain: "any_nonempty_string",
            verifierIdField: "sub",
            id_token: "JWT_TOKEN",
          },
          // HIGHLIGHTEND-loginWithJwt
      `;
  } else if (isEmailPasswordless) {
    customAuthCode = `
          extraLoginOptions: {
            login_hint: "email@example.com",
          },
      `;
  }
  return `
        // HIGHLIGHTSTART-triggeringLogin
        const state = await web3auth.login({
          loginProvider: LOGIN_PROVIDER.GOOGLE,
          redirectUrl: resolvedRedirectUrl,
  ${customAuthCode}
        });
        // HIGHLIGHTEND-triggeringLogin
      `;
};
