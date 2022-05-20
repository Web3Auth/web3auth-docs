export const getConnectCode = (
  isCustomAuth: boolean
): {
  code: string;
} => {
  let code = ``;
  if (isCustomAuth) {
    code = `
        const jwtToken = "YOUR_ID_TOKEN";
        const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
          relogin: true,
          loginProvider: "jwt",
          extraLoginOptions: {
            id_token: jwtToken,
            domain: "YOUR_APP_DOMAIN",
            verifierIdField: "sub",
          },
        });
        `;
  } else {
    code = `
          const web3authProvider = await web3auth.connect();
          `;
  }
  return {
    code,
  };
};

export const getConnectCodeHTML = (
  isCustomAuth: boolean
): {
  code: string;
} => {
  let code = ``;
  if (isCustomAuth) {
    code = `
        const jwtToken = "YOUR_ID_TOKEN";
        const web3authProvider = await web3auth.connectTo("openlogin", {
          relogin: true,
          loginProvider: "jwt",
          extraLoginOptions: {
            id_token: jwtToken,
            domain: "YOUR_APP_DOMAIN",
            verifierIdField: "sub",
          },
        });
        `;
  } else {
    code = `
          const web3authProvider = await web3auth.connect();
          `;
  }
  return {
    code,
  };
};
