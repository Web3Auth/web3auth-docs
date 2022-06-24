import { MDXProvider } from "@mdx-js/react";
import Layout from "@theme/Layout";
import MDXComponents from "@theme/MDXComponents";
import TOC from "@theme/TOC";
import OriginalMDXPage from "@theme-original/MDXPage";
import classNames from "classnames";
import { ComponentProps } from "react";

import styles from "./styles.module.css";

export default function MDXPage(props: ComponentProps<typeof OriginalMDXPage>) {
  const { content: MDXPageContent } = props;
  const { frontMatter, metadata } = MDXPageContent;
  const { permalink } = metadata;

  if (!permalink.startsWith("/docs/guides/")) return <OriginalMDXPage {...props} />;

  const { title, description, image, tag, author, date, wrapperClassName } = frontMatter;
  return (
    <Layout title={title} description={description} wrapperClassName={wrapperClassName}>
      <main>
        <div className="margin-vert--lg padding-vert--lg">
          <div className="row">
            <div className="col col--7 col--offset-2">
              <div className={classNames("container", styles.container)}>
                <div className={styles.titleContainer}>
                  <img className={styles.cover} src={image} alt="Cover" />
                  <div className={styles.titleContainer}>
                    <span className={styles.tag}>{tag}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <span className={styles.date}>
                      {author} | {date}
                    </span>
                  </div>
                </div>
                <MDXProvider components={MDXComponents}>
                  <MDXPageContent />
                </MDXProvider>
              </div>
            </div>
            {MDXPageContent.toc && (
              <div className="col col--3" style={{ paddingRight: "30px" }}>
                <TOC toc={MDXPageContent.toc} />
              </div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
