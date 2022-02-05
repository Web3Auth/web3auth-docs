import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface Props {
  guides: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      order: number;
      category: string;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  // const sortedGuides = Object.entries(guides).sort(
  //   ([, a], [, b]) => a.order - b.order
  // );

  const appGuides = Object.entries(guides)
    .sort(([, a], [, b]) => a.order - b.order)
    .filter(([, a]) => a.category === "app" || a.category === "walletAndApp");
  const walletGuides = Object.entries(guides)
    .sort(([, a], [, b]) => a.order - b.order)
    .filter(([, a]) => a.category === "wallet" || a.category === "walletAndApp");
  const authGuides = Object.entries(guides)
    .sort(([, a], [, b]) => a.order - b.order)
    .filter(([, a]) => a.category === "auth");
  const miscGuides = Object.entries(guides)
    .sort(([, a], [, b]) => a.order - b.order)
    .filter(([, a]) => a.category === "misc");

  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>Quick-start with your usecase and stack</p>
        <hr />
      </header>
      <header className={styles.header} id="apps">
        <h2>For apps</h2>
      </header>

      <div className={styles.container}>
        {appGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <h3>{guide.title}</h3>
              {/* <p>{guide.description}</p> */}
            </div>
          </Link>
        ))}
      </div>

      <header className={styles.header} id="wallets">
        <h2>For wallets</h2>
      </header>
      <div className={styles.container}>
        {walletGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <h3>{guide.title}</h3>
              {/* <p>{guide.description}</p> */}
            </div>
          </Link>
        ))}
      </div>

      <header className={styles.header} id="auth">
        <h2>Using your own auth</h2>
      </header>

      <div className={styles.container}>
        {authGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <h3>{guide.title}</h3>
              {/* <p>{guide.description}</p> */}
            </div>
          </Link>
        ))}
      </div>

      <header className={styles.header} id="blockchains">
        <h2>Blockchain guides</h2>
      </header>

      <div className={styles.container}>
        {miscGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <h3>{guide.title}</h3>
              {/* <p>{guide.description}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
