export const getOpenloginAdapterHTML = (isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let whitelabel = ``;
  let loginConfig = ``;
  let code = ``;

  if (isWhiteLabled) {
    whitelabel = `
          whiteLabel: {
            name: "Your app Name",
            logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
            logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
            defaultLanguage: "en",
            dark: true, // whether to enable dark mode. defaultValue: false
          },`;
  }

  if (isCustomAuth) {
    loginConfig = `
          loginConfig: {
            jwt: {
              name: "Custom Auth Login",
              verifier: "YOUR_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
              typeOfLogin: "jwt", // Pass on the login provider of the verifier you've created
              clientId, // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
            },
          },`;
  }

  if (isWhiteLabled || isCustomAuth) {
    code = `
      const openloginAdapter = new window.OpenloginAdapter.OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect", ${whitelabel} ${loginConfig}
        },
      });
      web3auth.configureAdapter(openloginAdapter);`;
  }

  return code;
};
