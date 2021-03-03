import React from "react";
import * as DirectAuth from "./direct-auth";

export default function buildExample() {
  return (
    <div>
      <DirectAuth.InstallWebSDK />
      <DirectAuth.ServeServiceWorker />
      <DirectAuth.ServeRedirectPage />
      <DirectAuth.InstantiateSDKInstance />
      <DirectAuth.TriggerLogin />
    </div>
  );
}
