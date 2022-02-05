import React, { useEffect, useState, useCallback } from "react";
import OpenLogin from "@toruslabs/openlogin";
import Web3 from "web3";
import Matic from "@maticnetwork/maticjs";
import Network from "@maticnetwork/meta/network";
import AccountInfo from "../../components/AccountInfo";
import "./style.scss";

const maticClient = {
  _matic: null,
  _network: null,
  connect: async (_network, _version) => {
    const network = new Network(_network, _version);
    console.log(network.Main.RPC, network.Matic.RPC);
    const matic = new Matic({
      network: _network,
      version: _version,
      parentProvider: new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/73d0b3b9a4b2499da81c71a2b2a473a9"),
      maticProvider: new Web3.providers.HttpProvider(network.Matic.RPC),
    });
    await matic.initialize();
    maticClient._matic = matic;
    maticClient._network = network;
    return { matic, network };
  },
  getClient: async (_network, _version) => {
    if (maticClient._matic && maticClient._network) {
      return { matic: maticClient._matic, network: maticClient._network };
    }
    return await maticClient.connect(_network, _version);
  },
};

function Login() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [walletInfo, setUserAccountInfo] = useState(null);

  const getMaticAccountDetails = useCallback(async (privateKey) => {
    const { matic, network } = await maticClient.getClient("mainnet", "v1");

    const tokenAddress = network.Matic.Contracts.Tokens.MaticToken;
    matic.setWallet(privateKey);

    const account = matic.web3Client.web3.eth.accounts.privateKeyToAccount(privateKey);
    let address = account.address;

    const balance = await matic.balanceOfERC20(
      address, //User address
      tokenAddress, // Token address
      {
        parent: false,
      }
    );
    setUserAccountInfo({ balance, address });
  }, []);

  useEffect(() => {
    setLoading(true);
    async function initializeOpenlogin() {
      const sdkInstance = new OpenLogin({
        clientId: "YOUR_PROJECT_ID",
        network: "testnet",
      });
      await sdkInstance.init();
      if (sdkInstance.privKey) {
        await getMaticAccountDetails(sdkInstance.privKey);
      }
      setSdk(sdkInstance);
      setLoading(false);
    }
    initializeOpenlogin();
  }, [getMaticAccountDetails]);

  async function handleLogin() {
    setLoading(true);
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      await getMaticAccountDetails(privKey);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    setLoading(true);
    await openlogin.logout();
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div>
          <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", margin: 20 }}>
            <h1>....loading</h1>
          </div>
        </div>
      ) : (
        <div>
          {openlogin && openlogin.privKey ? (
            <AccountInfo handleLogout={handleLogout} loading={loading} privKey={openlogin?.privKey} walletInfo={walletInfo} />
          ) : (
            <div className="loginContainer">
              <h1 style={{ textAlign: "center" }}>Openlogin x Polygon</h1>
              <div onClick={handleLogin} className="btn">
                Login
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Login;
