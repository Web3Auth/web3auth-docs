import { AUTH0, DEFAULT, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../builder/choices";

export const getOpenloginAdapter = (whitelabel: boolean, customAuth: string, useModal: boolean, mfa: string) => {
  let whiteLabelCode = ``;
  let loginConfig = ``;
  let code = ``;
  let mfaLevel = ``;

  if (useModal) {
    mfaLevel = `
         // HIGHLIGHTSTART-mfa
          loginSettings: {
            mfaLevel: "default", // Pass on the mfa level of your choice: default, optional, mandatory, none
          },
          // HIGHLIGHTEND-mfa`;

    if (mfa === NONE) {
      mfaLevel = `
          // HIGHLIGHTSTART-mfa
          loginSettings: {
            mfaLevel: "none", // Pass on the mfa level of your choice: default, optional, mandatory, none
          },
          // HIGHLIGHTEND-mfa`;
    }

    if (mfa === MANDATORY) {
      mfaLevel = `
          // HIGHLIGHTSTART-mfa
          loginSettings: {
            mfaLevel: "mandatory", // Pass on the mfa level of your choice: default, optional, mandatory, none
          },
          // HIGHLIGHTEND-mfa`;
    }

    if (mfa === OPTIONAL) {
      mfaLevel = `
          // HIGHLIGHTSTART-mfa
          loginSettings: {
            mfaLevel: "optional", // Pass on the mfa level of your choice: default, optional, mandatory, none
          },
          // HIGHLIGHTEND-mfa`;
    }
  }

  if (whitelabel) {
    whiteLabelCode = `
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

  if (customAuth === GOOGLE) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // Google login
              google: {
                name: "Google Login", // The desired name you want to show on the login button
                verifier: "YOUR_GOOGLE_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "google", // Pass on the login provider of the verifier you've created
                clientId: "GOOGLE_CLIENT_ID.apps.googleusercontent.com", // use your app client id you got from google
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === FACEBOOK) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // Facebook login
              facebook: {
                name: "Facebook Login", // The desired name you want to show on the login button
                verifier: "YOUR_FACEBOOK_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "facebook", // Pass on the login provider of the verifier you've created
                clientId: "FACEBOOK_CLIENT_ID_1234567890123456", // use your app client id you got from facebook
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === DISCORD) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // Discord login
              discord: {
                name: "Discord Login", // The desired name you want to show on the login button
                verifier: "YOUR_DISCORD_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "discord",
                clientId: "DISCORD_CLIENT_ID_123456789012345678", // use your app client id you got from discord
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === TWITCH) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // Discord login
              twitch: {
                name: "Twitch Login", // The desired name you want to show on the login button
                verifier: "YOUR_TWITCH_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "twitch",
                clientId: "TWITCH_CLIENT_ID_abcdefghi1jk2lm3n4567opq8r9s0t", // use your app client id you got from twitch
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === AUTH0) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // Auth0 login works with jwt login config
              jwt: {
                verifier: "YOUR_AUTH0_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "jwt",
                clientId: "AUTH0_CLIENT_ID_123ABcdefg4HiJKlMno4P5QR6stUvWXY", // use your app client id you got from auth0
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (customAuth === JWT) {
    loginConfig = `
            // HIGHLIGHTSTART-customAuthStep
            loginConfig: {
              // Add login configs corresponding to the provider
              // For firebase/ cognito & other providers, you need to pass the JWT token
              // JWT login
              jwt: {
                verifier: "YOUR_JWT_VERIFIER_NAME", // Please create a verifier on the developer dashboard and pass the name here
                typeOfLogin: "jwt",
              },
              // Add other login providers here
            },
            // HIGHLIGHTEND-customAuthStep`;
  }

  if (whitelabel || customAuth !== NONE || (useModal === true && mfa !== DEFAULT)) {
    code = `
        const openloginAdapter = new OpenloginAdapter({${mfaLevel}
          adapterSettings: {${whiteLabelCode} ${loginConfig}
          }
        });
        web3auth.configureAdapter(openloginAdapter);`;
  }

  return code;
};
