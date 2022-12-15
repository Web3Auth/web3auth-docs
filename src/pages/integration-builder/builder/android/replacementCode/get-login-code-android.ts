import { AUTH0, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../../choices";

export const getLoginCodeAndroid = (customAuth: string, mfa: string) => {
  let loginProvider = `  Provider.GOOGLE, // Pass on the login provider of your choice: google, facebook, discord, twitch, twitter, github, linkedin, apple, etc.`;

  if (customAuth === GOOGLE) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.GOOGLE,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === FACEBOOK) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.FACEBOOK,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === DISCORD) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.DISCORD,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === TWITCH) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.TWITCH,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === AUTH0) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.JWT,
                  extraLoginOptions = ExtraLoginOptions(
                    domain: "https://username.us.auth0.com", // domain of your auth0 app
                    verifierIdField: "sub", // The field in jwt token which maps to verifier id.
                  ),
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === JWT) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  Provider.JWT,
                  extraLoginOptions = ExtraLoginOptions(
                    id_token: "Your JWT id token",
                  )
              // HIGHLIGHTEND-customAuthStep`;
  }

  let mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = MFALevel.DEFAULT
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  if (mfa === NONE) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = MFALevel.NONE
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === OPTIONAL) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = MFALevel.OPTIONAL
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === MANDATORY) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = MFALevel.MANDATORY
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  return `        val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =
          web3Auth.login(
              LoginParams(
                ${loginProvider}${mfaCode}
              )
          )`;
};
