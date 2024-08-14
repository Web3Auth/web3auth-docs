import Link from "@docusaurus/Link";
import { useState } from "react";
import {
  blockchainMap,
  featuresMap,
  languageMap,
  platformMap,
  Props,
  exampleMap,
  typeMap,
} from "./maps";
import { Modal } from "../../components/Modal";
import styles from "./styles.module.css";

export default function Examples({ content }: Props) {
  const completeExampleMap = exampleMap;
  const [searchInput, setSearchInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  const [sortedExampleMap, setSortedExampleMap] = useState<any>(
    completeExampleMap.sort(
      (a, b) =>
        typeMap.find((obj) => obj.type === a.type).id -
        typeMap.find((obj) => obj.type === b.type).id,
    ),
  );

  const chevron = (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 3.33301L10.6667 7.99967L6 12.6663"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  function filterByTags() {
    let examples;
    if (tags.length === 0) {
      examples = exampleMap;
    } else {
      examples = completeExampleMap.filter((item) => {
        return tags.some((tag) => item.tags.includes(tag));
      });
    }

    setSortedExampleMap(examples);
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
        inputKeywords.every((key) =>
          item.tags.map((tag) => tag.includes(key.toLowerCase())).includes(true),
        )
      );
    }
    if (input === "") {
      filterByTags();
    } else {
      const finalSortedExampleMap = completeExampleMap.filter((item) => searchFilter(item));
      setSortedExampleMap(finalSortedExampleMap);
    }
  }

  function renderArticle(article) {
    return (
      <div key={article.link} className={styles.article}>
        <Link to={article.link} className={styles.articleContent}>
          <img src={article.image} alt="Banner" />
          <h3>{highlightSearchText(article.title)}</h3>
          <div className={styles.pillPrimary}>{article.type}</div>
          <p>{highlightSearchText(article.description)}</p>
        </Link>
        {article.githubLink || article.qsLink || article.guideLink ? (
          <div className={styles.pillContainer}>
            {article.githubLink ? (
              <Link className={styles.pill} to={article.githubLink}>
                Source Code{chevron}
              </Link>
            ) : null}
            {article.qsLink ? (
              <Link className={styles.pill} to={article.qsLink}>
                Integration Builder{chevron}
              </Link>
            ) : null}
            {article.guideLink ? (
              <Link className={styles.pill} to={article.guideLink}>
                Guide{chevron}
              </Link>
            ) : null}
          </div>
        ) : null}

        <div className={styles.tagContainer}>
          {article.tags &&
            article.tags.map((tag) => {
              if (tags.includes(tag) || searchInput.split(" ").includes(tag)) {
                return (
                  <div key={tag} className={styles.tagActive}>
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
                  <div key={tag} className={styles.tag}>
                    {tag}
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.searchArea}>
        <div className={styles.searchBox}>
          <div className={styles.searchIcon}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <button
              onClick={() => onChangeSearch("")}
              className={styles.searchClearButton}
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                  <div
                    className={styles.checkBoxContainer}
                    key={item.tag}
                    onClick={() => onChangeFilter(item.tag)}
                  >
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
                  <div
                    className={styles.checkBoxContainer}
                    key={item.tag}
                    onClick={() => onChangeFilter(item.tag)}
                  >
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
                  <div
                    className={styles.checkBoxContainer}
                    key={item.tag}
                    onClick={() => onChangeFilter(item.tag)}
                  >
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
                  <div
                    className={styles.checkBoxContainer}
                    key={item.tag}
                    onClick={() => onChangeFilter(item.tag)}
                  >
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
        {sortedExampleMap.map((item) => renderArticle(item))}
        {sortedExampleMap.length === 0 && (
          <div className={styles.noResults}>
            <p>No Results Found</p>
          </div>
        )}
      </div>
    </>
  );
}
