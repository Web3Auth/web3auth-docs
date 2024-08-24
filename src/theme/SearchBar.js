import React, { useEffect } from "react";
export default function () {
  useEffect(() => {
    console.log("Search loaded");
    docuscout({
      container: document.getElementById("docuscout-search-bar"),
      environment: window,
      siteAPIKey: "49c1e019f19942ab486a92288af15572b165fee9",
    });
  }, []);

  return <div id="docuscout-search-bar"></div>;
}
