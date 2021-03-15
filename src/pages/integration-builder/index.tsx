import React, { MouseEvent, useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import IntegrationBuilderCodeView from "@theme/IntegrationBuilderCodeView";
import classNames from "classnames";
import rangeParser from "parse-numeric-range";
import builders from "../../lib/integration-builder";
import styles from "./styles.module.css";

const getDefaultBuilderOptions = (index: number) =>
  Object.fromEntries(
    Object.entries(builders[index].options).map(([key, option]) => [
      key,
      option.default,
    ])
  );

export default function IntegrationBuilderPage({ files }) {
  const [builderOptions, setBuilderOptions] = useState<{
    index: number;
    values: Record<string, string>;
  }>({
    index: 0,
    values: getDefaultBuilderOptions(0),
  });

  const onChangeBuilder = (index: number) => {
    setBuilderOptions({
      index,
      values: getDefaultBuilderOptions(index),
    });
  };

  const onChangeOptionValue = (
    optionKey: string,
    optionValue: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setBuilderOptions(({ index, values: currValues }) => {
      const availableValues = builders[index].getAvailableOptions(
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
        index,
        values: {
          ...availableValues[maxScoreIndex],
          [optionKey]: optionValue,
        },
      };
    });
  };

  const builder = builders[builderOptions.index];

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
                {builders.map((builder, index) => (
                  <li
                    key={index}
                    className={classNames("pills__item", {
                      "pills__item--active": builderOptions.index === index,
                    })}
                    onClick={onChangeBuilder.bind(this, index)}
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
