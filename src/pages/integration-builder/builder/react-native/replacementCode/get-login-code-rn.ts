import { AUTH0, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../../choices";

export const getLoginCodeRN = (customAuth: string, mfa: string) => {
  let loginProvider = `
        loginProvider: "google", // Pass on the login provider of your choice: google, facebook, discord, twitch, twitter, github, linkedin, apple, etc.`;

  if (customAuth === GOOGLE) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        loginProvider: "google",
        // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === FACEBOOK) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        loginProvider: "facebook",
        // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === DISCORD) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        loginProvider: "discord",
        // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === TWITCH) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        loginProvider: "twitch",
        // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === AUTH0) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        // Auth0 login works with JWT loginProvider
        loginProvider: "jwt",
        extraLoginOptions: {
            domain: "https://YOUR-AUTH0-DOMAIN", // Please append "https://" before your domain
            verifierIdField: "sub", // For SMS & Email Passwordless, use "name" as verifierIdField
        },
        // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === JWT) {
    loginProvider = `
        // HIGHLIGHTSTART-customAuthStep
        loginProvider: "jwt",
        extraLoginOptions: {
            id_token: "YOUR_JWT_ID_TOKEN", // Please replace with your JWT ID token, generated within the last 1 minute
            verifierIdField: 'sub', // same as your JWT Verifier ID on dashboard
        },
        // HIGHLIGHTEND-customAuthStep`;
  }

  let mfaLevel = `
        // HIGHLIGHTSTART-mfa
        mfaLevel: "default", // Pass on the mfa level of your choice: default, optional, mandatory, none
        // HIGHLIGHTEND-mfa`;

  if (mfa === NONE) {
    mfaLevel = `
        // HIGHLIGHTSTART-mfa
        mfaLevel: "none", // Pass on the mfa level of your choice: default, optional, mandatory, none
        // HIGHLIGHTEND-mfa`;
  }

  if (mfa === MANDATORY) {
    mfaLevel = `
        // HIGHLIGHTSTART-mfa
        mfaLevel: "mandatory", // Pass on the mfa level of your choice: default, optional, mandatory, none
        // HIGHLIGHTEND-mfa`;
  }

  if (mfa === OPTIONAL) {
    mfaLevel = `
        // HIGHLIGHTSTART-mfa
        mfaLevel: "optional", // Pass on the mfa level of your choice: default, optional, mandatory, none
        // HIGHLIGHTEND-mfa`;
  }

  return `${mfaLevel}${loginProvider}`;
};
