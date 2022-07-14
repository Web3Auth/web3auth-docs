import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import classNames from "classnames";
import copyToClipboard from "copy-to-clipboard";
import { ChangeEvent, UIEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";

import builder from "./builder";
import IntegrationBuilderCodeView from "../../theme/IntegrationBuilderCodeView";
import styles from "./styles.module.css";

import IntegrationBuilderMetaCard from "@site/static/images/docs-meta-cards/integration-builder-card.png";

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
const getURLFromBuilderOptions = (opts: Record<string, string>): string => {
  const url = new URL(getWindowLocation());
  url.search = "";
  for (const [key, value] of Object.entries(opts)) url.searchParams.append(key, value);
  return url.toString();
};

export default function IntegrationBuilderPage({ files }: { files: Record<string, any> }) {
  const [builderOptions, setBuilderOptions] = useState<Record<string, string>>(getDefaultBuilderOptions());

  const onChangeOptionValue = (optionKey: string, event: ChangeEvent<HTMLInputElement>) => {
    const el = event.target as HTMLInputElement;
    const finalOptionValue = el.checked ? "yes" : "no";

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

  const integration = useMemo(() => builder.build(builderOptions, files), [builderOptions, files]);
  const [selectedFilename, setSelectedFilename] = useState(integration.filenames[0]);

  const [isLinkCopied, setLinkCopied] = useState<number>();

  useEffect(() => {
    // Update selected file when either integration changed
    setSelectedFilename(integration.filenames[0]);

    // Clear copied
    if (isLinkCopied) {
      clearTimeout(isLinkCopied);
      setLinkCopied(undefined);
    }

    // Update query params
    history.pushState({}, "", getURLFromBuilderOptions(builderOptions));
  }, [builderOptions, integration, isLinkCopied]);

  const onClickCopyLink = useCallback(() => {
    if (isLinkCopied) return;
    copyToClipboard(getWindowLocation());

    const timeout = window.setTimeout(() => {
      setLinkCopied(undefined);
    }, 3000);
    setLinkCopied(timeout);
  }, [isLinkCopied]);

  const { steps } = integration;
  const [stepIndex, setStepIndex] = useState(0);

  const onChangeStep = (index: number) => {
    const { pointer } = steps[index];
    if (pointer) setSelectedFilename(pointer.filename);
    setStepIndex(index);
    window.location.hash = `#step-${index}`;
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

  return (
    <Layout title="Integration Builder">
      <head>
        <meta property="og:site_name" content="Web3Auth" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Web3Auth" />
        <meta name="twitter:creator" content="@Web3Auth" />
        <meta property="og:image" content={IntegrationBuilderMetaCard} />
        <meta
          name="description"
          content="Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        />
        <meta property="og:title" content="Web3Auth | Auth infrastructure for Web3.0 wallets and applications" />
        <meta
          property="og:description"
          content="Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        />
        <meta property="og:url" content="https://web3auth.io/docs/integration-builder" />
        <meta
          name="keywords"
          content="web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth, quickstart. quick start, integration builder"
        />
      </head>
      <div className={styles.container}>
        <div className={styles.optionsPane}>
          {Object.entries(builder.options).map(([key, option]) => (
            <div key={key} className={styles.optionContainer}>
              <span>{option.displayName}:</span>
              <div className="dropdown dropdown--hoverable">
                {option.type === "dropdown" && (
                  <span className={`navbar__link ${styles.w3DropdownLink}`} onClick={(e) => e.preventDefault()}>
                    {option.choices.find((x) => x.key === builderOptions[key])?.displayName || ""}
                  </span>
                )}
                {option.type === "toggle" ? (
                  <div>
                    <label className={styles.switch}>
                      <input type="checkbox" checked={builderOptions[key] === "yes"} onChange={(e) => onChangeOptionValue(key, e)} />
                      <span className={styles.slider} />
                    </label>
                  </div>
                ) : (
                  option.choices.length > 1 && (
                    <ul className={`dropdown__menu ${styles.w3DropdownMenu}`}>
                      {option.choices.map(
                        (value) =>
                          value.key !== builderOptions[key] && (
                            <li key={value.key} onClick={(e) => onChangeDropdown(key, value.key)}>
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
              {isLinkCopied ? (
                <>
                  Copied <AiOutlineCheck aria-hidden style={{ marginLeft: "4px" }} />
                </>
              ) : (
                <AiOutlineLink size="1.5em" aria-hidden />
              )}
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
