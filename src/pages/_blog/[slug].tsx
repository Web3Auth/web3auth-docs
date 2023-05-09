/* eslint-disable react/no-danger */
/* eslint-disable no-console */
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { request } from "graphql-request";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import * as sanitizeHtml from "sanitize-html";

import SEO from "../../components/SEO";
import styles from "./styles.module.css";

type BlogDetailParams = {
  [key: string]: any;
  slug: string;
};

export default function BlogDetail() {
  // const { content: MDXPageContent } = props;
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
              markdown
            }
            author {
              name
              title
            }
            date
            seo {
              keywords
              image {
                url
              }
              description
              title
            }
          }
        }
        `
      )) as any;

      console.log("post", post);
      setPostData(post);
    };

    fetchPost();
  }, []);

  return (
    <main>
      <SEO
        title={postData.seo?.title}
        description={postData.seo?.description}
        image={postData.seo?.image?.url}
        slug={`/blog/${postData.slug}`}
        keywords={postData.seo?.keywords}
      />
      <div className="container">
        <div className="margin-vert--lg padding-vert--lg">
          <div className="row">
            <div className="col col--12">
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
              <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(postData?.content?.html) }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
