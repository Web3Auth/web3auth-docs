/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";

import { getOptionsfromURL, setURLfromOptions } from "../../common/SDKOptions";
import { blockchainMap, featuresMap, integrationBuilderMap, languageMap, platformMap, Props, referenceMap } from "../../components/ContentHubMaps";
import { Modal } from "../../components/Modal";
import SEO from "../../components/SEO";
import styles from "./styles.module.css";

export default function ContentHub({ content }: Props) {
  const completeGuides = Object.entries(content).map(([key, value]) => {
    if (value.type === "guide") return { ...value, link: `/content-hub/${key}` };
    return {};
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
  const guide = "guide";
  const integrationBuilder = "integrationBuilder";
  const reference = "reference";
  const [tabActive, setTabActive] = useState<string>(guide);

  useEffect(() => {
    const options = getOptionsfromURL();
    let type: string;

    if (!options.type) {
      history.pushState({}, "", setURLfromOptions({ type: guide }));
      type = guide;
    } else {
      type = options.type;
    }

    setTabActive(type);
  }, []);

  useEffect(() => {
    history.pushState({}, "", setURLfromOptions({ type: tabActive }));
  }, [tabActive]);

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
    <Layout title="Content Hub">
      <SEO
        title="Content Hub"
        description="Content Hub | Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image={`${baseUrl}images/docs-meta-cards/guides-card.png`}
        slug="/content-hub"
      />

      <header className={styles.header}>
        <h1>Content Hub</h1>
        <p>
          Welcome to the Web3Auth Content Hub! <br />
          We have put together a series of resources to help you navigate through the various topics related to our product and services.
        </p>
        <div className={styles.headerInteractionArea}>
          <div className={styles.searchArea}>
            <div className={styles.searchBox}>
              <div className={styles.searchIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.8534 20.8006L16.8119 15.7689C16.7338 15.6909 16.6165 15.6519 16.4993 15.6519H16.0694C17.4372 14.1697 18.2579 12.2584 18.2579 10.1131C18.2579 5.6665 14.5843 2 10.129 2C5.63459 2 2 5.6665 2 10.1131C2 14.5987 5.63459 18.2262 10.129 18.2262C12.2394 18.2262 14.1935 17.4071 15.6395 16.0809V16.471C15.6395 16.627 15.6786 16.744 15.7567 16.822L20.7982 21.8537C20.9936 22.0488 21.2672 22.0488 21.4626 21.8537L21.8534 21.4637C22.0489 21.2686 22.0489 20.9956 21.8534 20.8006ZM10.129 16.9781C6.29897 16.9781 3.25061 13.9356 3.25061 10.1131C3.25061 6.3296 6.29897 3.24817 10.129 3.24817C13.9199 3.24817 17.0073 6.3296 17.0073 10.1131C17.0073 13.9356 13.9199 16.9781 10.129 16.9781Z"
                    fill="currentColor"
                    fillOpacity="1"
                  />
                </svg>
              </div>
              <input
                placeholder="Quick search for anything"
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
          <div className={styles.buttonGroup}>
            <div className={tabActive === guide ? styles.activeTab : styles.tab} onClick={() => setTabActive(guide)}>
              <div className={styles.tabIconContainer}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3996 8.50001C14.3996 10.1974 13.7253 11.8253 12.5251 13.0255C11.3249 14.2257 9.69699 14.9 7.99961 14.9C6.30222 14.9 4.67436 14.2257 3.47413 13.0255C2.27389 11.8253 1.59961 10.1974 1.59961 8.50001C1.59961 6.80262 2.27389 5.17476 3.47413 3.97452C4.67436 2.77429 6.30222 2.10001 7.99961 2.10001C9.69699 2.10001 11.3249 2.77429 12.5251 3.97452C13.7253 5.17476 14.3996 6.80262 14.3996 8.50001V8.50001ZM9.59961 6.10001C9.59961 6.52435 9.43104 6.93132 9.13098 7.23138C8.83092 7.53143 8.42396 7.70001 7.99961 7.70001C7.57526 7.70001 7.1683 7.53143 6.86824 7.23138C6.56818 6.93132 6.39961 6.52435 6.39961 6.10001C6.39961 5.67566 6.56818 5.26869 6.86824 4.96864C7.1683 4.66858 7.57526 4.50001 7.99961 4.50001C8.42396 4.50001 8.83092 4.66858 9.13098 4.96864C9.43104 5.26869 9.59961 5.67566 9.59961 6.10001V6.10001ZM7.99961 9.30001C7.23369 9.29985 6.48383 9.5196 5.83914 9.93313C5.19445 10.3467 4.68204 10.9366 4.36281 11.6328C4.81295 12.1565 5.37103 12.5766 5.99876 12.8644C6.6265 13.1522 7.30905 13.3008 7.99961 13.3C8.69016 13.3008 9.37272 13.1522 10.0005 12.8644C10.6282 12.5766 11.1863 12.1565 11.6364 11.6328C11.3172 10.9366 10.8048 10.3467 10.1601 9.93313C9.51539 9.5196 8.76553 9.29985 7.99961 9.30001V9.30001Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Guides
            </div>
            <div className={tabActive === reference ? styles.activeTab : styles.tab} onClick={() => setTabActive(reference)}>
              <div className={styles.tabIconContainer}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.24954 3.65001C4.24954 3.43783 4.16525 3.23435 4.01522 3.08432C3.8652 2.93429 3.66171 2.85001 3.44954 2.85001C3.23737 2.85001 3.03388 2.93429 2.88385 3.08432C2.73382 3.23435 2.64954 3.43783 2.64954 3.65001V9.46441C2.40633 9.60484 2.20436 9.80682 2.06395 10.05C1.92353 10.2933 1.84961 10.5692 1.84961 10.85C1.84961 11.1309 1.92353 11.4067 2.06395 11.65C2.20436 11.8932 2.40633 12.0952 2.64954 12.2356V13.25C2.64954 13.4622 2.73382 13.6657 2.88385 13.8157C3.03388 13.9657 3.23737 14.05 3.44954 14.05C3.66171 14.05 3.8652 13.9657 4.01522 13.8157C4.16525 13.6657 4.24954 13.4622 4.24954 13.25V12.2356C4.49275 12.0952 4.69471 11.8932 4.83513 11.65C4.97555 11.4067 5.04947 11.1309 5.04947 10.85C5.04947 10.5692 4.97555 10.2933 4.83513 10.05C4.69471 9.80682 4.49275 9.60484 4.24954 9.46441V3.65001ZM9.04954 3.65001C9.04954 3.43783 8.96525 3.23435 8.81522 3.08432C8.6652 2.93429 8.46171 2.85001 8.24954 2.85001C8.03737 2.85001 7.83388 2.93429 7.68385 3.08432C7.53382 3.23435 7.44954 3.43783 7.44954 3.65001V4.66441C7.20633 4.80484 7.00436 5.00682 6.86395 5.25004C6.72353 5.49326 6.64961 5.76916 6.64961 6.05001C6.64961 6.33085 6.72353 6.60675 6.86395 6.84997C7.00436 7.09319 7.20633 7.29517 7.44954 7.43561V13.25C7.44954 13.4622 7.53382 13.6657 7.68385 13.8157C7.83388 13.9657 8.03737 14.05 8.24954 14.05C8.46171 14.05 8.6652 13.9657 8.81522 13.8157C8.96525 13.6657 9.04954 13.4622 9.04954 13.25V7.43561C9.29275 7.29517 9.49471 7.09319 9.63513 6.84997C9.77555 6.60675 9.84947 6.33085 9.84947 6.05001C9.84947 5.76916 9.77555 5.49326 9.63513 5.25004C9.49471 5.00682 9.29275 4.80484 9.04954 4.66441V3.65001ZM13.0495 2.85001C13.2617 2.85001 13.4652 2.93429 13.6152 3.08432C13.7653 3.23435 13.8495 3.43783 13.8495 3.65001V9.46441C14.0928 9.60484 14.2947 9.80682 14.4351 10.05C14.5755 10.2933 14.6495 10.5692 14.6495 10.85C14.6495 11.1309 14.5755 11.4067 14.4351 11.65C14.2947 11.8932 14.0928 12.0952 13.8495 12.2356V13.25C13.8495 13.4622 13.7653 13.6657 13.6152 13.8157C13.4652 13.9657 13.2617 14.05 13.0495 14.05C12.8374 14.05 12.6339 13.9657 12.4839 13.8157C12.3338 13.6657 12.2495 13.4622 12.2495 13.25V12.2356C12.0063 12.0952 11.8044 11.8932 11.6639 11.65C11.5235 11.4067 11.4496 11.1309 11.4496 10.85C11.4496 10.5692 11.5235 10.2933 11.6639 10.05C11.8044 9.80682 12.0063 9.60484 12.2495 9.46441V3.65001C12.2495 3.43783 12.3338 3.23435 12.4839 3.08432C12.6339 2.93429 12.8374 2.85001 13.0495 2.85001Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              References
            </div>
            <div className={tabActive === integrationBuilder ? styles.activeTab : styles.tab} onClick={() => setTabActive(integrationBuilder)}>
              <div className={styles.tabIconContainer}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.12435 11.1667V3.16666V11.1667Z" fill="#6B7280" />
                  <path
                    d="M2.79102 11.1667V11.8333C2.79102 12.3638 3.00173 12.8725 3.3768 13.2475C3.75187 13.6226 4.26058 13.8333 4.79102 13.8333H11.4577C11.9881 13.8333 12.4968 13.6226 12.8719 13.2475C13.247 12.8725 13.4577 12.3638 13.4577 11.8333V11.1667M10.791 8.49999L8.12435 11.1667M8.12435 11.1667L5.45768 8.49999M8.12435 11.1667V3.16666"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              Integration Builder
            </div>
          </div>
        </div>
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
        {tabActive === guide && (
          <>
            {sortedGuides.map((item) => renderArticle(item))}
            {sortedGuides.length === 0 && (
              <div className={styles.noResults}>
                <p>No Results</p>
              </div>
            )}
          </>
        )}
        {tabActive === reference && (
          <>
            {sortedReferenceMap.map((item) => renderArticle(item))}
            {sortedReferenceMap.length === 0 && (
              <div className={styles.noResults}>
                <p>No Results</p>
              </div>
            )}
          </>
        )}
        {tabActive === integrationBuilder && (
          <>
            {sortedIntegrationBuilderMap.map((item) => renderArticle(item))}
            {sortedIntegrationBuilderMap.length === 0 && (
              <div className={styles.noResults}>
                <p>No Results</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
