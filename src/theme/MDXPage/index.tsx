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

  if (!permalink.startsWith("/guides/")) return <OriginalMDXPage {...props} />;

  const { title, description, image, wrapperClassName } = frontMatter;
  return (
    <Layout title={title} description={description} permalink={permalink} wrapperClassName={wrapperClassName}>
      <main>
        <div className="container container--fluid">
          <div className="margin-vert--lg padding-vert--lg">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className={classNames("container", styles.container)}>
                  <div className={styles.titleContainer}>
                    <img className={styles.cover} src={image} alt="Cover" />
                    <h1 className={styles.title}>{title}</h1>
                  </div>
                  <MDXProvider components={MDXComponents}>
                    <MDXPageContent />
                  </MDXProvider>
                </div>
              </div>
              {MDXPageContent.toc && (
                <div className="col col--2">
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
