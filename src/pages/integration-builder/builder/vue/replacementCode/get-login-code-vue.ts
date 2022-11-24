import { AUTH0, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../../choices";

export const getLoginCodeVue = (useModal: boolean, customAuth: string, mfa: string) => {
  if (useModal) {
    const code = `
      // HIGHLIGHTSTART-login
      provider = await web3auth.connect();
      // HIGHLIGHTEND-login`;
    return code;
  }

  let loginProvider = `
        loginProvider: "google", // Pass on the login provider of your choice: google, facebook, discord, twitch, twitter, github, linkedin, apple, etc.`;

  if (customAuth === GOOGLE) {
    loginProvider = `
        loginProvider: "google",`;
  }

  if (customAuth === FACEBOOK) {
    loginProvider = `
        loginProvider: "facebook",`;
  }

  if (customAuth === DISCORD) {
    loginProvider = `
        loginProvider: "discord",`;
  }

  if (customAuth === TWITCH) {
    loginProvider = `
        loginProvider: "twitch",`;
  }

  if (customAuth === AUTH0) {
    loginProvider = `
        // Auth0 login works with JWT loginProvider
        loginProvider: "jwt",
        extraLoginOptions: {
            domain: "https://YOUR-AUTH0-DOMAIN", // Please append "https://" before your domain
            verifierIdField: "sub", // For SMS & Email Passwordless, use "name" as verifierIdField
        },`;
  }

  if (customAuth === JWT) {
    loginProvider = `
        loginProvider: "jwt",
        extraLoginOptions: {
            id_token: "YOUR_JWT_ID_TOKEN", // Please replace with your JWT ID token, generated within the last 1 minute
            verifierIdField: 'sub', // same as your JWT Verifier ID on dashboard
            domain: "https://YOUR-APPLICATION-DOMAIN" || "http://localhost:3000", // your application domain or any random string
        },`;
  }

  let mfaLevel = `
        mfaLevel: "default", // Pass on the mfa level of your choice: default, optional, mandatory, none`;

  if (mfa === NONE) {
    mfaLevel = `
        mfaLevel: "none", // Pass on the mfa level of your choice: default, optional, mandatory, none`;
  }

  if (mfa === MANDATORY) {
    mfaLevel = `
        mfaLevel: "mandatory", // Pass on the mfa level of your choice: default, optional, mandatory, none`;
  }

  if (mfa === OPTIONAL) {
    mfaLevel = `
        mfaLevel: "optional", // Pass on the mfa level of your choice: default, optional, mandatory, none`;
  }

  const code = `
      // HIGHLIGHTSTART-login
      provider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {${mfaLevel}${loginProvider}
      });
      // HIGHLIGHTEND-login`;
  return code;
};
