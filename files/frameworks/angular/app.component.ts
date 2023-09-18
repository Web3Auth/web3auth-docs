// HIGHLIGHTSTART-buildingApp
import { Component } from "@angular/core";
// HIGHLIGHTEND-buildingApp
// REPLACE-getModuleImport-


// HIGHLIGHTSTART-registerApp
const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // get from https://dashboard.web3auth.io
// HIGHLIGHTEND-registerApp

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = "angular-app";
    // REPLACE-getWeb3AuthState-

    provider: IProvider | null = null;

    async ngOnInit() {
      // REPLACE-getConstructorCode-


      // REPLACE-getOpenloginAdapter-


      // REPLACE-getInitCode-


      if (web3auth.provider) {
        this.provider = web3auth.provider;
      }
    }

    login = async () => {
    if (!this.web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3auth = this.web3auth;
    // REPLACE-getLoginCode-

    console.log("logged in");
    };

    authenticateUser = async () => {
      if (!this.web3auth) {
        this.uiConsole('web3auth not initialized yet');
        return;
      }
      // HIGHLIGHTSTART-getWeb3AuthIdToken
      const id_token = await this.web3auth.authenticateUser();
      // HIGHLIGHTEND-getWeb3AuthIdToken
      this.uiConsole(id_token);
    };

    getUserInfo = async () => {
      if (!this.web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      // HIGHLIGHTSTART-getUserInfo
      const user = await this.web3auth.getUserInfo();
      // HIGHLIGHTEND-getUserInfo
      console.log(user);
    };

    logout = async () => {
      if (!this.web3auth) {
        console.log("web3auth not initialized yet");
        return;
      }
      // HIGHLIGHTSTART-logout
      await this.web3auth.logout();
      // HIGHLIGHTEND-logout
      this.provider = null;
      console.log("logged out");
    };

    // REPLACE-getRPCFunctions-

}
