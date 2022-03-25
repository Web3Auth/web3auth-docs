import "./styles.css";

import OriginalDocItem from "@theme-original/DocItem";
import React from "react";

export default function DocItem(props: React.ComponentProps<typeof OriginalDocItem>) {
  return (
    <div className="torus-DocItem">
      <OriginalDocItem {...props} />
    </div>
  );
}
