import SwiftUI
import Web3Auth

struct ContentView: View {
    @SwiftUI.State var text = ""
    var body: some View {
        VStack {
            Button(
                action: {
                    Web3Auth()
                        .login(W3ALoginParams()) {
                            switch $0 {
                            case .success(let result):
                                showResult(result: result)
                            case .failure(let error):
                                print("Error: \(error)")
                            }
                        }
                },
                label: {
                    Text("Sign In")
                        .padding()
                }
            )
            
            Button(
                action: {
                    Web3Auth()
                        .login(W3ALoginParams(loginProvider: .GOOGLE)) {
                            switch $0 {
                            case .success(let result):
                                showResult(result: result)
                            case .failure(let error):
                                print("Error: \(error)")
                            }
                        }
                },
                label: {
                    Text("Sign In with Google")
                        .padding()
                }
            )
            
            Button(
                action: {
                    Web3Auth()
                        .login(W3ALoginParams(loginProvider: .APPLE)) {
                            switch $0 {
                            case .success(let result):
                                showResult(result: result)
                            case .failure(let error):
                                print("Error: \(error)")
                            }
                        }
                },
                label: {
                    Text("Sign In with Apple")
                        .padding()
                }
            )
            
            Button(
                action: {
                    Web3Auth()
                        .login(W3ALoginParams(
                            loginProvider: .EMAIL_PASSWORDLESS,
                            extraLoginOptions: ExtraLoginOptions(
                                display: nil,
                                prompt: nil,
                                max_age: nil,
                                ui_locales: nil,
                                id_token_hint: nil,
                                id_token: nil,
                                login_hint: "your-email@example.com",
                                acr_values: nil,
                                scope: nil,
                                audience: nil,
                                connection: nil,
                                domain: nil,
                                client_id: nil,
                                redirect_uri: nil,
                                leeway: nil,
                                verifierIdField: nil,
                                isVerifierIdCaseSensitive: nil
                            )
                        )) {
                            switch $0 {
                            case .success(let result):
                                showResult(result: result)
                            case .failure(let error):
                                print("Error: \(error)")
                            }
                        }
                },
                label: {
                    Text("Sign In with Email Passwordless")
                        .padding()
                }
            )
            
            Button(
                action: {
                    Web3Auth(
                        W3AInitParams(
                            clientId: "your-client-id",
                            network: .testnet,
                            whiteLabel: W3AWhiteLabelData(
                                name: "Web3Auth Stub",
                                dark: true,
                                theme: ["primary": "#123456"]
                            )
                        )
                    )
                    .login(W3ALoginParams(loginProvider: .GOOGLE)) {
                        switch $0 {
                        case .success(let result):
                            showResult(result: result)
                        case .failure(let error):
                            print("Error: \(error)")
                        }
                    }
                },
                label: {
                    Text("Sign In with Whitelabel")
                        .padding()
                }
            )
            
            Button(
                action: {
                    Web3Auth(
                        W3AInitParams(
                            clientId: "your-client-id",
                            network: .testnet,
                            loginConfig: [
                                "jwt": W3ALoginConfig(
                                    verifier: "your-verifier-id",
                                    typeOfLogin: TypeOfLogin.jwt,
                                    name: "display name",
                                    verifierSubIdentifier: "sub"
                                )
                            ]
                        )
                    )
                    .login(W3ALoginParams(
                        loginProvider: .GOOGLE,
                        extraLoginOptions: ExtraLoginOptions(
                            display: nil,
                            prompt: nil,
                            max_age: nil,
                            ui_locales: nil,
                            id_token_hint: nil,
                            id_token: "jwt-id-token",
                            login_hint: nil,
                            acr_values: nil,
                            scope: nil,
                            audience: nil,
                            connection: nil,
                            domain: nil,
                            client_id: nil,
                            redirect_uri: nil,
                            leeway: nil,
                            verifierIdField: nil,
                            isVerifierIdCaseSensitive: nil
                        )
                    )) {
                        switch $0 {
                        case .success(let result):
                            showResult(result: result)
                        case .failure(let error):
                            print("Error: \(error)")
                        }
                    }
                },
                label: {
                    Text("Sign In with Custom Authentication")
                        .padding()
                }
            )
            
            Text(text).foregroundColor(.white)
        }
    }
    
    func showResult(result: Web3AuthState) {
        print("""
        Signed in successfully!
            Private key: \(result.privKey)
            Ed25519 Private key: \(result.ed25519PrivKey)
            User info:
                Name: \(result.userInfo.name)
                Profile image: \(result.userInfo.profileImage ?? "N/A")
                Type of login: \(result.userInfo.typeOfLogin)
        """)
        text = """
        Signed in successfully!
            Private key: \(result.privKey)
            Ed25519 Private key: \(result.ed25519PrivKey)
            User info:
                Name: \(result.userInfo.name)
                Profile image: \(result.userInfo.profileImage ?? "N/A")
                Type of login: \(result.userInfo.typeOfLogin)
        """
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
