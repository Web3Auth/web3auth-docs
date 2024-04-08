import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";

const title = "Page Not Found";
const para1content = "We could not find the documentation page you were looking for.";
const para2content =
  "Please redirect back to the documentation home page to find the item you're looking for. If you're facing any difficulty integrating Web3Auth, feel free to open up an issue on our ";

export default function NotFoundContent({ className }) {
  return (
    <>
      <PageMetadata
        title={translate({
          id: "theme.NotFound.title",
          message: "404 Page Not Found",
        })}
      />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              <Translate id="theme.NotFound.title" description="The title of the 404 page">
                {title}
              </Translate>
            </h1>
            <p>
              <Translate id="theme.NotFound.p1" description="The first paragraph of the 404 page">
                {para1content}
              </Translate>
            </p>
            <p>
              <Translate id="theme.NotFound.p2" description="The 2nd paragraph of the 404 page">
                {para2content}
              </Translate>
              <a href="https://web3auth.io/community">Community Support Portal.</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
