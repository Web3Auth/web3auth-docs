import React, { useEffect, useState } from "react";
import OpenLogin from "@toruslabs/openlogin";
import AccountInfo  from "../../components/AccountInfo";
import { Account, Connection, clusterApiUrl } from "@solana/web3.js";
import nacl from "tweetnacl";
import * as bs58 from "bs58";

import "./style.scss";

const networks = {
  mainnet: { url: "https://solana-api.projectserum.com", displayName: "Mainnet Beta" },
  devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
  testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
};

const solanaNetwork = networks.mainnet;

function Login() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [account, setUserAccount] = useState(null);
  const [walletInfo, setUserAccountInfo] = useState(null);
  const [solanaPrivateKey, setPrivateKey] = useState(null)

  useEffect(() => {
    setLoading(true);
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin({
        clientId: "YOUR_PROJECT_ID", // your project id
        network: "testnet",
      });
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        const privateKey = sdkInstance.privKey;
        const solanaPrivateKey = getSolanaPrivateKey(privateKey);
        await getAccountInfo(solanaNetwork.url,solanaPrivateKey);
      }
      setSdk(sdkInstance);
      setLoading(false);
    }
    initializeOpenlogin();
  }, []);

  const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

  const getSolanaPrivateKey = (openloginKey)=>{
    const solanaPrivateKey = nacl.sign.keyPair.fromSeed(fromHexString(openloginKey.padStart(64, 0))).secretKey;
    return solanaPrivateKey;
  }

  const getAccountInfo = async(connectionUrl, solanaPrivateKey) => {
    const account = new Account(solanaPrivateKey);
    const connection = new Connection(connectionUrl);
    const accountInfo = await connection.getAccountInfo(account.publicKey);
    setPrivateKey(bs58.encode(account.secretKey));
    setUserAccount(account);
    setUserAccountInfo(accountInfo);
    return accountInfo;
  }

  async function handleLogin() {
    setLoading(true)
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      const solanaPrivateKey = getSolanaPrivateKey(privKey);
      await getAccountInfo(solanaNetwork.url,solanaPrivateKey);
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
              privKey={solanaPrivateKey}
              walletInfo={walletInfo}
              account={account}
            /> :
            <div className="loginContainer">
                <h1 style={{ textAlign: "center" }}>Openlogin x Polygon</h1>
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
