const rpc = (() => {

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */

    const getAccounts = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        // Get user's Solana public address
        const accounts = await solanaWallet.requestAccounts();
        // HIGHLIGHTEND-solanaRPCFunctions

        return accounts;
    };

    const getBalance = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        // Get user's Solana public address
        const accounts = await solanaWallet.requestAccounts();

        const connectionConfig = await solanaWallet.request({
            method: "solana_provider_config",
            params: [],
        });
        const connection = new Connection(connectionConfig.rpcTarget);

        // Fetch the balance for the specified public key
        const balance = await connection.getBalance(new PublicKey(accounts[0]));
        // HIGHLIGHTEND-solanaRPCFunctions

        return balance;
    };


    const signTransaction = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        // Get user's Solana public address
        const accounts = await solanaWallet.requestAccounts();

        const connectionConfig = await solanaWallet.request({
            method: "solana_provider_config",
            params: [],
        });
        const connection = new Connection(connectionConfig.rpcTarget);

        const block = await connection.getLatestBlockhash("finalized");
        const TransactionInstruction = SystemProgram.transfer({
            fromPubkey: new PublicKey(accounts[0]),
            toPubkey: new PublicKey(accounts[0]),
            lamports: 0.01 * LAMPORTS_PER_SOL,
        });
        const transaction = new Transaction({
            blockhash: block.blockhash,
            lastValidBlockHeight: block.lastValidBlockHeight,
            feePayer: new PublicKey(accounts[0]),
        }).add(TransactionInstruction);

        const signedTx = await solanaWallet.signTransaction(transaction);
        // HIGHLIGHTEND-solanaRPCFunctions

        return signedTx.signature;
    };

    const sendTransaction = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        // Get user's Solana public address
        const accounts = await solanaWallet.requestAccounts();

        const connectionConfig = await solanaWallet.request({
            method: "solana_provider_config",
            params: [],
        });
        const connection = new Connection(connectionConfig.rpcTarget);

        const block = await connection.getLatestBlockhash("finalized");
        const TransactionInstruction = SystemProgram.transfer({
            fromPubkey: new PublicKey(accounts[0]),
            toPubkey: new PublicKey(accounts[0]),
            lamports: 0.01 * LAMPORTS_PER_SOL,
        });
        const transaction = new Transaction({
            blockhash: block.blockhash,
            lastValidBlockHeight: block.lastValidBlockHeight,
            feePayer: new PublicKey(accounts[0]),
        }).add(TransactionInstruction);

        const signedTx = await solanaWallet.signAndSendTransaction(transaction);
        // HIGHLIGHTEND-solanaRPCFunctions

        return signedTx.signature;
    };


    const signMessage = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const solanaWallet = new SolanaProvider.SolanaWallet(provider);

        const msg = Buffer.from("Test Signing Message ", "utf8");

        const result = await solanaWallet.signMessage(msg);
        // HIGHLIGHTEND-solanaRPCFunctions

        return result
    };

    const getPrivateKey = async (provider) => {
        // HIGHLIGHTSTART-solanaRPCFunctions
        const privateKey = await provider.request({
            method: "solanaPrivateKey"
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
