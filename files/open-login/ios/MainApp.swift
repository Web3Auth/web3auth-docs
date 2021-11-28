import SwiftUI
import OpenLogin

@main
struct MainApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView().onOpenURL { url in
                OpenLogin.resumeAuth(url)
            }
        }
    }
}
