// HIGHLIGHTSTART-buildingApp
import { useEffect, useState } from "react";
// HIGHLIGHTEND-buildingApp
// REPLACE-getModuleImport-


// HIGHLIGHTSTART-registerApp
const clientId = "YOUR_WEB3AUTH_CLIENT_ID"; // get from https://dashboard.web3auth.io
// HIGHLIGHTEND-registerApp

function App() {
  // REPLACE-getWeb3AuthState-

  const [provider, setProvider] = useState<IProvider | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        // REPLACE-getConstructorCode-


        // REPLACE-getOpenloginAdapter-


        setWeb3auth(web3auth);

        // REPLACE-getInitCode-

        if (web3auth.provider) {
          setProvider(web3auth.provider);
        };

      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    // REPLACE-getLoginCode-

    setProvider(web3authProvider);
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      uiConsole("web3auth not initialized yet");
      return;
    }
    // HIGHLIGHTSTART-getWeb3AuthIdToken
    const idToken = await web3auth.authenticateUser();
    // HIGHLIGHTEND-getWeb3AuthIdToken
    uiConsole(idToken);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    // HIGHLIGHTSTART-getUserInfo
    const user = await web3auth.getUserInfo();
    // HIGHLIGHTEND-getUserInfo
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    // HIGHLIGHTSTART-logout
    await web3auth.logout();
    // HIGHLIGHTEND-logout
    setProvider(null);
  };

  // REPLACE-getRPCFunctions-


  const loggedInView = (
    <>
      <div className="flex-container">
        <div>
          <button onClick={getUserInfo} className="card">
            Get User Info
          </button>
        </div>
        <div>
          <button onClick={authenticateUser} className="card">
            Get ID Token
          </button>
        </div>
        // REPLACE-getRPCFunctionsButtons-

        <div>
          <button onClick={logout} className="card">
            Log Out
          </button>
        </div>
      </div>

      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
      </div>
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
        </a>
        & NextJS Example
      </h1>

      <div className="grid">{provider ? loggedInView : unloggedInView}</div>

      <footer className="footer">
        <a href="https://github.com/Web3Auth/web3auth-pnp-examples/" target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      </footer>
    </div>
  );
}

export default App;
