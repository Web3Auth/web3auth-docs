import React from "react";
import Step from "./step";
import * as DirectAuth from "./direct-auth";
import * as TorusWallet from "./torus-wallet";

export default function buildExample({ product }) {
  switch (product.displayName) {
    case "DirectAuth":
      return (
        <div>
          <Step>
            <DirectAuth.InstallWebSDK />
          </Step>
          <Step isSelected>
            <DirectAuth.ServeServiceWorker />
          </Step>
          <Step>
            <DirectAuth.ServeRedirectPage />
          </Step>
          <Step>
            <DirectAuth.InstantiateSDKInstance />
          </Step>
          <Step>
            <DirectAuth.TriggerLogin />
          </Step>
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
