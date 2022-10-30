export const FILENAME_ANDROIDMANIFEST = "frameworks/android/AndroidManifest.xml";
export const FILENAME_MAINACTIVITY = "frameworks/android/MainActivity.kt";
export const FILENAME_SETTINGSGRADLE = "frameworks/android/settings.gradle";
export const FILENAME_BUILDGRADLE = "frameworks/android/build.gradle";
export const FILENAME_STRINGS = "frameworks/android/strings.xml";
export const FILENAME_ACTIVITY_MAIN_XML = "frameworks/android/activity_main.xml";

export default function getFileNames(filenames) {
  filenames.push(
    FILENAME_MAINACTIVITY,
    FILENAME_ANDROIDMANIFEST,
    FILENAME_BUILDGRADLE,
    FILENAME_SETTINGSGRADLE,
    FILENAME_STRINGS,
    FILENAME_ACTIVITY_MAIN_XML
  );
}
