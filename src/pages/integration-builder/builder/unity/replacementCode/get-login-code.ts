export const getLoginCode = (isMFA: boolean, isCurve?: boolean) => {
  let mfaCode = "";
  let curveCode = "";
  if (isMFA) {
    mfaCode = `
            // HIGHLIGHTSTART-multiFactorAuthentication
            mfaLevel = MFALevel.MANDATORY
            // HIGHLIGHTEND-multiFactorAuthentication`;
  }
  if (isCurve) {
    curveCode = `,
            curve = Curve.SECP256K1`;
  }
  return `${mfaCode}${curveCode}`;
};
