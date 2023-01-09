import { EXPO } from "../choices";

export const FILENAME_APP_TSX = "frameworks/react-native/App.tsx";
export const FILENAME_ETHERS_JS = "chains/evm/react-native/ethersRPC.js";
export const FILENAME_EXPO_PACKAGE_JSON = "frameworks/react-native/expo/package.json";
export const FILENAME_BARE_PACKAGE_JSON = "frameworks/react-native/package.json";
export const FILENAME_APP_JSON = "frameworks/react-native/app.json";
export const FILENAME_ANDROID_MANIFEST = "frameworks/react-native/AndroidManifest.xml";
export const FILENAME_PODFILE = "frameworks/react-native/Podfile";
export const FILENAME_BUILD_GRADLE = "frameworks/react-native/build.gradle";

export default function getFileNames(filenames, rnMode) {
  filenames.push(FILENAME_APP_TSX);
  filenames.push(FILENAME_ETHERS_JS);

  if (rnMode === EXPO) {
    filenames.push(FILENAME_EXPO_PACKAGE_JSON);
    filenames.push(FILENAME_APP_JSON);
  } else {
    filenames.push(FILENAME_BARE_PACKAGE_JSON);
    filenames.push(FILENAME_PODFILE);
    filenames.push(FILENAME_ANDROID_MANIFEST);
    filenames.push(FILENAME_BUILD_GRADLE);
  }
}
