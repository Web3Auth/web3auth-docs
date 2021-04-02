import React, { useEffect, useState } from "react";
import OpenLogin from "@toruslabs/openlogin";
import { Avalanche } from "avalanche"
import AccountInfo from "../../components/AccountInfo";
import "./style.scss";

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
    const myNetworkID = 5;
    const avalanche = new Avalanche("api.avax-test.network", 443, "https", myNetworkID);
    const xchain = avalanche.XChain(); //returns a reference to the X-Chain used by AvalancheJS
    const myKeychain = xchain.keyChain();
    const importedAccount = myKeychain.importKey(Buffer.from(privateKey,"hex")); // returns an instance of the KeyPair class
    let address = importedAccount.getAddressString()
    const myAddresses = xchain.keyChain().getAddressStrings();
    const u = await xchain.getUTXOs(myAddresses);
    const utxos = u.utxos
    const assetid = "8pfG5CTyL5KBVaKrEnCvNJR95dUWAKc1hrffcVxfgi8qGhqjm"; // random cb58 string
    const mybalance = utxos.getBalance(myAddresses, assetid);
    console.log(mybalance, address);
    setUserAccountInfo({balance: mybalance.toNumber(), address})
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
                <h1 style={{ textAlign: "center" }}>Openlogin x Avalanche</h1>
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
