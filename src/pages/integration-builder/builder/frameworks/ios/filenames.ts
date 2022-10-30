export const FILENAME_WEB3AUTH_PLIST = "frameworks/ios/Web3Auth.plist";
export const FILENAME_CONTENTVIEW = "frameworks/ios/ContentView.swift";
export const FILENAME_PODFILE = "frameworks/ios/Podfile";

export default function getFileNames(filenames) {
  filenames.push(FILENAME_WEB3AUTH_PLIST, FILENAME_CONTENTVIEW, FILENAME_PODFILE);
}
