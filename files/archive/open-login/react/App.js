import { useState } from "react";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import wordmark from "./wordmark.svg";
import "./App.css";

/**
 * This is an example source file that you can reference in Integration Builder
 */

/**
 * You can set a step to point to a source file by using `pointer` property when creating steps.
 */

function App() {
  const [account, setAccount] = useState();

  const onClickLogin = async (e) => {
    e.preventDefault();

    const torus = new Torus({});
    await torus.init({
      enableLogging: false,
    });
    await torus.login();

    const web3 = new Web3(torus.provider);
    const address = (await web3.eth.getAccounts())[0];
    const balance = await web3.eth.getBalance(address);
    setAccount({ address, balance });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={wordmark} className="App-logo" alt="logo" />
        {account ? (
          <div className="App-info">
            <p>
              <strong>Address</strong>: {account.address}
            </p>
            <p>
              <strong>Balance</strong>: {account.balance}
            </p>
          </div>
        ) : (
          <>
            <p>You didn't login yet. Login to see your account details.</p>
            <button className="App-link" onClick={onClickLogin}>
              Login
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
