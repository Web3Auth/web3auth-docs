import { Component } from "@angular/core";
// REPLACE-web3authChainRpcImport-

const clientId = "YOUR_CLIENT_ID"; // get from https://dashboard.web3auth.io

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "angular-app";
    web3auth: Web3Auth | null = null;
    provider: SafeEventEmitterProvider | null = null;
    isModalLoaded = false;

    async ngOnInit() {
      // REPLACE-const web3AuthCtorParams = {};-


      // REPLACE-const web3AuthOpenloginConfigure = {};-


      // REPLACE-const web3AuthInitParams = {};-


      this.isModalLoaded = true;
    }

    login = async () => {
    if (!this.web3auth) {
      this.uiConsole("web3auth not initialized yet");
      return;
    }
    const web3auth = this.web3auth;
      // REPLACE-const web3AuthConnect = {};-

    this.provider = web3authProvider;
    this.uiConsole("logged in");
    };

    getUserInfo = async () => {
      if (!this.web3auth) {
        this.uiConsole("web3auth not initialized yet");
        return;
      }
      const user = await this.web3auth.getUserInfo();
      this.uiConsole(user);
    };

  // REPLACE-rpcFunctionsImport-


    logout = async () => {
      if (!this.web3auth) {
        this.uiConsole("web3auth not initialized yet");
        return;
      }
      await this.web3auth.logout();
      this.provider = null;
      this.uiConsole("logged out");
    };

    uiConsole(...args: unknown[]): void {
      const el = document.querySelector("#console-ui>p");
      if (el) {
        el.innerHTML = JSON.stringify(args || {}, null, 2);
      }
    };
}
