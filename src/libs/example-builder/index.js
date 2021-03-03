import React from "react";
import * as DirectAuth from "./direct-auth";
import * as TorusWallet from "./torus-wallet";

export default function buildExample({ product }) {
  switch (product.displayName) {
    case "DirectAuth":
      return (
        <div>
          <DirectAuth.InstallWebSDK />
          <DirectAuth.ServeServiceWorker />
          <DirectAuth.ServeRedirectPage />
          <DirectAuth.InstantiateSDKInstance />
          <DirectAuth.TriggerLogin />
        </div>
      );
    case "Torus Wallet":
      return (
        <div>
          <TorusWallet.InstallWebSDK />
          <TorusWallet.InstantiateSDKInstance />
          <TorusWallet.TriggerLogin />
          <TorusWallet.IntegrateWithWeb3 />
        </div>
      );
  }
}
