import React, { MouseEvent, useEffect, useState } from "react";
import Layout from "@theme/Layout";
import IntegrationBuilderCodeView from "@theme/IntegrationBuilderCodeView";
import classNames from "classnames";
import rangeParser from "parse-numeric-range";
import builders from "../../lib/integration-builder";
import styles from "./styles.module.css";

export default function IntegrationBuilderPage({ files }) {
  const [builderIndex, setBuilderIndex] = useState(0);
  const builder = builders[builderIndex];

  const [optionValues, setOptionValues] = useState<Record<string, string>>(
    Object.fromEntries(
      Object.entries(builder.options).map(([key, option]) => [
        key,
        option.default,
      ])
    )
  );

  const onChangeOptionValue = (
    optionKey: string,
    optionValue: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    const availableValues = builder.getAvailableOptions(optionKey, optionValue);

    setOptionValues((currValues) => {
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
        ...availableValues[maxScoreIndex],
        [optionKey]: optionValue,
      };
    });
  };

  const integration = builder.build(optionValues);
  const [selectedFilename, setSelectedFilename] = useState(
    integration.filenames[0]
  );

  useEffect(() => {
    // Update selected fil when either builder or option values changed
    setSelectedFilename(integration.filenames[0]);
  }, [builder, optionValues]);

  const steps = [
    {
      title: "Install Torus Embed SDK",
      content: (
        <>
          <p>
            Install Torus Embed SDK using <code>npm</code> or <code>yarn</code>:
          </p>
          <pre>
            <code>npm i --save @toruslabs/torus-embed</code>
          </pre>
        </>
      ),
      file: "torus-wallet/react/App.js",
      range: "2",
    },
    {
      title: "Instantiate the SDK",
      content: (
        <>
          <p>
            Instantiate Torus Embed SDK by creating a instance of{" "}
            <code>Torus</code>:
          </p>
          <pre>
            <code>
              {`
import Torus from "@toruslabs/torus-embed";

const torus = new Torus();
await torus.init();`.trim()}
            </code>
          </pre>
        </>
      ),
      file: "torus-wallet/react/App.js",
      range: "13-16",
    },
    {
      title: "Trigger user login",
      content: (
        <>
          <p>
            Trigger user login wherever it makes sense on your application
            lifecycle:
          </p>
          <pre>
            <code>{`await torus.login();`}</code>
          </pre>
        </>
      ),
      file: "torus-wallet/react/App.js",
      range: "17",
    },
    {
      title: "Integrate with Web3/ether.js",
      content: (
        <>
          <p>
            Integrating with the Torus Wallet gives you a provider, which can be
            wrapped by the Web3. This instance functions similar to that as
            Metamask's Web3 provider. We have taken great care to make it
            compatible with Metamask's Web3 interface.
          </p>
          <pre>
            <code>
              {`
import Web3 from "web3";
const web3 = new Web3(torus.provider);`.trim()}
            </code>
          </pre>
        </>
      ),
      file: "torus-wallet/react/App.js",
      range: "19-22",
    },
  ];

  const [stepIndex, setStepIndex] = useState(0);

  const onChangeStep = (index: number) => {
    const range = rangeParser(steps[index].range);
    if (range.length) {
      const ref = document.getElementById(
        `integration-builder-docusaurus-code-line-no-${range[0]}`
      );
      ref &&
        ref.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "start",
        });
    }

    setStepIndex(index);
    setSelectedFilename(steps[index].file);
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
                  {optionValues[key]}
                </a>
                {option.choices.length > 1 && (
                  <ul className="dropdown__menu">
                    {option.choices.map(
                      (value) =>
                        value !== optionValues[key] && (
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
                      "pills__item--active": builderIndex === index,
                    })}
                    onClick={setBuilderIndex.bind(this, index)}
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
              highlight={steps[stepIndex] && steps[stepIndex].range}
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
