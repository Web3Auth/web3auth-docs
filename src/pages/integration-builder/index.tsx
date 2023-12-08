/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import classNames from "classnames";
import copyToClipboard from "copy-to-clipboard";
import { UIEvent, useCallback, useEffect, useMemo, useState } from "react";

import SEO from "../../components/SEO";
import IntegrationBuilderCodeView from "../../theme/IntegrationBuilderCodeView";
import builder from "./builder";
import { CORE_KIT, PNP } from "./builder/choices";
import styles from "./styles.module.css";

const getWindowLocation = () => {
  if (typeof window !== "undefined") return window.location.href;
  return "http://localhost";
};

const getDefaultBuilderOptions = () => {
  const defaultOpts = Object.fromEntries(Object.entries(builder.options).map(([key, option]) => [key, option.default]));
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
  const [builderOptions, setBuilderOptions] = useState<Record<string, string>>(getDefaultBuilderOptions());
  const [isLinkCopied, setLinkCopied] = useState<number>();

  const url = new URL(getWindowLocation());
  const [stepIndex, setStepIndex] = useState(parseInt(url.searchParams.get("stepIndex") || "0", 10));

  const integration = useMemo(() => builder.build(builderOptions, files, stepIndex), [builderOptions, files, stepIndex]);
  const [selectedFilename, setSelectedFilename] = useState(integration.filenames[0]);

  const onClickCopyLink = useCallback(() => {
    if (isLinkCopied) return;
    copyToClipboard(getWindowLocation());

    const timeout = window.setTimeout(() => {
      setLinkCopied(undefined);
    }, 3000);
    setLinkCopied(timeout);
  }, [isLinkCopied]);

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
        if (dis >= 200 && dis <= 300) {
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

  useEffect(() => {
    setStepIndex(integration.stepIndex);
    // Update selected file when either integration changed
    setSelectedFilename(integration.steps[integration.stepIndex].pointer.filename);

    // Clear copied
    if (isLinkCopied) {
      clearTimeout(isLinkCopied);
      setLinkCopied(undefined);
    }

    for (const optionKey in builderOptions) {
      if (builder.options[optionKey]) {
        const check = builder.options[optionKey].choices.flatMap((choice) => choice.key);
        if (!check.includes(builderOptions[optionKey])) {
          const option = Object.fromEntries(Object.entries(builder.options).map(([key, optioning]) => [key, optioning.default]));
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

  const optionRender = (key, option) => {
    switch (option.type) {
      case "dropdown":
        return (
          <div key={key} className={styles.list}>
            <h3>{option.displayName}</h3>
            <select value={builderOptions[key]} onChange={(event) => onChangeDropdown(key, event.target.value)}>
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
          <div className={styles.productSelection}>
            <h3>{option.displayName}</h3>
            <div className={styles.cardContainer}>
              {option.choices.map((value) => (
                <>
                  {value.key === PNP && (
                    <div className={builderOptions[key] === PNP ? styles.selectedCard : styles.card} onClick={() => onChangeDropdown(key, value.key)}>
                      <div>
                        <div className={styles.cardIconContainer}>
                          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
                            <path
                              d="M10 3.5C10 3.10218 10.158 2.72064 10.4393 2.43934C10.7206 2.15804 11.1022 2 11.5 2C11.8978 2 12.2794 2.15804 12.5607 2.43934C12.842 2.72064 13 3.10218 13 3.5V4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5H17C17.2652 5 17.5196 5.10536 17.7071 5.29289C17.8946 5.48043 18 5.73478 18 6V9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10H16.5C16.1022 10 15.7206 10.158 15.4393 10.4393C15.158 10.7206 15 11.1022 15 11.5C15 11.8978 15.158 12.2794 15.4393 12.5607C15.7206 12.842 16.1022 13 16.5 13H17C17.2652 13 17.5196 13.1054 17.7071 13.2929C17.8946 13.4804 18 13.7348 18 14V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H14C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17V16.5C13 16.1022 12.842 15.7206 12.5607 15.4393C12.2794 15.158 11.8978 15 11.5 15C11.1022 15 10.7206 15.158 10.4393 15.4393C10.158 15.7206 10 16.1022 10 16.5V17C10 17.2652 9.89464 17.5196 9.70711 17.7071C9.51957 17.8946 9.26522 18 9 18H6C5.73478 18 5.48043 17.8946 5.29289 17.7071C5.10536 17.5196 5 17.2652 5 17V14C5 13.7348 4.89464 13.4804 4.70711 13.2929C4.51957 13.1054 4.26522 13 4 13H3.5C3.10218 13 2.72064 12.842 2.43934 12.5607C2.15804 12.2794 2 11.8978 2 11.5C2 11.1022 2.15804 10.7206 2.43934 10.4393C2.72064 10.158 3.10218 10 3.5 10H4C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H9C9.26522 5 9.51957 4.89464 9.70711 4.70711C9.89464 4.51957 10 4.26522 10 4V3.5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <h5 className={styles.title}>{value.displayName}</h5>
                      </div>
                      <p>Use pre configured UX flows and integrate your Web3Auth instance quickly.</p>
                    </div>
                  )}
                  {value.key === CORE_KIT && (
                    <div
                      className={builderOptions[key] === CORE_KIT ? styles.selectedCard : styles.card}
                      onClick={() => onChangeDropdown(key, value.key)}
                    >
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
                            <path
                              d="M17 5C17 6.657 13.866 8 10 8C6.134 8 3 6.657 3 5C3 3.343 6.134 2 10 2C13.866 2 17 3.343 17 5Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <h5 className={styles.title}>{value.displayName}</h5>
                      </div>
                      <p>Build on top of the Web3Auth infrastructural layer and build your own UX flows.</p>
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

  return (
    <Layout
      title="Integration Builder"
      description="Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
    >
      <SEO
        title="Integration Builder"
        description="Web3Auth Integration Builder for easy quick start. Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image="https://web3auth.io/docs/images/docs-meta-cards/integration-builder-card.png"
        url="https://web3auth.io/docs/integration-builder"
      />
      <div className={styles.container}>
        <div className={styles.optionsPane}>
          {Object.entries(builder.options).map(([key, option]) => optionRender(key, option))}

          {/* <div className={styles.copyContainer}>
            <button
              title="Copy link to example"
              aria-label="Copy link to example"
              className={classNames(styles.copyButton, {
                [styles.copied]: isLinkCopied,
              })}
              onClick={onClickCopyLink}
              type="button"
            >
              {isLinkCopied ? <AiOutlineCheck size="1.5em" aria-hidden /> : <AiOutlineLink size="1.5em" aria-hidden />}
            </button>
          </div> */}
        </div>
        <div className={styles.cols}>
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
              highlight={steps[stepIndex] && steps[stepIndex].pointer?.filename === selectedFilename && steps[stepIndex].pointer?.range}
              selectedFilename={selectedFilename}
              onClickFilename={(filename: string) => setSelectedFilename(filename)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
