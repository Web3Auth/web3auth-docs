/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useState } from "react";

import { blockchainMap, featuresMap, integrationBuilderMap, languageMap, platformMap, Props, referenceMap } from "../../components/GuidesMaps";
import { Modal } from "../../components/Modal";
import SEO from "../../components/SEO";
import styles from "./styles.module.css";

export default function GuidesPage({ guides }: Props) {
  const completeGuides = Object.entries(guides).map(([key, value]) => {
    return { ...value, link: `/guides/${key}` };
  });
  const completeIntegrationBuilderMap = integrationBuilderMap;
  const completeReferenceMap = referenceMap;
  const [searchInput, setSearchInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [sortedGuides, setSortedGuides] = useState<any>(completeGuides.sort((a, b) => a.order - b.order));
  const [sortedIntegrationBuilderMap, setSortedIntegrationBuilderMap] = useState<any>(
    completeIntegrationBuilderMap.sort((a, b) => a.order - b.order)
  );
  const [sortedReferenceMap, setSortedReferenceMap] = useState<any>(completeReferenceMap.sort((a, b) => a.order - b.order));
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  function filterByTags() {
    if (tags.length === 0) {
      setSortedGuides(completeGuides.sort((a, b) => a.order - b.order));
      setSortedIntegrationBuilderMap(integrationBuilderMap);
      setSortedReferenceMap(referenceMap);
    } else {
      setSortedGuides(
        completeGuides.filter((item) => {
          return tags.some((tag) => item.tags.includes(tag));
        })
      );
      setSortedIntegrationBuilderMap(
        completeIntegrationBuilderMap.filter((item) => {
          return tags.some((tag) => item.tags.includes(tag));
        })
      );
      setSortedReferenceMap(
        completeReferenceMap.filter((item) => {
          return tags.some((tag) => item.tags.includes(tag));
        })
      );
    }
  }

  function onChangeFilter(e) {
    if (tags.includes(e)) {
      setTags(tags.filter((tag) => tag !== e));
    } else {
      setTags([...tags, e]);
    }
  }

  function highlightSearchText(text) {
    if (searchInput === "") {
      return text;
    }
    let inputKeywords = searchInput.split(" ");
    inputKeywords = inputKeywords.filter((keyword) => keyword !== "");
    const keywords = inputKeywords
      .map((keyword) => {
        return `(${keyword})`;
      })
      .join("|");
    const regex = new RegExp(keywords, "gi");
    const matches = text.match(regex);
    const parts = text.split(regex);
    if (matches) {
      return (
        <span>
          {parts.filter(String).map((part, i) => {
            return regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>;
          })}
        </span>
      );
    }
    return text;
  }

  function onChangeSearch(input) {
    setSearchInput(input);

    const inputKeywords = input.trim().split(" ");

    function searchFilter(item) {
      return (
        inputKeywords.every((key) => item.title.toLowerCase().includes(key.toLowerCase())) ||
        inputKeywords.every((key) => item.description.toLowerCase().includes(key.toLowerCase())) ||
        inputKeywords.every((key) => item.tags.map((tag) => tag.includes(key.toLowerCase())).includes(true))
      );
    }
    if (input === "") {
      filterByTags();
    } else {
      const finalSortedGuide = completeGuides.filter((item) => searchFilter(item));
      const finalSortedIntegrationBuilderMap = completeIntegrationBuilderMap.filter((item) => searchFilter(item));
      const finalSortedReferenceMap = completeReferenceMap.filter((item) => searchFilter(item));

      setSortedGuides(finalSortedGuide);
      setSortedIntegrationBuilderMap(finalSortedIntegrationBuilderMap);
      setSortedReferenceMap(finalSortedReferenceMap);
    }
  }

  function renderArticle(article) {
    return (
      <div key={article.link} className={styles.article}>
        <Link to={article.link} className={styles.articleContent}>
          <img src={baseUrl + article.image} alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>{article.type}</span>
            <h3>{highlightSearchText(article.title)}</h3>
            <p>{highlightSearchText(article.description)}</p>
          </div>
        </Link>
        <div className={styles.tagContainer}>
          {article.tags &&
            article.tags.map((tag) => {
              if (tags.includes(tag) || searchInput.split(" ").includes(tag)) {
                return (
                  <div key={tag} className={styles.tagActive} onClick={() => setShowModal(true)}>
                    {tag}
                  </div>
                );
              }
              return null;
            })}
          {article.tags &&
            article.tags.map((tag) => {
              if (!(tags.includes(tag) || searchInput.split(" ").includes(tag))) {
                return (
                  <div key={tag} className={styles.tag} onClick={() => setShowModal(true)}>
                    {tag}
                  </div>
                );
              }
              return null;
            })}
        </div>
        <span className={styles.date}>
          {article.author} | {article.date}
        </span>
      </div>
    );
  }

  return (
    <Layout title="Guides">
      <SEO
        title="Guides"
        description="Guides | Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image={`${baseUrl}images/docs-meta-cards/guides-card.png`}
        slug="/guides"
      />

      <header className={styles.header}>
        <h1>Guides & References</h1>
        <p>A collection of {Object.keys(guides).length + integrationBuilderMap.length + referenceMap.length} posts</p>
        <div className={styles.searchArea}>
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
              onChange={(event) => onChangeSearch(event.target.value)}
              type="text"
              className={styles.searchTerm}
            />
            {(searchInput && (
              <button onClick={() => onChangeSearch("")} className={styles.searchClearButton} type="button">
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
          <button className={styles.filterButton} type="button" onClick={() => setShowModal(true)}>
            Filter by Tags
          </button>
        </div>

        <hr />
      </header>
      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Filter by Tags</h2>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalTagList}>
                <h3>Web3Auth Features</h3>
                {featuresMap.map((item) => (
                  <div className={styles.checkBoxContainer} key={item.tag} onClick={() => onChangeFilter(item.tag)}>
                    <div className={styles.checkBoxInputContainer}>
                      <input
                        type="checkbox"
                        id={item.tag}
                        name={item.tag}
                        value={item.tag}
                        className={styles.checkBox}
                        onChange={() => onChangeFilter(item.tag)}
                        checked={tags.includes(item.tag)}
                      />
                    </div>
                    <div className={styles.checkBoxLabelContainer}>{item.title}</div>
                  </div>
                ))}
                <h3>Language</h3>
                {languageMap.map((item) => (
                  <div className={styles.checkBoxContainer} key={item.tag} onClick={() => onChangeFilter(item.tag)}>
                    <div className={styles.checkBoxInputContainer}>
                      <input
                        type="checkbox"
                        id={item.tag}
                        name={item.tag}
                        value={item.tag}
                        className={styles.checkBox}
                        onChange={() => onChangeFilter(item.tag)}
                        checked={tags.includes(item.tag)}
                      />
                    </div>
                    <div className={styles.checkBoxLabelContainer}>{item.title}</div>
                  </div>
                ))}
              </div>
              <div className={styles.modalTagList}>
                <h3>Platforms</h3>
                {platformMap.map((item) => (
                  <div className={styles.checkBoxContainer} key={item.tag} onClick={() => onChangeFilter(item.tag)}>
                    <div className={styles.checkBoxInputContainer}>
                      <input
                        type="checkbox"
                        id={item.tag}
                        name={item.tag}
                        value={item.tag}
                        className={styles.checkBox}
                        onChange={() => onChangeFilter(item.tag)}
                        checked={tags.includes(item.tag)}
                      />
                    </div>
                    <div className={styles.checkBoxLabelContainer}>{item.title}</div>
                  </div>
                ))}
                <h3>Blockchain</h3>
                {blockchainMap.map((item) => (
                  <div className={styles.checkBoxContainer} key={item.tag} onClick={() => onChangeFilter(item.tag)}>
                    <div className={styles.checkBoxInputContainer}>
                      <input
                        type="checkbox"
                        id={item.tag}
                        name={item.tag}
                        value={item.tag}
                        className={styles.checkBox}
                        onChange={() => onChangeFilter(item.tag)}
                        checked={tags.includes(item.tag)}
                      />
                    </div>
                    <div className={styles.checkBoxLabelContainer}>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.modalClearButton} type="button" onClick={() => setTags([])}>
                Clear All
              </button>
              <button
                className={styles.modalSaveButton}
                type="button"
                onClick={() => {
                  filterByTags();
                  setShowModal(false);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className={styles.container}>
        {sortedGuides.length === 0 && sortedIntegrationBuilderMap.length === 0 && sortedReferenceMap.length === 0 && (
          <div className={styles.noResults}>
            <p>No Results</p>
          </div>
        )}
        {sortedGuides.map((guide) => renderArticle(guide))}
        {sortedIntegrationBuilderMap.map((item) => renderArticle(item))}
        {sortedReferenceMap.map((reference) => renderArticle(reference))}
      </div>
    </Layout>
  );
}
