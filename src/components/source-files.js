import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./source-files.module.css";

export default function SourceFilesView() {
  return (
    <Tabs
      defaultValue="apple"
      values={[
        { label: "App.js", value: "App.js" },
        {
          label: "serviceworker/redirect.html",
          value: "serviceworker/redirect.html",
        },
        { label: "serviceworker/sw.js", value: "serviceworker/sw.js" },
      ]}
    >
      <TabItem value="App.js">App.js</TabItem>
      <TabItem value="serviceworker/redirect.html">
        serviceworker/redirect.html
      </TabItem>
      <TabItem value="serviceworker/sw.js">serviceworker/sw.js</TabItem>
    </Tabs>
  );
}
