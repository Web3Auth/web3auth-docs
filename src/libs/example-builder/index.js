import React from "react";
import Step from "./step";
import * as DirectAuth from "./direct-auth";
import * as TorusWallet from "./torus-wallet";

export default function buildExample({ product, selectedStep, onClickStep }) {
  let steps = [];
  switch (product.displayName) {
    case "DirectAuth":
      steps = [
        <DirectAuth.InstallWebSDK />,
        <DirectAuth.ServeServiceWorker />,
        <DirectAuth.ServeRedirectPage />,
        <DirectAuth.InstantiateSDKInstance />,
        <DirectAuth.TriggerLogin />,
      ];
      break;
    case "Torus Wallet":
      steps = [
        <TorusWallet.InstallWebSDK />,
        <TorusWallet.InstantiateSDKInstance />,
        <TorusWallet.TriggerLogin />,
        <TorusWallet.IntegrateWithWeb3 />,
      ];
      break;
  }

  const onClick = (index) => {
    onClickStep && onClickStep(index);
  };

  return (
    <div>
      {steps.map((step, index) => (
        <Step
          key={index}
          isSelected={index === selectedStep}
          onClick={onClick.bind(this, index)}
        >
          {step}
        </Step>
      ))}
    </div>
  );
}
