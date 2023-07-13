/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import classNames from "classnames";
import copyToClipboard from "copy-to-clipboard";
import { ChangeEvent, UIEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";

import SEO from "../../components/SEO";
import IntegrationBuilderCodeView from "../../theme/IntegrationBuilderCodeView";
import builder from "./builder";
import { NO, YES } from "./builder/choices";
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

  const onChangeOptionValue = (optionKey: string, event: ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    const finalOptionValue = el.checked ? YES : NO;

    setBuilderOptions({
      ...builderOptions,
      [optionKey]: finalOptionValue,
    });
  };

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
          const option = Object.fromEntries(Object.entries(builder.options).map(([key, option]) => [key, option.default]));
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
          {Object.entries(builder.options).map(([key, option]) => (
            <div key={key} className={styles.optionContainer}>
              <span>{option.displayName}:</span>
              <div className="dropdown dropdown--hoverable">
                {option.type === "dropdown" && (
                  <span className={`${styles.w3DropdownLink}`} onClick={(e) => e.preventDefault()}>
                    {option.choices.find((x) => x.key === builderOptions[key])?.displayName || ""}
                  </span>
                )}
                {option.type === "toggle" ? (
                  <div>
                    <label className={styles.switch}>
                      <input type="checkbox" checked={builderOptions[key] === YES} onChange={(e) => onChangeOptionValue(key, e)} />
                      <span className={styles.slider} />
                    </label>
                  </div>
                ) : (
                  option.choices.length > 1 && (
                    <ul className={`dropdown__menu ${styles.w3DropdownMenu}`}>
                      {option.choices.map(
                        (value) =>
                          value.key !== builderOptions[key] && (
                            <li key={value.key} onClick={() => onChangeDropdown(key, value.key)}>
                              {value.displayName}
                            </li>
                          )
                      )}
                    </ul>
                  )
                )}
              </div>
            </div>
          ))}

          <div className={styles.copyContainer}>
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
          </div>
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
