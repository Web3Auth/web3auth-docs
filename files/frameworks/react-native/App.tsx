// HIGHLIGHTSTART-buildingApp
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';
// HIGHLIGHTEND-buildingApp
// HIGHLIGHTSTART-moduleImport
import Web3Auth, {
  LOGIN_PROVIDER,
  OPENLOGIN_NETWORK,
} from '@web3auth/react-native-sdk';
// REPLACE-getModuleImport-

// HIGHLIGHTEND-moduleImport

import RPC from './ethersRPC'; // for using ethers.js

// REPLACE-getRNResolvedRedirectUrl-


// HIGHLIGHTSTART-registerApp
const clientId = "BHr_dKcxC0ecKn_2dZQmQeNdjPgWykMkcodEHkVvPMo71qzOV6SgtoN8KCvFdLN7bf34JOm89vWQMLFmSfIo84A";
// HIGHLIGHTEND-registerApp

export default function App() {
  const [key, setKey] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [console, setConsole] = useState("");

  const login = async () => {
    try {
      setConsole("Logging in");
      // HIGHLIGHTSTART-instantiate
      const web3auth = new Web3Auth(WebBrowser, {
        clientId,
        // REPLACE-getConstructorCode-

      });
      // HIGHLIGHTEND-instantiate

      // HIGHLIGHTSTART-triggeringLogin
      const info = await web3auth.login({
        redirectUrl: resolvedRedirectUrl,
        // REPLACE-getLoginCode-

      });
      // HIGHLIGHTEND-triggeringLogin

      setUserInfo(info);
      setKey(info.privKey);
      uiConsole("Logged In");
    } catch (e) {
      uiConsole(e);
    }
  };

  const getChainId = async () => {
    setConsole('Getting chain id');
    const networkDetails = await RPC.getChainId();
    uiConsole(networkDetails);
  };

  const getAccounts = async () => {
    setConsole('Getting account');
    const address = await RPC.getAccounts(key);
    uiConsole(address);
  };
  const getBalance = async () => {
    setConsole('Fetching balance');
    const balance = await RPC.getBalance(key);
    uiConsole(balance);
  };
  const sendTransaction = async () => {
    setConsole('Sending transaction');
    const tx = await RPC.sendTransaction(key);
    uiConsole(tx);
  };
  const signMessage = async () => {
    setConsole('Signing message');
    const message = await RPC.signMessage(key);
    uiConsole(message);
  };

  const uiConsole = (...args) => {
    setConsole(JSON.stringify(args || {}, null, 2) + "\n\n\n\n" + console);
  };

  const loggedInView = (
    <View style={styles.buttonArea}>
      <Button title="Get User Info" onPress={() => uiConsole(userInfo)} />
      <Button title="Get Chain ID" onPress={() => getChainId()} />
      <Button title="Get Accounts" onPress={() => getAccounts()} />
      <Button title="Get Balance" onPress={() => getBalance()} />
      <Button title="Send Transaction" onPress={() => sendTransaction()} />
      <Button title="Sign Message" onPress={() => signMessage()} />
      <Button title="Get Private Key" onPress={() => uiConsole(key)} />
      // HIGHLIGHTSTART-triggeringLogout
      <Button title="Log Out" onPress={() => setKey('')} />
      // HIGHLIGHTEND-triggeringLogout
    </View>
  );

  const unloggedInView = (
    <View style={styles.buttonArea}>
      <Button title="Login with Web3Auth" onPress={login} />
    </View>
  );

  return (
    <View style={styles.container}>
      {key ? loggedInView : unloggedInView}
      <View style={styles.consoleArea}>
        <Text style={styles.consoleText}>Console:</Text>
        <ScrollView style={styles.console}>
          <Text>{console}</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  consoleArea: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  console: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    color: '#ffffff',
    padding: 10,
    width: Dimensions.get('window').width - 60,
  },
  consoleText: {
    padding: 10,
  },
  buttonArea: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
});
