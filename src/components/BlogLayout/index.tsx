import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import SEO from "../SEO";
import BlogDetail from "./[slug]";
import BlogNotFound from "./BlogNotFound";

function BookLayout() {
  const match = useRouteMatch();

  return (
    <>
      <SEO
        title="Web3Auth Blogs"
        description="Blogs - Web3Auth Content Hub"
        image="http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"
      />
      <PageMetadata
        title="Web3Auth Blogs"
        description="Blogs - Web3Auth Content Hub"
        image="http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"
      />
      <Switch>
        <Route exact path={`${match.path}:slug`}>
          <Layout title="Blog detail">
            <BlogDetail />
          </Layout>
        </Route>

        <Route>
          <BlogNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default BookLayout;
