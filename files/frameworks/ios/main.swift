// HIGHLIGHTSTART-buildingApp
import Web3Auth
// HIGHLIGHTEND-buildingApp
import SwiftUI

@main
struct ios_single_pageApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView(vm: ViewModel())
        }
    }
}

struct ContentView: View {
    @StateObject var vm: ViewModel

    var body: some View {
        NavigationView {
            VStack {
                if vm.isLoading {
                    ProgressView()
                } else {
                    if vm.loggedIn,let user = vm.user, let web3rpc = Web3RPC(user: user) {
                        UserDetailView(user: vm.user, loggedIn: $vm.loggedIn, web3RPC: web3rpc)
                    } else {
                        LoginView(vm: vm)
                    }
                }
            }
            .navigationTitle(vm.navigationTitle)
            Spacer()
        }
        .onAppear {
            Task {
                await vm.setup()
            }
        }
    }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(vm: ViewModel())
    }
}

class ViewModel: ObservableObject {
    var web3Auth: Web3Auth?
    @Published var loggedIn: Bool = false
    @Published var user: Web3AuthState?
    @Published var isLoading = false
    @Published var navigationTitle: String = ""
    private var clientId = "YOUR_CLIENT_ID"
    private var network: Network = .cyan
    func setup() async {
        guard web3Auth == nil else { return }
        await MainActor.run(body: {
            isLoading = true
            navigationTitle = "Loading"
        })
        // HIGHLIGHTSTART-instantiate
        // REPLACE-getConstructorCode-

        // HIGHLIGHTEND-instantiate
        await MainActor.run(body: {
            if self.web3Auth?.state != nil {
                user = web3Auth?.state
                loggedIn = true
            }
            isLoading = false
            navigationTitle = loggedIn ? "UserInfo" : "SignIn"
        })
    }
    // HIGHLIGHTSTART-triggeringLogin

    // REPLACE-getIOSLoginConfig-

    // HIGHLIGHTEND-triggeringLogin

    func whitelabelLogin() {
            Task.detached { [unowned self] in
                do {
                    web3Auth = await Web3Auth(W3AInitParams(
                        clientId: clientId,
                        network: network,
                        whiteLabel: W3AWhiteLabelData(
                            name: "Web3Auth Stub",
                            dark: true, theme: ["primary": "#d53f8c"])
                    ))
                    let result = try await self.web3Auth?
                        .login(W3ALoginParams(loginProvider: .GOOGLE))
                    await MainActor.run(body: {
                        user = result
                        loggedIn = true
                    })
                } catch let error {
                    print(error)
                }
            }
        }
}

extension ViewModel {
    func showResult(result: Web3AuthState) {
        // HIGHLIGHTSTART-getUserInfo
        print("""
        Signed in successfully!
            Private key: \(result.privKey ?? "")
                Ed25519 Private key: \(result.ed25519PrivKey ?? "")

            User info:
                Name: \(result.userInfo?.name ?? "")
                Profile image: \(result.userInfo?.profileImage ?? "N/A")
                Type of login: \(result.userInfo?.typeOfLogin ?? "")

        """)
        // HIGHLIGHTEND-getUserInfo
    }
}

struct UserDetailView: View {
    @State var user: Web3AuthState?
    @Binding var loggedIn: Bool
    @State private var showingAlert = false
    @StateObject var web3RPC: Web3RPC
    var body: some View {
        if let user = user {
            List {
                Section {
                    Text("\(user.privKey ?? "")")
                } header: {
                    Text("Private key")
                }
                Section{
                    Button {
                        web3RPC.getAccounts()

                    } label: {
                        HStack{
                            Text("Get Public Key")
                            Spacer()
                        }
                    }
                    if(web3RPC.publicAddress != ""){
                        Text("\(web3RPC.publicAddress)")
                    }

                } header: {
                    Text("Public key")
                }
                Section {
                    Text("Name \(user.userInfo?.name ?? "")")
                    Text("Email \(user.userInfo?.email ?? "")")
                }
                header: {
                    Text("User Info")
                }
                Section{
                   Button {
                       web3RPC.getBalance()

                   } label: {
                       HStack{
                           Text("Get Balance")
                           Spacer()
                       }
                   }
                    if(web3RPC.balance>=0){
                        Text("\(web3RPC.balance) Eth")

                    }
                    Button {
                        web3RPC.signMessage()
                    } label: {
                        HStack{
                            Text("Sign Transaction")
                            Spacer()
                        }
                    }
                    if(web3RPC.signedMessageHashString != "") {
                        Text("\(web3RPC.signedMessageHashString)")
                    }
                    Button{
                        web3RPC.sendTransaction()
                    } label: {
                        HStack{
                            Text("Send Transaction")
                            Spacer()
                        }
                    }
                    if(web3RPC.sentTransactionID != "") {
                        Text("\(web3RPC.sentTransactionID)")
                    }

                }
                header: {
                    Text("Blockchain Calls")
                }


                Section {
                    Button {
                        // HIGHLIGHTSTART-triggeringLogout

                        Task.detached {
                            do {
                                try await Web3Auth(.init(clientId: clientId,
                                                         network: network)).logout()
                                await MainActor.run(body: {
                                    loggedIn.toggle()
                                })}
                                catch {
                                DispatchQueue.main.async {
                                    showingAlert = true
                                }
                            }
                        }

                        // HIGHLIGHTEND-triggeringLogout
                    } label: {
                        Text("Logout")
                            .foregroundColor(.red)
                    }
                    .alert(isPresented: $showingAlert) {
                        Alert(title: Text("Error"), message: Text("Logout failed!"), dismissButton: .default(Text("OK")))
                    }
                }
            }
            .listStyle(.automatic)
        }
    }
}

struct UserDetailView_Previews: PreviewProvider {
    static var previews: some View {
        let user: Web3AuthState = .init(privKey: "12345", ed25519PrivKey: "32334", sessionId: "23234384y7735y47shdj", userInfo: nil, error: nil)
        UserDetailView(user: user , loggedIn: .constant(true), web3RPC: .init(user: user)!)
    }
}



struct LoginView: View {
    @StateObject var vm: ViewModel
    var body: some View {
        List {
            Button(
                action: {
                    vm.whitelabelLogin()
                },
                label: {
                    Text("Sign In")
                }
            )

            Button(
                action: {
                    vm.login(provider: .GOOGLE)
                },
                label: {
                    Text("Sign In with Google")
                }
            )

            Button(
                action: {
                    vm.login(provider: .APPLE)
                },
                label: {
                    Text("Sign In with Apple")
                }
            )
        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView(vm: ViewModel())
    }
}
