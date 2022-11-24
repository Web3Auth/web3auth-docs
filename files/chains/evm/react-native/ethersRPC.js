// HIGHLIGHTSTART-installationEthers
import '@ethersproject/shims';
import {ethers} from 'ethers';
import {Buffer} from 'buffer';
global.Buffer = global.Buffer || Buffer;
// HIGHLIGHTEND-installationEthers

// REPLACE-EVMProvider-


const getChainId = async () => {
  try {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const networkDetails = await ethersProvider.getNetwork();
    // HIGHLIGHTEND-evmRPCFunctions

    return networkDetails;
  } catch (error) {
    return error;
  }
};

const getAccounts = async key => {
  try {
    // HIGHLIGHTSTART-evmRPCFunctions
    const wallet = new ethers.Wallet(key);
    const address = await wallet.address;
    // HIGHLIGHTEND-evmRPCFunctions

    return address;
  } catch (error) {
    return error;
  }
};

const getBalance = async key => {
  try {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);
    const balance = await wallet.getBalance();
    // HIGHLIGHTEND-evmRPCFunctions

    return balance;
  } catch (error) {
    return error;
  }
};

const sendTransaction = async key => {
  try {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);

    const destination = '0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56';

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther('0.001');

    // Submit transaction to the blockchain
    const tx = await wallet.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: '5000000000', // Max priority fee per gas
      maxFeePerGas: '6000000000000', // Max fee per gas
    });
    // HIGHLIGHTEND-evmRPCFunctions

    return tx;
  } catch (error) {
    return error;
  }
};

const signMessage = async key => {
  try {
    // HIGHLIGHTSTART-evmRPCFunctions
    const ethersProvider = ethers.getDefaultProvider(providerUrl);
    const wallet = new ethers.Wallet(key, ethersProvider);

    const originalMessage = 'YOUR_MESSAGE';

    // Sign the message
    const signedMessage = await wallet.signMessage(originalMessage);
    // HIGHLIGHTEND-evmRPCFunctions

    return signedMessage;
  } catch (error) {
    return error;
  }
};

export default {
  getChainId,
  getAccounts,
  getBalance,
  sendTransaction,
  signMessage,
};
