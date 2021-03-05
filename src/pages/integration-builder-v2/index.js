import React, { useState } from "react";
import Layout from "@theme/Layout";
import Step from "../../components/step";
import CodeView from "../../components/code-view";
import classNames from "classnames";
import styles from "./styles.module.css";

import DirectAuthIntegrationBuilder from "../../libs/integration-builder-v2/direct-auth";
import * as DirectAuthSteps from "../../libs/integration-builder-v2/direct-auth/steps";
import * as DirectAuthFiles from "../../libs/integration-builder-v2/direct-auth/srcfiles";

import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-java");
require("prismjs/components/prism-groovy");

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

function getIntegration(product, options) {
  if (product === "DirectAuth") return DirectAuthIntegrationBuilder(options);
  return {
    steps: [
      {
        pointer: ["App.js", "3"],
        component: <DirectAuthSteps.InstallWebSDK />,
      },
      {
        pointer: ["App.js", "137-141"],
        component: <DirectAuthSteps.InstantiateSDKInstance />,
      },
      {
        pointer: ["sw.js"],
        component: <DirectAuthSteps.ServeServiceWorker />,
      },
      {
        pointer: ["redirect.html"],
        component: <DirectAuthSteps.ServeRedirectPage />,
      },
      {
        pointer: ["App.js", "158-163"],
        component: <DirectAuthSteps.TriggerLogin />,
      },
    ],
    sourceFiles: [
      DirectAuthFiles.AppJS,
      DirectAuthFiles.SwJS,
      DirectAuthFiles.RedirectHTML,
    ],
  };
}

export default function IntegrationBuilderPage() {
  const [selectedProduct, setSelectedProduct] = useState({
    index: 0,
    step: -1,
    options: getDefaultOptions(products[0]),
  });

  const integration = getIntegration(
    products[selectedProduct.index].name,
    selectedProduct.options
  );

  const [selectedTab, setSelectedTab] = useState(0);
  const [hightlightRange, setHightlightRange] = useState();
  const selectedSourceFile = integration.sourceFiles[selectedTab];

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

    const stepIntegration = integration.steps[step];
    const tab = integration.sourceFiles.findIndex(
      (it) => it.name === stepIntegration.pointer[0]
    );
    setSelectedTab(tab);
    setHightlightRange(stepIntegration.pointer[1]);
  };

  const onClickTab = (index) => {
    setHightlightRange();
    setSelectedTab(index);
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
                  {step.component}
                </Step>
              ))}
            </div>
          </div>
          <div className={styles.rightCol}>
            <div>
              <ul
                role="tablist"
                aria-orientation="horizontal"
                className="tabs code-view-tabs"
              >
                {integration.sourceFiles.map((it, index) => (
                  <li
                    key={it.name}
                    role="tab"
                    className={classNames("tabs__item", {
                      "tabs__item--active": selectedTab === index,
                    })}
                    onClick={onClickTab.bind(this, index)}
                  >
                    {it.name}
                  </li>
                ))}
              </ul>
              <div>
                <CodeView
                  code={selectedSourceFile.code}
                  language={selectedSourceFile.language}
                  hightlight={hightlightRange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
