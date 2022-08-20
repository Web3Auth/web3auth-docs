import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import SEO from "../../components/SEO";
import { integrationBuilderMap, Props, referenceMap } from "./maps";
import styles from "./styles.module.css";

export default function GuidesPage({ guides }: Props) {
  const sortedGuides = Object.entries(guides).sort(([, a], [, b]) => a.order - b.order);

  return (
    <Layout title="Guides">
      <SEO
        title="Guides"
        description="Guides | Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image="https://web3auth.io/docs/images/docs-meta-cards/guides-card.png"
        slug="/guides"
      />

      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length + integrationBuilderMap.length + referenceMap.length} posts</p>
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
              {guide.tags &&
                guide.tags.map((item, index) => {
                  if (index === guide.tags.length - 1) {
                    return (
                      <span key={item}>
                        <code className={styles.tag}>{item}</code>
                        <br />
                      </span>
                    );
                  }
                  return (
                    <code key={item} className={styles.tag}>
                      {item}
                    </code>
                  );
                })}
              <span className={styles.date}>
                {guide.author} | {guide.date}
              </span>
            </div>
          </Link>
        ))}

        {integrationBuilderMap.map((item) => (
          <Link key={item.link} className={styles.article} to={item.link}>
            <img src={item.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <span className={styles.type}>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.tags &&
                item.tags.map((tag, index) => {
                  if (index === item.tags.length - 1) {
                    return (
                      <span key={tag}>
                        <code className={styles.tag}>{tag}</code>
                        <br />
                      </span>
                    );
                  }
                  return (
                    <code key={tag} className={styles.tag}>
                      {tag}
                    </code>
                  );
                })}
              <span className={styles.date}>
                {item.author} | {item.date}
              </span>
            </div>
          </Link>
        ))}

        {referenceMap.map((item) => (
          <Link key={item.link} className={styles.article} to={item.link}>
            <img src={item.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <span className={styles.type}>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.tags &&
                item.tags.map((tag, index) => {
                  if (index === item.tags.length - 1) {
                    return (
                      <span key={tag}>
                        <code className={styles.tag}>{tag}</code>
                        <br />
                      </span>
                    );
                  }
                  return (
                    <code key={tag} className={styles.tag}>
                      {tag}
                    </code>
                  );
                })}
              <span className={styles.date}>
                {item.author} | {item.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
