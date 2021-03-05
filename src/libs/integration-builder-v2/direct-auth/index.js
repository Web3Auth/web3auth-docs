import React from "react";
import * as Steps from "./steps";
import * as SrcFiles from "./srcfiles";

export default function getIntegration({ framework }) {
  const steps = [];
  const sourceFiles = [];

  if (framework === "React") {
    sourceFiles.push(SrcFiles.AppJS, SrcFiles.SwJS, SrcFiles.RedirectHTML);
    steps.push(
      {
        pointer: ["App.js", "3"],
        component: <Steps.InstallWebSDK />,
      },
      {
        pointer: ["App.js", "137-141"],
        component: <Steps.InstantiateSDKInstance />,
      },
      {
        pointer: ["sw.js"],
        component: <Steps.ServeServiceWorker />,
      },
      {
        pointer: ["redirect.html"],
        component: <Steps.ServeRedirectPage />,
      },
      {
        pointer: ["App.js", "158-163"],
        component: <Steps.TriggerLogin />,
      }
    );
  } else if (framework === "Android") {
    sourceFiles.push(SrcFiles.AppJS, SrcFiles.SwJS, SrcFiles.RedirectHTML);
    steps.push(
      {
        pointer: ["App.js", "3"],
        component: <Steps.AddJitpack />,
      },
      {
        pointer: ["App.js", "137-141"],
        component: <Steps.InstallAndroidSDK />,
      },
      {
        pointer: ["sw.js"],
        component: <Steps.ServeServiceWorker />,
      },
      {
        pointer: ["redirect.html"],
        component: <Steps.ServeRedirectPage />,
      },
      {
        pointer: ["App.js", "158-163"],
        component: <Steps.TriggerLogin />,
      }
    );
  }

  return {
    steps,
    sourceFiles,
  };
}
