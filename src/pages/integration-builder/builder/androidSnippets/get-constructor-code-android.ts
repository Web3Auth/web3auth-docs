export const getConstructorCodeAndroid = (isWhitelabeled: boolean, isCustomAuth: boolean) => {
  let whitelabelCode = "";
  let customAuthCode = "";
  if (isWhitelabeled) {
    whitelabelCode = `
                whiteLabel = WhiteLabelData (
                  name = "Web3Auth Sample App",
                  logoLight = null,
                  logoDark = null,
                  defaultLanguage = "en",
                  dark = true,
                  theme = hashMapOf (
                    "primary" to "#123456"
                  )
                )`;
  }
  if (isCustomAuth) {
    customAuthCode = `
                loginConfig = mapOf (
                  Web3AuthProvider.GOOGLE to LoginConfigItem (
                    verifier = "google",
                    typeOfLogin = TypeOfLogin.GOOGLE,
                    name = "Google",
                    description = "Login with Google",
                    clientId = getString (R.string.web3auth_google_client_id),
                    verifierSubIdentifier = "sub",
                    logoHover = "https://www.gstatic.com/images/branding/product/1x/google_48dp.png",
                    logoLight = "https://www.gstatic.com/images/branding/product/1x/google_48dp.png",
                    logoDark = "https://www.gstatic.com/images/branding/product/1x/google_48dp.png",
                    mainOption = true,
                    showOnModal = true,
                    showOnDesktop = true,
                    showOnMobile = true
                  )
                )`;
  }
  return `
        web3Auth = Web3Auth(
            Web3AuthOptions(
                context = this,
                clientId = getString(R.string.web3auth_project_id),
                network = Web3Auth.Network.TESTNET, // MAINNET, TESTNET or CYAN
                redirectUrl = Uri.parse("com.web3auth.app://auth")${whitelabelCode}${customAuthCode}
            )
        )`;
};
