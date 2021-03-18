import React, { MouseEvent, useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import IntegrationBuilderCodeView from "@theme/IntegrationBuilderCodeView";
import classNames from "classnames";
import rangeParser from "parse-numeric-range";
import builders from "../../lib/integration-builder";
import styles from "./styles.module.css";

const defaultBuilderId = "torus-wallet";

const getDefaultBuilderOptions = (id: string) =>
  Object.fromEntries(
    Object.entries(builders[id].options).map(([key, option]) => [
      key,
      option.default,
    ])
  );

const getInitialBuilderOptions = () => {
  const url = new URL(window.location.href);

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
  const availableValues = builders[id].getAvailableOptions(
    queriedKey,
    queriedOptions[queriedKey]
  );

  let maxScore = 0;
  let maxScoreIndex = 0;
  for (let i = 0; i < availableValues.length; i++) {
    let score = 0;
    for (const comparingKey of Object.keys(availableValues[i])) {
      if (queriedOptions[comparingKey] === availableValues[i][comparingKey])
        score++;
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

export default function IntegrationBuilderPage({ files }) {
  const [builderOptions, setBuilderOptions] = useState<{
    id: string;
    values: Record<string, string>;
  }>(getInitialBuilderOptions());

  const onChangeBuilder = (id: string) => {
    setBuilderOptions({
      id,
      values: getDefaultBuilderOptions(id),
    });
  };

  const onChangeOptionValue = (
    optionKey: string,
    optionValue: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setBuilderOptions(({ id, values: currValues }) => {
      // Find best matched options
      const availableValues = builders[id].getAvailableOptions(
        optionKey,
        optionValue
      );

      let maxScore = 0;
      let maxScoreIndex = 0;
      for (let i = 0; i < availableValues.length; i++) {
        let score = 0;
        for (const comparingKey of Object.keys(availableValues[i])) {
          if (currValues[comparingKey] === availableValues[i][comparingKey])
            score++;
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

  const integration = useMemo(() => builder.build(builderOptions.values), [
    builderOptions,
  ]);
  const [selectedFilename, setSelectedFilename] = useState(
    integration.filenames[0]
  );

  useEffect(() => {
    // Update selected file when either integration changed
    setSelectedFilename(integration.filenames[0]);
  }, [integration]);

  const steps = integration.steps;
  const [stepIndex, setStepIndex] = useState(0);

  const onChangeStep = (index: number) => {
    const pointer = steps[index].pointer;
    if (pointer) {
      setSelectedFilename(pointer.filename);

      const range = rangeParser(pointer.range || "1");
      if (range.length) {
        const ref = document.getElementById(
          `integration-builder-docusaurus-code-line-no-${
            range[Math.floor(range.length / 2)]
          }`
        );
        ref &&
          ref.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "start",
          });
      }
    }

    setStepIndex(index);
  };

  return (
    <Layout title="Integration Builder">
      <div className={styles.container}>
        <div className={styles.optionsPane}>
          {Object.entries(builder.options).map(([key, option]) => (
            <div key={key} className={styles.optionContainer}>
              <span>{option.displayName}:</span>
              <div className="dropdown dropdown--hoverable">
                <a
                  className="navbar__link"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  {builderOptions.values[key]}
                </a>
                {option.choices.length > 1 && (
                  <ul className="dropdown__menu">
                    {option.choices.map(
                      (value) =>
                        value !== builderOptions.values[key] && (
                          <li key={value}>
                            <a
                              className="dropdown__link"
                              href="#"
                              onClick={onChangeOptionValue.bind(
                                this,
                                key,
                                value
                              )}
                            >
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
          <div className={styles.leftCol}>
            <header className={styles.heading}>
              <h1>{builder.displayName}</h1>
              <ul className="pills">
                {Object.entries(builders).map(([id, builder]) => (
                  <li
                    key={id}
                    className={classNames("pills__item", {
                      "pills__item--active": builderOptions.id === id,
                    })}
                    onClick={onChangeBuilder.bind(this, id)}
                  >
                    {builder.displayName}
                  </li>
                ))}
              </ul>
            </header>
            {steps.map((step, index) => (
              <div
                key={index}
                className={classNames(styles.stepContainer, {
                  [styles.stepSelected]: index === stepIndex,
                })}
                onClick={onChangeStep.bind(this, index)}
              >
                <p className={styles.stepHeader}>{step.title}</p>
                <div className={styles.stepBody}>{step.content}</div>
              </div>
            ))}
          </div>
          <div className={styles.rightCol}>
            <IntegrationBuilderCodeView
              filenames={integration.filenames}
              fileContents={files}
              highlight={
                steps[stepIndex] &&
                steps[stepIndex].pointer?.filename === selectedFilename &&
                steps[stepIndex].pointer?.range
              }
              selectedFilename={selectedFilename}
              onClickFilename={(filename: string) =>
                setSelectedFilename(filename)
              }
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
