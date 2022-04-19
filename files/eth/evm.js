const rpc = (()  => {
    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const sendEth = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        console.log("pubKey", accounts);
        const txRes = await web3.eth.sendTransaction({
          from: accounts[0],
          to: accounts[0],
          value: web3.utils.toWei("0.01"),
        });
        console.log("txRes", txRes);
        return txRes;
    };
    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const signMessage = async (provider) => {
        const pubKey = await provider.request({ method: "eth_accounts" });

        return new Promise((resolve, reject)=>{
          const web3 = new Web3();
          web3.setProvider(provider);
          // hex message
          const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
          (web3.currentProvider)?.send(
            {
              method: "eth_sign",
              params: [pubKey[0], message],
              from: pubKey[0],
            }, (err, res) => {
              if (err) {
                return rejects(err);
              }
              return resolve(res);
            }
          );
        })
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getAccounts = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        return accounts;
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getChainId = async (provider)=> {
        const web3 = new Web3(provider);
        const chainId = await web3.eth.getChainId();
        return chainId.toString();
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getBalance = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        return balance;
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const signTransaction = async (provider) => {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();

        // only supported with social logins (openlogin adapter)
        const txRes = await web3.eth.signTransaction({
          from: accounts[0],
          to: accounts[0],
          value: web3.utils.toWei("0.01"),
        });
        return txRes;
    };
    return {
      sendEth,
      signMessage,
      getAccounts,
      getChainId,
      getBalance,
      signTransaction
    }
})()
