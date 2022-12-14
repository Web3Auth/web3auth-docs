const rpc = (() => {
  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */

  const getChainId = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = new ethers.providers.Web3Provider(provider);

    // Get the connected Chain's ID
    const networkDetails = await ethersProvider.getNetwork();
    // HIGHLIGHTEND-evmRPCFunctions

    return networkDetails.chainId;
  };

  const getAccounts = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = await signer.getAddress();
    // HIGHLIGHTEND-evmRPCFunctions

    return address;
  };

  const getBalance = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = await signer.getAddress();

    // Get user's balance in ether
    const balance = ethers.utils.formatEther(
      await ethersProvider.getBalance(address) // Balance is in wei
    );
    // HIGHLIGHTEND-evmRPCFunctions

    return balance;
  };

  const sendTransaction = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther("0.001");

    // Submit transaction to the blockchain
    const tx = await signer.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000", // Max fee per gas
    });

    // Wait for transaction to be mined
    const receipt = await tx.wait();
    // HIGHLIGHTEND-evmRPCFunctions

    return receipt;
  }

  const signMessage = async (provider) => {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await signer.signMessage(originalMessage);
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
