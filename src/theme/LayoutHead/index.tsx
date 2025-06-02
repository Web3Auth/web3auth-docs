import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import OriginalLayoutHead from "@theme-original/LayoutHead";
import { ComponentProps } from "react";

export default function LayoutHead(props: ComponentProps<typeof OriginalLayoutHead>) {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const faviconBig = `${baseUrl}images/favicon-32x32.png`;
  const faviconSmall = `${baseUrl}images/favicon-16x16.png`;
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href={faviconBig} />
        <link rel="icon" type="image/png" sizes="16x16" href={faviconSmall} />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <OriginalLayoutHead {...props} />
    </>
  );
}
