import { AQUA, AUTH0, CYAN, DISCORD, FACEBOOK, GOOGLE, JWT, MAINNET, TWITCH } from "../../choices";

export const getConstructorCodeIOS = (isWhitelabeled: boolean, customAuth: string, web3AuthNetwork: string) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  let network = `
                network: .testnet, // mainnet, testnet, cyan, aqua`;

  if (web3AuthNetwork === MAINNET) {
    network = `
                network: .mainnet, // mainnet, testnet, cyan, aqua`;
  } else if (web3AuthNetwork === CYAN) {
    network = `
                network: .cyan, // mainnet, testnet, cyan, aqua`;
  } else if (web3AuthNetwork === AQUA) {
    network = `
                network: .aqua, // mainnet, testnet, cyan, aqua`;
  }
  if (isWhitelabeled) {
    whitelabelCode = `
                //HIGHLIGHTSTART-whiteLabeling
                whiteLabel : W3AWhiteLabelData (
                  name = "Web3Auth Whitelabel App",
                  logoLight : null,
                  logoDark : null,
                  defaultLanguage : "en", // ['en','es','de','zh','ja','ko']
                  dark : true,
                  theme : ["primary": "#d53f8c"]
                ),
                //HIGHLIGHTEND-whiteLabeling`;
  }
  if (customAuth === GOOGLE) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.google.rawValue: .init (
                        verifier: "YOUR_GOOGLE_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .google,
                        clientId: "YOUR_GOOGLE_CLIENT_ID" // google's client id
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === FACEBOOK) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.facebook.rawValue: .init (
                        verifier: "YOUR_FACEBOOK_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .facebook,
                        clientId: "YOUR_FACEBOOK_CLIENT_ID" // facebook's client id
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === DISCORD) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.discord.rawValue: .init (
                        verifier: "YOUR_DISCOR_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .discord,
                        clientId: "YOUR_DISCORD_CLIENT_ID" // discord's client id
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === TWITCH) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.twitch.rawValue: .init (
                        verifier: "YOUR_TWITCH_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .twitch,
                        clientId: "YOUR_TWITCH_CLIENT_ID" // twitch's client id
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === AUTH0) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.jwt.rawValue: .init (
                        verifier: "YOUR_AUTH0_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .jwt,
                        clientId: "YOUR_AUTH0_CLIENT_ID" // auth0's client id
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === JWT) {
    customAuthCode = `
               //HIGHLIGHTSTART-customAuthStep
                loginConfig : [
                    TypeOfLogin.jwt.rawValue: .init (
                        verifier: "YOUR_CUSTOM_JWT_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                        typeOfLogin: .jwt,
                    )
                ]
                //HIGHLIGHTEND-customAuthStep`;
  }
  return `
        web3Auth = Web3Auth(
            W3AInitParams(
                clientId = clientId,${network}${whitelabelCode}${customAuthCode}
            )
        )`;
};
