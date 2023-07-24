import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";

const title = "Blog Loading/ Not Found";
const para1content = "We could not find the blog you were looking for, it might be loading or it might not exist.";
const para2content =
  "Please redirect back to the main [Web3Auth Blog Page](https://web3auth.io/docs/content-hub?type=blog) to find the item you're looking for.";

export default function BlogNotFound() {
  return (
    <Layout>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              <Translate id="theme.NotFound.title" description="The title of the Blog Loading/ Not Found page.">
                {title}
              </Translate>
            </h1>
            <p>
              <Translate id="theme.NotFound.p1" description="The first paragraph of the Blog Loading/ Not Found page.">
                {para1content}
              </Translate>
            </p>
            <p>
              <Translate id="theme.NotFound.p2" description="The 2nd paragraph of the Blog Loading/ Not Found page.">
                {para2content}
              </Translate>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
