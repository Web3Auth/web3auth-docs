import React from "react";
import Layout from "@theme/Layout";

interface Props {
  guides: Record<
    string,
    {
      title: string;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  return (
    <Layout title="Guides">
      <div>Guides</div>
      <div>{JSON.stringify(guides, null, 2)}</div>
    </Layout>
  );
}
