import { AUTH0, DISCORD, FACEBOOK, GOOGLE, JWT, MANDATORY, NONE, OPTIONAL, TWITCH } from "../../choices";

export const getLoginCodeIOS = (customAuth: string, mfa: string) => {
  let loginProvider = `  .GOOGLE, // Pass on the login provider of your choice: google, facebook, discord, twitch, twitter, github, linkedin, apple, etc.`;

  if (customAuth === GOOGLE) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .GOOGLE,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === FACEBOOK) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .FACEBOOK,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === DISCORD) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .DISCORD,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === TWITCH) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .TWITCH,
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === AUTH0) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .JWT,
                  extraLoginOptions :ExtraLoginOptions(
                    display: nil, prompt: nil, max_age: nil,
                    ui_locales: nil, id_token_hint: nil, id_token: nil,
                    login_hint: nil, acr_values: nil, scope: nil,
                    audience: nil, connection: nil,
                    domain: "https://username.us.auth0.com", // domain of your auth0 app
                    client_id: nil, redirect_uri: nil, leeway: nil,
                    verifierIdField: "sub", // The field in jwt token which maps to verifier id.
                    isVerifierIdCaseSensitive: nil),
              // HIGHLIGHTEND-customAuthStep`;
  }
  if (customAuth === JWT) {
    loginProvider = `// HIGHLIGHTSTART-customAuthStep
                  .JWT,
                  extraLoginOptions :ExtraLoginOptions(
                    display: nil, prompt: nil, max_age: nil,
                    ui_locales: nil, id_token_hint: nil,
                    id_token: "YOUR_JWT_TOKEN"",
                    login_hint: nil, acr_values: nil, scope: nil,
                    audience: nil, connection: nil,
                    domain: nil,
                    client_id: nil, redirect_uri: nil, leeway: nil,
                    verifierIdField: nil,
                    isVerifierIdCaseSensitive: nil),
              // HIGHLIGHTEND-customAuthStep`;
  }

  let mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = .DEFAULT
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  if (mfa === NONE) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = .NONE
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === OPTIONAL) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = .OPTIONAL
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (mfa === MANDATORY) {
    mfaCode = `,
                  //HIGHLIGHTSTART-multiFactorAuthentication
                  mfaLevel = .MANDATORY
                  //HIGHLIGHTEND-multiFactorAuthentication`;
  }

  return `
  func login(provider: Web3AuthProvider) {
        Task {
            do {
                let result = try await Web3Auth(.init(
                  clientId: clientId, network: network))
                  .login(W3ALoginParams(
                    ${loginProvider}${mfaCode}
                    ))
                await MainActor.run(body: {
                    user = result
                    loggedIn = true
                })

            } catch {
                print("Error")
            }
        }
    }
  `;

  return `
  let login= web3Auth.login(
              W3ALoginParams(
                ${loginProvider}${mfaCode}
              )
          )`;
};
