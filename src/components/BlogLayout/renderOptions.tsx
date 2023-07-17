import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import styles from "./styles.module.css";

// https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/
const renderOptions = (links) => {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  for (const asset of links.entries.inline) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get((node as any).data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt={asset.description} />;
      },
      [INLINES.HYPERLINK]: (node: any) => {
        return (
          <a
            href={(node as any).data.uri}
            target={`${(node as any).data.uri.startsWith("https://web3auth.io") ? "_self" : "_blank"}`}
            rel={`${(node as any).data.uri.startsWith("https://web3auth.io") ? "" : "noopener noreferrer"}`}
          >
            {(node as any).content[0].value}
          </a>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        const asset = assetMap.get((node as any).data.target.sys.id);

        return <div className={styles.embed} dangerouslySetInnerHTML={{ __html: asset.code }} />;
      },
    },
  };
};

export default renderOptions;
