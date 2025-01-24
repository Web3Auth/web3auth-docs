/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import classNames from "classnames";
import copyToClipboard from "copy-to-clipboard";
import { UIEvent, useEffect, useMemo, useState, useRef } from "react";
import MoonLoader from "react-spinners/BeatLoader";
import { Tooltip } from "react-tooltip";

import SEO from "../../components/SEO";
import IntegrationBuilderCodeView from "../../theme/IntegrationBuilderCodeView";
import builder from "./builder";
import { SFA, MPC_CORE_KIT, PNP } from "./builder/choices";
import styles from "./styles.module.css";
import { quickStartHostedLinks } from "../../common/maps";

const getWindowLocation = () => {
  if (typeof window !== "undefined") return window.location.href;
  return "http://localhost";
};

const getDefaultBuilderOptions = () => {
  const defaultOpts = Object.fromEntries(
    Object.entries(builder.options).map(([key, option]) => [key, option.default]),
  );
  const url = new URL(getWindowLocation());

  const urlOpts = {};
  url.searchParams.forEach((value, key) => {
    urlOpts[key] = value;
  });

  return { ...defaultOpts, ...urlOpts };
};
const getURLFromBuilderOptions = (opts: Record<string, string>, stepIndex): string => {
  const url = new URL(getWindowLocation());
  url.search = "";
  for (const [key, value] of Object.entries(opts)) url.searchParams.append(key, value);
  url.searchParams.append("stepIndex", stepIndex.toString());
  return url.toString();
};

