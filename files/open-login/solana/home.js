/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import OpenLogin from "@toruslabs/openlogin";
import { Account, Connection, clusterApiUrl } from "@solana/web3.js";
import nacl from "tweetnacl";
import * as bs58 from "bs58";
import { PageHeader, Button } from "antd";
import { useHistory } from "react-router";
import "./style.scss";

const networks = {
  mainnet: { url: "https://solana-api.projectserum.com", displayName: "Mainnet Beta" },
  devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
  testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
};


const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));


const solanaNetwork = networks.mainnet;


function Solana() {

  const [sdk, setSdk] = useState(undefined);
  const [account, setUserAccount] = useState(null);
  const [accountInfo, setUserAccountInfo] = useState(null);
  const [solanaPrivateKey, setPrivateKey] = useState(null)
  const history = useHistory();
  useEffect(() => {
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin({
        clientId: "YOUR_PROJECT_ID", // your project id
        network: "testnet",
      });

      await sdkInstance.init();
      if (!sdkInstance.privKey) {
        history.push('/');
        return
      }
      const privateKey = sdkInstance.privKey;
      const solanaPrivateKey = getSolanaPrivateKey(privateKey);
      await getAccountInfo(solanaNetwork.url,solanaPrivateKey);

      setSdk(sdkInstance);
    }
    initializeOpenlogin();
  }, [history]);

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


  const handleLogout = async () => {
    await sdk.logout();
    history.push("/");
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Openlogin x Solana"
        extra={[
          <Button key="1" type="primary" onClick={handleLogout}>
            Logout
          </Button>,
        ]}
      />

        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", margin: 20 }}>
            <div style={{margin:20}}>
              Wallet address: <i>{account?.publicKey.toBase58()}</i>
            </div>
            <div style={{margin:20}}>
              Balance: <i>{(accountInfo && accountInfo.lamports) || 0}</i>
            </div>
            <hr/>
            <span>Private key:</span>
            <div style={{margin:20, maxWidth: 900, wordWrap: "break-word"}}>
               <span style={{margin: 20}}>{(solanaPrivateKey)}</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Solana;
