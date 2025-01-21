export const pnpWebVersion = `9.3.x`;
export const pnpAndroidVersion = `9.0.4`;
export const pnpIOSVersion = `11.0.4`;
export const pnpRNVersion = `7.0.x`;
export const pnpFlutterVersion = `6.1.1`;
export const pnpUnityVersion = `5.x.x`;
export const pnpUnrealVersion = `4.1.x`;

export const sfaWebVersion = `9.2.x`;
export const sfaAndroidVersion = `3.0.1`;
export const sfaIOSVersion = `9.0.4`;
export const sfaRNVersion = `2.0.x`;
export const sfaFlutterVersion = `5.3.0`;
export const sfaNodeJSVersion = `7.4.x`;
export const tkeyJSVersion = `15.x.x`;
export const tkeyAndroidVersion = `0.0.5`;
export const tkeyIOSVersion = `0.0.4`;
export const mpcCoreKitJSVersion = `3.4.x`;

import {
  web,
  android,
  ios,
  reactnative,
  flutter,
  unity,
  unreal,
  mpccorekitjs,
  singlefactorauthjs,
  singlefactorauthandroid,
  singlefactorauthflutter,
  singlefactorauthios,
  tkeyandroid,
  tkeyios,
  tkeyjs,
} from "./SDKOptions";

export function getPnPVersion(platform: string) {
  if (platform === web) {
    return pnpWebVersion;
  }
  if (platform === android) {
    return pnpAndroidVersion;
  }
  if (platform === ios) {
    return pnpIOSVersion;
  }
  if (platform === reactnative) {
    return pnpRNVersion;
  }
  if (platform === flutter) {
    return pnpFlutterVersion;
  }
  if (platform === unity) {
    return pnpUnityVersion;
  }
  if (platform === unreal) {
    return pnpUnrealVersion;
  }
}

export function getCoreKitVersion(sdk: string) {
  if (sdk === tkeyjs) {
    return tkeyJSVersion;
  }
  if (sdk === mpccorekitjs) {
    return mpcCoreKitJSVersion;
  }
  if (sdk === tkeyandroid) {
    return tkeyAndroidVersion;
  }
  if (sdk === tkeyios) {
    return tkeyIOSVersion;
  }
  if (sdk === singlefactorauthjs) {
    return sfaWebVersion;
  }
  if (sdk === singlefactorauthandroid) {
    return sfaAndroidVersion;
  }
  if (sdk === singlefactorauthios) {
    return sfaIOSVersion;
  }
  if (sdk === singlefactorauthflutter) {
    return sfaFlutterVersion;
  }
}
