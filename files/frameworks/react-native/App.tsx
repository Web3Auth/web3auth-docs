import React, { useState } from "react";
// REPLACE-getModuleImport-

const scheme = "web3authrnsample"; // Or your desired app redirection scheme

// REPLACE-getRNResolvedRedirectUrl-

export default function App() {
  const [key, setKey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const login = async () => {
    try {
      // REPLACE-getConstructorCode-
      // REPLACE-getInitCode-
      setKey(state.privKey || "no key");
    } catch (e) {
      console.error(e);
      setErrorMsg(String(e));
    }
  };
  return (
    <View style={styles.container}>
      <Text>Key: {key}</Text>
      <Text>Error: {errorMsg}</Text>
      <Text>Linking URL: {resolvedRedirectUrl}</Text>
      <Button title="Login with Web3Auth" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
