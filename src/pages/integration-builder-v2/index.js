import React, { useState } from "react";
import Layout from "@theme/Layout";
import Step from "../../components/step";
import CodeView from "../../components/code-view";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import classNames from "classnames";
import styles from "./styles.module.css";

import * as DirectAuthContents from "../../libs/integration-builder-v2/direct-auth";

const products = [
  {
    name: "DirectAuth",
    options: {
      blockchain: {
        displayName: "Blockchain",
        choices: ["Ethereum", "Conflux"],
        defaultChoice: "Ethereum",
      },
      framework: {
        displayName: "Language/Framework",
        choices: ["React", "Vue", "iOS", "Android"],
        defaultChoice: "React",
      },
    },
  },
  {
    name: "Torus Wallet",
    options: {
      blockchain: {
        displayName: "Blockchain",
        choices: ["Ethereum", "Solana"],
        defaultChoice: "Ethereum",
      },
      framework: {
        displayName: "Language/Framework",
        choices: ["React", "Vue", "Angular"],
        defaultChoice: "Vue",
      },
    },
  },
];

function getDefaultOptions(product) {
  return Object.fromEntries(
    Object.entries(product.options).map(([key, value]) => [
      key,
      value.defaultChoice,
    ])
  );
}

function getIntegrationData() {
  return {
    steps: [
      <DirectAuthContents.InstallWebSDK />,
      <DirectAuthContents.InstantiateSDKInstance />,
      <DirectAuthContents.ServeServiceWorker />,
      <DirectAuthContents.ServeRedirectPage />,
      <DirectAuthContents.TriggerLogin />,
    ],
  };
}

export default function IntegrationBuilderPage() {
  const [selectedProduct, setSelectedProduct] = useState({
    index: 0,
    step: -1,
    options: getDefaultOptions(products[0]),
  });

  const integration = getIntegrationData();

  const onClickProduct = (index) => {
    if (index === selectedProduct.index) return;
    setSelectedProduct({
      index,
      step: -1,
      options: getDefaultOptions(products[index]),
    });
  };

  const onChooseOption = (option, choice) => {
    if (selectedProduct.options[option] === choice) return;
    setSelectedProduct({
      ...selectedProduct,
      step: -1,
      options: {
        ...selectedProduct.options,
        [option]: choice,
      },
    });
  };

  const onClickStep = (step) => {
    if (selectedProduct.step === step) return;
    setSelectedProduct({
      ...selectedProduct,
      step,
    });
  };

  return (
    <Layout title="Integration Builder">
      <div className={styles.header}>
        {/* List of options */}
        {Object.entries(products[selectedProduct.index].options).map(
          ([key, option]) => (
            <div key={key} className={styles.optionContainer}>
              <span className={styles.optionLabel}>{option.displayName}:</span>
              <ul className="pills">
                {option.choices.map((choice) => (
                  <li
                    key={choice}
                    className={classNames("pills__item", styles.optionChoice, {
                      "pills__item--active":
                        selectedProduct.options[key] === choice,
                    })}
                    onClick={onChooseOption.bind(this, key, choice)}
                  >
                    {choice}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.leftCol}>
            <div className={styles.leftHeading}>
              <h1>{products[selectedProduct.index].name}</h1>
              {/* List of products */}
              <ul className="pills">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className={classNames("pills__item", {
                      "pills__item--active": selectedProduct.index === index,
                    })}
                    onClick={onClickProduct.bind(this, index)}
                  >
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {integration.steps.map((step, index) => (
                <Step
                  key={index}
                  isSelected={index === selectedProduct.step}
                  onClick={onClickStep.bind(this, index)}
                >
                  {step}
                </Step>
              ))}
            </div>
          </div>
          <div className={styles.rightCol}>
            <div>
              <Tabs
                className="code-view-tabs"
                defaultValue="apple"
                values={[
                  { label: "App.js", value: "App.js" },
                  { label: "redirect.html", value: "redirect.html" },
                  { label: "sw.js", value: "sw.js" },
                ]}
              >
                <TabItem value="App.js">
                  <CodeView
                    code={DirectAuthContents.AppJS.code}
                    language={DirectAuthContents.AppJS.language}
                  />
                </TabItem>
                <TabItem value="redirect.html">This is an orange 🍊</TabItem>
                <TabItem value="sw.js">This is a banana 🍌</TabItem>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
