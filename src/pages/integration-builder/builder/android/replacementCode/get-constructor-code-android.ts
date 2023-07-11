import { AQUA, AUTH0, CYAN, DISCORD, FACEBOOK, GOOGLE, JWT, MAINNET, TWITCH } from "../../choices";

export const getConstructorCodeAndroid = (isWhitelabeled: boolean, customAuth: string, web3AuthNetwork: string) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  let network = `
                network = Web3Auth.Network.TESTNET, // MAINNET, TESTNET, AQUA or CYAN`;

  if (web3AuthNetwork === MAINNET) {
    network = `
                network = Network.MAINNET, // MAINNET, TESTNET, AQUA or CYAN`;
  } else if (web3AuthNetwork === CYAN) {
    network = `
                network = Web3Auth.Network.CYAN, // MAINNET, TESTNET, AQUA or CYAN`;
  } else if (web3AuthNetwork === AQUA) {
    network = `
                network = Web3Auth.Network.AQUA, // MAINNET, TESTNET, AQUA or CYAN`;
  }
  if (isWhitelabeled) {
    whitelabelCode = `
                //HIGHLIGHTSTART-whiteLabeling
                whiteLabel = WhiteLabelData (
                  name = "Web3Auth Whitelabel App",
                  logoLight = null,
                  logoDark = null,
                  defaultLanguage = "en", // ['en','es','de','zh','ja','ko']
                  dark = true,
                  theme = hashMapOf (
                    "primary" to "#229954"
                  )
                ),
                //HIGHLIGHTEND-whiteLabeling`;
  }
  if (customAuth === GOOGLE) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("google" to LoginConfigItem(
                  verifier = "YOUR_GOOGLE_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.GOOGLE,
                  clientId = getString(R.string.google_client_id) // google's client id
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === FACEBOOK) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("facebook" to LoginConfigItem(
                  verifier = "YOUR_FACEBOOK_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.FACEBOOK,
                  clientId = getString(R.string.facebook_client_id) // facebook's client id
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === DISCORD) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("discord" to LoginConfigItem(
                  verifier = "YOUR_DISCORD_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.DISCORD,
                  clientId = getString(R.string.discord_client_id) // discord's client id
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === TWITCH) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("twitch" to LoginConfigItem(
                  verifier = "YOUR_TWITCH_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.TWITCH,
                  clientId = getString(R.string.twitch_client_id) // twitch's client id
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === AUTH0) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("twitch" to LoginConfigItem(
                  verifier = "YOUR_AUTH0_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.JWT,
                  clientId = getString(R.string.auth0_client_id) // auth0 client id
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === JWT) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig = hashMapOf("twitch" to LoginConfigItem(
                  verifier = "YOUR_CUSTOM_JWT_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                  typeOfLogin = TypeOfLogin.JWT,
                ))
                //HIGHLIGHTEND-customAuthStep`;
  }
  return `
        web3Auth = Web3Auth(
            Web3AuthOptions(
                context = this,
                clientId = getString(R.string.web3auth_project_id),
                redirectUrl = Uri.parse("com.web3auth.app://auth"),${network}${whitelabelCode}${customAuthCode}
            )
        )`;
};
