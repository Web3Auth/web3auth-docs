import React, { useEffect, useState } from "react";
import OpenLogin from "openlogin";
import AccountInfo  from "../../components/AccountInfo";
import  * as ethers from "ethers";
import * as zksync from "zksync";

import "./style.scss";
const zksyncConnector = {
  _syncConn: null,
  _ethConn: null,
  _connectZkSync: async ()=>{
     const syncProvider = await zksync.getDefaultProvider("rinkeby");
     zksyncConnector._syncConn = syncProvider;
     return syncProvider
  },
  _connectEth: async ()=>{
    const ethersProvider = ethers.getDefaultProvider("https://rinkeby.infura.io/v3/65982ef7e3f24b3586823483ebdc99e0");
    zksyncConnector._ethConn = ethersProvider;
    return ethersProvider
 },
 connect: async ()=>{
    await zksyncConnector._connectZkSync();
    zksyncConnector._connectEth();
 },
 getSyncClient: async ()=>{
    if(!!zksyncConnector._syncConn) {
      return zksyncConnector._syncConn;
    }
    return zksyncConnector._connectZkSync();
 },
 getEthClient: ()=>{
  if(!!zksyncConnector._ethConn) {
    return zksyncConnector._ethConn;
  }
  return zksyncConnector._connectEth();

}
}

function Login() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [walletInfo, setUserAccountInfo] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function initializeOpenlogin() {
      await zksyncConnector.connect();
      const sdkInstance = new OpenLogin({
        clientId: "YOUR_PROJECT_ID", // your project id
        network: "testnet",
      });
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        const privateKey = sdkInstance.privKey;
        importWallets(privateKey)
      }
      setSdk(sdkInstance);
      setLoading(false);
    }
    initializeOpenlogin();
  }, []);

  async function importWallets(privateKey){
    const syncProvider = await  zksyncConnector.getSyncClient();
    const ethProvider = zksyncConnector.getEthClient();
    const ethWallet = new ethers.Wallet(privateKey, ethProvider);
    // Derive zksync.Signer from ethereum wallet.
    const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
    const zkSyncCommitedBalance = 0;
    const ethChainBalance = await ethWallet.getBalance();
    setUserAccountInfo({
      zkSyncBal: zkSyncCommitedBalance,
      ethBal: ethChainBalance,
      ethAddress: ethWallet.address,
      zkSyncAddress: syncWallet.address(),
      privateKey
    })
  }

  async function handleLogin() {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      setLoading(false)
      importWallets(privKey);
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
              walletInfo={walletInfo}
            /> :
            <div className="loginContainer">
                <h1 style={{ textAlign: "center" }}>Openlogin x zkSync</h1>
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
