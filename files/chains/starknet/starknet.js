const rpc = (() => {
    /**
     *
     * @param {*} provider - provider received from Web3Auth login.
     */
    const getStarkAccount = async (provider) => {
        try {
            const privateKey = await provider.request({ method: "private_key" });
            const keyPair = starkwareCrypto.ec.keyFromPrivate(privateKey, 'hex');
            const account = starkwareCrypto.ec.keyFromPublic(
                keyPair.getPublic(true, 'hex'),
                'hex'
            );
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
            return account.pub.getX().toString("hex");
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
