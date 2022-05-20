const rpc = (() => {
  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const getStarkHDAccount = async (provider) => {
    const account = await getStarkAccount(provider);
    return account;
  };

  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const getStarkAccount = async (provider) => {
    const starkEc = StarkwareCrypto.ec
    const starkEcOrder = starkEc.n;
    const privKey = await provider.request({ method: "eth_private_key" });
    const account = starkEc.keyFromPrivate(StarkwareCrypto.grindKey(privKey, starkEcOrder), "hex");
    return account;
  };


  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const getStarkKey = async (provider) => {
    const account = await getStarkAccount(provider);
    return account?.getPrivate("hex");
  };

  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const onMintRequest = async (provider, starkExAPI) => {
    try {
      const txId = await starkExAPI.gateway.getFirstUnusedTxId();
      const starkKey = await getStarkKey(provider);

      const request = {
        txId,
        vaultId: 1654615998,
        amount: "6",
        tokenId: "0x400de4b5a92118719c78df48f4ff31e78de58575487ce1eaf19922ad9b8a714",
        starkKey: `0x${starkKey}`,
      };
      const response = await starkExAPI.gateway.mint(request);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };



  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const onDepositRequest = async (provider, starkExAPI) => {
    try {
      const txId = await starkExAPI.gateway.getFirstUnusedTxId();
      const starkKey = await getStarkKey(provider);
      const request = {
        txId,
        amount: 8,
        starkKey: `0x${starkKey}`,
        tokenId: "0x3ef811e040c4bc9f9eee715441cee470f5d5aff69b9cd9aca7884f5a442a890",
        vaultId: 1924014660,
      };
      const response = await starkExAPI.gateway.deposit(request);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  /**
   *
   * @param {*} provider - provider received from Web3Auth login.
   */
  const onWithdrawalRequest = async (provider, starkExAPI) => {
    try {
      const txId = await starkExAPI.gateway.getFirstUnusedTxId();
      const starkKey = await getStarkKey(provider);
      const request = {
        txId,
        amount: 8,
        starkKey: `0x${starkKey}`,
        tokenId: "0x2dd48fd7a024204f7c1bd874da5e709d4713d60c8a70639eb1167b367a9c378",
        vaultId: 612008755,
      };
      const response = await starkExAPI.gateway.withdrawal(request);
      return response;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  return {
    getStarkHDAccount,
    getStarkAccount,
    getStarkKey,
    onMintRequest,
    onDepositRequest,
    onWithdrawalRequest
  }
})()
