import React from "react";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

const Guide = ({ title, description, to }) => (
  <div className={classNames("card", styles.card)}>
    <div className="card__header">
      <h3>{title}</h3>
    </div>
    <div className="card__body">
      <p>{description}</p>
    </div>
    <div className="card__footer">
      <Link className="button button--secondary button--block" to={to}>
        Get started
      </Link>
    </div>
  </div>
);

export default Guide;
