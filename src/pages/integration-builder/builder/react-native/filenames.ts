export const FILENAME_APP_TSX = "frameworks/react-native/App.tsx";
export const FILENAME_EXPO_PACKAGE_JSON = "frameworks/react-native/expo/package.json";
export const FILENAME_BARE_PACKAGE_JSON = "frameworks/react-native/package.json";
export const FILENAME_APP_JSON = "frameworks/react-native/app.json";
export const FILENAME_ANDROID_MANIFEST = "frameworks/react-native/AndroidManifest.xml";

export default function getFileNames(filenames, rnWorkflowMode) {
  filenames.push(FILENAME_APP_TSX);

  const isExpo = rnWorkflowMode === "expo";

  if (isExpo) {
    filenames.push(FILENAME_EXPO_PACKAGE_JSON);
  } else {
    filenames.push(FILENAME_BARE_PACKAGE_JSON);
  }

  if (isExpo) {
    filenames.push(FILENAME_APP_JSON);
  } else {
    filenames.push(FILENAME_ANDROID_MANIFEST);
  }
}
