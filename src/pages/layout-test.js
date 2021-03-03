import React from "react";
import Layout from "@theme/Layout";
import styles from "./layout-test.module.css";

export default function LayoutTestPage() {
  return (
    <Layout title="Layout Test">
      <div>
        <div className={styles.header}>.header</div>
        <div className={styles.body}>
          <div className={styles.guide}>
            .guide
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              cursus libero, sit amet faucibus nisi. Duis faucibus eros id nulla
              mollis rutrum. Mauris varius molestie odio non accumsan.
            </p>
            <div style={{ height: "2000px" }}></div>
          </div>
          <div className={styles.source}>
            .source
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              cursus libero, sit amet faucibus nisi. Duis faucibus eros id nulla
              mollis rutrum. Mauris varius molestie odio non accumsan.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
