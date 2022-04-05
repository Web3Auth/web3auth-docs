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
                    Web3Auth(W3AInitParams(clientId: "BJYIrHuzluClBK0vvTBUJ7kQylV_Dj3NA-X1q4Qvxs2Ay3DySkacOpoOb83lDTHJRVY83bFlYtt4p8pQR-oCYtw", network: .testnet, whiteLabel: W3AWhiteLabelData(name: "Web3Auth Stub", dark: true, theme: ["primary": "#123456"])))
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
            
 
            
            Text(text).foregroundColor(.white)
            
        }
        
    }
    
    func showResult(result: Web3AuthState){
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
