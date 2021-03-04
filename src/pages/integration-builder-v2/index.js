import React, { useState } from "react";
import Layout from "@theme/Layout";
import classNames from "classnames";
import styles from "./styles.module.css";

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

export default function IntegrationBuilderPage() {
  const [selectedProduct, setSelectedProduct] = useState({
    index: 0,
    options: getDefaultOptions(products[0]),
  });

  const onClickProduct = (index) => {
    if (index === selectedProduct.index) return;
    setSelectedProduct({
      index,
      options: getDefaultOptions(products[index]),
    });
  };

  const onChooseOption = (option, choice) => {
    if (selectedProduct.options[option] === choice) return;
    setSelectedProduct({
      ...selectedProduct,
      options: {
        ...selectedProduct.options,
        [option]: choice,
      },
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
                    className={classNames("pills__item", {
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
            <div className={styles.stepsContainer}></div>
          </div>
          <div className={styles.rightCol}></div>
        </div>
      </div>
    </Layout>
  );
}
