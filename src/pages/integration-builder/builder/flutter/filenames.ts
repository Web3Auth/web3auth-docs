export const FILENAME_MAINACTIVITY = "frameworks/flutter/main.dart";
export const FILENAME_BUILDGRADLE = "frameworks/flutter/build.gradle";
export const FILENAME_PODFILE = "frameworks/flutter/Podfile";
export const FILENAME_PUBSPEC = "frameworks/flutter/pubspec.yaml";

export default function getFileNames(filenames) {
  filenames.push(FILENAME_MAINACTIVITY, FILENAME_BUILDGRADLE, FILENAME_PODFILE, FILENAME_PUBSPEC);
}
