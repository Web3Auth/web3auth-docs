import Logo from "@site/static/images/logo.svg";
import Discord from "@site/static/images/social/discord.svg";
import GitHub from "@site/static/images/social/github.svg";
import LinkedIn from "@site/static/images/social/linkedin.svg";
import Medium from "@site/static/images/social/medium.svg";
import Telegram from "@site/static/images/social/telegram.svg";
import Twitter from "@site/static/images/social/twitter.svg";
import YouTube from "@site/static/images/social/youtube.svg";

export default function FooterComponent() {
  if (window.location.pathname.startsWith("/docs/integration-builder")) return <div />;

  return (
    <footer class="footer" style={{ color: "#415875" }}>
      <div class="container container--fluid">
        <div class="row footer__links" style={{ paddingBottom: 82, borderBottomStyle: "solid", borderBottomColor: "#E7E7E7" }}>
          <div class="col col--3" style={{ padding: 10, paddingTop: 0 }}>
            <Logo style={{ width: 145 }} />
            <p>Web3Auth is where passwordless auth meets non-custodial key infrastructure for Web3 apps and wallets.</p>
            <div style={{ flexDirection: "row" }}>
              <a href="/docs/api-reference/web/">
                <Telegram />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <Twitter />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <Medium />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <GitHub />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <LinkedIn />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <YouTube />
              </a>
              <a href="/docs/api-reference/web/" style={{ marginLeft: 8 }}>
                <Discord />
              </a>
            </div>
          </div>
          <div class="col col--1"></div>
          <div class="col col--2" style={{ padding: 10 }}>
            <div class="footer__item">
              <strong>Product</strong>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/api-reference/web/">
                Plug n Play
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/api-reference/self-host/introduction">
                Self-hosted
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://calendly.com/web3auth/meeting-with-web3auth" target={"_blank"}>
                Enterprise Demo
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://web3auth.io/pricing.html" target={"_blank"}>
                Pricing
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://status.web3auth.io/" target={"_blank"}>
                System Status
              </a>
            </div>
          </div>
          <div class="col col--2" style={{ padding: 10 }}>
            <div class="footer__item">
              <strong>Developer</strong>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://dashboard.web3auth.io/" target={"_blank"}>
                Dashboard
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs">
                Documentation
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/api-reference">
                API Reference
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/guides">
                Guides
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/examples">
                Examples
              </a>
            </div>
          </div>
          <div class="col col--2" style={{ padding: 10 }}>
            <div class="footer__item">
              <strong>Company</strong>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://web3auth.io/about-us.html" target={"_blank"}>
                About us
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://web3auth.io/partners.html" target={"_blank"}>
                Partners
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://jobs.lever.co/TorusLabs" target={"_blank"}>
                Career
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://web3auth.io/media-kit.html" target={"_blank"}>
                Media Kit
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://web3auth.io/contact-us.html" target={"_blank"}>
                Contact Us
              </a>
            </div>
          </div>
          <div class="col col--2" style={{ padding: 10 }}>
            <div class="footer__item">
              <strong>Community</strong>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://t.me/web3authdev" target={"_blank"}>
                Telegram Developer
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="https://discord.gg/web3auth" target={"_blank"}>
                Discord
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/contribute">
                Contribute
              </a>
            </div>
            <div class="footer__item">
              <a class="footer__link-item" href="/docs/contribute/bug-bounty">
                Bug Bounty
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-6">Copyright © Torus Labs Pte Ltd 2022</div>
          <div class="col col-3"></div>
          <div class="col col-3">
            {" "}
            <a class="footer__link-item" href="/docs/legal/cookie-policy">
              Cookie Policy
            </a>{" "}
            |{" "}
            <a class="footer__link-item" href="/docs/legal/privacy-policy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a class="footer__link-item" href="/docs/legal/terms-and-conditions">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
