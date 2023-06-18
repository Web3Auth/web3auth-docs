import { AQUA, AUTH0, CYAN, DISCORD, FACEBOOK, GOOGLE, JWT, MAINNET, TWITCH } from "../../choices";

export const getConstructorCodeRN = (whitelabel: boolean, customAuth: string, web3AuthNetwork: string) => {
  let whiteLabelCode = ``;
  let loginConfig = ``;
  let network = `
        network: OPENLOGIN_NETWORK.TESTNET, // MAINNET, AQUA,  CYAN or TESTNET`;

  if (web3AuthNetwork === MAINNET) {
    network = `
        network: OPENLOGIN_NETWORK.MAINNET, // MAINNET, AQUA,  CYAN or TESTNET`;
  } else if (web3AuthNetwork === CYAN) {
    network = `
        network: OPENLOGIN_NETWORK.CYAN, // MAINNET, AQUA,  CYAN or TESTNET`;
  } else if (web3AuthNetwork === AQUA) {
    network = `
        network: OPENLOGIN_NETWORK.AQUA, // MAINNET, AQUA,  CYAN or TESTNET`;
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

  return `${network}${whiteLabelCode}${loginConfig}`;
};
