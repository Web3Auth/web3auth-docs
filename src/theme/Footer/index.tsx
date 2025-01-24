import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Discord from "@site/static/images/social/discord.svg";
import GitHub from "@site/static/images/social/github.svg";
import LinkedIn from "@site/static/images/social/linkedin.svg";
import Medium from "@site/static/images/social/medium.svg";
import Twitter from "@site/static/images/social/twitter.svg";
import YouTube from "@site/static/images/social/youtube.svg";
import ThemedImage from "@theme/ThemedImage";
import { useEffect, useState } from "react";

export default function FooterComponent(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  const { colorMode } = useColorMode();
  const [canShowFooter, setCanShowFooter] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if footer can be shown
      const path = window.location.pathname;
      if (path.includes("quick-start")) {
        setCanShowFooter(false);
      }
    }
  }, []);

  if (!canShowFooter) return null;
  return (
    <footer className="footer" style={{ color: colorMode === "dark" ? undefined : "#415875" }}>
      <div className="container container--fluid">
        <div
          className="row footer__links"
          style={{
            paddingBottom: 82,
            borderBottomStyle: "solid",
            borderBottomColor: colorMode === "dark" ? "#5C6C7F" : "#E7E7E7",
          }}
        >
          <div className="col col--3" style={{ padding: 10 }}>
            <ThemedImage
              alt="Logo"
              sources={{
                light: `${baseUrl}images/logo.svg`,
                dark: `${baseUrl}images/logo-dark.svg`,
              }}
            />
            <p>
              Web3Auth is where passwordless auth meets non-custodial wallet infrastructure for Web3
              apps and wallets.
            </p>
            <div style={{ flexDirection: "row" }}>
              <a
                href="https://github.com/web3auth/web3auth-web"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://twitter.com/web3auth"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="http://discord.gg/web3auth"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <Discord />
              </a>
              <a
                href="https://youtube.com/c/web3auth"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <YouTube />
              </a>
              <a
                href="https://www.linkedin.com/company/web3auth"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="col col--1" />
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Product</strong>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/product/pnp">
                Plug & Play
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/product/core-kit">
                Core Kit
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://calendly.com/web3auth/meeting-with-web3auth"
                target="_blank"
                rel="noreferrer"
              >
                Enterprise Demo
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/pricing.html"
                target="_blank"
                rel="noreferrer"
              >
                Pricing
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://status.web3auth.io/"
                target="_blank"
                rel="noreferrer"
              >
                System Status
              </a>
            </div>
          </div>
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Developer</strong>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://dashboard.web3auth.io/"
                target="_blank"
                rel="noreferrer"
              >
                Dashboard
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs">
                Documentation
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/sdk">
                SDK Reference
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/guides">
                Guides
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/examples">
                Examples
              </a>
            </div>
          </div>
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Company</strong>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/about-us.html"
                target="_blank"
                rel="noreferrer"
              >
                About us
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/customers.html"
                target="_blank"
                rel="noreferrer"
              >
                Customers
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://jobs.lever.co/TorusLabs"
                target="_blank"
                rel="noreferrer"
              >
                Career
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/media-kit.html"
                target="_blank"
                rel="noreferrer"
              >
                Media Kit
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/contact-us.html"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Community</strong>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://web3auth.io/community/"
                target="_blank"
                rel="noreferrer"
              >
                Community Forum
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/contribute">
                Contribute
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/contribute/bug-bounty">
                Bug Bounty
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">Copyright © Torus Labs Pte Ltd 2024</div>
          <div className="col col-3" />
          <div className="col col-3">
            {" "}
            <a className="footer__link-item" href="/docs/legal/cookie-policy">
              Cookie Policy
            </a>{" "}
            |{" "}
            <a className="footer__link-item" href="/docs/legal/privacy-policy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="footer__link-item" href="/docs/legal/terms-and-conditions">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
