const path = require("path");
const fs = require("fs");
const util = require("util");
const glob = require("glob");
const joi = require("joi");

const globAsync = util.promisify(glob);
const readFileAsync = util.promisify(fs.readFile);

module.exports = (context, options) => ({
  name: "docusaurus-plugin-virtual-files",
  async loadContent() {
    const dir = path.resolve(context.siteDir, options.rootDir);

    const filenames = await globAsync("**/*", { cwd: dir, nodir: true });
    const fileContents = {};

    for (const filename of filenames) {
      fileContents[filename] = await readFileAsync(path.join(dir, filename), "utf-8");
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

module.exports.validateOptions = ({ options, validate }) =>
  validate(
    joi.object({
      rootDir: joi.string().required(),
    }),
    options
  );
