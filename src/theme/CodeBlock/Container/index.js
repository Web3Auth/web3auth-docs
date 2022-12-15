/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { ThemeClassNames, usePrismTheme } from "@docusaurus/theme-common";
import { getPrismCssVariables } from "@docusaurus/theme-common/internal";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function CodeBlockContainer({ as: As, ...props }) {
  const prismTheme = usePrismTheme();
  const prismCssVariables = getPrismCssVariables(prismTheme);
  return (
    <As
      // Polymorphic components are hard to type, without `oneOf` generics
      {...props}
      style={prismCssVariables}
      className={clsx(props.className, styles.codeBlockContainer, ThemeClassNames.common.codeBlock)}
    />
  );
}
