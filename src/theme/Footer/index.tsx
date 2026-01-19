import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Discord from "@site/static/images/social/discord.svg";
import GitHub from "@site/static/images/social/github.svg";
import LinkedIn from "@site/static/images/social/linkedin.svg";
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
          <div className="col col--2" style={{ padding: 10 }}>
            <ThemedImage
              alt="Logo"
              sources={{
                light: `${baseUrl}images/logo.svg`,
                dark: `${baseUrl}images/logo-dark.svg`,
              }}
              style={{
                width: "160px",
                height: "auto",
              }}
            />
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href="https://github.com/web3auth/web3auth-web"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://x.com/MetaMaskDev"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.youtube.com/@MetaMaskDeveloper"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <YouTube />
              </a>
            </div>
          </div>
          <div className="col col--4" />
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Product</strong>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://docs.metamask.io/embedded-wallets/sdk/"
              >
                Web
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://docs.metamask.io/embedded-wallets/sdk/android"
              >
                Mobile
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://docs.metamask.io/embedded-wallets/sdk/unity"
              >
                Gaming
              </a>
            </div>
            <div className="footer__item">
              <a
                className="footer__link-item"
                href="https://docs.metamask.io/embedded-wallets/sdk/node"
              >
                Backend
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
              <a
                className="footer__link-item"
                href="https://web3auth.io/pricing.html"
                target="_blank"
                rel="noreferrer"
              >
                Pricing
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
                href="https://web3auth.io/contact-us.html"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-6">© 2025 MetaMask • A Consensys Formation</div>
          <div className="col col-3" />
          <div className="col col-3">
            {" "}
            <a
              className="footer__link-item"
              href="https://consensys.io/privacy-notice/cookies"
              target="_blank"
              rel="noreferrer"
            >
              Cookie Policy
            </a>{" "}
            |{" "}
            <a
              className="footer__link-item"
              href="https://consensys.io/privacy-notice"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              className="footer__link-item"
              href="https://consensys.io/terms-of-use"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
