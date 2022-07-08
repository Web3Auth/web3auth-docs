import classNames from "classnames";

import styles from "./styles.module.css";
import UsecaseCards from "@theme/UsecaseCards";

export default function QuickNavigation() {
  return (
    <div>
      <h2>
        <strong>See how others use us</strong>
      </h2>
      <p>
        Want to experience how our production applications use us? Here are a few links to some of our interesting customer implemetations to help you
        experience the real world applications of Web3Auth.
      </p>
      <p>
        Most users do not want to be bothered with private keys and mnemonics. Web3Auth abstracts all these complexity behind a smooth Web 2.0
        experience, allowing users to dive straight into the action.
      </p>
      <UsecaseCards />
    </div>
  );
}
