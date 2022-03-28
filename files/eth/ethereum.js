async function getAccounts(event) {
  try {
    const web3 = new Web3(web3AuthInstance.provider);
    const accounts = await web3.eth.getAccounts();
  } catch (error) {
    console.error(error.message);
  }
}

async function getBalance(event) {
  try {
    const web3 = new Web3(web3AuthInstance.provider);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
  } catch (error) {
    console.error(error.message);
  }
}

async function signMessage(event) {
  try {
    const provider = web3AuthInstance.provider;
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
    web3.currentProvider?.send(
      {
        method: "eth_sign",
        params: [accounts[0], message],
        from: accounts[0],
      },
      (err, result) => {
        if (err) {
          return console.error(err);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}

async function signTx(event) {
  try {
    const provider = web3AuthInstance.provider;
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const txRes = await web3.eth.signTransaction({
      from: accounts[0],
      to: accounts[0],
      value: web3.utils.toWei("0.01"),
    });
  } catch (error) {
    console.error(error.message);
  }
}

async function sendTx(event) {
  try {
    const provider = web3AuthInstance.provider;
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();

    const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
    const txRes = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[0],
      value: web3.utils.toWei("0.01"),
    });
  } catch (error) {
    console.error(error.message);
  }
}
