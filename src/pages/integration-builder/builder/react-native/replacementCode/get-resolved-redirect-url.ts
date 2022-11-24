/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-multi-str */
import { EXPO } from "../../choices";

export const getResolvedRedirectUrl = (mode: string) => {
  if (mode === EXPO) {
    return `
// HIGHLIGHTSTART-resolvedRedirectUrl
const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });
// HIGHLIGHTEND-resolvedRedirectUrl`;
  }
  return " \
// HIGHLIGHTSTART-resolvedRedirectUrl \
const scheme = 'web3authrnbareauth0example'; // Or your desired app redirection scheme \
const resolvedRedirectUrl = `${scheme}://openlogin`; \
// HIGHLIGHTEND-resolvedRedirectUrl";
};
