import React, { useEffect, useState } from "react";
import OpenLogin from "@toruslabs/openlogin";
import Web3 from "web3";
import AccountInfo from "../../components/AccountInfo";
import "./style.scss";
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

function Login() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [walletInfo, setUserAccountInfo] = useState(null);

  useEffect(() => {
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin({
         clientId: "YOUR PROJECT ID",
         network: "testnet"
      });
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        await importUserAccount(sdkInstance.privKey);
      }
      setSdk(sdkInstance);
      setLoading(false)
    }
    setLoading(true)
    initializeOpenlogin();
  }, []);


  async function importUserAccount(privateKey) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey)
    let balance = await web3.eth.getBalance(account.address);
    let address = account.address;
    setUserAccountInfo({balance, address});
  }

  async function handleLogin() {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      await importUserAccount(privKey);
      setLoading(false)
    } catch (error) {
      console.log("error", error);
      setLoading(false)
    }

  }

  const handleLogout = async () => {
    setLoading(true)
    await openlogin.logout();
    setLoading(false)
  };
  return (
    <>
    {
    loading ?
      <div>
          <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", margin: 20 }}>
              <h1>....loading</h1>
          </div>
      </div> :
      <div>
        {
          (openlogin && openlogin.privKey) ?
            <AccountInfo
              handleLogout={handleLogout}
              loading={loading}
              privKey={openlogin?.privKey}
              walletInfo={walletInfo}
            /> :
            <div className="loginContainer">
                <h1 style={{ textAlign: "center" }}>Openlogin x Binance Smart Chain</h1>
                <div onClick={handleLogin} className="btn">
                  Login
                </div>
            </div>
        }

      </div>
    }
    </>
  );
}

export default Login;
