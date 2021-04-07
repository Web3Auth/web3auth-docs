import React from "react";
import Head from "@docusaurus/Head";
import OriginalLayoutHead from "@theme-original/LayoutHead";

export default function LayoutHead(
  props: React.ComponentProps<typeof OriginalLayoutHead>
) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <OriginalLayoutHead {...props} />
    </>
  );
}
