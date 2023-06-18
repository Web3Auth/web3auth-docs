import { AQUA, AUTH0, CYAN, DISCORD, FACEBOOK, GOOGLE, JWT, MAINNET, TWITCH } from "../../choices";

export const getConstructorCodeFlutter = (isWhitelabeled: boolean, customAuth: string, web3AuthNetwork: string) => {
  let whitelabelCode = "";
  let loginConfigCode = "";
  let network = `
      network: Network.testnet, // mainnet, testnet, aqua or cyan`;

  if (web3AuthNetwork === MAINNET) {
    network = `
      network: Network.mainnet, // mainnet, testnet, aqua or cyan`;
  } else if (web3AuthNetwork === CYAN) {
    network = `
      network: Network.cyan, // mainnet, testnet, aqua or cyan`;
  } else if (web3AuthNetwork === AQUA) {
    network = `
      network: Network.aqua, // mainnet, testnet, aqua or cyan`;
  }
  if (isWhitelabeled) {
    whitelabelCode = `,
      // HIGHLIGHTSTART-whiteLabeling
      whiteLabel: WhiteLabelData(
        dark: true,
        name: "Web3Auth Flutter App",
        theme: themeMap
      )
      // HIGHLIGHTEND-whiteLabeling`;
  }
  if (customAuth === GOOGLE) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['google'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.google,
      clientId: "google_client_id" // google's client id
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  if (customAuth === FACEBOOK) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['facebook'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.facebook,
      clientId: "facebook_client_id" // facebook's client id
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  if (customAuth === DISCORD) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['discord'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.discord,
      clientId: "discord_client_id" // discord's client id
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  if (customAuth === TWITCH) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['twitch'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.twitch,
      clientId: "twitch_client_id" // twitch's client id
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  if (customAuth === AUTH0) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['jwt'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.jwt,
      clientId: "auth0_client_id" // Auth0's client id
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  if (customAuth === JWT) {
    loginConfigCode = `
    // HIGHLIGHTSTART-customAuthn
    HashMap loginConfig = new HashMap<String, LoginConfigItem>();
    loginConfig['jwt'] = LoginConfigItem({
      verifier: "verifier-name", // get it from web3auth dashboard
      typeOfLogin: TypeOfLogin.jwt,
    });
    // HIGHLIGHTEND-customAuthn`;
  }
  return `
    ${loginConfigCode}

    // HIGHLIGHTSTART-instantiate
    await Web3AuthFlutter.init(Web3AuthOptions(
      // HIGHLIGHTSTART-registerApp
      clientId:
          'BHZPoRIHdrfrdXj5E8G5Y72LGnh7L8UFuM8O0KrZSOs4T8lgiZnebB5Oc6cbgYSo3qSz7WBZXIs8fs6jgZqFFgw',
      // HIGHLIGHTEND-registerApp
      redirectUrl: redirectUrl,${network}
      loginConfig: loginConfig${whitelabelCode}
    ));
    // HIGHLIGHTEND-instantiate
  `;
};
