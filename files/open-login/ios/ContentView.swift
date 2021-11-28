import SwiftUI
import OpenLogin

struct ContentView: View {
    var body: some View {
        Button(
            action: {
                OpenLogin
                    .webAuth()
                    .start {
                        switch $0 {
                        case .success(let result):
                            print("""
                                Signed in successfully!
                                    Private key: \(result.privKey)
                                    User info:
                                        Name: \(result.userInfo.name)
                                        Profile image: \(result.userInfo.profileImage ?? "N/A")
                                        Type of login: \(result.userInfo.typeOfLogin)
                                """)
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
                OpenLogin
                    .webAuth()
                    .signOut()
                print("signed out.")
            },
            label: {
                Text("Sign Out")
                    .padding()
            }
        )

    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
