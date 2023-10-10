import Layout from "@theme/Layout";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import BlogDetail from "./[slug]";
import BlogNotFound from "./BlogNotFound";

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
        <BlogNotFound />
      </Route>
    </Switch>
  );
}

export default BookLayout;
