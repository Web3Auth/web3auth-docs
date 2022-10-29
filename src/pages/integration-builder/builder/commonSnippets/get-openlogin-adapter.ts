export const getOpenloginAdapter = (chain: "eth" | "sol" | "starkex" | "starknet" | "tezos", isWhiteLabled: boolean, isCustomAuth: boolean) => {
  let whitelabel = ``;
  let loginConfig = ``;
  let code = ``;

  if (isWhiteLabled) {
    whitelabel = `
          // HIGHLIGHTSTART-whiteLabeling
          whiteLabel: {
            name: "Your app Name",
            logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
            logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
            defaultLanguage: "en",
            dark: true, // whether to enable dark mode. defaultValue: false
          },
          // HIGHLIGHTEND-whiteLabeling`;
  }

  if (isCustomAuth) {
    loginConfig = `
          // HIGHLIGHTSTART-customAuthenticationStep
          loginConfig: {
            // Add login configs corresponding to the providers on modal
            // Google login
            google: {
              name: "Custom Auth Login",
              verifier: "YOUR_GOOGLE_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
              typeOfLogin: "google", // Pass on the login provider of the verifier you've created
              clientId: "GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
            },
            // Facebook login
            facebook: {
              name: "Custom Auth Login",
              verifier: "YOUR_FACEBOOK_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
              typeOfLogin: "facebook", // Pass on the login provider of the verifier you've created
              clientId: "FACEBOOK_CLIENT_ID_1234567890", // Pass on the clientId of the login provider here - Please note this differs from the Web3Auth ClientID. This is the JWT Client ID
            },
            // Add other login providers here
          },
          // HIGHLIGHTEND-customAuthenticationStep`;
  }

  if (isWhiteLabled || isCustomAuth || chain === "starkex" || chain === "starknet" || chain === "tezos") {
    code = `
      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "popup", ${whitelabel} ${loginConfig}
        },
      });
      web3auth.configureAdapter(openloginAdapter);`;
  }

  return code;
};
