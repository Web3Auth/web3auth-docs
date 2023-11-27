const axios = require("axios");
const hostedFileLinks = require("../../src/common/hostedFileLinks.json");
module.exports = (context, options) => ({
  name: "docusaurus-plugin-virtual-files",
  async loadContent() {
    const filenames = Object.values(hostedFileLinks);
    const fileContents = {};

    for (const filename of filenames) {
      var data;
      try {
        response = await axios.get(filename);
        data = response.data;
      } catch (e) {
        data = "";
        console.log(`Error fetching ${filename}: ${e}`);
      }
      if (typeof data !== "string") {
        data = JSON.stringify(data, null, 2);
      }
      fileContents[filename] = data;
    }
    return fileContents;
  },
  async contentLoaded({ content, actions }) {
    const { createData, addRoute } = actions;
    const files = await createData("files.json", JSON.stringify(content));
    addRoute({
      path: (process.env.REACT_APP_BASE_URL || "/docs/") + "integration-builder",
      component: "@site/src/pages/integration-builder",
      modules: {
        files,
      },
    });
  },
});
