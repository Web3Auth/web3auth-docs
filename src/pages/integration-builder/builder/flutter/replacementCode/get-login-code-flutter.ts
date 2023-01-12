import { AUTH0, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../../choices";

export const getLoginCodeFlutter = (customAuth: string, mfa: string) => {
  let loginProvider = `Provider.google`;
  if (customAuth === GOOGLE) {
    loginProvider = `Provider.google`;
  }
  if (customAuth === FACEBOOK) {
    loginProvider = `Provider.facebook`;
  }
  if (customAuth === DISCORD) {
    loginProvider = `Provider.discord`;
  }
  if (customAuth === TWITCH) {
    loginProvider = `Provider.twitch`;
  }
  if (customAuth === AUTH0) {
    loginProvider = `Provider.jwt,
        extraLoginOptions: ExtraLoginOptions(
          domain: "https://username.us.auth0.com", // domain of your auth0 app
          verifierIdField: "sub", // The field in jwt token which maps to verifier id.
        )`;
  }
  if (customAuth === JWT) {
    loginProvider = `Provider.jwt,
        extraLoginOptions: ExtraLoginOptions(
          id_token: "YOUR_ID_TOKEN",
        )`;
  }

  let mfaCode = `,
        // HIGHLIGHTSTART-multiFactorAuthentication
        mfaLevel: MFALevel.DEFAULT
        // HIGHLIGHTEND-multiFactorAuthentication`;
  if (mfa === NONE) {
    mfaCode = `,
        // HIGHLIGHTSTART-multiFactorAuthentication
        mfaLevel: MFALevel.NONE
        // HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === OPTIONAL) {
    mfaCode = `,
        // HIGHLIGHTSTART-multiFactorAuthentication
        mfaLevel: MFALevel.OPTIONAL
        // HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === MANDATORY) {
    mfaCode = `,
        // HIGHLIGHTSTART-multiFactorAuthentication
        mfaLevel: MFALevel.MANDATORY
        // HIGHLIGHTEND-multiFactorAuthentication`;
  }
  return `
    // HIGHLIGHTSTART-triggeringLogin
    return Web3AuthFlutter.login(LoginParams(
        loginProvider: ${loginProvider}${mfaCode}
      ));
    // HIGHLIGHTEND-triggeringLogin
  `;
};
