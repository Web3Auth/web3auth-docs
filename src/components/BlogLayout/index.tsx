/* eslint-disable no-console */
import Layout from "@theme/Layout";
import NotFound from "@theme/NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import BlogDetail from "../../pages/_blog/[slug]";

function BookLayout() {
  const match = useRouteMatch();

  return (
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
  );
}

export default BookLayout;
