const rpc = (() => {
  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */

  const getChainId = async (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);

    // Get the connected Chain's ID
    const chainId = await ethersProvider.getNetwork();

    return chainId.toString();
  };

  const getAccounts = async (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = await signer.getAddress();

    return address;
  };

  const getBalance = async (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = await signer.getAddress();

    // Get user's balance in ether
    const balance = ethers.utils.formatEther(
      await ethersProvider.getBalance(address) // Balance is in wei
    );

    return balance;
  };

  const sendTransaction = async (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const destination = "0x7aFac68875d2841dc16F1730Fba43974060b907A";

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther("1.0");

    // Submit transaction to the blockchain
    const tx = await signer.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000", // Max fee per gas
    });

    // Wait for transaction to be mined
    const receipt = await tx.wait();

    return receipt;
  }

  const signMessage = async (provider) => {
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await signer.signMessage(originalMessage);

    return signedMessage;
  };

  const getPrivateKey = async (provider) => {
    const privateKey = await provider.request({
      method: "eth_private_key",
    });

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
