const rpc = (() => {
  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */

  const getChainId = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const web3 = new Web3(provider);

    // Get the connected Chain's ID
    const chainId = await web3.eth.getChainId();
    // HIGHLIGHTEND-evmRPCFunctions

    return chainId.toString();
  };

  const getAccounts = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const address = (await web3.eth.getAccounts())[0];
    // HIGHLIGHTEND-evmRPCFunctions

    return address;

  };

  const getBalance = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const address = (await web3.eth.getAccounts())[0];

    // Get user's balance in ether
    const balance = web3.utils.fromWei(
      await web3.eth.getBalance(address) // Balance is in wei
    );
    // HIGHLIGHTEND-evmRPCFunctions

    return balance;
  };

  const sendTransaction = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    const destination = "0x7aFac68875d2841dc16F1730Fba43974060b907A";

    // Convert 1 ether to wei
    const amount = web3.utils.toWei(0.001);

    // Submit transaction to the blockchain and wait for it to be mined
    const receipt = await web3.eth.sendTransaction({
      from: fromAddress,
      to: destination,
      value: amount,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000", // Max fee per gas
    });
    // HIGHLIGHTEND-evmRPCFunctions

    return receipt;
  }

  const signMessage = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const web3 = new Web3(provider);

    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await web3.eth.personal.sign(originalMessage, fromAddress);
    // HIGHLIGHTEND-evmRPCFunctions

    return signedMessage;
  };

  const getPrivateKey = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const privateKey = await provider.request({
      method: "eth_private_key",
    });
    // HIGHLIGHTEND-evmRPCFunctions

    return privateKey;
  }

  return {
    getChainId,
    getAccounts,
    getBalance,
    sendTransaction,
    signMessage,
    getPrivateKey
  }
})()
