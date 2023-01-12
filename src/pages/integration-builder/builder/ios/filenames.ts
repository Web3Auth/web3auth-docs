export const FILENAME_MAIN = "frameworks/ios/main.swift";
export const FILENAME_WEB3RPC = "frameworks/ios/web3RPC.swift";
export const FILENAME_TORUSWEB3UTILS = "frameworks/ios/TorusWeb3Utils.swift";
export const FILENAME_WEB3AUTH_PLIST = "frameworks/ios/Web3Auth.plist";
export const FILENAME_CONTENTVIEW = "frameworks/ios/ContentView.swift";
export const FILENAME_PODFILE = "frameworks/ios/Podfile";

export default function getFileNames(filenames) {
  filenames.push(FILENAME_MAIN, FILENAME_WEB3RPC, FILENAME_TORUSWEB3UTILS, FILENAME_WEB3AUTH_PLIST, FILENAME_PODFILE);
}
