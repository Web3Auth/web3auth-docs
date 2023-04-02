import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import TOC from "@theme/TOC";
import OriginalMDXPage from "@theme-original/MDXPage";
import { ComponentProps } from "react";

import DiscourseComment from "../../components/DiscourseComment";
import styles from "./styles.module.css";

export default function MDXPage(props: ComponentProps<typeof OriginalMDXPage>) {
  const { content: MDXPageContent } = props;
  const { frontMatter, metadata } = MDXPageContent;
  const { permalink } = metadata;
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  if (!permalink.includes(`/content-hub/guides/`)) {
    return <OriginalMDXPage {...props} />;
  }

  const { title, image, description, type, tags, author, date, wrapperClassName, communityPortalTopicId } = frontMatter;
  return (
    <Layout title={title} description={description} wrapperClassName={wrapperClassName}>
      <main>
        <div className="container">
          <div className="margin-vert--lg padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-1">
                <div className={styles.titleContainer}>
                  {/* <img className={styles.cover} src={baseUrl + image} alt="Cover" /> */}
                  <div className={styles.titleContainer}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.pillContainer}>
                      <div className={styles.pill}>{type}</div>
                    </div>
                    <span className={styles.tagsContainer}>
                      {tags &&
                        tags.map((item) => {
                          return (
                            <code key={item} className={styles.tag}>
                              {item}
                            </code>
                          );
                        })}
                    </span>
                    <span className={styles.date}>
                      {author} | {date}
                    </span>
                  </div>
                </div>
                <MDXProvider components={MDXComponents}>
                  <MDXPageContent />
                </MDXProvider>
                {communityPortalTopicId && <DiscourseComment topicId={communityPortalTopicId} />}
              </div>
              {MDXPageContent.toc && (
                <div className="col col--3" style={{ paddingRight: "30px" }}>
                  <TOC toc={MDXPageContent.toc} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
