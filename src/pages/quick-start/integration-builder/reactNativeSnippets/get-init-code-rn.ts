export const getInitCodeRN = (isCustomAuth: boolean, isEmailPasswordless: boolean) => {
  let customAuthCode = "";
  if (isCustomAuth) {
    customAuthCode = `
          extraLoginOptions: {
            domain: "any_nonempty_string",
            verifierIdField: "sub",
            id_token: "JWT_TOKEN",
          },
      `;
  } else if (isEmailPasswordless) {
    customAuthCode = `
          extraLoginOptions: {
            login_hint: "email@example.com",
          },
      `;
  }
  return `
        const state = await web3auth.login({
          loginProvider: LOGIN_PROVIDER.GOOGLE,
          redirectUrl: resolvedRedirectUrl,
  ${customAuthCode}
        });
      `;
};
