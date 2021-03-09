import React from "react";
import * as Steps from "./steps";
import * as SrcFiles from "./srcfiles";

export default function getIntegration({ framework }) {
  const steps = [];
  const sourceFiles = [];

  if (framework === "React") {
    sourceFiles.push(SrcFiles.AppJS, SrcFiles.helperJS);
    steps.push(
      {
        pointer: [SrcFiles.helperJS.name, "2"],
        component: <Steps.InstallWebSDK />,
      },
      {
        pointer: [SrcFiles.helperJS.name, "12-16"],
        component: <Steps.InstantiateSDKInstance />,
      },
      {
        pointer: [SrcFiles.helperJS.name, "17"],
        component: <Steps.TriggerLogin />,
      },
      {
        pointer: [SrcFiles.helperJS.name, "18-20"],
        component: <Steps.IntegrateWithWeb3 />,
      }
    );
  } else if (framework === "Vue") {
    sourceFiles.push(SrcFiles.AppVue, SrcFiles.mainVueJS);
    steps.push(
      {
        pointer: [SrcFiles.AppVue.name, "111"],
        component: <Steps.InstallWebSDK />,
      },
      {
        pointer: [SrcFiles.AppVue.name, "160-189"],
        component: <Steps.InstantiateSDKInstance />,
      },
      {
        pointer: [SrcFiles.AppVue.name, "190"],
        component: <Steps.TriggerLogin />,
      },
      {
        pointer: [SrcFiles.AppVue.name, "191"],
        component: <Steps.IntegrateWithWeb3 />,
      }
    );
  }

  return { steps, sourceFiles };
}
