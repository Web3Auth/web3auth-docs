export const pnpWebVersion = `9.3.x`;
export const pnpAndroidVersion = `9.0.4`;
export const pnpIOSVersion = `11.0.5`;
export const pnpRNVersion = `7.0.x`;
export const pnpFlutterVersion = `6.1.2`;
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
export const mpcCoreKitReactNativeVersion = `1.0.0`;
export const mpcCoreKitSwiftVersion = `1.0.0`;

import { web, android, ios, js, reactnative, flutter, unity, unreal, swift } from "./SDKOptions";

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

export function getSFAVersion(platform: string) {
  if (platform === js) {
    return sfaWebVersion;
  }
  if (platform === android) {
    return sfaAndroidVersion;
  }
  if (platform === ios) {
    return sfaIOSVersion;
  }
  if (platform === flutter) {
    return sfaFlutterVersion;
  }
}

export function getMPCCoreKitVersion(platform: string) {
  if (platform === js) {
    return mpcCoreKitJSVersion;
  }
  if (platform === reactnative) {
    return mpcCoreKitReactNativeVersion;
  }
  if (platform === swift) {
    return mpcCoreKitSwiftVersion;
  }
}
