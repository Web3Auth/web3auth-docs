import type { WrapperProps } from "@docusaurus/types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { type MarkpromptConfig } from "@markprompt/docusaurus-theme-search";
import type SearchBarType from "@theme/SearchBar";
import SearchBar from "@theme-original/SearchBar";
import { lazy, Suspense } from "react";

// import Markprompt lazily as Docusaurus does not currently support ESM
const Markprompt = lazy(() =>
  import("@markprompt/react").then((mod) => ({ default: mod.Markprompt })),
);

import "@markprompt/css";

type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const { projectKey, ...config } = siteConfig.themeConfig.markprompt as MarkpromptConfig;

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      {/* Docusaurus' version of `ReactDOMServer` doesn't support Suspense yet, so we can only render the component on the client. */}
      {typeof window !== "undefined" && (
        <Suspense fallback={null}>
          <Markprompt projectKey={projectKey} {...config} />
        </Suspense>
      )}
      <SearchBar {...props} />
    </div>
  );
}
