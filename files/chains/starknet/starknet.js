const rpc = (() => {
    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getStarkAccount = async (provider) => {
        try {
            const starkEc = StarkwareCrypto.ec
            const starkEcOrder = starkEc.n;
            const privKey = await provider.request({ method: "private_key" });
            const account = starkEc.keyFromPrivate(StarkwareCrypto.grindKey(privKey, starkEcOrder), "hex");
            return account;
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getStarkKey = async (provider) => {
        try {
            const account = await getStarkAccount(provider);
            return account?.getPrivate("hex");
        } catch (error) {
            console.error(error.message);
            throw error;
        }
    };

    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const deployAccount = async (provider, starknetProvider) => {
        let resp = await fetch('/ArgentAccount.json');
        let compiledArgentAccount = await resp.json();
        console.log(compiledArgentAccount)
        return await starknetProvider.deployContract({
            contract: compiledArgentAccount
        });
    };

    return {
        getStarkAccount,
        getStarkKey,
        deployAccount
    }
})()
