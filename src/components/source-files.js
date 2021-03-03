import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "./code-block";

const code = `(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`;

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
      <TabItem value="App.js">
        <CodeBlock code={code} language="jsx" />
      </TabItem>
      <TabItem value="serviceworker/redirect.html">
        serviceworker/redirect.html
      </TabItem>
      <TabItem value="serviceworker/sw.js">serviceworker/sw.js</TabItem>
    </Tabs>
  );
}
