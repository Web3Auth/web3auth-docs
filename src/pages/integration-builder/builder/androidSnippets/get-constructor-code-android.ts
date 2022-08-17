export const getConstructorCodeAndroid = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `
                whiteLabel = WhiteLabelData (
                  name = "Web3Auth Whitelabel App",
                  logoLight = null,
                  logoDark = null,
                  defaultLanguage = "en",
                  dark = true,
                  theme = hashMapOf (
                    "primary" to "#229954"
                  )
                ),`;
  }
  if (isCustomAuth) {
    customAuthCode = `
                loginConfig = hashMapOf("google" to LoginConfigItem(
                  verifier = "web3auth-core-google", // get it from web3auth dashboard
                  typeOfLogin = TypeOfLogin.GOOGLE,
                  name = "Custom Google Login",
                  clientId = getString(R.string.web3auth_google_client_id) // google's client id
                ))`;
  }
  return `
        web3Auth = Web3Auth(
            Web3AuthOptions(
                context = this,
                clientId = getString(R.string.web3auth_project_id),
                network = Web3Auth.Network.TESTNET, // MAINNET, TESTNET or CYAN
                redirectUrl = Uri.parse("com.web3auth.app://auth"),${whitelabelCode}${customAuthCode}
            )
        )`;
};
