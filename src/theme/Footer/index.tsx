import { useColorMode } from "@docusaurus/theme-common";
import { useEffect, useState } from "react";

import FooterDark from "./footer-dark";
import FooterLight from "./footer-light";

export default function FooterComponent(): JSX.Element {
  const { colorMode } = useColorMode();
  const [canShowFooter, setCanShowFooter] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if footer can be shown
      const path = window.location.pathname;
      if (path.includes("integration-builder")) {
        setCanShowFooter(false);
      }
    }
  }, []);

  if (!canShowFooter) return null;
  if (colorMode === "dark") return <FooterDark />;
  return <FooterLight />;
}
