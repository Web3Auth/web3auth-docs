import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classNames from "classnames";
import styles from "./styles.module.css";

interface Props {
  guides: Record<
    string,
    {
      title: string;
      description: string;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length} posts</p>
      </header>
      <div className={classNames("container", styles.container)}>
        <div className="row">
          {Object.keys(guides).map((key) => (
            <Link
              key={key}
              className={classNames("col col--4", styles.article)}
              to={`/guides/${key}`}
            >
              <h3>{guides[key].title}</h3>
              <p>{guides[key].description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
