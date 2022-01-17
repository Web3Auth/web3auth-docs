import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export interface Tile {
  key: string;
  title: string;
  icon: string;
  path: string;
}

export interface TileGroup {
  name: string;
  description: string;
  tiles: Tile[];
}

export default function Tiles(props) {
  return (
    <>
      {props.tileGroups.map((group: TileGroup) => (
        <div key={group.name} className={styles.tileGroup}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <div className={styles.tileGroupContent}>
            {group.tiles.map((tile: Tile) => (
              <Link
                key={tile.key}
                className={styles.tile}
                to={tile.path}
              >
                <img
                  className={styles.tileIcon}
                  src={`/contents/${tile.icon}`}
                  alt={tile.icon}
                />
                <div className={styles.tileText}>{tile.title}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
