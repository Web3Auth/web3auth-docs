import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { useState } from "react";

import SEO from "../../components/SEO";
import { integrationBuilderMap, Props, referenceMap } from "./maps";
import styles from "./styles.module.css";

export default function GuidesPage({ guides }: Props) {
  const [searchInput, setSearchInput] = useState<string | null>(null);
  let sortedGuides = Object.entries(guides).sort(([, a], [, b]) => a.order - b.order);
  let sortedIntegrationBuilderMap = integrationBuilderMap;
  let sortedReferenceMap = referenceMap;

  if (searchInput) {
    sortedGuides = Object.entries(guides).filter(
      ([, guide]) =>
        guide.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        guide.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        guide.tags.filter((tag) => tag.includes(searchInput.toLowerCase())).length > 0
    );
    sortedIntegrationBuilderMap = integrationBuilderMap.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.tags.filter((tag) => tag.includes(searchInput.toLowerCase())).length > 0
    );
    sortedReferenceMap = referenceMap.filter(
      (item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.tags.filter((tag) => tag.includes(searchInput.toLowerCase())).length > 0
    );
  }

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
        <div className={styles.searchBox}>
          <div className={styles.searchIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.8534 20.8006L16.8119 15.7689C16.7338 15.6909 16.6165 15.6519 16.4993 15.6519H16.0694C17.4372 14.1697 18.2579 12.2584 18.2579 10.1131C18.2579 5.6665 14.5843 2 10.129 2C5.63459 2 2 5.6665 2 10.1131C2 14.5987 5.63459 18.2262 10.129 18.2262C12.2394 18.2262 14.1935 17.4071 15.6395 16.0809V16.471C15.6395 16.627 15.6786 16.744 15.7567 16.822L20.7982 21.8537C20.9936 22.0488 21.2672 22.0488 21.4626 21.8537L21.8534 21.4637C22.0489 21.2686 22.0489 20.9956 21.8534 20.8006ZM10.129 16.9781C6.29897 16.9781 3.25061 13.9356 3.25061 10.1131C3.25061 6.3296 6.29897 3.24817 10.129 3.24817C13.9199 3.24817 17.0073 6.3296 17.0073 10.1131C17.0073 13.9356 13.9199 16.9781 10.129 16.9781Z"
                fill="var(--ifm-font-color-base)"
                fillOpacity="1"
              />
            </svg>
          </div>
          <input
            placeholder="Search..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            className={styles.searchTerm}
          />
          {(searchInput && (
            <button onClick={() => setSearchInput("")} className={styles.searchClearButton} type="button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.8702 6.54951L13.3932 11.9734L19.9528 18.5331C20.0032 18.5835 20.032 18.7 19.9398 18.832L18.8318 19.94C18.6997 20.0323 18.5832 20.0035 18.5328 19.9531L17.4502 18.8705L12.0263 13.3934L5.46663 19.9531C5.41628 20.0035 5.29978 20.0323 5.16769 19.94L4.05969 18.832C3.96743 18.7 3.99626 18.5835 4.04662 18.5331L10.6062 11.9736L4.04637 5.46666C3.99617 5.41617 3.96758 5.29984 4.05969 5.16797L5.16769 4.05997C5.29978 3.9677 5.41628 3.99654 5.46663 4.04689L12.0262 10.6064L18.5331 4.04666C18.5836 3.99645 18.6999 3.96785 18.8318 4.05997L19.9398 5.16797C20.032 5.30006 20.0032 5.41655 19.9528 5.46691L18.8702 6.54951Z"
                  fill="var(--ifm-color-primary)"
                  fillOpacity="1"
                />
              </svg>
            </button>
          )) || <div className={styles.searchClearButton} />}
        </div>
        <hr />
      </header>
      <div className={styles.container}>
        {sortedGuides.length === 0 && sortedIntegrationBuilderMap.length === 0 && sortedReferenceMap.length === 0 && (
          <div className={styles.noResults}>
            <p>No Results</p>
          </div>
        )}
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

        {sortedIntegrationBuilderMap.map((item) => (
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

        {sortedReferenceMap.map((item) => (
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
