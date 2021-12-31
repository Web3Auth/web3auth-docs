import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classNames from "classnames";
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

  const appGuides = Object.entries(guides).sort(
    ([, a], [, b]) => a.order - b.order
  ).filter(([,a])=> a.category === "app")
  const walletGuides = Object.entries(guides).sort(
    ([, a], [, b]) => a.order - b.order
  ).filter(([,a])=> a.category === "wallet")
  const authGuides = Object.entries(guides).sort(
    ([, a], [, b]) => a.order - b.order
  ).filter(([,a])=> a.category === "auth")
  const miscGuides = Object.entries(guides).sort(
    ([, a], [, b]) => a.order - b.order
  ).filter(([,a])=> a.category === "misc")

  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length} posts</p>
        <hr />
      </header>
      <header className={styles.header}>
        <h2>For apps</h2>
      </header>


      <div className={styles.container}>
        {appGuides.map(([key, guide]) => (
            <Link key={key} className={styles.article} to={`/guides/${key}`}>
              <img src={guide.image} alt="Banner" />
              <div className={styles.contentContainer}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            </Link>
        ))}
      </div>

      <header className={styles.header}>
        <h2>For wallets</h2>
      </header>
      <div className={styles.container}>
        {walletGuides.map(([key, guide]) => (
            <Link key={key} className={styles.article} to={`/guides/${key}`}>
              <img src={guide.image} alt="Banner" />
              <div className={styles.contentContainer}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            </Link>
        ))}
      </div>

      <header className={styles.header}>
        <h2>Using your own auth</h2>
      </header>

      <div className={styles.container}>
        {authGuides.map(([key, guide]) => (
            <Link key={key} className={styles.article} to={`/guides/${key}`}>
              <img src={guide.image} alt="Banner" />
              <div className={styles.contentContainer}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            </Link>
        ))}
      </div>

      <header className={styles.header}>
        <h2>Blockchain guides</h2>
      </header>

      <div className={styles.container}>
        {miscGuides.map(([key, guide]) => (
            <Link key={key} className={styles.article} to={`/guides/${key}`}>
              <img src={guide.image} alt="Banner" />
              <div className={styles.contentContainer}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
              </div>
            </Link>
        ))}
      </div>



    </Layout>
  );
}
