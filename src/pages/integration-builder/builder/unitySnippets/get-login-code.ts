export const getLoginCode = (isMFA: boolean, isCurve?: boolean) => {
  let mfaCode = "";
  let curveCode = "";
  if (isMFA) {
    mfaCode = `
            mfaLevel = MFALevel.MANDATORY`;
  }
  if (isCurve) {
    curveCode = `,
            curve = Curve.SECP256K1`;
  }
  return `${mfaCode}${curveCode}`;
};
