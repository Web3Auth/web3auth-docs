import { ADAPTER_EVENTS, SafeEventEmitterProvider, WALLET_ADAPTERS } from "@web3auth/base";
import type { Web3AuthCore } from "@web3auth/core";
import { useEffect, useState } from "react";
import "./App.css";

// REPLACE-web3authChainRpcImport-

function CustomAuth() {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3AuthCore | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);
  const clientId = "YOUR_CLIENT_ID"; // get from https://dashboard.web3auth.io
  useEffect(() => {
    const init = async () => {
      try {
        const { Web3AuthCore } = await import("@web3auth/core");
        const { OpenloginAdapter } = await import("@web3auth/openlogin-adapter");

        // REPLACE-const web3AuthCoreCtorParams = {};-

        const web3AuthInstance = new Web3AuthCore(web3AuthCoreCtorParams);

        subscribeAuthEvents(web3AuthInstance);

        // REPLACE-const web3AuthOpenloginConfigure = {};-

        web3AuthInstance.configureAdapter(openloginAdapter);
        setWeb3AuthInstance(web3AuthInstance);
        await web3AuthInstance.init();
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3AuthCore) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Yeah!, you are successfully logged in", data);
        setProvider(web3AuthInstance.provider);
      });

      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.ERRORED, (error) => {
        console.error("some error or user has cancelled login request", error);
      });
    };

    init();
  }, []);

  const login = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }

    // REPLACE-const web3AuthConnect = {};-

    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3AuthInstance.getUserInfo();
    console.log("User info", user);
  };

  const logout = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3AuthInstance.logout();
    setProvider(null);
  };

  const onGetAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const userAccount = await rpc.getAccounts();
    console.log("User account", userAccount);
  };

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={onGetAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>
    </>
  );

  const unloggedInView = (
    <>
      <button onClick={() => login()} className="card">
        Google Login
      </button>
    </>
  );

  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>{" "}
        & ReactJS Example
      </h1>

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>

      <footer className="footer">
        <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
          Source code {"  "}
          <img className="logo" src="/images/github-logo.png" alt="github-logo" />
        </a>
      </footer>
    </div>
  );
}

export default CustomAuth;
