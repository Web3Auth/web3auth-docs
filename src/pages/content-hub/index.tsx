/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import { request } from "graphql-request";
import { useEffect, useState } from "react";

import { getOptionsfromURL, setURLfromOptions } from "../../common/SDKOptions";
import { blockchainMap, featuresMap, languageMap, platformMap, Props, referenceMap } from "../../components/ContentHubMaps";
import { Modal } from "../../components/Modal";
import SEO from "../../components/SEO";
import styles from "./styles.module.css";

export default function ContentHub({ content }: Props) {
  const completeGuides = Object.entries(content).map(([key, value]) => {
    if (value.type === "guide") return { ...value, link: `/content-hub/${key}` };
    return {};
  });
  const completeReferenceMap = referenceMap;
  const [searchInput, setSearchInput] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [sortedGuides, setSortedGuides] = useState<any>(completeGuides.sort((a: any, b: any) => a.order - b.order));

  const [sortedReferenceMap, setSortedReferenceMap] = useState<any>(completeReferenceMap.sort((a, b) => a.order - b.order));
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl, customFields } = siteConfig;
  const guide = "guides";
  const reference = "references";
  const blog = "blog";
  const [tabActive, setTabActive] = useState<string>(guide);
  const [blogPostMap, setBlogPostMap] = useState<any>([]);
  const [completeBlogPostMap, setCompleteBlogPostMap] = useState<any>([]);

  useEffect(() => {
    const options = getOptionsfromURL();
    let type: string;

    if (!options.type) {
      history.pushState({}, "", setURLfromOptions({ type: blog }));
      type = blog;
    } else {
      type = options.type;
    }

    setTabActive(type);
  }, []);

  useEffect(() => {
    history.pushState({}, "", setURLfromOptions({ type: tabActive }));
  }, [tabActive]);

  const apiCall = async (query) => {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${customFields.REACT_CONTENTFUL_SPACE}/environments/master`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${customFields.REACT_CONTENTFUL_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    };
    return fetch(fetchUrl, options);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        query {
          pageBlogPostCollection(order:date_DESC) {
            items {
              sys {
                id
              }
              featured
              title
              slug
              date
              excerpt
              coverImage {
                url
              }
              author {
                name
              }
              tags
            }
          }
        }
      `;
      const response = await apiCall(query);
      const { data } = await response.json();

      setBlogPostMap(data.pageBlogPostCollection.items);
      setCompleteBlogPostMap(data.pageBlogPostCollection.items);
    };

    fetchPosts();
  }, []);

  function filterByTags() {
    let guides, references, blogPosts;
    if (tags.length === 0) {
      guides = completeGuides.sort((a: any, b: any) => a.order - b.order);
      blogPosts = completeBlogPostMap;
      references = referenceMap;
    } else {
      guides = completeGuides.filter((item: any) => {
        return tags.some((tag) => item.tags.includes(tag));
      });
      blogPosts = blogPostMap.filter((item) => {
        return tags.some((tag) => item.tags.includes(tag));
      });
      references = completeReferenceMap.filter((item) => {
        return tags.some((tag) => item.tags.includes(tag));
      });
    }

    if (tabActive === guide && guides.length === 0) {
      if (blogPosts.length > 0) {
        setTabActive(blog);
      } else if (sortedReferenceMap.length > 0) {
        setTabActive(reference);
      }
    } else if (tabActive === blog && blogPosts.length === 0) {
      if (sortedGuides.length > 0) {
        setTabActive(guide);
      } else if (sortedReferenceMap.length > 0) {
        setTabActive(reference);
      }
    } else if (tabActive === reference && references.length === 0) {
      if (sortedGuides.length > 0) {
        setTabActive(guide);
      } else if (blogPosts.length > 0) {
        setTabActive(blog);
      }
    }

    setSortedGuides(guides);
    setBlogPostMap(blogPosts);
    setSortedReferenceMap(references);
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
    function searchFilterBlog(item) {
      return (
        inputKeywords.every((key) => item.title.toLowerCase().includes(key.toLowerCase())) ||
        inputKeywords.every((key) => item.excerpt.toLowerCase().includes(key.toLowerCase())) ||
        inputKeywords.every((key) => item.tags.map((tag) => tag.includes(key.toLowerCase())).includes(true))
      );
    }
    if (input === "") {
      filterByTags();
    } else {
      const finalSortedGuide = completeGuides.filter((item) => searchFilter(item));
      const finalBlogPosts = completeBlogPostMap.filter((item) => searchFilterBlog(item));
      const finalSortedReferenceMap = completeReferenceMap.filter((item) => searchFilter(item));

      setSortedGuides(finalSortedGuide);
      setBlogPostMap(finalBlogPosts);
      setSortedReferenceMap(finalSortedReferenceMap);
    }
  }

  function renderArticle(article) {
    return (
      <div key={article.link} className={styles.article}>
        <Link to={article.link} className={styles.articleContent}>
          <img src={baseUrl + article.image} alt="Banner" />
          <div className={styles.contentContainer}>
            <div className={styles.pillContainer}>
              <div className={styles.pill}>{article.type}</div>
            </div>
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

  function renderBlog(article) {
    return (
      <div key={article.sys.id} className={styles.article}>
        <Link to={`/content-hub/blog/${article.slug}`} className={styles.articleContent}>
          <img src={article.coverImage.url ? article.coverImage.url : `${baseUrl}images/docs-meta-cards/guides-card.png`} alt="Blog Banner" />
          <div className={styles.contentContainer}>
            <div className={styles.pillContainer}>
              <div className={styles.pill}>BLOG</div>
            </div>
            <h3>{highlightSearchText(article.title)}</h3>
            <p>{highlightSearchText(article.excerpt)}</p>
          </div>
        </Link>

        {/* <div className={styles.tagContainer}>
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
        </div> */}
        <span className={styles.date}>
          {article.author.name} | {new Date(article.date).toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
            <div className={tabActive === blog ? styles.activeTab : styles.tab} onClick={() => setTabActive(blog)}>
              <div className={styles.tabIconContainer}>
                <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.7 16.7498C6.7 14.9729 7.40589 13.2687 8.66238 12.0122C9.91887 10.7557 11.623 10.0498 13.4 10.0498H40.2C41.9769 10.0498 43.6811 10.7557 44.9376 12.0122C46.1941 13.2687 46.9 14.9729 46.9 16.7498V50.2498C46.9 52.0268 47.6059 53.7309 48.8624 54.9874C50.1189 56.2439 51.823 56.9498 53.6 56.9498H13.4C11.623 56.9498 9.91887 56.2439 8.66238 54.9874C7.40589 53.7309 6.7 52.0268 6.7 50.2498V16.7498ZM16.75 20.0998H36.85V33.4998H16.75V20.0998ZM36.85 40.1998H16.75V46.8998H36.85V40.1998Z"
                    fill="currentColor"
                  />
                  <path
                    d="M50.25 23.4502H53.6C55.377 23.4502 57.0811 24.1561 58.3376 25.4126C59.5941 26.6691 60.3 28.3732 60.3 30.1502V48.5752C60.3 49.9079 59.7706 51.186 58.8282 52.1284C57.8858 53.0708 56.6077 53.6002 55.275 53.6002C53.9423 53.6002 52.6642 53.0708 51.7218 52.1284C50.7794 51.186 50.25 49.9079 50.25 48.5752V23.4502Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Blog
            </div>
            <div className={tabActive === guide ? styles.activeTab : styles.tab} onClick={() => setTabActive(guide)}>
              <div className={styles.tabIconContainer}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H10.586C11.1164 2.00011 11.625 2.2109 12 2.586L15.414 6C15.7891 6.37499 15.9999 6.88361 16 7.414V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H12.472C13.4938 16.8569 14.0393 15.366 13.9964 13.8334C13.9535 12.3008 13.3255 10.8428 12.2414 9.75864C11.1572 8.6745 9.69917 8.04652 8.16657 8.00363C6.63396 7.96074 5.14308 8.50619 4 9.528V4Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99996 10C7.29462 9.9999 6.6018 10.1863 5.99174 10.5403C5.38168 10.8943 4.87608 11.4034 4.5262 12.0158C4.17632 12.6283 3.99461 13.3223 3.99948 14.0276C4.00436 14.733 4.19565 15.4245 4.55396 16.032L3.29296 17.292C3.20005 17.3848 3.12633 17.4951 3.07603 17.6164C3.02572 17.7377 2.9998 17.8678 2.99976 17.9991C2.99971 18.1305 3.02553 18.2606 3.07576 18.3819C3.12598 18.5033 3.19961 18.6136 3.29246 18.7065C3.3853 18.7994 3.49554 18.8731 3.61687 18.9234C3.7382 18.9737 3.86826 18.9997 3.99961 18.9997C4.13095 18.9997 4.26103 18.9739 4.38239 18.9237C4.50376 18.8735 4.61405 18.7998 4.70696 18.707L5.96796 17.446C6.4978 17.7583 7.09252 17.9442 7.7059 17.9892C8.31927 18.0343 8.93477 17.9373 9.50457 17.7058C10.0744 17.4743 10.5831 17.1146 10.9913 16.6545C11.3994 16.1944 11.696 15.6464 11.8579 15.0531C12.0198 14.4598 12.0427 13.8371 11.9249 13.2335C11.807 12.6298 11.5515 12.0615 11.1783 11.5727C10.8051 11.0838 10.3242 10.6876 9.77293 10.4149C9.22169 10.1421 8.61498 10.0001 7.99996 10ZM5.99996 14C5.99996 13.4696 6.21067 12.9609 6.58574 12.5858C6.96082 12.2107 7.46953 12 7.99996 12C8.53039 12 9.0391 12.2107 9.41417 12.5858C9.78924 12.9609 9.99996 13.4696 9.99996 14C9.99996 14.5304 9.78924 15.0391 9.41417 15.4142C9.0391 15.7893 8.53039 16 7.99996 16C7.46953 16 6.96082 15.7893 6.58574 15.4142C6.21067 15.0391 5.99996 14.5304 5.99996 14Z"
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
        {tabActive === blog && (
          <>
            {blogPostMap.map((post) => renderBlog(post))}
            {blogPostMap.length === 0 && (
              <div className={styles.noResults}>
                <p>Loading...</p>
              </div>
            )}
          </>
        )}
        {tabActive === guide && (
          <>
            {sortedGuides.map((item) => renderArticle(item))}
            {sortedGuides.length === 0 && (
              <div className={styles.noResults}>
                <p>Loading...</p>
              </div>
            )}
          </>
        )}
        {tabActive === reference && (
          <>
            {sortedReferenceMap.map((item) => renderArticle(item))}
            {sortedReferenceMap.length === 0 && (
              <div className={styles.noResults}>
                <p>Loading...</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
