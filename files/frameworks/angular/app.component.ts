import { Component } from "@angular/core";
import { ADAPTER_EVENTS, SafeEventEmitterProvider, CHAIN_NAMESPACES } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3Auth } from "@web3auth/web3auth";
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

    this.web3auth = new Web3Auth(web3AuthCtorParams);

    // REPLACE-const web3AuthOpenloginConfigure = {};-
    // REPLACE-const web3AuthInitParams = {};-
    this.isModalLoaded = true;
  }

  async login() {
    if (!this.web3auth) {
      this.uiConsole("Web3auth is not initialized");
      return;
    }
    this.provider = await this.web3auth.connect();
    this.uiConsole("logged in");
  }

  async logout() {
    if (!this.web3auth) {
      this.uiConsole("Web3auth is not initialized");
      return;
    }
    await this.web3auth.logout();
    this.provider = null;
    this.uiConsole("logged out");
  }

  async getUserInfo() {
    if (!this.web3auth) {
      this.uiConsole("Web3auth is not initialized");
      return;
    }
    const userInfo = await this.web3auth.getUserInfo();
    this.uiConsole("User Info", userInfo);
  }

  async getBalance() {
    if (!this.provider) {
      this.uiConsole("provider is not initialized");
      return;
    }
    const rpc = new RPC(this.provider);
    const balance = await rpc.getBalance();
    this.uiConsole("Balance", balance);
  }

  async getAccount() {
    console.log("GETTING ACCOUNT");
    if (!this.provider) {
      this.uiConsole("provider is not initialized");
      return;
    }
    const rpc = new RPC(this.provider);
    const accounts = await rpc.getAccounts();
    this.uiConsole("Account", accounts);
  }

  async signMessage() {
    if (!this.provider) {
      this.uiConsole("provider is not initialized");
      return;
    }
    const rpc = new RPC(this.provider);
    const res = await rpc.signMessage();
    this.uiConsole("Sign message", res);
  }

  async signTransaction() {
    if (!this.provider) {
      this.uiConsole("provider is not initialized");
      return;
    }
    const rpc = new RPC(this.provider);
    const res = await rpc.signTransaction();
    this.uiConsole("Sign transaction", res);
  }

  async signAndSendTransaction() {
    console.log("SIGNING MESSAGE");
    if (!this.provider) {
      this.uiConsole("provider is not initialized");
      return;
    }
    const rpc = new RPC(this.provider);
    const res = await rpc.signAndSendTransaction();
    this.uiConsole("Sign and send transaction", res);
  }

  uiConsole(...args: unknown[]): void {
    const el = document.querySelector("#console-ui>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
  }
}
