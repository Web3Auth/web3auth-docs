import { useColorMode } from "@docusaurus/theme-common";

import FooterLight from "./footer-light";
import FooterDark from "./footer-dark";

export default function FooterComponent() {
  if (window.location.pathname.startsWith("/docs/integration-builder")) return null;
  const { isDarkTheme } = useColorMode();

  if (isDarkTheme) {
    return <FooterDark />;
  }
  return <FooterLight />;
}
