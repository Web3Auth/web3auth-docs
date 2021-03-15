import React from "react";
import OriginalDocItem from "@theme-original/DocItem";
import "./styles.css";

export default function DocItem(
  props: React.ComponentProps<typeof OriginalDocItem>
) {
  return (
    <div className="torus-DocItem">
      <OriginalDocItem {...props} />
    </div>
  );
}
