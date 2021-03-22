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
      image: string;
      order: number;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  const sortedGuides = Object.entries(guides).sort(
    ([, a], [, b]) => a.order - b.order
  );
  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length} posts</p>
        <hr />
      </header>
      <div className={classNames("container", styles.container)}>
        <div className="row">
          {sortedGuides.map(([key, guide]) => (
            <Link
              key={key}
              className={classNames("col col--4", styles.article)}
              to={`/guides/${key}`}
            >
              <img src={guide.image} alt="Banner" />
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
