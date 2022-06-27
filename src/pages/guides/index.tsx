import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

interface Props {
  guides: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      type: string;
      tags: string[];
      date: string;
      author: string;
      order: number;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  const sortedGuides = Object.entries(guides).sort(([, a], [, b]) => a.order - b.order);
  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length} posts</p>
        <hr />
      </header>
      <div className={styles.container}>
        {sortedGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <span className={styles.type}>{guide.type}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              {guide.tags.map((item, index) => {
                if (index === guide.tags.length - 1) {
                  return (
                    <span>
                      <code className={styles.tag}>{item}</code>
                      <br />
                    </span>
                  );
                }
                return <code className={styles.tag}>{item}</code>;
              })}
              <span className={styles.date}>
                {guide.author} | {guide.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
