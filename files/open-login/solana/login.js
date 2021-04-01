import React from "react";
import OpenLogin from "@toruslabs/openlogin";
import "./style.scss";

function Login() {
  async function handleLogin() {

    const sdkInstance = new OpenLogin({
      clientId: "YOUR_PROJECT_ID",  // your project id
      network: "testnet"
     });
    await sdkInstance.login({
      loginProvider: "google",
      redirectUrl: `${window.origin}/solana`,
    });
  }
  return (
    <div className="loginContainer">
      <div className="loginContainer">
        <h1 style={{ textAlign: "center" }}>Openlogin x Solana</h1>
        <div onClick={handleLogin} className="btn">
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
