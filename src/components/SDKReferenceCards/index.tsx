/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useState } from "react";

import { corekit, pnp } from "../../common/SDKOptions";
import styles from "./styles.module.css";

export default function QuickNavigation() {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  const [product, setProduct] = useState<string>(pnp);
  const chevron = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3.33301L10.6667 7.99967L6 12.6663" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const pnpweb = (
    <>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              d="M10 3.5C10 3.10218 10.158 2.72064 10.4393 2.43934C10.7206 2.15804 11.1022 2 11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5V4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5H17C17.2652 5 17.5196 5.10536 17.7071 5.29289C17.8946 5.48043 18 5.73478 18 6V9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10H16.5C16.1022 10 15.7206 10.158 15.4393 10.4393C15.158 10.7206 15 11.1022 15 11.5C15 11.8978 15.158 12.2794 15.4393 12.5607C15.7206 12.842 16.1022 13 16.5 13H17C17.2652 13 17.5196 13.1054 17.7071 13.2929C17.8946 13.4804 18 13.7348 18 14V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H14C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V16.5C13 16.1022 12.842 15.7206 12.5607 15.4393C12.2794 15.158 11.8978 15 11.5 15C11.1022 15 10.7206 15.158 10.4393 15.4393C10.158 15.7206 10 16.1022 10 16.5V17C10 17.2652 9.89464 17.5196 9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18H6C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V14C5 13.7348 4.89464 13.4804 4.70711 13.2929C4.51957 13.1054 4.26522 13 4 13H3.5C3.10218 13 2.72064 12.842 2.43934 12.5607C2.15804 12.2794 2 11.8978 2 11.5C2 11.1022 2.15804 10.7206 2.43934 10.4393C2.72064 10.158 3.10218 10 3.5 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H9C9.26522 5 9.51957 4.89464 9.70711 4.70711C9.89464 4.51957 10 4.26522 10 4V3.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Modal SDK</h3>
          <p>Plug and Play Modal SDK for your JS environment. Get a prebuilt UI Modal from Web3Auth for seamless UX</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Web+Modal+SDK&platform=React`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/web/modal`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Web+Modal+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5ZM5.293 6.293C5.48053 6.10553 5.73484 6.00021 6 6.00021C6.26516 6.00021 6.51947 6.10553 6.707 6.293L9.707 9.293C9.89447 9.48053 9.99979 9.73484 9.99979 10C9.99979 10.2652 9.89447 10.5195 9.707 10.707L6.707 13.707C6.5184 13.8892 6.2658 13.99 6.0036 13.9877C5.7414 13.9854 5.49059 13.8802 5.30518 13.6948C5.11977 13.5094 5.0146 13.2586 5.01233 12.9964C5.01005 12.7342 5.11084 12.4816 5.293 12.293L7.586 10L5.293 7.707C5.10553 7.51947 5.00021 7.26516 5.00021 7C5.00021 6.73484 5.10553 6.48053 5.293 6.293ZM11 12C10.7348 12 10.4804 12.1054 10.2929 12.2929C10.1054 12.4804 10 12.7348 10 13C10 13.2652 10.1054 13.5196 10.2929 13.7071C10.4804 13.8946 10.7348 14 11 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H11Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>No Modal SDK</h3>
          <p>Plug and Play No Modal SDK for your JS environment. Build your own UI for user interaction</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Web+No+Modal+SDK&platform=React`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/web/no-modal`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Web+No+Modal+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
    </>
  );

  const pnpmobile = (
    <>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.sdkIcon}>
            <path
              d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Android SDK</h3>
          <p>Plug and Play Native SDK for Android Platform</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Android+SDK&platform=Android`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/android`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Android+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>iOS SDK</h3>
          <p>Plug and Play Native SDK for iOS Platform</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+iOS+SDK&platform=iOS`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/ios`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+iOS+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.sdkIcon}>
            <path
              d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>React Native SDK</h3>
          <p>Plug and Play SDK for Hybrid React Native & Expo Application.</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+React+Native+SDK&platform=React+Native+Bare`}>
              Quick Start{chevron}
            </a>
            <a href={`${baseUrl}sdk/pnp/react-native`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+React+Native+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.sdkIcon}>
            <path d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z" fill="currentColor" />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Flutter SDK</h3>
          <p>Plug and Play SDK for Hybrid Flutter Applications</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Flutter+SDK&platform=Flutter`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/flutter`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Flutter+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
    </>
  );
  const pnpgaming = (
    <>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.sdkIcon}>
            <path
              d="M243.583 91.6027L323.695 138.384C326.575 140.026 326.68 144.583 323.695 146.225L228.503 201.854C225.623 203.55 222.22 203.444 219.549 201.854L124.357 146.225C121.425 144.636 121.373 139.973 124.357 138.384L204.417 91.6027V0L0 119.417V358.252L78.3843 312.477V218.914C78.3319 215.576 82.2066 213.192 85.0865 214.993L180.279 270.622C183.159 272.318 184.782 275.338 184.782 278.464V389.669C184.834 393.007 180.959 395.391 178.079 393.589L97.9673 346.808L19.583 392.583L224 512L428.417 392.583L350.033 346.808L269.921 393.589C267.093 395.338 263.114 393.06 263.218 389.669V278.464C263.218 275.126 265.051 272.159 267.721 270.622L362.914 214.993C365.741 213.245 369.72 215.47 369.616 218.914V312.477L448 358.252V119.417L243.583 0V91.6027Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Unity SDK</h3>
          <p>Plug and Play Native SDK for Unity</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK&platform=Unity`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/unity`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              d="M16 0c-8.766 0-15.865 7.161-15.865 16s7.099 16 15.865 16c8.76 0 15.865-7.161 15.865-16s-7.104-16-15.87-16zM16 0.703c4.047 0 7.859 1.594 10.724 4.479 2.859 2.875 4.453 6.766 4.443 10.818 0 4.083-1.578 7.927-4.443 10.818-2.828 2.87-6.693 4.484-10.724 4.479-4.031 0.005-7.896-1.609-10.724-4.479-2.859-2.875-4.458-6.766-4.448-10.818 0-4.083 1.583-7.927 4.443-10.818 2.828-2.875 6.698-4.49 10.729-4.479zM15.203 6.333c-2.583 0.693-4.974 2.021-8.161 5.677s-2.583 6.677-2.583 6.677c0 0 0.88-2.078 2.995-4.266 1.005-1.036 1.75-1.385 2.266-1.385 0.458-0.026 0.844 0.344 0.844 0.802v7.422c0 0.734-0.474 0.896-0.911 0.885-0.37-0.005-0.714-0.135-0.714-0.135 2.172 3.156 7.37 3.599 7.37 3.599l2.281-2.438 0.052 0.047 2.089 1.781c3.823-2.271 5.667-6.479 5.667-6.479-1.708 1.802-2.792 2.224-3.438 2.224-0.573-0.005-0.797-0.339-0.797-0.339-0.031-0.156-0.083-2.417-0.104-4.677-0.021-2.339 0-4.682 0.115-4.688 0.661-1.24 2.766-3.74 2.766-3.74-3.932 0.776-6.073 3.354-6.073 3.354-0.635-0.5-1.927-0.417-1.927-0.417 0.604 0.333 1.208 1.302 1.208 2.104v7.896c0 0-1.318 1.161-2.333 1.161-0.604 0-0.974-0.328-1.177-0.599-0.078-0.104-0.146-0.219-0.198-0.344v-9.75c-0.141 0.104-0.313 0.161-0.484 0.167-0.219 0-0.443-0.109-0.594-0.427-0.115-0.24-0.188-0.599-0.188-1.125 0-1.797 2.031-2.99 2.031-2.99z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.title}>Unreal SDK</h3>
          </div>
          <p>Plug and Play Native SDK for Unreal</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Plug+and+Play&sdk=Plug+and+Play+Unreal+SDK&platform=Unreal`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/pnp/unreal`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Plug+and+Play&sdk=Plug+and+Play+Unreal+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
    </>
  );
  const corekitweb = (
    <>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg className={styles.sdkIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>tKey JS SDK</h3>
          <p>Core Kit tKey SDK for your JS environment. Build a deeper integration with Web3Auth Infrastructural Layer within your platform.</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=tKey+JS+SDK&platform=React`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/tkey/`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=tKey+JS+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              d="M10 3.5C10 3.10218 10.158 2.72064 10.4393 2.43934C10.7206 2.15804 11.1022 2 11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5V4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5H17C17.2652 5 17.5196 5.10536 17.7071 5.29289C17.8946 5.48043 18 5.73478 18 6V9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10H16.5C16.1022 10 15.7206 10.158 15.4393 10.4393C15.158 10.7206 15 11.1022 15 11.5C15 11.8978 15.158 12.2794 15.4393 12.5607C15.7206 12.842 16.1022 13 16.5 13H17C17.2652 13 17.5196 13.1054 17.7071 13.2929C17.8946 13.4804 18 13.7348 18 14V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H14C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V16.5C13 16.1022 12.842 15.7206 12.5607 15.4393C12.2794 15.158 11.8978 15 11.5 15C11.1022 15 10.7206 15.158 10.4393 15.4393C10.158 15.7206 10 16.1022 10 16.5V17C10 17.2652 9.89464 17.5196 9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18H6C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V14C5 13.7348 4.89464 13.4804 4.70711 13.2929C4.51957 13.1054 4.26522 13 4 13H3.5C3.10218 13 2.72064 12.842 2.43934 12.5607C2.15804 12.2794 2 11.8978 2 11.5C2 11.1022 2.15804 10.7206 2.43934 10.4393C2.72064 10.158 3.10218 10 3.5 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H9C9.26522 5 9.51957 4.89464 9.70711 4.70711C9.89464 4.51957 10 4.26522 10 4V3.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>MPC Core Kit SDK</h3>
          <p>Get the Web3Auth MPC Infrastructure with a deeper integration within your application.</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=MPC+Core+Kit&platform=React`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/mpc-core-kit`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=MPC+Core+Kit`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg className={styles.sdkIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 8.00008C18.0003 8.93725 17.781 9.86145 17.3598 10.6986C16.9386 11.5358 16.3271 12.2627 15.5744 12.821C14.8216 13.3792 13.9486 13.7535 13.0252 13.9136C12.1018 14.0737 11.1538 14.0153 10.257 13.7431L10 14.0001L9 15.0001L8 16.0001H6V18.0001H2V14.0001L6.257 9.74308C6.00745 8.91809 5.93857 8.04902 6.05504 7.19502C6.17152 6.34102 6.47062 5.52215 6.93199 4.79412C7.39336 4.0661 8.00616 3.44602 8.72869 2.97609C9.45122 2.50617 10.2665 2.19743 11.1191 2.07088C11.9716 1.94434 12.8415 2.00296 13.6693 2.24276C14.4972 2.48256 15.2637 2.89791 15.9166 3.46054C16.5696 4.02317 17.0936 4.71987 17.4531 5.50322C17.8127 6.28656 17.9992 7.13817 18 8.00008ZM12 4.00008C11.7348 4.00008 11.4804 4.10543 11.2929 4.29297C11.1054 4.48051 11 4.73486 11 5.00008C11 5.26529 11.1054 5.51965 11.2929 5.70718C11.4804 5.89472 11.7348 6.00008 12 6.00008C12.5304 6.00008 13.0391 6.21079 13.4142 6.58586C13.7893 6.96094 14 7.46964 14 8.00008C14 8.26529 14.1054 8.51965 14.2929 8.70718C14.4804 8.89472 14.7348 9.00008 15 9.00008C15.2652 9.00008 15.5196 8.89472 15.7071 8.70718C15.8946 8.51965 16 8.26529 16 8.00008C16 6.93921 15.5786 5.92179 14.8284 5.17165C14.0783 4.4215 13.0609 4.00008 12 4.00008Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Single Factor Auth Web SDK</h3>
          <p>Core Kit Single Factor Auth Web SDK for your JS environment. Implement Core Kit in a single key pair flow</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=Single+Factor+Auth+SDK&platform=React`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/single-factor-auth`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=Single+Factor+Auth+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.083 9H6.029C6.118 7.454 6.412 6.03 6.866 4.882C6.13501 5.32992 5.50842 5.92919 5.02838 6.6395C4.54834 7.34982 4.22598 8.1547 4.083 9ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM10 4C9.924 4 9.768 4.032 9.535 4.262C9.297 4.496 9.038 4.885 8.798 5.444C8.409 6.351 8.125 7.586 8.032 9H11.968C11.875 7.586 11.591 6.351 11.202 5.444C10.962 4.884 10.702 4.496 10.465 4.262C10.232 4.032 10.076 4 10 4ZM13.971 9C13.882 7.454 13.588 6.03 13.134 4.882C13.865 5.32992 14.4916 5.92919 14.9716 6.6395C15.4517 7.34982 15.774 8.1547 15.917 9H13.971ZM11.968 11H8.032C8.125 12.414 8.409 13.649 8.798 14.556C9.038 15.116 9.298 15.504 9.535 15.738C9.768 15.968 9.924 16 10 16C10.076 16 10.232 15.968 10.465 15.738C10.703 15.504 10.963 15.115 11.202 14.556C11.591 13.649 11.875 12.414 11.968 11ZM13.134 15.118C13.588 13.971 13.882 12.546 13.971 11H15.917C15.774 11.8453 15.4517 12.6502 14.9716 13.3605C14.4916 14.0708 13.865 14.6701 13.134 15.118ZM6.866 15.118C6.412 13.97 6.118 12.546 6.03 11H4.083C4.22598 11.8453 4.54834 12.6502 5.02838 13.3605C5.50842 14.0708 6.13501 14.6701 6.866 15.118Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>Single Factor Auth NodeJS SDK</h3>
          <p>Core Kit NodeJS SDK for your Node environment. Single key pair flow integration in your NodeJS Backend server.</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=Node.js+SDK&platform=Node.js`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/node`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=Node.js+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
    </>
  );
  const corekitmobile = (
    <>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.sdkIcon}>
            <path
              d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <h3 className={styles.title}>tKey JS SDK</h3>
          <p>
            tKey JS SDK integration in your hybrid <strong>React Native App</strong>
          </p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=tKey+JS+SDK&platform=React+Native`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/tkey-react-native`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=tKey+JS+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.sdkIcon}>
            <path
              d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.title}>Single Factor Auth Android SDK</h3>
          </div>
          <p>Core Kit Single Factor Auth Android SDK for your Android application. Implement Core Kit in a single key pair flow</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=Single+Factor+Auth+Android+SDK&platform=Android`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/single-factor-auth-android`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=Single+Factor+Auth+Android+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.sdkIcon}>
            <path
              d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.title}>tKey iOS SDK</h3>
          </div>
          <p>Core Kit tKey Native SDK for iOS Platform</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=tKey+iOS+SDK&platform=iOS`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/tkey-ios`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=tKey+iOS+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.sdkIconContainer}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.sdkIcon}>
            <path
              d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles.cardContentText}>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.title}>tKey Android SDK</h3>
          </div>
          <p>Core Kit tKey Native SDK for Android Platform</p>
          <div className={styles.links}>
            <a href={`${baseUrl}quick-start?product=Core+Kit&sdk=tKey+Android+SDK&platform=Android`}>Quick Start{chevron}</a>
            <a href={`${baseUrl}sdk/core-kit/tkey-android/`}>SDK Reference{chevron}</a>
            <a href={`${baseUrl}examples?product=Core+Kit&sdk=tKey+Android+SDK`}>Examples{chevron}</a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Explore our SDKs</h2>
        <div className={styles.tabContainer}>
          <div className={product === pnp ? styles.selectedTab : styles.tab} onClick={() => setProduct(pnp)}>
            {pnp}
          </div>
          <div className={product === corekit ? styles.selectedTab : styles.tab} onClick={() => setProduct(corekit)}>
            {corekit}
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainerIntro}>
          <h3 className={styles.title}>Web SDKs</h3>
          <p>
            Explore the range of Web3Auth SDKs with support across all major browsers and javascript frameworks. We also have SDKs for NodeJS for
            backend authentication and key generation.
          </p>
          <div className={styles.platformIconSection}>
            <div className={styles.platformIconContainer}>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.7344 0H7.26562C3.25293 0 0 3.25293 0 7.26562V23.7344C0 27.7471 3.25293 31 7.26562 31H23.7344C27.7471 31 31 27.7471 31 23.7344V7.26562C31 3.25293 27.7471 0 23.7344 0Z"
                  fill="#F0DB4F"
                />
                <path
                  d="M8.15246 25.9059L10.5247 24.4702C10.9824 25.2816 11.3987 25.9682 12.3974 25.9682C13.3547 25.9682 13.9582 25.5938 13.9582 24.1373V14.2321H16.8715V24.1785C16.8715 27.1957 15.1028 28.5692 12.5223 28.5692C10.1918 28.5692 8.83907 27.3622 8.15234 25.9056M18.4538 25.5937L20.8258 24.2204C21.4503 25.2401 22.2618 25.9892 23.6975 25.9892C24.9047 25.9892 25.6744 25.3856 25.6744 24.5532C25.6744 23.5545 24.8836 23.2006 23.5518 22.6182L22.8237 22.3059C20.7219 21.4112 19.3276 20.2875 19.3276 17.9152C19.3276 15.7302 20.9924 14.0654 23.5936 14.0654C25.4456 14.0654 26.7774 14.7106 27.7345 16.3961L25.4663 17.8528C24.9668 16.958 24.426 16.6043 23.5936 16.6043C22.7404 16.6043 22.1993 17.1453 22.1993 17.8528C22.1993 18.7267 22.7404 19.0805 23.9889 19.6217L24.7171 19.9338C27.1934 20.9951 28.5876 22.077 28.5876 24.5116C28.5876 27.1337 26.5276 28.5694 23.76 28.5694C21.0549 28.5694 19.3069 27.2793 18.4538 25.5937Z"
                  fill="#323330"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.666 9.07537C24.3467 8.96046 24.0247 8.854 23.7004 8.75611C23.7548 8.52254 23.805 8.29179 23.8495 8.0651C24.5805 4.34258 24.1027 1.34363 22.4704 0.356238C20.9053 -0.590344 18.3458 0.396683 15.7609 2.75662C15.5061 2.98962 15.257 3.22933 15.0138 3.47553C14.851 3.31182 14.6853 3.15128 14.5168 2.99401C11.8077 0.470688 9.09223 -0.592803 7.46168 0.39742C5.89805 1.34695 5.43504 4.16617 6.09316 7.69409C6.15864 8.0435 6.23257 8.3911 6.31488 8.73656C5.93051 8.85114 5.55961 8.97308 5.20465 9.1029C2.0284 10.2646 0 12.0851 0 13.9735C0 15.9238 2.17758 17.8801 5.48578 19.0662C5.75398 19.162 6.02442 19.2507 6.29684 19.3324C6.20836 19.7045 6.12982 20.0791 6.06129 20.4557C5.43387 23.9224 5.92383 26.675 7.48324 27.6185C9.09387 28.5929 11.7971 27.5915 14.4293 25.1777C14.6427 24.9815 14.8515 24.7797 15.0553 24.5725C15.3187 24.8391 15.5891 25.0979 15.8663 25.3487C18.416 27.6503 20.9341 28.5796 22.492 27.6335C24.1011 26.6563 24.6241 23.6993 23.9452 20.1017C23.8917 19.8198 23.8317 19.5394 23.7653 19.2606C23.9551 19.2016 24.1414 19.1409 24.3231 19.0777C27.7623 17.8824 30 15.9499 30 13.9735C30 12.0782 27.9061 10.2454 24.666 9.07537ZM23.9201 17.8016C23.756 17.8585 23.5877 17.9135 23.4162 17.967C23.0365 16.706 22.5241 15.3653 21.8971 13.98C22.4954 12.6278 22.9881 11.3041 23.3571 10.0515C23.664 10.1446 23.9618 10.2429 24.2489 10.3465C27.0251 11.3491 28.7184 12.8313 28.7184 13.9735C28.7184 15.19 26.8896 16.7694 23.9201 17.8016ZM22.688 20.3628C22.9882 21.9536 23.031 23.3919 22.8321 24.5163C22.6535 25.5267 22.2942 26.2003 21.8498 26.4701C20.9045 27.0442 18.8827 26.298 16.7021 24.3296C16.4444 24.0964 16.1928 23.8558 15.9478 23.608C16.7932 22.6382 17.638 21.5108 18.4625 20.2586C19.9129 20.1236 21.283 19.9028 22.5255 19.6015C22.5854 19.8539 22.6396 20.1077 22.688 20.3628ZM10.2277 26.3709C9.30398 26.713 8.56828 26.7229 8.12355 26.4539C7.17727 25.8814 6.78387 23.6712 7.32047 20.7065C7.38426 20.3562 7.45729 20.0078 7.53949 19.6617C8.76832 19.9469 10.1285 20.152 11.5822 20.2756C12.4124 21.5009 13.2816 22.6271 14.1575 23.6133C13.9714 23.8022 13.7808 23.9864 13.586 24.1655C12.422 25.2328 11.2556 25.99 10.2277 26.3709ZM5.90039 17.7941C4.43754 17.2696 3.22945 16.5879 2.40141 15.844C1.65727 15.1757 1.28168 14.5119 1.28168 13.9735C1.28168 12.8275 2.91023 11.3658 5.62652 10.3724C5.95617 10.252 6.30117 10.1382 6.65918 10.0315C7.03465 11.3125 7.52707 12.6518 8.12133 14.0062C7.51934 15.3806 7.01988 16.7413 6.64078 18.0374C6.39212 17.9627 6.14525 17.8816 5.90039 17.7941ZM7.35094 7.43581C6.78715 4.41326 7.16156 2.13323 8.10387 1.56098C9.10746 0.951478 11.3268 1.82049 13.6659 3.99935C13.8185 4.14175 13.9685 4.28704 14.1161 4.43515C13.2444 5.41701 12.3832 6.53484 11.5604 7.75285C10.1495 7.89005 8.79891 8.11034 7.55719 8.4055C7.48068 8.08418 7.41191 7.76077 7.35094 7.43581ZM20.2916 10.7879C19.9983 10.2565 19.6941 9.73174 19.3793 9.21403C20.3365 9.34102 21.2536 9.50956 22.1148 9.7156C21.8563 10.585 21.534 11.4938 21.1547 12.4257C20.8774 11.8738 20.5897 11.3278 20.2916 10.7879ZM15.0144 5.39599C15.6055 6.06782 16.1975 6.81783 16.7798 7.63164C15.5986 7.57312 14.4154 7.57287 13.2341 7.63091C13.817 6.82459 14.4141 6.07556 15.0144 5.39599ZM9.70336 10.7972C9.40903 11.3326 9.12664 11.8752 8.85645 12.4245C8.48332 11.496 8.16398 10.583 7.90324 9.70134C8.75918 9.50047 9.67195 9.33623 10.623 9.21157C10.3047 9.73244 9.99805 10.2612 9.70336 10.7972ZM10.6504 18.8311C9.66774 18.716 8.74125 18.5602 7.88555 18.3648C8.15039 17.4674 8.47676 16.5349 8.85797 15.5865C9.12924 16.1362 9.41279 16.6791 9.7084 17.2149C10.0124 17.7656 10.3271 18.305 10.6504 18.8311ZM15.0498 22.6457C14.4423 21.9582 13.8364 21.1976 13.2448 20.3796C13.8192 20.4032 14.4048 20.4153 15 20.4153C15.6115 20.4153 16.2159 20.4009 16.8109 20.3731C16.2267 21.2059 15.6369 21.9676 15.0498 22.6457ZM21.1668 15.5381C21.5678 16.4969 21.9057 17.4245 22.1741 18.3065C21.3043 18.5148 20.3652 18.6824 19.3757 18.807C19.6927 18.2797 19.9998 17.7458 20.2966 17.2056C20.5984 16.6566 20.8885 16.1006 21.1668 15.5381ZM19.1865 16.5339C18.7321 17.3621 18.2521 18.1745 17.7473 18.9699C16.833 19.0378 15.9166 19.0715 15 19.071C14.0664 19.071 13.1583 19.0405 12.2838 18.981C11.7659 18.1875 11.2767 17.3737 10.8175 16.5413C10.3603 15.7134 9.93347 14.8675 9.53754 14.0056C9.93246 13.1434 10.3581 12.2972 10.8137 11.4686L10.8136 11.4687C11.269 10.64 11.7542 9.82961 12.2682 9.03947C13.1604 8.96866 14.0753 8.93178 14.9999 8.93178C15.9287 8.93178 16.8449 8.96903 17.7368 9.04033C18.2456 9.82929 18.7278 10.6368 19.1823 11.4615C19.6394 12.2882 20.0707 13.1304 20.4756 13.9865C20.0749 14.8514 19.6449 15.7011 19.1865 16.5339ZM21.8303 1.5209C22.8348 2.12868 23.2255 4.57959 22.5943 7.79367C22.554 7.99872 22.5088 8.20758 22.4596 8.4194C21.2148 8.11796 19.8633 7.89386 18.4482 7.75458C17.6239 6.52316 16.7698 5.40361 15.9123 4.43441C16.137 4.20717 16.3671 3.98582 16.6023 3.77057C18.8171 1.7487 20.8871 0.950372 21.8303 1.5209ZM15 11.1633C16.4795 11.1633 17.6789 12.4215 17.6789 13.9735C17.6789 15.5255 16.4795 16.7837 15 16.7837C13.5205 16.7837 12.3211 15.5255 12.3211 13.9735C12.3211 12.4215 13.5205 11.1633 15 11.1633Z"
                  fill="#00D8FF"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L14 24.15L28 0H22.4L14 14.49L5.53 0H0Z" fill="#41B883" />
                <path d="M5.53125 0L14.0012 14.56L22.4012 0H17.2212L14.0012 5.6L10.7112 0H5.53125Z" fill="#35495E" />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.571 3.22933e-05C11.395 3.22933e-05 11.261 0.00103229 11.213 0.00703229C11.0918 0.0191542 10.9704 0.0301547 10.849 0.0400323C7.442 0.346032 4.249 2.18503 2.227 5.01203C1.10877 6.56356 0.381827 8.36223 0.108 10.255C0.012 10.914 0 11.109 0 12.002C0 12.895 0.012 13.091 0.108 13.75C0.76 18.256 3.968 22.042 8.317 23.445C9.096 23.695 9.917 23.867 10.851 23.97C11.214 24.01 12.786 24.01 13.15 23.97C14.761 23.792 16.127 23.393 17.473 22.706C17.68 22.6 17.72 22.572 17.692 22.548C17.672 22.535 16.792 21.355 15.737 19.928L13.818 17.336L11.414 13.778C10.6142 12.5876 9.80685 11.4022 8.992 10.222C8.983 10.22 8.974 11.801 8.969 13.732C8.962 17.112 8.959 17.247 8.917 17.327C8.87623 17.4208 8.80312 17.4967 8.711 17.541C8.636 17.578 8.571 17.585 8.216 17.585H7.809L7.701 17.517C7.63424 17.4752 7.58 17.4161 7.544 17.346L7.494 17.24L7.5 12.537L7.507 7.83203L7.579 7.74003C7.62816 7.68253 7.68706 7.63413 7.753 7.59703C7.849 7.55003 7.887 7.54603 8.293 7.54603C8.771 7.54603 8.851 7.56403 8.975 7.70003C9.94814 9.14828 10.9132 10.602 11.87 12.061C13.4474 14.4517 15.0257 16.8417 16.605 19.231L18.505 22.11L18.601 22.047C19.5158 21.4392 20.3451 20.7118 21.067 19.884C22.5788 18.1536 23.5593 16.0238 23.891 13.75C23.987 13.09 23.999 12.896 23.999 12.002C23.999 11.109 23.987 10.914 23.891 10.255C23.239 5.74903 20.032 1.96303 15.683 0.560032C14.8699 0.301515 14.0326 0.126282 13.184 0.0370323C12.647 0.0116186 12.1096 -0.000718387 11.572 3.22933e-05H11.571ZM15.64 7.21703C15.987 7.21703 16.048 7.22203 16.126 7.26403C16.1819 7.29223 16.2316 7.33123 16.2723 7.37878C16.3129 7.42633 16.3438 7.48148 16.363 7.54103C16.381 7.60103 16.386 8.90603 16.381 11.845L16.375 16.063L15.631 14.923L14.885 13.783V10.717C14.885 8.73503 14.895 7.62003 14.908 7.56703C14.9248 7.50448 14.9541 7.44599 14.9941 7.39511C15.0342 7.34423 15.0841 7.30202 15.141 7.27103C15.237 7.22103 15.271 7.21703 15.641 7.21703H15.64Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.30939L12.3339 0L25 4.23277L22.9491 20.235L12.3339 26L1.88477 20.3116L0 4.30939Z" fill="#E23237" />
                <path d="M25 4.23277L12 0V26L22.8951 20.2446L25 4.23277Z" fill="#B52E31" />
                <path
                  d="M12.3232 3L5 19.9516L7.73569 19.9032L9.20596 16.0791H15.7754L17.3853 19.9516L20 20L12.3232 3ZM12.3418 8.43111L14.817 13.8137H10.1643L12.3418 8.43111Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_11)">
                  <path
                    d="M17.9523 26.6666H29.848C30.2259 26.6666 30.597 26.5681 30.9243 26.3808C31.2515 26.1936 31.5232 25.9242 31.712 25.5999C31.9008 25.2755 32.0002 24.9076 32 24.5331C31.9998 24.1587 31.9002 23.7909 31.711 23.4667L23.7222 9.75242C23.5334 9.42815 23.2618 9.15885 22.9346 8.97162C22.6075 8.78442 22.2364 8.68582 21.8586 8.68582C21.4809 8.68582 21.1097 8.78442 20.7826 8.97162C20.4555 9.15885 20.1838 9.42815 19.995 9.75242L17.9523 13.2614L13.9584 6.39967C13.7695 6.07544 13.4977 5.80618 13.1705 5.61898C12.8432 5.43181 12.4721 5.33325 12.0943 5.33325C11.7164 5.33325 11.3453 5.43181 11.0181 5.61898C10.6908 5.80618 10.4191 6.07544 10.2301 6.39967L0.288942 23.4667C0.0998197 23.7909 0.000164599 24.1587 2.03726e-07 24.5331C-0.000164192 24.9076 0.0991677 25.2755 0.288005 25.5999C0.476843 25.9242 0.748526 26.1936 1.07573 26.3808C1.40294 26.5681 1.77413 26.6666 2.15196 26.6666H9.61913C12.5777 26.6666 14.7595 25.3786 16.2608 22.8657L19.9057 16.6095L21.858 13.2614L27.7172 23.3185H19.9057L17.9523 26.6666ZM9.49739 23.315L4.28626 23.3138L12.0977 9.9052L15.9954 16.6095L13.3857 21.0906C12.3887 22.721 11.2561 23.315 9.49739 23.315Z"
                    fill="#00DC82"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_11">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_15)">
                  <path
                    d="M24.8949 4.23053C21.939 -0.0270957 16.0542 -1.27455 11.8237 1.41019L4.36609 6.18307C2.33219 7.45765 0.922018 9.54579 0.515238 11.9051C0.162696 13.8848 0.461001 15.9187 1.41015 17.6814C0.759306 18.6576 0.325408 19.7424 0.135577 20.8814C-0.298321 23.2949 0.271171 25.7899 1.68134 27.7695C4.66439 32.0271 10.522 33.2746 14.7525 30.5899L22.2102 25.8441C24.2441 24.5695 25.6542 22.4814 26.061 20.1221C26.4135 18.1424 26.1152 16.1085 25.1661 14.3458C25.8169 13.3695 26.2508 12.2848 26.4407 11.1458C26.9017 8.70511 26.3322 6.21019 24.8949 4.23053Z"
                    fill="#FF3E00"
                  />
                  <path
                    d="M11.0915 28.1763C8.67797 28.8 6.15594 27.8509 4.74577 25.817C3.87797 24.6238 3.55255 23.1322 3.79661 21.6678C3.85085 21.4238 3.90509 21.2068 3.95933 20.9628L4.09492 20.5289L4.47458 20.8C5.3695 21.4509 6.34577 21.939 7.40339 22.2645L7.67458 22.3458L7.64746 22.617C7.62034 22.9967 7.72882 23.4034 7.94577 23.7289C8.37967 24.3526 9.13899 24.6509 9.87119 24.4611C10.0339 24.4068 10.1966 24.3526 10.3322 24.2712L17.7627 19.5255C18.1424 19.2814 18.3864 18.9289 18.4678 18.495C18.5492 18.0611 18.4407 17.6 18.1966 17.2475C17.7627 16.6238 17.0034 16.3526 16.2712 16.5424C16.1085 16.5967 15.9458 16.6509 15.8102 16.7323L12.9627 18.5492C12.5017 18.8475 11.9864 19.0645 11.4441 19.2C9.03051 19.8238 6.50848 18.8746 5.09831 16.8407C4.25763 15.6475 3.90509 14.156 4.17628 12.6916C4.42034 11.2814 5.28814 10.0068 6.50848 9.2475L13.9661 4.50174C14.4271 4.20344 14.9424 3.98649 15.4848 3.82378C17.8983 3.20005 20.4203 4.1492 21.8305 6.1831C22.6983 7.37632 23.0237 8.86784 22.7797 10.3322C22.7254 10.5763 22.6712 10.7933 22.5898 11.0373L22.4542 11.4712L22.0746 11.2C21.1797 10.5492 20.2034 10.0611 19.1458 9.73564L18.8746 9.65428L18.9017 9.3831C18.9288 9.00344 18.8203 8.59666 18.6034 8.27123C18.1695 7.6475 17.4102 7.37632 16.678 7.56615C16.5153 7.62039 16.3525 7.67462 16.217 7.75598L8.78645 12.5017C8.40679 12.7458 8.16272 13.0984 8.08136 13.5323C8 13.9661 8.10848 14.4272 8.35255 14.7797C8.78645 15.4034 9.54577 15.6746 10.278 15.4848C10.4407 15.4306 10.6034 15.3763 10.739 15.295L13.5864 13.478C14.0475 13.1797 14.5627 12.9628 15.1051 12.8C17.5186 12.1763 20.0407 13.1255 21.4509 15.1594C22.3186 16.3526 22.6441 17.8441 22.4 19.3085C22.1559 20.7187 21.2881 21.9933 20.0678 22.7526L12.6102 27.4984C12.1492 27.7967 11.6339 28.0136 11.0915 28.1763Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_15">
                    <rect width="26.6034" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {product === corekit ? (
              <div className={styles.platformIconContainer}>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.2204 0.406322C14.0104 -0.045877 15.0394 -0.0479196 15.8287 0.406322C19.7998 2.65018 23.7721 4.89052 27.7425 7.13574C28.4892 7.55639 28.9888 8.38749 28.9811 9.24797V22.7479C28.9867 23.644 28.4378 24.4949 27.65 24.9061C23.692 27.1376 19.736 29.3718 15.7787 31.6033C14.9723 32.0643 13.9226 32.0288 13.1415 31.53C11.9549 30.8421 10.7662 30.1576 9.5795 29.4704C9.337 29.3258 9.06364 29.2107 8.89241 28.9756C9.04378 28.7716 9.31442 28.7462 9.53434 28.6571C10.0297 28.4996 10.4846 28.2468 10.9396 28.0014C11.0547 27.9227 11.1952 27.9529 11.3055 28.0233C12.3202 28.6051 13.3259 29.2038 14.344 29.7801C14.5612 29.9054 14.7811 29.739 14.9667 29.6355C18.8508 27.4403 22.7396 25.2534 26.6229 23.0576C26.7668 22.9883 26.8463 22.8356 26.8347 22.678C26.8374 18.2246 26.8353 13.7705 26.836 9.31719C26.8525 9.13835 26.749 8.97392 26.5873 8.90073C22.643 6.67946 18.7008 4.45478 14.7571 2.23293C14.6888 2.18596 14.6079 2.16076 14.525 2.16063C14.4421 2.16051 14.361 2.18548 14.2926 2.23225C10.349 4.45478 6.40742 6.6815 2.46381 8.90266C2.30268 8.97597 2.19454 9.13767 2.21371 9.31719C2.21439 13.7705 2.21371 18.2246 2.21371 22.6787C2.20688 22.7556 2.22377 22.8327 2.26211 22.8997C2.30046 22.9667 2.35842 23.0204 2.42818 23.0535C3.48055 23.6502 4.53428 24.2428 5.58733 24.8375C6.18058 25.1568 6.90898 25.3466 7.56259 25.1019C8.13939 24.8951 8.5437 24.3065 8.53269 23.694C8.53814 19.2667 8.52997 14.8387 8.53678 10.412C8.52237 10.2155 8.70881 10.0531 8.8999 10.0716C9.40554 10.0682 9.91187 10.0648 10.4175 10.0729C10.6286 10.0682 10.7738 10.2798 10.7477 10.4778C10.7457 14.9332 10.7532 19.3887 10.7443 23.8441C10.7457 25.0315 10.2579 26.3235 9.15953 26.9045C7.80645 27.6054 6.13405 27.4568 4.79732 26.7846C3.6401 26.2071 2.53576 25.5254 1.39908 24.9066C0.609175 24.4978 0.0630188 23.6434 0.0685791 22.748V9.24797C0.0602954 8.36967 0.579671 7.52348 1.34971 7.10896C5.30705 4.87566 9.2637 2.64065 13.2204 0.406322Z"
                    fill="#8CC84B"
                  />
                  <path
                    d="M16.6728 9.75787C18.3987 9.64678 20.2464 9.69206 21.7996 10.5423C23.0021 11.1939 23.6687 12.5614 23.69 13.8973C23.6564 14.0775 23.468 14.1769 23.296 14.1646C22.7952 14.1639 22.2943 14.1714 21.7936 14.1612C21.5811 14.1693 21.4577 13.9735 21.431 13.7857C21.2871 13.1465 20.9385 12.5134 20.3369 12.2051C19.4133 11.7427 18.3424 11.7659 17.3354 11.7756C16.6001 11.8146 15.8096 11.8783 15.1867 12.3106C14.7085 12.6381 14.5633 13.2992 14.7339 13.8316C14.8948 14.2139 15.3361 14.3373 15.6972 14.451C17.7772 14.995 19.9814 14.9408 22.0217 15.6568C22.8664 15.9486 23.6927 16.516 23.9818 17.4004C24.36 18.5858 24.1942 20.0026 23.3509 20.9542C22.667 21.7373 21.6709 22.1635 20.6774 22.395C19.3558 22.6897 17.9842 22.6972 16.642 22.5664C15.3799 22.4225 14.0666 22.0909 13.0923 21.231C12.2592 20.5076 11.8522 19.3805 11.8926 18.2926C11.9023 18.1088 12.0852 17.9807 12.2612 17.9958C12.7655 17.9917 13.2698 17.9904 13.774 17.9965C13.9755 17.9821 14.1248 18.1562 14.1351 18.346C14.2282 18.955 14.4571 19.5942 14.9881 19.9553C16.013 20.6165 17.299 20.5713 18.4726 20.5898C19.4449 20.5466 20.5363 20.5336 21.3297 19.891C21.7483 19.5245 21.8723 18.9112 21.7592 18.3837C21.6366 17.9383 21.1707 17.7307 20.7706 17.595C18.7173 16.9455 16.4885 17.1812 14.455 16.4467C13.6295 16.1549 12.8312 15.6033 12.514 14.7552C12.0715 13.5549 12.2742 12.0702 13.206 11.1507C14.1145 10.2361 15.4259 9.88383 16.6728 9.75776V9.75787Z"
                    fill="#8CC84B"
                  />
                </svg>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <ul className={styles.cardContainer}>{product === pnp ? pnpweb : corekitweb}</ul>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainerIntro}>
          <h3 className={styles.title}>Mobile SDKs</h3>
          <p>
            Web3Auth supports all major mobile platforms. We provide SDKs for native iOS, & Android alongside hybrid mobile platforms like React
            Native & Flutter.
          </p>
          <div className={styles.platformIconSection}>
            <div className={styles.platformIconContainer}>
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.49967 22.9593C9.49967 23.3792 9.33286 23.782 9.03593 24.0789C8.73899 24.3758 8.33627 24.5426 7.91634 24.5426C7.49642 24.5426 7.09369 24.3758 6.79676 24.0789C6.49982 23.782 6.33301 23.3792 6.33301 22.9593V15.8343C6.33301 15.4144 6.49982 15.0117 6.79676 14.7147C7.09369 14.4178 7.49642 14.251 7.91634 14.251C8.33627 14.251 8.73899 14.4178 9.03593 14.7147C9.33286 15.0117 9.49967 15.4144 9.49967 15.8343V22.9593ZM31.6663 22.9593C31.6663 23.3792 31.4995 23.782 31.2026 24.0789C30.9057 24.3758 30.5029 24.5426 30.083 24.5426C29.6631 24.5426 29.2604 24.3758 28.9634 24.0789C28.6665 23.782 28.4997 23.3792 28.4997 22.9593V15.8343C28.4997 15.4144 28.6665 15.0117 28.9634 14.7147C29.2604 14.4178 29.6631 14.251 30.083 14.251C30.5029 14.251 30.9057 14.4178 31.2026 14.7147C31.4995 15.0117 31.6663 15.4144 31.6663 15.8343V22.9593ZM17.4163 31.6669C17.4163 32.0868 17.2495 32.4895 16.9526 32.7864C16.6557 33.0834 16.2529 33.2502 15.833 33.2502C15.4131 33.2502 15.0104 33.0834 14.7134 32.7864C14.4165 32.4895 14.2497 32.0868 14.2497 31.6669V24.5419C14.2497 24.1219 14.4165 23.7192 14.7134 23.4223C15.0104 23.1253 15.4131 22.9585 15.833 22.9585C16.2529 22.9585 16.6557 23.1253 16.9526 23.4223C17.2495 23.7192 17.4163 24.1219 17.4163 24.5419V31.6669ZM23.7497 31.6669C23.7497 32.0868 23.5829 32.4895 23.2859 32.7864C22.989 33.0834 22.5863 33.2502 22.1663 33.2502C21.7464 33.2502 21.3437 33.0834 21.0468 32.7864C20.7498 32.4895 20.583 32.0868 20.583 31.6669V24.5419C20.583 24.1219 20.7498 23.7192 21.0468 23.4223C21.3437 23.1253 21.7464 22.9585 22.1663 22.9585C22.5863 22.9585 22.989 23.1253 23.2859 23.4223C23.5829 23.7192 23.7497 24.1219 23.7497 24.5419V31.6669Z"
                  fill="#7CB342"
                />
                <path
                  d="M11.083 14.2505V26.1247C11.083 26.5446 11.2498 26.9473 11.5468 27.2443C11.8437 27.5412 12.2464 27.708 12.6663 27.708H25.333C25.7529 27.708 26.1557 27.5412 26.4526 27.2443C26.7495 26.9473 26.9163 26.5446 26.9163 26.1247V14.2505H11.083ZM18.9997 6.33301C14.2497 6.33301 11.3561 9.21863 11.083 12.6663H26.9163C26.6424 9.21863 23.7497 6.33301 18.9997 6.33301ZM15.833 10.7648C15.623 10.7648 15.4217 10.6814 15.2732 10.5329C15.1247 10.3844 15.0413 10.1831 15.0413 9.97309C15.0413 9.76313 15.1247 9.56176 15.2732 9.4133C15.4217 9.26483 15.623 9.18142 15.833 9.18142C16.043 9.18142 16.2443 9.26483 16.3928 9.4133C16.5413 9.56176 16.6247 9.76313 16.6247 9.97309C16.6247 10.1831 16.5413 10.3844 16.3928 10.5329C16.2443 10.6814 16.043 10.7648 15.833 10.7648ZM22.1663 10.7648C21.9564 10.7648 21.755 10.6814 21.6065 10.5329C21.4581 10.3844 21.3747 10.1831 21.3747 9.97309C21.3747 9.76313 21.4581 9.56176 21.6065 9.4133C21.755 9.26483 21.9564 9.18142 22.1663 9.18142C22.3763 9.18142 22.5777 9.26483 22.7261 9.4133C22.8746 9.56176 22.958 9.76313 22.958 9.97309C22.958 10.1831 22.8746 10.3844 22.7261 10.5329C22.5777 10.6814 22.3763 10.7648 22.1663 10.7648Z"
                  fill="#7CB342"
                />
                <path d="M23.75 5.54199L22.4311 7.52037M14.25 5.54199L15.3053 7.19024" stroke="#7CB342" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.4933 17.5861C20.1908 18.2848 19.8328 18.928 19.418 19.5193C18.8526 20.3255 18.3897 20.8835 18.0329 21.1934C17.4798 21.702 16.8872 21.9625 16.2527 21.9773C15.7972 21.9773 15.2478 21.8477 14.6083 21.5847C13.9667 21.323 13.3771 21.1934 12.838 21.1934C12.2726 21.1934 11.6662 21.323 11.0176 21.5847C10.3679 21.8477 9.84463 21.9847 9.44452 21.9983C8.83602 22.0242 8.22949 21.7563 7.62408 21.1934C7.23767 20.8563 6.75436 20.2786 6.17536 19.4601C5.55415 18.586 5.04342 17.5725 4.64331 16.417C4.21481 15.1689 4 13.9603 4 12.7902C4 11.4498 4.28962 10.2938 4.86973 9.32509C5.32564 8.54696 5.93216 7.93316 6.69127 7.48255C7.45038 7.03195 8.2706 6.80233 9.15391 6.78763C9.63723 6.78763 10.271 6.93714 11.0587 7.23096C11.8441 7.52576 12.3484 7.67526 12.5695 7.67526C12.7348 7.67526 13.295 7.50045 14.2447 7.15195C15.1429 6.82874 15.9009 6.69492 16.5218 6.74764C18.2045 6.88343 19.4686 7.54675 20.3094 8.74177C18.8045 9.6536 18.06 10.9307 18.0749 12.5691C18.0884 13.8452 18.5514 14.9071 19.4612 15.7503C19.8736 16.1417 20.334 16.4441 20.8464 16.6589C20.7353 16.9812 20.618 17.2898 20.4933 17.5861ZM16.6342 2.40011C16.6342 3.40034 16.2687 4.33425 15.5404 5.19867C14.6614 6.22629 13.5982 6.8201 12.4453 6.7264C12.4306 6.60641 12.4221 6.48011 12.4221 6.3474C12.4221 5.38718 12.8401 4.35956 13.5824 3.51934C13.953 3.09392 14.4244 2.74019 14.9959 2.45801C15.5663 2.18005 16.1058 2.02632 16.6132 2C16.628 2.13371 16.6342 2.26744 16.6342 2.4001V2.40011Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1456_17235)">
                  <path
                    d="M14.1654 0L0.000198364 14.4236L4.38457 18.888L22.9343 0H14.1654ZM14.0667 13.3012L6.48225 21.024L10.8832 25.5721L15.2594 21.116L22.9343 13.3012H14.0667Z"
                    fill="#47C5FB"
                  />
                  <path d="M10.883 25.5723L14.2146 28.9647H22.9341L15.2592 21.1162L10.883 25.5723Z" fill="#00569E" />
                  <path d="M6.43282 21.0748L10.8173 16.6104L15.2592 21.1166L10.883 25.5727L6.43282 21.0748Z" fill="#00B5F8" />
                  <path d="M10.883 25.5724L14.5271 24.3411L14.8891 21.4932L10.883 25.5724Z" fill="url(#paint0_linear_1456_17235)" fillOpacity="0.8" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1456_17235" x1="26.7149" y1="131.603" x2="316.112" y2="234.02" gradientUnits="userSpaceOnUse">
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_1456_17235">
                    <rect width="23" height="29" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.4882 9.06608C25.1583 8.95129 24.8256 8.84495 24.4904 8.74715C24.5467 8.51382 24.5985 8.28331 24.6445 8.05686C25.3999 4.33814 24.9061 1.34226 23.2194 0.355873C21.6022 -0.589741 18.9573 0.396277 16.2863 2.7538C16.023 2.98656 15.7656 3.22603 15.5143 3.47198C15.346 3.30843 15.1748 3.14806 15.0007 2.99094C12.2013 0.470207 9.3953 -0.592197 7.7104 0.397014C6.09465 1.34558 5.61621 4.16191 6.29627 7.68622C6.36393 8.03527 6.44032 8.38252 6.52538 8.72763C6.12819 8.84208 5.74493 8.96391 5.37814 9.09359C2.09601 10.2541 0 12.0728 0 13.9592C0 15.9075 2.25016 17.8618 5.66864 19.0467C5.94578 19.1424 6.22523 19.2311 6.50673 19.3126C6.41531 19.6843 6.33414 20.0585 6.26333 20.4348C5.615 23.898 6.12129 26.6478 7.73268 27.5903C9.397 28.5637 12.1904 27.5633 14.9103 25.152C15.1308 24.9559 15.3465 24.7543 15.5572 24.5474C15.8293 24.8137 16.1088 25.0723 16.3951 25.3228C19.0299 27.622 21.6319 28.5504 23.2418 27.6053C24.9045 26.6291 25.4449 23.6751 24.7433 20.0811C24.6881 19.7996 24.6261 19.5194 24.5574 19.2409C24.7536 19.1819 24.9462 19.1213 25.1339 19.0582C28.6877 17.8641 31 15.9336 31 13.9592C31 12.0659 28.8363 10.235 25.4882 9.06608ZM24.7174 17.7834C24.5479 17.8403 24.374 17.8952 24.1967 17.9486C23.8044 16.689 23.2749 15.3496 22.627 13.9657C23.2453 12.6148 23.7544 11.2926 24.1357 10.0412C24.4528 10.1343 24.7605 10.2324 25.0572 10.3359C27.9259 11.3375 29.6757 12.8182 29.6757 13.9592C29.6757 15.1745 27.7859 16.7522 24.7174 17.7834ZM23.4442 20.342C23.7545 21.9311 23.7987 23.3679 23.5932 24.4913C23.4086 25.5006 23.0374 26.1735 22.5782 26.443C21.6013 27.0165 19.5121 26.2711 17.2589 24.3047C16.9925 24.0718 16.7326 23.8314 16.4794 23.5838C17.353 22.615 18.2259 21.4888 19.078 20.2378C20.5766 20.103 21.9924 19.8824 23.2764 19.5814C23.3382 19.8336 23.3942 20.0872 23.4442 20.342ZM10.5686 26.3439C9.61412 26.6857 8.85389 26.6955 8.39434 26.4268C7.41651 25.8549 7.01 23.647 7.56448 20.6854C7.6304 20.3354 7.70587 19.9873 7.79081 19.6416C9.0606 19.9265 10.4661 20.1314 11.9683 20.2549C12.8261 21.4789 13.7243 22.604 14.6295 23.5891C14.4371 23.7779 14.2402 23.9618 14.0389 24.1408C12.8361 25.207 11.6308 25.9635 10.5686 26.3439ZM6.09707 17.7759C4.58546 17.2519 3.3371 16.5709 2.48145 15.8278C1.71251 15.1601 1.3244 14.4971 1.3244 13.9592C1.3244 12.8144 3.00724 11.3542 5.81407 10.3618C6.15471 10.2415 6.51121 10.1279 6.88115 10.0213C7.26914 11.3009 7.77797 12.6389 8.39204 13.9919C7.76998 15.3649 7.25388 16.7242 6.86214 18.019C6.60519 17.9443 6.35009 17.8633 6.09707 17.7759ZM7.59597 7.42821C7.01339 4.40875 7.40028 2.13105 8.374 1.55938C9.41104 0.950505 11.7043 1.81863 14.1215 3.99526C14.2791 4.13752 14.4342 4.28266 14.5866 4.43061C13.6859 5.41147 12.796 6.52815 11.9458 7.74493C10.4878 7.88198 9.0922 8.10205 7.80909 8.39691C7.73004 8.07592 7.65898 7.75283 7.59597 7.42821ZM20.968 10.7769C20.6649 10.246 20.3506 9.72178 20.0253 9.20461C21.0144 9.33147 21.962 9.49984 22.852 9.70566C22.5848 10.5742 22.2518 11.4821 21.8598 12.4129C21.5733 11.8616 21.276 11.3162 20.968 10.7769ZM15.5149 5.39047C16.1257 6.06161 16.7375 6.81086 17.3392 7.62384C16.1185 7.56538 14.8959 7.56513 13.6752 7.6231C14.2776 6.81761 14.8945 6.06935 15.5149 5.39047ZM10.0268 10.7861C9.72266 11.321 9.43086 11.8631 9.15166 12.4118C8.7661 11.4843 8.43612 10.5722 8.16668 9.69142C9.05115 9.49075 9.99435 9.32668 10.9771 9.20215C10.6482 9.72249 10.3313 10.2507 10.0268 10.7861ZM11.0054 18.8118C9.98999 18.6969 9.03263 18.5413 8.1484 18.346C8.42207 17.4495 8.75932 16.518 9.15323 15.5706C9.43355 16.1197 9.72655 16.6621 10.032 17.1973C10.3461 17.7474 10.6714 18.2863 11.0054 18.8118ZM15.5515 22.6225C14.9237 21.9358 14.2977 21.176 13.6863 20.3588C14.2799 20.3824 14.885 20.3944 15.5 20.3944C16.1319 20.3944 16.7565 20.3801 17.3713 20.3523C16.7676 21.1842 16.1581 21.9451 15.5515 22.6225ZM21.8723 15.5222C22.2867 16.4801 22.6359 17.4066 22.9132 18.2878C22.0145 18.4958 21.044 18.6633 20.0215 18.7877C20.3492 18.261 20.6665 17.7276 20.9732 17.1881C21.2851 16.6396 21.5848 16.0842 21.8723 15.5222ZM19.8261 16.517C19.3565 17.3443 18.8605 18.1559 18.3389 18.9505C17.3941 19.0183 16.4472 19.052 15.5 19.0515C14.5352 19.0515 13.5969 19.0211 12.6933 18.9616C12.1581 18.1689 11.6526 17.3559 11.178 16.5244C10.7057 15.6973 10.2646 14.8523 9.85546 13.9913C10.2635 13.13 10.7034 12.2846 11.1742 11.4569L11.174 11.457C11.6446 10.6291 12.146 9.81956 12.6772 9.03022C13.5991 8.95949 14.5444 8.92265 15.4999 8.92265C16.4597 8.92265 17.4064 8.95986 18.328 9.03108C18.8538 9.81924 19.352 10.626 19.8217 11.4498C20.294 12.2757 20.7397 13.1169 21.1581 13.9722C20.744 14.8363 20.2997 15.6851 19.8261 16.517ZM22.5579 1.51935C23.596 2.1265 23.9997 4.57491 23.3475 7.7857C23.3058 7.99054 23.2591 8.19919 23.2082 8.41079C21.922 8.10966 20.5254 7.88579 19.0632 7.74665C18.2114 6.51649 17.3288 5.39808 16.4427 4.42987C16.6749 4.20287 16.9127 3.98175 17.1557 3.76672C19.4444 1.74691 21.5834 0.9494 22.5579 1.51935ZM15.5 11.1518C17.0288 11.1518 18.2682 12.4088 18.2682 13.9592C18.2682 15.5096 17.0288 16.7666 15.5 16.7666C13.9712 16.7666 12.7318 15.5096 12.7318 13.9592C12.7318 12.4088 13.9712 11.1518 15.5 11.1518Z"
                  fill="#00D8FF"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul className={styles.cardContainer}>{product === pnp ? pnpmobile : corekitmobile}</ul>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainerIntro}>
          <div className={styles.cardTitleContainer}>
            <h3 className={styles.title}>Gaming SDKs</h3>
            <div className={styles.pillContainer}>
              <div className={styles.pill}>{pnp} Only</div>
            </div>
          </div>

          <p>Seamlessly authenticate users into your Web3 games with their socials using Web3Auth Gaming SDKs.</p>
          <div className={styles.platformIconSection}>
            <div className={styles.platformIconContainer}>
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M243.583 91.6027L323.695 138.384C326.575 140.026 326.68 144.583 323.695 146.225L228.503 201.854C225.623 203.55 222.22 203.444 219.549 201.854L124.357 146.225C121.425 144.636 121.373 139.973 124.357 138.384L204.417 91.6027V0L0 119.417V358.252L78.3843 312.477V218.914C78.3319 215.576 82.2066 213.192 85.0865 214.993L180.279 270.622C183.159 272.318 184.782 275.338 184.782 278.464V389.669C184.834 393.007 180.959 395.391 178.079 393.589L97.9673 346.808L19.583 392.583L224 512L428.417 392.583L350.033 346.808L269.921 393.589C267.093 395.338 263.114 393.06 263.218 389.669V278.464C263.218 275.126 265.051 272.159 267.721 270.622L362.914 214.993C365.741 213.245 369.72 215.47 369.616 218.914V312.477L448 358.252V119.417L243.583 0V91.6027Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={styles.platformIconContainer}>
              <svg fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 0c-8.766 0-15.865 7.161-15.865 16s7.099 16 15.865 16c8.76 0 15.865-7.161 15.865-16s-7.104-16-15.87-16zM16 0.703c4.047 0 7.859 1.594 10.724 4.479 2.859 2.875 4.453 6.766 4.443 10.818 0 4.083-1.578 7.927-4.443 10.818-2.828 2.87-6.693 4.484-10.724 4.479-4.031 0.005-7.896-1.609-10.724-4.479-2.859-2.875-4.458-6.766-4.448-10.818 0-4.083 1.583-7.927 4.443-10.818 2.828-2.875 6.698-4.49 10.729-4.479zM15.203 6.333c-2.583 0.693-4.974 2.021-8.161 5.677s-2.583 6.677-2.583 6.677c0 0 0.88-2.078 2.995-4.266 1.005-1.036 1.75-1.385 2.266-1.385 0.458-0.026 0.844 0.344 0.844 0.802v7.422c0 0.734-0.474 0.896-0.911 0.885-0.37-0.005-0.714-0.135-0.714-0.135 2.172 3.156 7.37 3.599 7.37 3.599l2.281-2.438 0.052 0.047 2.089 1.781c3.823-2.271 5.667-6.479 5.667-6.479-1.708 1.802-2.792 2.224-3.438 2.224-0.573-0.005-0.797-0.339-0.797-0.339-0.031-0.156-0.083-2.417-0.104-4.677-0.021-2.339 0-4.682 0.115-4.688 0.661-1.24 2.766-3.74 2.766-3.74-3.932 0.776-6.073 3.354-6.073 3.354-0.635-0.5-1.927-0.417-1.927-0.417 0.604 0.333 1.208 1.302 1.208 2.104v7.896c0 0-1.318 1.161-2.333 1.161-0.604 0-0.974-0.328-1.177-0.599-0.078-0.104-0.146-0.219-0.198-0.344v-9.75c-0.141 0.104-0.313 0.161-0.484 0.167-0.219 0-0.443-0.109-0.594-0.427-0.115-0.24-0.188-0.599-0.188-1.125 0-1.797 2.031-2.99 2.031-2.99z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul className={styles.cardContainer}>{pnpgaming}</ul>
      </div>
    </div>
  );
}
