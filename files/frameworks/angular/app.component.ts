import { Component } from "@angular/core";
// REPLACE-getModuleImport-

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
      // REPLACE-getConstructorCode-


      // REPLACE-getOpenloginAdapter-


      // REPLACE-getInitCode-


      this.isModalLoaded = true;
    }

    login = async () => {
    if (!this.web3auth) {
      this.uiConsole("web3auth not initialized yet");
      return;
    }
    const web3auth = this.web3auth;
    this.provider = await web3auth.connect();
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

  // REPLACE-getRPCFunctions-


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
