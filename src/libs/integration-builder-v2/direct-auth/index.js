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
    sourceFiles.push(
      SrcFiles.ProjectBuildGradle,
      SrcFiles.AppBuildGradle,
      SrcFiles.MainActivity
    );
    steps.push(
      {
        pointer: [SrcFiles.ProjectBuildGradle.name, "17"],
        component: <Steps.AddJitpack />,
      },
      {
        pointer: [SrcFiles.AppBuildGradle.name, "50"],
        component: <Steps.InstallAndroidSDK />,
      },
      {
        pointer: [SrcFiles.AppBuildGradle.name, "16-20"],
        component: <Steps.RegisterAndroidRedirect />,
      },
      {
        pointer: [SrcFiles.MainActivity.name, "33-45,56-57"],
        component: <Steps.InstantiateAndroidSDK />,
      },
      {
        pointer: [SrcFiles.MainActivity.name, "74-83"],
        component: <Steps.TriggerAndroidLogin />,
      }
    );
  } else if (framework === "iOS") {
    sourceFiles.push(
      SrcFiles.PackageSwift,
      SrcFiles.ContentViewSwift,
      SrcFiles.SceneDelegateSwift
    );
    steps.push(
      {
        pointer: [SrcFiles.PackageSwift.name, "3-8"],
        component: <Steps.AddSwiftPackage />,
      },
      {
        pointer: [SrcFiles.ContentViewSwift.name, "21-32"],
        component: <Steps.InitializeSwiftSDK />,
      },
      {
        pointer: [SrcFiles.SceneDelegateSwift.name, "19-24"],
        component: <Steps.SetupSwiftURLSchemas />,
      },
      {
        pointer: [SrcFiles.SceneDelegateSwift.name, "10-16"],
        component: <Steps.SetupSwiftUniversalLinks />,
      }
    );
  }

  return {
    steps,
    sourceFiles,
  };
}
