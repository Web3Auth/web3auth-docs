const rpc = (() => {

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getConnection = async (provider) => {
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        const connectionConfig = await solanaWallet.request({ method: "solana_provider_config", params: [] });
        const conn = new solanaWeb3.Connection(connectionConfig.rpcTarget);
        return conn;
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const sendSol = async (provider) => {
        const conn =  await getConnection();
        const solanaWallet = new SolanaProvider.SolanaWallet(web3AuthInstance.provider);

        const pubKey = await solanaWallet.requestAccounts();
        const { blockhash } = await conn.getRecentBlockhash("finalized");
        const TransactionInstruction = solanaWeb3.SystemProgram.transfer({
          fromPubkey: new solanaWeb3.PublicKey(pubKey[0]),
          toPubkey: new solanaWeb3.PublicKey(pubKey[0]),
          lamports: 0.01 * solanaWeb3.LAMPORTS_PER_SOL,
        });
        const transaction = new solanaWeb3.Transaction({ recentBlockhash: blockhash, feePayer: new solanaWeb3.PublicKey(pubKey[0]) }).add(TransactionInstruction);
        const signature = await solanaWallet.signAndSendTransaction(transaction);
        return signature;
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const signMessage = async (provider) => {
        const solWeb3 = new SolanaProvider.SolanaWallet(provider);
        const msg = Buffer.from("Test Signing Message ", "utf8");
        const res = await solWeb3.signMessage(msg);
        return res
    };
    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getAccounts = async (provider) => {
        const solWeb3 = new SolanaProvider.SolanaWallet(provider);
        const acc = await solWeb3.requestAccounts();
        return acc;
    };

     /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getBalance = async (provider) => {
        const conn = await getConnection(provider);
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);
        const accounts = await solanaWallet.requestAccounts();
        const balance = await conn.getBalance(new solanaWeb3.PublicKey(accounts[0]));
        return balance;
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const signTransaction = async (provider) => {
        const conn = await getConnection(provider);
        const solWallet = new SolanaProvider.SolanaWallet(provider);
        const pubKey = await solWallet.requestAccounts();
        const blockhash = (await conn.getRecentBlockhash("finalized")).blockhash;
        const TransactionInstruction = SystemProgram.transfer({
          fromPubkey: new solanaWeb3.PublicKey(pubKey[0]),
          toPubkey: new solanaWeb3.PublicKey("oWvBmHCj6m8ZWtypYko8cRVVnn7jQRpSZjKpYBeESxu"),
          lamports: 0.01 * LAMPORTS_PER_SOL,
        });
        const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
        const signedTx = await solWallet.signTransaction(transaction);
        return signedTx
    };

    return {
      sendSol,
      signMessage,
      getAccounts,
      getBalance,
      signTransaction
    }
})()
