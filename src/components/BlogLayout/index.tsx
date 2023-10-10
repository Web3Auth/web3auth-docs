import { PageMetadata } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SEO from "../SEO";
import BlogDetail from "./[slug]";
import BlogNotFound from "./BlogNotFound";

type BlogDetailParams = {
  [key: string]: any;
  slug: string;
};

function BookLayout() {
  const match = useRouteMatch();
  const { slug } = match.params as BlogDetailParams;
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const [postData, setPostData] = useState<any>("Title");

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
    const fetchPost = async () => {
      const query = `
      query {
        pageBlogPostCollection(
          where: { slug: "${slug}"}
        ) {
          items {
            title
            excerpt
            coverImage {
              url
            }
          }
        }
      }
      `;

      const response = await apiCall(query);
      const { data } = await response.json();
      const post = data.pageBlogPostCollection.items[0];

      setPostData(post);
    };

    fetchPost();
  }, []);

  return (
    <Switch>
      <SEO title={postData.title} description={postData.excerpt} image={postData.coverImage?.url} />
      <PageMetadata title={postData.title} description={postData.excerpt} image={postData.coverImage?.url} />

      <Route exact path={`${match.path}:slug`}>
        <Layout title="Blog detail">
          <BlogDetail />
        </Layout>
      </Route>

      <Route>
        <BlogNotFound />
      </Route>
    </Switch>
  );
}

export default BookLayout;
