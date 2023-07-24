export const getWeb3AuthOptions = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `,
            // HIGHLIGHTSTART-whiteLabeling
            whiteLabel = new WhiteLabelData() {
                name = "Web3Auth Sample App",
                logoLight = null,
                logoDark = null,
                defaultLanguage = "en",
                dark = true,
                theme = new Dictionary < string, string > {
                    {
                      "primary",
                      "#d53f8c"
                    }
                }
            }
            // HIGHLIGHTEND-whiteLabeling`;
  }
  if (isCustomAuth) {
    customAuthCode = `,
            // HIGHLIGHTSTART-CustomAuthentication
            loginConfig = new LoginConfigItem()
            {
                verifier = "verifier-name", // get it from web3auth dashboard
                typeOfLogin = TypeOfLogin.GOOGLE,
                name = "Custom Google Login",
                clientId = getString(R.string.web3auth_google_client_id) // google's client id
            }
            // HIGHLIGHTEND-CustomAuthentication`;
  }
  return `
            redirectUrl = new Uri("torusapp://com.torus.Web3AuthUnity/auth"),
            // HIGHLIGHTSTART-registerApp
            clientId = "BAwFgL-r7wzQKmtcdiz2uHJKNZdK7gzEf2q-m55xfzSZOw8jLOyIi4AVvvzaEQO5nv2dFLEmf9LBkF8kaq3aErg",
            // HIGHLIGHTEND-registerApp
            network = Web3Auth.Network.TESTNET${whitelabelCode}${customAuthCode}`;
};
