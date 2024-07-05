export const reactJS = "React";
export const angular = "Angular";
export const vue = "Vue";
export const nextjs = "Next JS";
export const web = "Web";
export const android = "Android";
export const ios = "iOS";
export const reactnative = "React Native";
export const rnbare = "React Native Bare";
export const rnexpo = "React Native Expo";
export const rnlist = [rnbare, rnexpo];
export const flutter = "Flutter";
export const unity = "Unity";
export const unreal = "Unreal Engine";
export const nodejs = "Node.js";
export const weblist = [reactJS, angular, vue, nextjs];

export const pnp = "Plug and Play";
export const walletecosystems = "Wallet Ecosystems";
export const helpersdks = "Helper SDKs";
export const pnpwebmodal = "Plug and Play Web Modal";
export const pnpwebnomodal = "Plug and Play Web No Modal";
export const pnpandroid = "Plug and Play Android";
export const pnpios = "Plug and Play iOS";
export const pnprn = "Plug and Play React Native";
export const pnpflutter = "Plug and Play Flutter";
export const pnpunity = "Plug and Play Unity";
export const pnpunreal = "Plug and Play Unreal";
export const pnplist = [
  { label: "Web - Modal", value: pnpwebmodal, platforms: [...weblist] },
  { label: "Web - No Modal", value: pnpwebnomodal, platforms: [...weblist] },
  { label: "Android", value: pnpandroid, platforms: [android] },
  { label: "iOS", value: pnpios, platforms: [ios] },
  { label: "React Native", value: pnprn, platforms: [...rnlist] },
  { label: "Flutter", value: pnpflutter, platforms: [flutter] },
  { label: "Unity", value: pnpunity, platforms: [unity] },
  { label: "Unreal", value: pnpunreal, platforms: [unreal] },
];

export const corekit = "Core Kit";
export const corekitsfa = "Core Kit SFA";
export const corekitmfa = "Core Kit MFA";
export const tkeyjs = "tKey JS";
export const tkeyios = "tKey iOS";
export const tkeyandroid = "tKey Android";
export const singlefactorauth = "SFA Web";
export const singlefactorauthandroid = "SFA Android";
export const singlefactorauthios = "SFA iOS";
export const singlefactorauthrn = "SFA React Native";
export const singlefactorauthflutter = "SFA Flutter";
export const corekitnodejs = "SFA Node.js";
export const mpccorekit = "MPC Core Kit JS";

export const corekitlist = [
  { label: "tKey JS", value: tkeyjs, platforms: [reactJS, reactnative] },
  { label: "MPC Core Kit", value: mpccorekit, platforms: [...weblist] },
  { label: "tKey Android", value: tkeyandroid, platforms: [android] },
  { label: "tKey iOS", value: tkeyios, platforms: [ios] },
  { label: "SFA Web", value: singlefactorauth, platforms: [...weblist] },
  { label: "SFA Node.js", value: corekitnodejs, platforms: [nodejs] },
  { label: "SFA Android", value: singlefactorauthandroid, platforms: [android] },
  { label: "SFA iOS", value: singlefactorauthios, platforms: [ios] },
  { label: "SFA React Native", value: singlefactorauthrn, platforms: [...rnlist] },
  { label: "SFA Flutter", value: singlefactorauthflutter, platforms: [flutter] },
];

const getWindowLocation = () => {
  if (typeof window !== "undefined") return window.location.href;
  return "http://localhost";
};

export const getOptionsfromURL = (): Record<string, string> => {
  const url = new URL(getWindowLocation());

  const urlOpts = {};
  url.searchParams.forEach((value, key) => {
    urlOpts[key] = value;
  });

  return { ...urlOpts };
};

export const setURLfromOptions = (opts: Record<string, string>): string => {
  const url = new URL(getWindowLocation());

  url.search = "";
  for (const [key, value] of Object.entries(opts)) url.searchParams.append(key, value);
  return url.toString();
};
