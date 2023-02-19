/* eslint-disable prettier/prettier */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

import styles from "./styles.module.css";

export default function QuickNavigation() {
  const react = "React";
  const angular = "Angular";
  const vue = "Vue";
  const nextjs = "Next JS";
  const android = "Android";
  const ios = "iOS";
  const reactnative = "React Native";
  const flutter = "Flutter";
  const unity = "Unity";
  const unreal = "unreal";
  const nodejs = "Node.js";
  const weblist = [react, angular, vue, nextjs];

  const pnp = "Plug and Play";
  const pnpwebmodal = "Plug and Play Web Modal SDK";
  const pnpwebnomodal = "Plug and Play Web No Modal SDK";
  const pnpandroid = "Plug and Play Android SDK";
  const pnpios = "Plug and Play iOS SDK";
  const pnprn = "Plug and Play React Native SDK";
  const pnpflutter = "Plug and Play Flutter SDK";
  const pnpunity = "Plug and Play Unity SDK";
  const pnpunreal = "Plug and Play Unreal SDK";
  const pnplist = [
    { label: "Web - Modal SDK", value: pnpwebmodal, platforms: [...weblist] },
    { label: "Web - No Modal SDK", value: pnpwebnomodal, platforms: [...weblist] },
    { label: "Android SDK", value: pnpandroid, platforms: [android] },
    { label: "iOS SDK", value: pnpios, platforms: [ios] },
    { label: "React Native SDK", value: pnprn, platforms: [reactnative] },
    { label: "Flutter SDK", value: pnpflutter, platforms: [flutter] },
    { label: "Unity SDK", value: pnpunity, platforms: [unity] },
    { label: "Unreal SDK", value: pnpunreal, platforms: [unreal] },
  ];

  const corekit = "Core Kit";
  const corekitweb = "Core Kit JS SDK";
  const singlefactorauth = "Single Factor Auth SDK";
  const corekitnodejs = "Node.js SDK";
  const corekitlist = [
    { label: "Core Kit JS SDK", value: corekitweb, platforms: [...weblist, reactnative] },
    { label: "Single Factor Auth SDK", value: singlefactorauth, platforms: [...weblist] },
    { label: "Node.js SDK", value: corekitnodejs, platforms: [nodejs] },
  ];

  const [product, setProduct] = useState<string>(pnp);
  const [sdk, setSdk] = useState<string>(pnpwebmodal);
  const [platformList, setPlatformList] = useState<string[]>([...weblist]);
  const [platform, setPlatform] = useState<string>(react);

  function changePlatformList(productValue, sdkValue) {
    if (productValue === pnp) {
      const selectedSDK = pnplist.filter(el => el.value === sdkValue);
      setPlatformList(selectedSDK[0].platforms);
      setPlatform(selectedSDK[0].platforms[0]);
    } else if (productValue === corekit) {
      const selectedSDK = corekitlist.filter(el => el.value === sdkValue);
      setPlatformList(selectedSDK[0].platforms);
      setPlatform(selectedSDK[0].platforms[0]);
    }
  }
  function changeProduct(value) {
    setProduct(value);
    if (value === pnp) {
      setSdk(pnpwebmodal);
      changePlatformList(pnp, pnpwebmodal);
    } else if (value === corekit) {
      setSdk(corekitweb);
      changePlatformList(corekit, corekitweb);
    }
  }
  const changeSDK = (event) => {
    setSdk(event.target.value);
    changePlatformList(product, event.target.value);
  };
  const changePlatform = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <div>
      <h2 className={styles.heading}>1. Select the Product you want to build upon</h2>
      <div className={styles.container}>
        <div className={product === pnp ? styles.selectedCard : styles.card} onClick={() => changeProduct(pnp)}>
          <div>
            <div className={styles.cardIconContainer}>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
                <path
                  d="M10 3.5C10 3.10218 10.158 2.72064 10.4393 2.43934C10.7206 2.15804 11.1022 2 11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5V4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5H17C17.2652 5 17.5196 5.10536 17.7071 5.29289C17.8946 5.48043 18 5.73478 18 6V9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10H16.5C16.1022 10 15.7206 10.158 15.4393 10.4393C15.158 10.7206 15 11.1022 15 11.5C15 11.8978 15.158 12.2794 15.4393 12.5607C15.7206 12.842 16.1022 13 16.5 13H17C17.2652 13 17.5196 13.1054 17.7071 13.2929C17.8946 13.4804 18 13.7348 18 14V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H14C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V16.5C13 16.1022 12.842 15.7206 12.5607 15.4393C12.2794 15.158 11.8978 15 11.5 15C11.1022 15 10.7206 15.158 10.4393 15.4393C10.158 15.7206 10 16.1022 10 16.5V17C10 17.2652 9.89464 17.5196 9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18H6C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V14C5 13.7348 4.89464 13.4804 4.70711 13.2929C4.51957 13.1054 4.26522 13 4 13H3.5C3.10218 13 2.72064 12.842 2.43934 12.5607C2.15804 12.2794 2 11.8978 2 11.5C2 11.1022 2.15804 10.7206 2.43934 10.4393C2.72064 10.158 3.10218 10 3.5 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H9C9.26522 5 9.51957 4.89464 9.70711 4.70711C9.89464 4.51957 10 4.26522 10 4V3.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h5 className={styles.title}>{pnp}</h5>
          </div>
          <p>Use pre configured UX flows and integrate your Web3Auth instance quickly.</p>
        </div>

        <div className={product === corekit ? styles.selectedCard : styles.card} onClick={() => changeProduct(corekit)}>
          <div>
            <div className={styles.cardIconContainer}>
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
                <path
                  d="M3 12V15C3 16.657 6.134 18 10 18C13.866 18 17 16.657 17 15V12C17 13.657 13.866 15 10 15C6.134 15 3 13.657 3 12Z"
                  fill="currentColor"
                />
                <path
                  d="M3 7V10C3 11.657 6.134 13 10 13C13.866 13 17 11.657 17 10V7C17 8.657 13.866 10 10 10C6.134 10 3 8.657 3 7Z"
                  fill="currentColor"
                />
                <path d="M17 5C17 6.657 13.866 8 10 8C6.134 8 3 6.657 3 5C3 3.343 6.134 2 10 2C13.866 2 17 3.343 17 5Z" fill="currentColor" />
              </svg>
            </div>
            <h5 className={styles.title}>{corekit}</h5>
          </div>
          <p>Build on top of the Web3Auth infrastructural layer and build your own UX flows.</p>
        </div>
      </div>
      <h2 className={styles.heading}>2. Select the SDK and Platform you want to build upon</h2>
      <div className={styles.container}>
        <div className={styles.list}>
          <h3>Select the SDK to use</h3>
          <select value={sdk} onChange={changeSDK}>
            {product === pnp
              ? pnplist.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))
              : corekitlist.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
        <div className={styles.list}>
          <h3>Select the Platform to Use</h3>
          <select id={styles.listSelect} value={platform} onChange={changePlatform} disabled={platformList.length === 1}>
            {platformList.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />
      <h2>Integrate Web3Auth {sdk} in 4 simple steps in your {platform} App</h2>
    </div>
  );
}
