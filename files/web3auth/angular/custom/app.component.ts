import { Component } from "@angular/core";
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, SafeEventEmitterProvider, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthCore } from "@web3auth/core";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
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
    // REPLACE-const web3AuthCoreCtorParams = {};-

    const web3auth = new Web3AuthCore(web3AuthCtorParams);

    // REPLACE-const web3AuthOpenloginConfigure = {};-

    this.web3auth.configureAdapter(openloginAdapter);
    this.subscribeAuthEvents(this.web3auth);
    await web3auth.init();
    this.isModalLoaded = true;
  }

  subscribeAuthEvents(web3auth: Web3AuthCore) {
    web3auth.on(ADAPTER_EVENTS.CONNECTED, (data) => {
      console.log("Yeah!, you are successfully logged in", data);
      this.provider = web3auth.provider;
    });

    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });

    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");
    });

    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("some error or user have cancelled login request", error);
    });
  }

  async login() {
    if (!this.web3auth) {
      this.uiConsole("Web3auth is not initialized");
      return;
    }

    // REPLACE-const web3AuthConnect = {};-

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
