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
          <Step>
            <TorusWallet.InstallWebSDK />
          </Step>
          <Step>
            <TorusWallet.InstantiateSDKInstance />
          </Step>
          <Step>
            <TorusWallet.TriggerLogin />
          </Step>
          <Step>
            <TorusWallet.IntegrateWithWeb3 />
          </Step>
        </div>
      );
  }
}
