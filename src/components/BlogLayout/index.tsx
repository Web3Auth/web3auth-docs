import Layout from "@theme/Layout";
import NotFound from "@theme/NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import BlogDetail from "../../pages/_blog/[slug]";
import SEO from "../SEO";

function BookLayout() {
  const match = useRouteMatch();

  return (
    <>
      <SEO
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
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default BookLayout;
