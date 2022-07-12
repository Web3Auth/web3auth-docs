import classNames from "classnames";

import styles from "./styles.module.css";
import UsecaseCards from "@theme/UsecaseCards";

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>See how others use us</strong>
      </h2>
      <p>
        Want to experience how production applications use us? Here are a few links to some of our exciting customer implementations to help you
        experience the real-world use-case of Web3Auth.
      </p>
      <p>
        Most users do not want to be bothered with private keys, mnemonics and even seed phrases. Web3Auth abstracts all these complexities behind a
        smooth Web 2.0 experience, allowing users to dive straight into the action.
      </p>
      <UsecaseCards />
    </div>
  );
}
