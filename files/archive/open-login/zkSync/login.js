import React, { useEffect, useState } from "react";
import OpenLogin from "openlogin";
import AccountInfo from "../../components/AccountInfo";
import * as ethers from "ethers";
import * as zksync from "zksync";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const zksyncConnector = {
  _syncConn: null,
  _ethConn: null,
  _connectZkSync: async () => {
    const syncProvider = await zksync.getDefaultProvider("rinkeby");
    zksyncConnector._syncConn = syncProvider;
    return syncProvider;
  },
  _connectEth: async () => {
    const ethersProvider = ethers.getDefaultProvider("rinkeby");
    zksyncConnector._ethConn = ethersProvider;
    return ethersProvider;
  },
  connect: async () => {
    await zksyncConnector._connectZkSync();
    zksyncConnector._connectEth();
  },
  getSyncClient: async () => {
    if (!!zksyncConnector._syncConn) {
      return zksyncConnector._syncConn;
    }
    return zksyncConnector._connectZkSync();
  },
  getEthClient: () => {
    if (!!zksyncConnector._ethConn) {
      return zksyncConnector._ethConn;
    }
    return zksyncConnector._connectEth();
  },
};

function Login() {
  const [loading, setLoading] = useState(false);
  const [openlogin, setSdk] = useState(undefined);
  const [walletInfo, setUserAccountInfo] = useState(null);
  const [syncWallet, setSyncWallet] = useState(null);
  const [ethWallet, setEthWallet] = useState(null);

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
        importWallets(privateKey);
      }
      setSdk(sdkInstance);
      setLoading(false);
    }
    initializeOpenlogin();
  }, []);

  async function handleLogin() {
    setLoading(true);
    try {
      const privKey = await openlogin.login({
        loginProvider: "google",
        redirectUrl: `${window.origin}`,
      });
      setLoading(false);
      importWallets(privKey);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  }

  async function importWallets(privateKey) {
    const syncProvider = await zksyncConnector.getSyncClient();
    const ethProvider = zksyncConnector.getEthClient();
    const ethWallet = new ethers.Wallet(privateKey, ethProvider);
    setEthWallet(ethWallet);
    // Derive zksync.Signer from ethereum wallet.
    const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
    setSyncWallet(syncWallet);

    await autoRefreshBalances(syncWallet, ethWallet, privateKey);
  }

  async function autoRefreshBalances(syncWallet, ethWallet, privateKey) {
    const zkSyncCommitedBalance = await syncWallet.getBalance("ETH");
    const zkSyncVerifiedBalance = await syncWallet.getBalance("ETH", "verified");
    const ethChainBalance = await ethWallet.getBalance();
    setUserAccountInfo({
      zkSyncBal: zkSyncCommitedBalance,
      zkSyncVerifiedBalance,
      ethBal: ethChainBalance,
      ethAddress: ethWallet.address,
      zkSyncAddress: syncWallet.address(),
      privateKey,
    });
    window.setInterval(async () => {
      const syncCommitedBalance = await syncWallet.getBalance("ETH");
      const ethChainBalance = await ethWallet.getBalance();
      const zkSyncVerifiedBalance = await syncWallet.getBalance("ETH", "verified");
      console.log("verified", zkSyncVerifiedBalance);
      setUserAccountInfo({
        ethAddress: ethWallet.address,
        zkSyncAddress: syncWallet.address(),
        privateKey,
        zkSyncBal: syncCommitedBalance,
        zkSyncVerifiedBalance,
        ethBal: ethChainBalance,
      });
    }, 5000);
  }

  async function unlockZkSyncWallet() {
    try {
      if (!(await syncWallet.isSigningKeySet())) {
        if ((await syncWallet.getAccountId()) === undefined) {
          throw new Error("Unknown account");
        }

        console.log("Sync wallet: ", syncWallet);
        const changePubkey = await syncWallet.setSigningKey({ feeToken: "ETH", ethAuthType: "ECDSA" });
        toast.success("Wallet unlock transaction initiated succesfully");

        // Wait until the tx is committed
        let receipt = await changePubkey.awaitReceipt();
        console.log("Unlock account receipt", receipt);
        toast.success("Wallet unlocked successfully");
      } else {
        console.log("Signing key already set: ", await syncWallet.getAccountId());
        toast.error("Wallet already unlocked");
      }
    } catch (error) {
      console.log("Error while unlock", error);
      toast.error("Unlock zkSync wallet failed, deposit some eth to zkSync for paying unlock fee");
    }
  }
  async function handleDepositEthToZkSync() {
    try {
      const deposit = await syncWallet.depositToSyncFromEthereum({
        depositTo: syncWallet.address(),
        token: "ETH",
        amount: ethers.utils.parseEther("0.04"),
      });
      toast.success("Deposit transaction initiated succesfully");
      const depositReceipt = await deposit.awaitReceipt();
      console.log("Deposit result", depositReceipt);
      alert("Eth deposited to zkSync successfully");
    } catch (error) {
      console.log("Error while deposit", error);
      alert("Eth deposited to zkSync failed");
    }
  }

  async function handleWithDrawEthFromZkSync() {
    try {
      const withdraw = await syncWallet.withdrawFromSyncToEthereum({
        ethAddress: ethWallet.address,
        token: "ETH",
        amount: ethers.utils.parseEther("0.01"),
      });
      toast.success("Withdrawal intiated successfully");
      let receipt = await withdraw.awaitReceipt();
      console.log("withdraw account receipt", receipt);
      toast.success("Eth withdrawn tx commited to zkSync with");
    } catch (error) {
      console.log("Error while withdrawal", error);
      toast.error("Eth withdrawal from zkSync failed");
    }
  }

  const refreshBalances = async () => {
    const syncCommitedBalance = await syncWallet.getBalance("ETH");
    const ethChainBalance = await ethWallet.getBalance();
    const zkSyncVerifiedBalance = await syncWallet.getBalance("ETH", "verified");

    setUserAccountInfo({
      ...walletInfo,
      zkSyncBal: syncCommitedBalance,
      zkSyncVerifiedBalance,
      ethBal: ethChainBalance,
    });
  };

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
            <div>
              <ToastContainer />
              <AccountInfo
                handleDepositEthToZkSync={handleDepositEthToZkSync}
                handleWithDrawEthFromZkSync={handleWithDrawEthFromZkSync}
                unlockZkSyncWallet={unlockZkSyncWallet}
                refreshBalances={refreshBalances}
                handleLogout={handleLogout}
                loading={loading}
                walletInfo={walletInfo}
              />
            </div>
          ) : (
            <div className="loginContainer">
              <h1 style={{ textAlign: "center" }}>Openlogin x zkSync</h1>
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
