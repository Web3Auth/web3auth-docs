import Logo from "@site/static/images/logo.svg";
import Discord from "@site/static/images/social/discord.svg";
import GitHub from "@site/static/images/social/github.svg";
import LinkedIn from "@site/static/images/social/linkedin.svg";
import Medium from "@site/static/images/social/medium.svg";
import Telegram from "@site/static/images/social/telegram.svg";
import Twitter from "@site/static/images/social/twitter.svg";
import YouTube from "@site/static/images/social/youtube.svg";

export default function FooterComponent() {
  return (
    <footer className="footer" style={{ color: "#415875" }}>
      <div className="container container--fluid">
        <div className="row footer__links" style={{ paddingBottom: 82, borderBottomStyle: "solid", borderBottomColor: "#E7E7E7" }}>
          <div className="col col--3" style={{ padding: 10 }}>
            <Logo style={{ width: 145 }} />
            <p>Web3Auth is where passwordless auth meets non-custodial key infrastructure for Web3 apps and wallets.</p>
            <div style={{ flexDirection: "row" }}>
              <a
                href="https://github.com/orgs/Web3Auth/discussions?discussions_q=sort%3Atop"
                style={{ marginRight: 8 }}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a href="https://twitter.com/web3auth" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a href="http://discord.gg/web3auth" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
                <Discord />
              </a>
              <a href="https://medium.com/toruslabs" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
                <Medium />
              </a>
              <a href="https://youtube.com/c/web3auth" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
                <YouTube />
              </a>
              <a href="https://t.me/web3auth" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
                <Telegram />
              </a>
              <a href="https://www.linkedin.com/company/web3auth" style={{ marginRight: 8 }} target="_blank" rel="noreferrer">
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
              <a className="footer__link-item" href="/docs/sdk/web/">
                Plug n Play
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="/docs/sdk/self-host/installation">
                Self-hosted
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://calendly.com/web3auth/meeting-with-web3auth" target="_blank" rel="noreferrer">
                Enterprise Demo
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://web3auth.io/pricing.html" target="_blank" rel="noreferrer">
                Pricing
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://status.web3auth.io/" target="_blank" rel="noreferrer">
                System Status
              </a>
            </div>
          </div>
          <div className="col col--2" style={{ padding: 10 }}>
            <div className="footer__item">
              <strong>Developer</strong>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://dashboard.web3auth.io/" target="_blank" rel="noreferrer">
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
              <a className="footer__link-item" href="https://web3auth.io/about-us.html" target="_blank" rel="noreferrer">
                About us
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://web3auth.io/partners.html" target="_blank" rel="noreferrer">
                Partners
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://jobs.lever.co/TorusLabs" target="_blank" rel="noreferrer">
                Career
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://web3auth.io/media-kit.html" target="_blank" rel="noreferrer">
                Media Kit
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://web3auth.io/contact-us.html" target="_blank" rel="noreferrer">
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
                href="https://github.com/web3auth/web3auth/discussions?discussions_q=sort%3Atop"
                target="_blank"
                rel="noreferrer"
              >
                Web3Auth Discussions Board
              </a>
            </div>
            <div className="footer__item">
              <a className="footer__link-item" href="https://discord.gg/web3auth" target="_blank" rel="noreferrer">
                Discord
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
          <div className="col col-6">Copyright © Torus Labs Pte Ltd 2022</div>
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