export default function IntegrationBuilderPage({ files }: { files: Record<string, any> }) {
  const [builderOptions, setBuilderOptions] = useState<Record<string, string>>(
    getDefaultBuilderOptions(),
  );
  const [isLinkCopied, setLinkCopied] = useState<boolean>(false);
  const [IBCountdown, setIBCountdown] = useState<number>(10);
  const [builderView, setBuilderView] = useState<boolean>(true);
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);
  const url = new URL(getWindowLocation());
  const [stepIndex, setStepIndex] = useState(
    parseInt(url.searchParams.get("stepIndex") || "0", 10),
  );
  const [loading, setLoading] = useState<boolean>(false);
  const integration = useMemo(
    () => builder.build(builderOptions, files, stepIndex),
    [builderOptions, files, stepIndex],
  );
  const [selectedFilename, setSelectedFilename] = useState(integration.filenames[0]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const ref = useRef(null);

  const onClickCopyLink = async () => {
    if (isLinkCopied) return;

    copyToClipboard(getWindowLocation());
    setLinkCopied(true);
    await delay(500);
    setLinkCopied(false);
  };

  const { steps } = integration;

  const onChangeStep = (index: number) => {
    if (index >= steps.length) {
      // eslint-disable-next-line no-param-reassign
      index = steps.length - 1;
    }
    setSelectedFilename(steps[index].pointer.filename);
    setStepIndex(index);
  };

  const onScrollLeft = (e: UIEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;

    const stepEls = el.getElementsByClassName(styles.stepContainer);

    for (let i = 0; i < stepEls.length; i += 1) {
      const stepEl = stepEls.item(i) as HTMLDivElement;
      if (el.scrollTop <= stepEl.offsetTop) {
        const dis = stepEl.offsetTop - el.scrollTop;
        if (dis >= 700 && dis <= 800) {
          onChangeStep(i);
          break;
        }
      }
    }
  };

  // const onChangeOptionValue = (optionKey: string, event: ChangeEvent<HTMLInputElement>) => {
  //   const el = event.target as HTMLInputElement;
  //   const finalOptionValue = el.checked ? YES : NO;

  //   setBuilderOptions({
  //     ...builderOptions,
  //     [optionKey]: finalOptionValue,
  //   });
  // };

  const onChangeDropdown = (optionKey: string, optionValue: string) => {
    setBuilderOptions({
      ...builderOptions,
      [optionKey]: optionValue,
    });
  };

  const toggleBuilderView = async () => {
    if (builderView) {
      setBuilderView(false);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setBuilderView(true);
    }
  };

  const togglePreviewModal = (link?: string) => {
    if (link === quickStartHostedLinks.PNP_UNITY_WEBGL) {
      window.open(link, "_blank");
      return;
    }
    if (showPreviewModal) {
      setShowPreviewModal(false);
    } else {
      setLoading(true);
      setShowPreviewModal(true);
    }
  };

  useEffect(() => {
    setStepIndex(integration.stepIndex);
    // Update selected file when either integration changed
    setSelectedFilename(integration.steps[integration.stepIndex].pointer.filename);

    for (const optionKey in builderOptions) {
      if (builder.options[optionKey]) {
        const check = builder.options[optionKey].choices.flatMap((choice) => choice.key);
        if (!check.includes(builderOptions[optionKey])) {
          const option = Object.fromEntries(
            Object.entries(builder.options).map(([key, optioning]) => [key, optioning.default]),
          );
          onChangeDropdown(optionKey, option[optionKey]);
        }
      }
    }
    // Update query params
    // eslint-disable-next-line no-restricted-globals
    history.pushState({}, "", getURLFromBuilderOptions(builderOptions, stepIndex));
  }, [builderOptions, integration, stepIndex, isLinkCopied]);

  useEffect(() => {
    if (stepIndex > 0) {
      window.location.href = `#step-${stepIndex}`;
    }
  }, []);

  useEffect(() => {
    if (IBCountdown > 0) {
      setTimeout(() => setIBCountdown(IBCountdown - 1), 1000);
    }
    if (IBCountdown === 0 && builderView) {
      toggleBuilderView();
    }
  }, [IBCountdown]);

  const optionRender = (key, option) => {
    switch (option.type) {
      case "dropdown":
        return (
          <div key={key} className={styles.list}>
            <h3>{option.displayName}</h3>
            <select
              value={builderOptions[key]}
              onChange={(event) => onChangeDropdown(key, event.target.value)}
            >
              {option.choices.map((value) => (
                <option value={value.key} key={key}>
                  {value.displayName}
                </option>
              ))}
            </select>
          </div>
        );
      case "product_selection":
        return (
          <div key={key} className={styles.list}>
            <h3>{option.displayName}</h3>
            <div className={styles.cardContainer}>
              {option.choices.map((value) => (
                <>
                  {value.key === PNP && (
                    <div
                      className={builderOptions[key] === PNP ? styles.selectedCard : styles.card}
                      onClick={() => onChangeDropdown(key, value.key)}
                    >
                      <Tooltip anchorSelect=".pnp-descrption" place="bottom-start">
                        Integrate Web3Auth in just 4 lines of Code.
                      </Tooltip>
                      <h5 className={classNames(styles.cardTitle, "pnp-descrption")}>
                        {value.displayName}
                      </h5>
                    </div>
                  )}
                  {value.key === SFA && (
                    <div
                      className={builderOptions[key] === SFA ? styles.selectedCard : styles.card}
                      onClick={() => onChangeDropdown(key, value.key)}
                    >
                      <Tooltip anchorSelect=".sfa-descrption" place="bottom-start">
                        Single click login with zero web3 components.
                      </Tooltip>
                      <h5 className={classNames(styles.cardTitle, "sfa-descrption")}>
                        {value.displayName}
                      </h5>
                    </div>
                  )}
                  {value.key === MPC_CORE_KIT && (
                    <div
                      className={
                        builderOptions[key] === MPC_CORE_KIT ? styles.selectedCard : styles.card
                      }
                      onClick={() => onChangeDropdown(key, value.key)}
                    >
                      <Tooltip anchorSelect=".mpc-descrption" place="bottom-start">
                        Build custom UX flows on Web3Auth's MPC Infrastructure.
                      </Tooltip>
                      <h5 className={classNames(styles.cardTitle, "mpc-descrption")}>
                        {value.displayName}
                      </h5>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        );

      default:
        return <div />;
    }
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); // Prevents the click from propagating to the background
  };

  return (
    <Layout
      title="Integration Builder"
      description="Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
    >
      <SEO
        title="Integration Builder"
        description="Web3Auth Integration Builder for easy quick start. Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image="https://web3auth.io/docs/images/docs-meta-cards/integration-builder-card.png"
        url="https://web3auth.io/docs/quick-start"
      />
      <div className={styles.container}>
        {showPreviewModal && (
          <div className={styles.previewModalContainer} onClick={() => togglePreviewModal()}>
            <div className={styles.previewModal} onClick={handleModalClick}>
              <div className={styles.optionsHeader}>
                <h2 className={styles.optionsHeaderText}>Preview</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => togglePreviewModal()}
                  type="button"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.29303 4.79296C4.48056 4.60549 4.73487 4.50017 5.00003 4.50017C5.26519 4.50017 5.5195 4.60549 5.70703 4.79296L10 9.08596L14.293 4.79296C14.3853 4.69745 14.4956 4.62127 14.6176 4.56886C14.7396 4.51645 14.8709 4.48886 15.0036 4.48771C15.1364 4.48655 15.2681 4.51186 15.391 4.56214C15.5139 4.61242 15.6255 4.68667 15.7194 4.78056C15.8133 4.87446 15.8876 4.98611 15.9379 5.10901C15.9881 5.2319 16.0134 5.36358 16.0123 5.49636C16.0111 5.62914 15.9835 5.76036 15.9311 5.88236C15.8787 6.00437 15.8025 6.11471 15.707 6.20696L11.414 10.5L15.707 14.793C15.8892 14.9816 15.99 15.2342 15.9877 15.4964C15.9854 15.7586 15.8803 16.0094 15.6948 16.1948C15.5094 16.3802 15.2586 16.4854 14.9964 16.4876C14.7342 16.4899 14.4816 16.3891 14.293 16.207L10 11.914L5.70703 16.207C5.51843 16.3891 5.26583 16.4899 5.00363 16.4876C4.74143 16.4854 4.49062 16.3802 4.30521 16.1948C4.1198 16.0094 4.01463 15.7586 4.01236 15.4964C4.01008 15.2342 4.11087 14.9816 4.29303 14.793L8.58603 10.5L4.29303 6.20696C4.10556 6.01943 4.00024 5.76512 4.00024 5.49996C4.00024 5.23479 4.10556 4.98049 4.29303 4.79296Z"
                      fill="#374151"
                    />
                  </svg>
                </button>
              </div>
              <div className={styles.iframeContainer}>
                {loading && (
                  <div className={styles.loadingContainer}>
                    {" "}
                    <MoonLoader
                      loading={loading}
                      size={20}
                      color={getComputedStyle(document.body).getPropertyValue(
                        "--ifm-color-primary",
                      )}
                      aria-label="Loading"
                      speedMultiplier={0.85}
                    />
                  </div>
                )}
                <iframe
                  src={integration.embedLink}
                  height="100%"
                  width="100%"
                  title="Quick Start Preview"
                  loading="eager"
                  seamless={true}
                  onLoad={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        )}

        <div className={builderView ? styles.optionsPane : styles.optionsPaneCollapsed}>
          <div className={styles.optionsHeader}>
            <h2 className={styles.optionsHeaderText}>Builder Settings</h2>

            <div className={styles.optionsHeaderButtonsContainer}>
              {integration.embedLink && (
                <button
                  className={styles.previewButton}
                  onClick={() => togglePreviewModal(integration.embedLink)}
                  type="button"
                  id="headerButton"
                >
                  Preview
                </button>
              )}
              <button
                className={styles.copyButton}
                onClick={() => window.open(integration.sourceCodeLink, "_blank")}
                type="button"
                id="headerButton"
              >
                Source Code
              </button>
              <button
                className={styles.copyButton}
                onClick={onClickCopyLink}
                type="button"
                id="headerButton"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5858 2.58604C11.7703 2.39502 11.991 2.24266 12.235 2.13784C12.479 2.03302 12.7415 1.97785 13.007 1.97554C13.2726 1.97323 13.536 2.02384 13.7817 2.1244C14.0275 2.22496 14.2508 2.37347 14.4386 2.56125C14.6264 2.74904 14.7749 2.97234 14.8755 3.21813C14.976 3.46393 15.0266 3.72729 15.0243 3.99284C15.022 4.2584 14.9669 4.52084 14.862 4.76485C14.7572 5.00886 14.6049 5.22955 14.4138 5.41404L11.4138 8.41404C11.0388 8.78898 10.5302 8.99961 9.99984 8.99961C9.46951 8.99961 8.96089 8.78898 8.58584 8.41404C8.39723 8.23188 8.14463 8.13109 7.88244 8.13337C7.62024 8.13565 7.36943 8.24082 7.18402 8.42622C6.99861 8.61163 6.89344 8.86244 6.89116 9.12464C6.88888 9.38684 6.98968 9.63944 7.17184 9.82804C7.92195 10.5779 8.93918 10.9992 9.99984 10.9992C11.0605 10.9992 12.0777 10.5779 12.8278 9.82804L15.8278 6.82804C16.5565 6.07363 16.9596 5.06322 16.9505 4.01444C16.9414 2.96565 16.5207 1.9624 15.7791 1.22077C15.0375 0.479135 14.0342 0.0584592 12.9854 0.0493455C11.9367 0.0402319 10.9262 0.443409 10.1718 1.17204L8.67184 2.67204C8.57633 2.76429 8.50014 2.87463 8.44774 2.99664C8.39533 3.11864 8.36774 3.24986 8.36659 3.38264C8.36543 3.51542 8.39073 3.6471 8.44101 3.77C8.4913 3.89289 8.56555 4.00454 8.65944 4.09844C8.75333 4.19233 8.86499 4.26658 8.98788 4.31686C9.11078 4.36714 9.24246 4.39245 9.37524 4.39129C9.50802 4.39014 9.63924 4.36255 9.76124 4.31014C9.88324 4.25773 9.99359 4.18155 10.0858 4.08604L11.5858 2.58604ZM6.58584 7.58604C6.96089 7.2111 7.46951 7.00047 7.99984 7.00047C8.53016 7.00047 9.03878 7.2111 9.41384 7.58604C9.50608 7.68155 9.61643 7.75773 9.73843 7.81014C9.86044 7.86255 9.99166 7.89014 10.1244 7.89129C10.2572 7.89245 10.3889 7.86715 10.5118 7.81686C10.6347 7.76658 10.7463 7.69233 10.8402 7.59844C10.9341 7.50454 11.0084 7.39289 11.0587 7.27C11.1089 7.1471 11.1342 7.01542 11.1331 6.88264C11.1319 6.74986 11.1043 6.61864 11.0519 6.49664C10.9995 6.37463 10.9233 6.26429 10.8278 6.17204C10.0777 5.42216 9.06049 5.0009 7.99984 5.0009C6.93918 5.0009 5.92195 5.42216 5.17184 6.17204L2.17184 9.17204C1.7898 9.54103 1.48507 9.98241 1.27543 10.4704C1.06579 10.9584 0.95545 11.4833 0.950835 12.0144C0.946219 12.5456 1.04743 13.0723 1.24855 13.5639C1.44967 14.0554 1.74669 14.5021 2.12226 14.8776C2.49783 15.2532 2.94444 15.5502 3.43602 15.7513C3.92761 15.9525 4.45432 16.0537 4.98544 16.049C5.51656 16.0444 6.04144 15.9341 6.52945 15.7244C7.01747 15.5148 7.45885 15.2101 7.82784 14.828L9.32784 13.328C9.42335 13.2358 9.49953 13.1255 9.55194 13.0034C9.60435 12.8814 9.63193 12.7502 9.63309 12.6174C9.63424 12.4847 9.60894 12.353 9.55866 12.2301C9.50838 12.1072 9.43412 11.9955 9.34023 11.9016C9.24634 11.8078 9.13469 11.7335 9.01179 11.6832C8.88889 11.6329 8.75721 11.6076 8.62443 11.6088C8.49166 11.6099 8.36044 11.6375 8.23843 11.6899C8.11643 11.7423 8.00608 11.8185 7.91384 11.914L6.41384 13.414C6.22934 13.6051 6.00865 13.7574 5.76465 13.8622C5.52064 13.9671 5.2582 14.0222 4.99264 14.0245C4.72708 14.0269 4.46372 13.9762 4.21793 13.8757C3.97214 13.7751 3.74883 13.6266 3.56105 13.4388C3.37326 13.251 3.22476 13.0277 3.12419 12.7819C3.02363 12.5362 2.97303 12.2728 2.97534 12.0072C2.97764 11.7417 3.03282 11.4792 3.13763 11.2352C3.24245 10.9912 3.39482 10.7705 3.58584 10.586L6.58584 7.58604Z"
                    fill="currentColor"
                  />
                </svg>
                {isLinkCopied ? "Copied!" : "Copy Link"}
              </button>

              <button className={styles.hideButton} onClick={toggleBuilderView} type="button">
                {builderView ? (
                  <>
                    Hide {IBCountdown ? `in ${IBCountdown}s` : ""}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29279 7.79299C5.48031 7.60552 5.73462 7.5002 5.99979 7.5002C6.26495 7.5002 6.51926 7.60552 6.70679 7.79299L9.99979 11.086L13.2928 7.79299C13.385 7.69748 13.4954 7.6213 13.6174 7.56889C13.7394 7.51648 13.8706 7.48889 14.0034 7.48774C14.1362 7.48659 14.2678 7.51189 14.3907 7.56217C14.5136 7.61245 14.6253 7.6867 14.7192 7.78059C14.8131 7.87449 14.8873 7.98614 14.9376 8.10904C14.9879 8.23193 15.0132 8.36361 15.012 8.49639C15.0109 8.62917 14.9833 8.76039 14.9309 8.88239C14.8785 9.0044 14.8023 9.11474 14.7068 9.20699L10.7068 13.207C10.5193 13.3945 10.265 13.4998 9.99979 13.4998C9.73462 13.4998 9.48031 13.3945 9.29279 13.207L5.29279 9.20699C5.10532 9.01946 5 8.76515 5 8.49999C5 8.23483 5.10532 7.98052 5.29279 7.79299Z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Expand{" "}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.707 13.207C14.5195 13.3945 14.2652 13.4998 14 13.4998C13.7349 13.4998 13.4806 13.3945 13.293 13.207L10 9.91403L6.70704 13.207C6.51844 13.3892 6.26584 13.49 6.00364 13.4877C5.74144 13.4854 5.49063 13.3803 5.30522 13.1948C5.11981 13.0094 5.01465 12.7586 5.01237 12.4964C5.01009 12.2342 5.11088 11.9816 5.29304 11.793L9.29304 7.79303C9.48057 7.60556 9.73488 7.50024 10 7.50024C10.2652 7.50024 10.5195 7.60556 10.707 7.79303L14.707 11.793C14.8945 11.9806 14.9998 12.2349 14.9998 12.5C14.9998 12.7652 14.8945 13.0195 14.707 13.207Z"
                        fill="currentColor"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className={styles.optionsContainer}>
            <div className={styles.builderContainer}>
              {Object.entries(builder.options).map(([key, option]) => optionRender(key, option))}
            </div>
            <div className={styles.utilityButtonsContainer}>
              {integration.embedLink && (
                <button
                  className={styles.previewButton2}
                  onClick={() => togglePreviewModal(integration.embedLink)}
                  type="button"
                >
                  Preview
                </button>
              )}
              <button
                className={styles.copyButton2}
                onClick={() => window.open(integration.sourceCodeLink, "_blank")}
                type="button"
              >
                Source Code
              </button>
              <button className={styles.copyButton2} onClick={onClickCopyLink} type="button">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5858 2.58604C11.7703 2.39502 11.991 2.24266 12.235 2.13784C12.479 2.03302 12.7415 1.97785 13.007 1.97554C13.2726 1.97323 13.536 2.02384 13.7817 2.1244C14.0275 2.22496 14.2508 2.37347 14.4386 2.56125C14.6264 2.74904 14.7749 2.97234 14.8755 3.21813C14.976 3.46393 15.0266 3.72729 15.0243 3.99284C15.022 4.2584 14.9669 4.52084 14.862 4.76485C14.7572 5.00886 14.6049 5.22955 14.4138 5.41404L11.4138 8.41404C11.0388 8.78898 10.5302 8.99961 9.99984 8.99961C9.46951 8.99961 8.96089 8.78898 8.58584 8.41404C8.39723 8.23188 8.14463 8.13109 7.88244 8.13337C7.62024 8.13565 7.36943 8.24082 7.18402 8.42622C6.99861 8.61163 6.89344 8.86244 6.89116 9.12464C6.88888 9.38684 6.98968 9.63944 7.17184 9.82804C7.92195 10.5779 8.93918 10.9992 9.99984 10.9992C11.0605 10.9992 12.0777 10.5779 12.8278 9.82804L15.8278 6.82804C16.5565 6.07363 16.9596 5.06322 16.9505 4.01444C16.9414 2.96565 16.5207 1.9624 15.7791 1.22077C15.0375 0.479135 14.0342 0.0584592 12.9854 0.0493455C11.9367 0.0402319 10.9262 0.443409 10.1718 1.17204L8.67184 2.67204C8.57633 2.76429 8.50014 2.87463 8.44774 2.99664C8.39533 3.11864 8.36774 3.24986 8.36659 3.38264C8.36543 3.51542 8.39073 3.6471 8.44101 3.77C8.4913 3.89289 8.56555 4.00454 8.65944 4.09844C8.75333 4.19233 8.86499 4.26658 8.98788 4.31686C9.11078 4.36714 9.24246 4.39245 9.37524 4.39129C9.50802 4.39014 9.63924 4.36255 9.76124 4.31014C9.88324 4.25773 9.99359 4.18155 10.0858 4.08604L11.5858 2.58604ZM6.58584 7.58604C6.96089 7.2111 7.46951 7.00047 7.99984 7.00047C8.53016 7.00047 9.03878 7.2111 9.41384 7.58604C9.50608 7.68155 9.61643 7.75773 9.73843 7.81014C9.86044 7.86255 9.99166 7.89014 10.1244 7.89129C10.2572 7.89245 10.3889 7.86715 10.5118 7.81686C10.6347 7.76658 10.7463 7.69233 10.8402 7.59844C10.9341 7.50454 11.0084 7.39289 11.0587 7.27C11.1089 7.1471 11.1342 7.01542 11.1331 6.88264C11.1319 6.74986 11.1043 6.61864 11.0519 6.49664C10.9995 6.37463 10.9233 6.26429 10.8278 6.17204C10.0777 5.42216 9.06049 5.0009 7.99984 5.0009C6.93918 5.0009 5.92195 5.42216 5.17184 6.17204L2.17184 9.17204C1.7898 9.54103 1.48507 9.98241 1.27543 10.4704C1.06579 10.9584 0.95545 11.4833 0.950835 12.0144C0.946219 12.5456 1.04743 13.0723 1.24855 13.5639C1.44967 14.0554 1.74669 14.5021 2.12226 14.8776C2.49783 15.2532 2.94444 15.5502 3.43602 15.7513C3.92761 15.9525 4.45432 16.0537 4.98544 16.049C5.51656 16.0444 6.04144 15.9341 6.52945 15.7244C7.01747 15.5148 7.45885 15.2101 7.82784 14.828L9.32784 13.328C9.42335 13.2358 9.49953 13.1255 9.55194 13.0034C9.60435 12.8814 9.63193 12.7502 9.63309 12.6174C9.63424 12.4847 9.60894 12.353 9.55866 12.2301C9.50838 12.1072 9.43412 11.9955 9.34023 11.9016C9.24634 11.8078 9.13469 11.7335 9.01179 11.6832C8.88889 11.6329 8.75721 11.6076 8.62443 11.6088C8.49166 11.6099 8.36044 11.6375 8.23843 11.6899C8.11643 11.7423 8.00608 11.8185 7.91384 11.914L6.41384 13.414C6.22934 13.6051 6.00865 13.7574 5.76465 13.8622C5.52064 13.9671 5.2582 14.0222 4.99264 14.0245C4.72708 14.0269 4.46372 13.9762 4.21793 13.8757C3.97214 13.7751 3.74883 13.6266 3.56105 13.4388C3.37326 13.251 3.22476 13.0277 3.12419 12.7819C3.02363 12.5362 2.97303 12.2728 2.97534 12.0072C2.97764 11.7417 3.03282 11.4792 3.13763 11.2352C3.24245 10.9912 3.39482 10.7705 3.58584 10.586L6.58584 7.58604Z"
                    fill="currentColor"
                  />
                </svg>
                {isLinkCopied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.cols} ref={ref}>
          <div className={styles.leftCol} onScroll={onScrollLeft}>
            <MDXProvider components={MDXComponents}>
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={classNames(styles.stepContainer, {
                    [styles.stepSelected]: index === stepIndex,
                  })}
                  onClick={onChangeStep.bind(this, index)}
                  onKeyDown={onChangeStep.bind(this, index)}
                  role="tab"
                  tabIndex={index}
                  id={`step-${index}`}
                >
                  <p className={styles.stepHeader}>{step.title}</p>
                  <div className={styles.stepBody}>{step.content}</div>
                </div>
              ))}
            </MDXProvider>
          </div>
          <div className={styles.rightCol}>
            <IntegrationBuilderCodeView
              filenames={integration.filenames}
              fileContents={integration.files}
              highlight={
                steps[stepIndex] &&
                steps[stepIndex].pointer?.filename === selectedFilename &&
                steps[stepIndex].pointer?.range
              }
              selectedFilename={selectedFilename}
              onClickFilename={(filename: string) => setSelectedFilename(filename)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
