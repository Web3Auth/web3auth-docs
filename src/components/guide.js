import React from "react";

const Guide = ({ title }) => (
  <div class="card">
    <div class="card__header">
      <h3>{title}</h3>
    </div>
    <div class="card__body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
    <div class="card__footer">
      <button class="button button--secondary button--block">Get started</button>
    </div>
  </div>
);

export default Guide;
