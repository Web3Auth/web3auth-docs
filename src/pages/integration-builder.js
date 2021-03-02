import React from "react";
import Layout from "@theme/Layout";

/**
 * TODO:
 *
 * - [ ] Top level options
 * - [ ] Product options
 * - [ ] Content part
 * - [ ] Code block
 */

export default function IntegrationBuilderPage() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <div className="templates-group">
          <span>Language/Framework:</span>
          <ul>
            <li>Web</li>
            <li>iOS</li>
            <li>Android</li>
          </ul>
        </div>
        <div className="products-group">
          <ul>
            <li>DirectAuth</li>
            <li>Torus Wallet</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
