export const pnpWebVersion = `9.3.x`;
export const pnpAndroidVersion = `8.0.3`;
export const pnpIOSVersion = `9.0.0`;
export const pnpRNVersion = `7.0.x`;
export const pnpFlutterVersion = `5.0.4`;
export const pnpUnityVersion = `5.x.x`;
export const pnpUnrealVersion = `4.1.x`;

export const sfaWebVersion = `8.0.x`;
export const sfaAndroidVersion = `1.2.0`;
export const sfaIOSVersion = `9.0.2`;
export const sfaRNVersion = `2.0.x`;
export const sfaFlutterVersion = `5.2.0`;
export const sfaNodeJSVersion = `7.4.x`;
export const tkeyJSVersion = `15.x.x`;
export const tkeyAndroidVersion = `0.0.5`;
export const tkeyIOSVersion = `0.0.4`;
export const mpcCoreKitVersion = `3.2.x`;

import {
  web,
  android,
  ios,
  reactnative,
  flutter,
  unity,
  unreal,
  corekitnodejs,
  mpccorekit,
  singlefactorauth,
  singlefactorauthandroid,
  singlefactorauthflutter,
  singlefactorauthios,
  singlefactorauthrn,
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
  if (sdk === mpccorekit) {
    return mpcCoreKitVersion;
  }
  if (sdk === tkeyandroid) {
    return tkeyAndroidVersion;
  }
  if (sdk === tkeyios) {
    return tkeyIOSVersion;
  }
  if (sdk === singlefactorauth) {
    return sfaWebVersion;
  }
  if (sdk === corekitnodejs) {
    return sfaNodeJSVersion;
  }
  if (sdk === singlefactorauthandroid) {
    return sfaAndroidVersion;
  }
  if (sdk === singlefactorauthios) {
    return sfaIOSVersion;
  }
  if (sdk === singlefactorauthrn) {
    return sfaRNVersion;
  }
  if (sdk === singlefactorauthflutter) {
    return sfaFlutterVersion;
  }
}
