const rpc = (() => {

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */

    const getAccounts = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaWallet(this.provider);
        // Get user's Solana public address
        const acc = await solanaWallet.requestAccounts();
        // HIGHLIGHTEND-solanaRPCFunctions
        return acc;
    };

    const getBalance = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaWallet(this.provider);
        const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
        const conn = new Connection(connectionConfig.rpcTarget);
        const accounts = await solanaWallet.requestAccounts();
        // Fetch the balance for the specified public key
        const balance = await conn.getBalance(new PublicKey(accounts[0]));
        // HIGHLIGHTEND-solanaRPCFunctions
        return balance;
    };

    const signMessage = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaWallet(this.provider);
        const msg = Buffer.from("Test Signing Message ", "utf8");
        const res = await solanaWallet.signMessage(msg);
        // HIGHLIGHTEND-solanaRPCFunctions
        return result
    };

    const sendTransaction = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaWallet(this.provider);
        const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
        const conn = new Connection(connectionConfig.rpcTarget);

        const pubKey = await solanaWallet.requestAccounts();
        const { blockhash } = await conn.getRecentBlockhash("finalized");
        const TransactionInstruction = SystemProgram.transfer({
            fromPubkey: new PublicKey(pubKey[0]),
            toPubkey: new PublicKey(pubKey[0]),
            lamports: 0.01 * LAMPORTS_PER_SOL,
        });
        const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
        const { signature } = await solanaWallet.signAndSendTransaction(transaction);
        // HIGHLIGHTEND-solanaRPCFunctions
        return signedTx.signature;
    };

    const signTransaction = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaWallet(this.provider);
        const connectionConfig = await solanaWallet.request<CustomChainConfig>({ method: "solana_provider_config", params: [] });
        const conn = new Connection(connectionConfig.rpcTarget);
        const pubKey = await solanaWallet.requestAccounts();
        const { blockhash } = await conn.getRecentBlockhash("finalized");
        const TransactionInstruction = SystemProgram.transfer({
            fromPubkey: new PublicKey(pubKey[0]),
            toPubkey: new PublicKey(pubKey[0]),
            lamports: 0.01 * LAMPORTS_PER_SOL,
        });
        const transaction = new Transaction({ recentBlockhash: blockhash, feePayer: new PublicKey(pubKey[0]) }).add(TransactionInstruction);
        const signedTx = await solanaWallet.signTransaction(transaction);
        // HIGHLIGHTEND-solanaRPCFunctions
        return signedTx.signature;
    };

    const getPrivateKey = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const privateKey = await provider.request({
			method: 'solanaPrivateKey',
		});
        // HIGHLIGHTEND-solanaRPCFunctions
        return privateKey;
    }

    return {
        getAccounts,
        getBalance,
        signTransaction,
        signMessage,
        sendTransaction,
        getPrivateKey
    }
})()
