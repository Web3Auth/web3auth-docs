import { ADAPTER_EVENTS, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth, Web3AuthOptions } from "@web3auth/web3auth";
import { useEffect, useState } from "react";
import "./App.css";
import { web3AuthParams } from "./input";

// REPLACE-wallet-provider-

function App() {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const web3AuthInstance = new Web3Auth(web3AuthParams as Web3AuthOptions);
        subscribeAuthEvents(web3AuthInstance);
        setWeb3AuthInstance(web3AuthInstance);
        await web3AuthInstance.initModal();
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
        console.log("Yeah!, you are successfully logged in", data);
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
    const provider = await web3AuthInstance.connect();
    setProvider(provider);
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
    await getAccounts(provider);
  };

  const onGetBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await getBalance(provider);
  };

  const onSignMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await signMessage(provider);
  };

  const onSignTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await signTransaction(provider);
  };

  const onSendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    await sendTransaction(provider);
  };

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className="card">
        Get User Info
      </button>
      <button onClick={onGetAccounts} className="card">
        Get Accounts
      </button>
      <button onClick={onGetBalance} className="card">
        Get Balance
      </button>
      <button onClick={onSignMessage} className="card">
        Sign Message
      </button>
      <button onClick={onSignTransaction} className="card">
        Sign Transaction
      </button>
      <button onClick={onSendTransaction} className="card">
        Send Transaction
      </button>
      <button onClick={logout} className="card">
        Log Out
      </button>
    </>
  );

  const unloggedInView = (
    <button onClick={login} className="card">
      Login
    </button>
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

export default App;
