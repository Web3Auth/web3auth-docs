import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import OriginalMDXPage from "@theme-original/MDXPage";
import { request } from "graphql-request";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import styles from "./styles.module.css";

type BlogDetailParams = {
  [key: string]: any;
  slug: string;
};

// Add a function to fetch data from the exact slug blog

export default function BlogDetail() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const [postData, setPostData] = useState<any>("Title");
  const match = useRouteMatch();
  const { slug } = match.params as BlogDetailParams;

  useEffect(() => {
    const fetchPost = async () => {
      const { post } = (await request(
        customFields.REACT_HYGRAPHCMS_ENDPOINT as string,
        `
        {
          post(where: { slug: "${slug}" }) {
            id
            title
            slug
            excerpt
            publishedAt
            coverImage {
              url
            }
            content {
              html
            }
            author {
              name
              title
            }
            date
          }
        }
        `
      )) as any;

      // eslint-disable-next-line no-console
      console.log("post", post);
      setPostData(post);
    };

    fetchPost();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="margin-vert--lg padding-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-1">
              <div className={styles.titleContainer}>
                <img className={styles.cover} src={postData.coverImage?.url} alt="Cover" />
                <div className={styles.titleContainer}>
                  <h1 className={styles.title}>{postData.title}</h1>
                  <div className={styles.pillContainer}>
                    <div className={styles.pill}>BLOG</div>
                  </div>
                  {/* <span className={styles.tagsContainer}>
                {tags &&
                  tags.map((item) => {
                    return (
                      <code key={item} className={styles.tag}>
                        {item}
                      </code>
                    );
                  })}
              </span> */}
                  <span className={styles.date}>
                    {postData.author?.name} | {postData.date}
                  </span>
                </div>
              </div>
              {/* <OriginalMDXPage content={postData?.content?.markdown} /> */}
              <div dangerouslySetInnerHTML={{ __html: postData?.content?.html }} />
            </div>
            {/* {MDXPageContent.toc && (
          <div className="col col--3" style={{ paddingRight: "30px" }}>
            <TOC toc={MDXPageContent.toc} />
          </div>
        )} */}
          </div>
        </div>
      </div>
    </main>
  );
}
