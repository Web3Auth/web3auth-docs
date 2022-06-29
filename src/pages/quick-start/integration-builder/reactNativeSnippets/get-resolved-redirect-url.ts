export const getResolvedRedirectUrl = (mode: "expo" | "bare") => {
  if (mode === "expo") {
    return `
  const resolvedRedirectUrl =
    Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
      ? Linking.createURL("web3auth", {})
      : Linking.createURL("web3auth", { scheme: scheme });
      `;
  }
  return "const resolvedRedirectUrl = `${scheme}://openlogin`;";
};
