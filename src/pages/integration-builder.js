import React, { useState } from "react";
import Layout from "@theme/Layout";
import classNames from "classnames";
import styles from "./integration-builder.module.css";
import buildExample from "../libs/example-builder";

const products = {
  directAuth: {
    displayName: "DirectAuth",
    options: {
      blockchain: {
        displayName: "Blockchain",
        choices: ["Ethereum", "Conflux"],
        defaultChoice: "Ethereum",
      },
      framework: {
        displayName: "Language/Framework",
        choices: ["React", "Vue", "iOS", "Android"],
        defaultChoice: "Vue",
      },
    },
  },
  torusWallet: {
    displayName: "Torus Wallet",
    options: {
      blockchain: {
        displayName: "Blockchain",
        choices: ["Ethereum", "Solana"],
        defaultChoice: "Ethereum",
      },
      framework: {
        displayName: "Language/Framework",
        choices: ["React", "Vue", "Angular"],
        defaultChoice: "React",
      },
    },
  },
};

function getDefaultParams(product) {
  return Object.fromEntries(
    Object.entries(product.options).map(([key, value]) => [
      key,
      value.defaultChoice,
    ])
  );
}

export default function IntegrationBuilderPage() {
  const [selection, setSelection] = useState({
    product: products.directAuth,
    params: getDefaultParams(products.directAuth),
  });

  const selectProduct = (key) => {
    const product = products[key];
    setSelection({ product, params: getDefaultParams(product) });
  };

  const setParam = (key, value) => {
    setSelection((selection) => ({
      ...selection,
      params: {
        ...selection.params,
        [key]: value,
      },
    }));
  };

  return (
    <Layout title="Hello">
      <div className={styles.container}>
        {/* List of options */}
        <div className={styles.header}>
          {Object.entries(selection.product.options).map(([key, param]) => (
            <div className={styles.optionContainer} key={key}>
              <span className={styles.optionLabel}>{param.displayName}:</span>
              <ul className="pills">
                {param.choices.map((opt) => (
                  <li
                    key={opt}
                    className={classNames("pills__item", {
                      "pills__item--active": opt === selection.params[key],
                    })}
                    onClick={() => setParam(key, opt)}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <div className={styles.contentContainer}>
            <h1>{selection.product.displayName}</h1>
            <div>
              {/* List of products */}
              <ul className="pills">
                {Object.entries(products).map(([key, product]) => (
                  <li
                    key={key}
                    className={classNames("pills__item", {
                      "pills__item--active": product === selection.product,
                    })}
                    onClick={() => selectProduct(key)}
                  >
                    {product.displayName}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.stepsContainer}>
              {buildExample(selection)}
            </div>
          </div>
          <div className={styles.srcFilesContainer}>Source files</div>
        </div>
      </div>
    </Layout>
  );
}
