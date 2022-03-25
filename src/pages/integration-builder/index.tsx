import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import classNames from "classnames";
import copyToClipboard from "copy-to-clipboard";
import { MouseEvent, UIEvent, useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";

import builders from "../../lib/integration-builder";
import IntegrationBuilderCodeView from "../../theme/IntegrationBuilderCodeView";
import styles from "./styles.module.css";

const defaultBuilderId = "wallet";

const getDefaultBuilderOptions = (id: string) =>
  Object.fromEntries(Object.entries(builders[id].options).map(([key, option]) => [key, option.default]));

const getWindowLocation = () => {
  if (typeof window !== "undefined") return window.location.href;
  return "http://localhost";
};

interface BuilderOptions {
  id: string;
  values: Record<string, string>;
}

const getInitialBuilderOptions = (): BuilderOptions => {
  const url = new URL(getWindowLocation());

  // Get builder id from URL
  const id = url.searchParams.get("b");
  if (!builders[id])
    return {
      id: defaultBuilderId,
      values: getDefaultBuilderOptions(defaultBuilderId),
    };

  // Read all applicable query options
  const queriedOptions: Record<string, string> = {};
  for (const opt of Object.keys(builders[id].options)) {
    const value = url.searchParams.get(opt);
    if (value) queriedOptions[opt] = value;
  }

  // Return default if no additional query is specified
  const queriedKeys = Object.keys(queriedOptions);
  if (queriedKeys.length === 0)
    return {
      id,
      values: getDefaultBuilderOptions(id),
    };

  // Find best matched options
  const queriedKey = queriedKeys[0];
  const availableValues = builders[id].getAvailableOptions(queriedKey, queriedOptions[queriedKey]);

  let maxScore = 0;
  let maxScoreIndex = 0;
  for (let i = 0; i < availableValues.length; i += 1) {
    let score = 0;
    for (const comparingKey of Object.keys(availableValues[i])) {
      if (queriedOptions[comparingKey] === availableValues[i][comparingKey]) score += 1;
    }
    if (score > maxScore) {
      maxScore = score;
      maxScoreIndex = i;
    }
  }

  return {
    id,
    values: {
      [queriedKey]: queriedOptions[queriedKey],
      ...availableValues[maxScoreIndex],
    },
  };
};

const getURLFromBuilderOptions = (opts: BuilderOptions): string => {
  const url = new URL(getWindowLocation());
  url.search = "";

  url.searchParams.append("b", opts.id);
  for (const [key, value] of Object.entries(opts.values)) url.searchParams.append(key, value);

  return url.toString();
};

export default function IntegrationBuilderPage({ files }: { files: Record<string, any> }) {
  const [builderOptions, setBuilderOptions] = useState<{
    id: string;
    values: Record<string, string>;
  }>({ id: "wallet", values: getDefaultBuilderOptions("wallet") });

  useEffect(() => {
    // Load initial builder options on mount and re-render.
    setBuilderOptions(getInitialBuilderOptions());
  }, []);

  const onChangeBuilder = (id: string) => {
    setBuilderOptions({
      id,
      values: getDefaultBuilderOptions(id),
    });
  };

  const onChangeOptionValue = (optionKey: string, optionValue: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    setBuilderOptions(({ id, values: currValues }) => {
      // Find best matched options
      const availableValues = builders[id].getAvailableOptions(optionKey, optionValue);

      let maxScore = 0;
      let maxScoreIndex = 0;
      for (let i = 0; i < availableValues.length; i += 1) {
        let score = 0;
        for (const comparingKey of Object.keys(availableValues[i])) {
          if (currValues[comparingKey] === availableValues[i][comparingKey]) score += 1;
        }
        if (score > maxScore) {
          maxScore = score;
          maxScoreIndex = i;
        }
      }

      return {
        id,
        values: {
          ...availableValues[maxScoreIndex],
          [optionKey]: optionValue,
        },
      };
    });
  };

  const builder = builders[builderOptions.id];

  const integration = useMemo(() => builder.build(builderOptions.values), [builderOptions]);
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
  }, [integration]);

  const onClickCopyLink = useCallback(() => {
    if (isLinkCopied) return;
    copyToClipboard(getWindowLocation());

    const timeout = window.setTimeout(() => {
      setLinkCopied(undefined);
    }, 3000);
    setLinkCopied(timeout);
  }, [integration, isLinkCopied]);

  const { steps } = integration;
  const [stepIndex, setStepIndex] = useState(0);

  const onChangeStep = (index: number) => {
    const { pointer } = steps[index];
    if (pointer) setSelectedFilename(pointer.filename);
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

  return (
    <Layout title="Integration Builder">
      <div className={styles.container}>
        <div className={styles.optionsPane}>
          {Object.entries(builder.options).map(([key, option]) => (
            <div key={key} className={styles.optionContainer}>
              <span>{option.displayName}:</span>
              <div className="dropdown dropdown--hoverable">
                <a className="navbar__link" href="#" onClick={(e) => e.preventDefault()}>
                  {builderOptions.values[key]}
                </a>
                {option.choices.length > 1 && (
                  <ul className="dropdown__menu">
                    {option.choices.map(
                      (value) =>
                        value !== builderOptions.values[key] && (
                          <li key={value}>
                            <a className="dropdown__link" href="#" onClick={onChangeOptionValue.bind(this, key, value)}>
                              {value}
                            </a>
                          </li>
                        )
                    )}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cols}>
          <div className={styles.leftCol} onScroll={onScrollLeft}>
            <header className={styles.heading}>
              <div>
                <h1>{builder.displayName}</h1>
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
              <ul className="pills">
                {Object.entries(builders).map(([id, builderx]) => (
                  <li
                    key={id}
                    className={classNames("pills__item", {
                      "pills__item--active": builderOptions.id === id,
                    })}
                    onClick={onChangeBuilder.bind(this, id)}
                    onKeyDown={onChangeBuilder.bind(this, id)}
                    role="menuitem"
                  >
                    {builderx.displayName}
                  </li>
                ))}
              </ul>
            </header>
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
                >
                  <p className={styles.stepHeader}>{step.title}</p>
                  <div className={styles.stepBody}>{step.content}</div>
                </div>
              ))}
            </MDXProvider>
            <div style={{ height: "200px" }}>{/* Dummy element to allow the last step visible in the scroll */}</div>
          </div>
          <div className={styles.rightCol}>
            <IntegrationBuilderCodeView
              filenames={integration.filenames}
              fileContents={files}
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
