import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import SEO from "../../components/SEO";
import styles from "./styles.module.css";

interface Props {
  guides: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      type: string;
      tags: string[];
      date: string;
      author: string;
      order: number;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  const sortedGuides = Object.entries(guides).sort(([, a], [, b]) => a.order - b.order);
  return (
    <Layout title="Guides">
      <SEO
        title="Guides"
        description="Guides | Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."
        image="https://web3auth.io/docs/images/docs-meta-cards/guides-card.png"
        slug="/guides"
      />

      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length + 25} posts</p>
        <hr />
      </header>
      <div className={styles.container}>
        {sortedGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <span className={styles.type}>{guide.type}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              {guide.tags &&
                guide.tags.map((item, index) => {
                  if (index === guide.tags.length - 1) {
                    return (
                      <span key={item}>
                        <code className={styles.tag}>{item}</code>
                        <br />
                      </span>
                    );
                  }
                  return (
                    <code key={item} className={styles.tag}>
                      {item}
                    </code>
                  );
                })}
              <span className={styles.date}>
                {guide.author} | {guide.date}
              </span>
            </div>
          </Link>
        ))}
        <Link className={styles.article} to="/docs/integration-builder?lang=react&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/react.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a React Application</h3>
            <p>Learn how to add a non custodial web3 login to a React Applications using Web3Auth.</p>
            <code className={styles.tag}>react</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=next&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/nextjs.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a Next.js Application</h3>
            <p>Learn how to add a non custodial web3 login to a Next.js Applications using Web3Auth.</p>
            <code className={styles.tag}>next.js</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=angular&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/angular.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a Angular Application</h3>
            <p>Learn how to add a non custodial web3 login to a Angular Applications using Web3Auth.</p>
            <code className={styles.tag}>angular</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=html&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/htmljs.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a HTML/JS Application</h3>
            <p>Learn how to add a non custodial web3 login to a HTML/JS Applications using Web3Auth.</p>
            <code className={styles.tag}>html</code>
            <code className={styles.tag}>js</code>
            <code className={styles.tag}>javascript</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=vue&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/vue.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a Vue.js Application</h3>
            <p>Learn how to add a non custodial web3 login to a Vue.js Applications using Web3Auth.</p>
            <code className={styles.tag}>vue</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=android&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/android.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in an Android Application</h3>
            <p>Learn how to add a non custodial web3 login to an Android Applications using Web3Auth.</p>
            <code className={styles.tag}>android</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=ios&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/ios-swift.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in an iOS/Swift Application</h3>
            <p>Learn how to add a non custodial web3 login to an iOS/Swift Applications using Web3Auth.</p>
            <code className={styles.tag}>ios</code>
            <code className={styles.tag}>swift</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=flutter&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/flutter.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a Flutter Application</h3>
            <p>Learn how to add a non custodial web3 login to a Flutter Applications using Web3Auth.</p>
            <code className={styles.tag}>flutter</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=react-native&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/react-native.svg" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>INTEGRATION BUILDER</span>
            <h3>How to Implement Web3Auth in a React Native Application</h3>
            <p>Learn how to add a non custodial web3 login to a React Native Applications using Web3Auth.</p>
            <code className={styles.tag}>react native</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/ethereum">
          <img src="/docs/contents/guides/banners/ethereum.svg" alt="Banner ethereum" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Ethereum Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Ethereum Blockchain</p>
            <code className={styles.tag}>ethereum</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/solana">
          <img src="/docs/contents/guides/banners/solana.svg" alt="Banner solana" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Solana Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Solana Blockchain</p>
            <code className={styles.tag}>solana</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/starkex">
          <img src="/docs/contents/guides/banners/starkex.svg" alt="Banner starkex" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the StarkEx Blockchain</h3>
            <p>Learn how to add a non custodial social login to the StarkEx Blockchain</p>
            <code className={styles.tag}>starkex</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/starknet">
          <img src="/docs/contents/guides/banners/starknet.svg" alt="Banner starknet" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the StarkNet Blockchain</h3>
            <p>Learn how to add a non custodial social login to the StarkNet Blockchain</p>
            <code className={styles.tag}>starknet</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/polygon">
          <img src="/docs/contents/guides/banners/polygon.svg" alt="Banner polygon" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Polygon Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Polygon Blockchain</p>
            <code className={styles.tag}>polygon</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/tezos">
          <img src="/docs/contents/guides/banners/tezos.svg" alt="Banner tezos" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Tezos Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Tezos Blockchain</p>
            <code className={styles.tag}>tezos</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/avalanche">
          <img src="/docs/contents/guides/banners/avalanche.svg" alt="Banner avalanche" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Avalanche Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Avalanche Blockchain</p>
            <code className={styles.tag}>avalanche</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/bnb">
          <img src="/docs/contents/guides/banners/binance.svg" alt="Banner binance" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Binance Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Binance Blockchain</p>
            <code className={styles.tag}>binance</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/optimism">
          <img src="/docs/contents/guides/banners/optimism.svg" alt="Banner optimism" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Optimism Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Optimism Blockchain</p>
            <code className={styles.tag}>optimism</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/arbitrum">
          <img src="/docs/contents/guides/banners/arbitrum.svg" alt="Banner arbitrum" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Arbitrum Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Arbitrum Blockchain</p>
            <code className={styles.tag}>arbitrum</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/cronos">
          <img src="/docs/contents/guides/banners/cronos.svg" alt="Banner cronos" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Cronos Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Cronos Blockchain</p>
            <code className={styles.tag}>cronos</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/harmony">
          <img src="/docs/contents/guides/banners/harmony.svg" alt="Banner harmony" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Harmony Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Harmony Blockchain</p>
            <code className={styles.tag}>harmony</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/celo">
          <img src="/docs/contents/guides/banners/celo.svg" alt="Banner celo" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Celo Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Celo Blockchain</p>
            <code className={styles.tag}>celo</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/moonbeam">
          <img src="/docs/contents/guides/banners/moonbeam.svg" alt="Banner moonbeam" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Moonbeam Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Moonbeam Blockchain</p>
            <code className={styles.tag}>moonbeam</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>

        <Link className={styles.article} to="/docs/connect-blockchain/moonriver">
          <img src="/docs/contents/guides/banners/moonriver.svg" alt="Banner moonriver" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Moonriver Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Moonriver Blockchain</p>
            <code className={styles.tag}>moonriver</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/klaytn">
          <img src="/docs/contents/guides/banners/klaytn.svg" alt="Banner klaytn" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>REFERENCE</span>
            <h3>Integrate Web3Auth with the Klaytn Blockchain</h3>
            <p>Learn how to add a non custodial social login to the Klaytn Blockchain</p>
            <code className={styles.tag}>klaytn</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
