/* eslint-disable no-template-curly-in-string */
import { EXPO } from "../../choices";

export const getResolvedRedirectUrl = (mode: string) => {
  if (mode === EXPO) {
    return `
// HIGHLIGHTSTART-redirectUrl
const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });
// HIGHLIGHTEND-redirectUrl`;
  }
  return (
    `
// HIGHLIGHTSTART-redirectUrl
const scheme = 'web3authrnbareauth0example'; // Or your desired app redirection scheme
const resolvedRedirectUrl = ` +
    "`${scheme}://openlogin/`;" +
    `
// HIGHLIGHTEND-redirectUrl`
  );
};
