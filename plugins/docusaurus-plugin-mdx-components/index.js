const path = require("path");
const joi = require("joi");

module.exports = (context, options) => ({
  name: "docusaurus-plugin-mdx-components",
  configureWebpack(config, isServer, utils) {
    const { getCacheLoader, getBabelLoader } = utils;
    return {
      module: {
        rules: [
          {
            test: /\.mdx$/,
            include: [path.resolve(context.siteDir, options.rootDir)],
            use: [getCacheLoader(isServer), getBabelLoader(isServer), require.resolve("@docusaurus/mdx-loader")].filter((it) => !!it),
          },
        ],
      },
    };
  },
});

module.exports.validateOptions = ({ options, validate }) =>
  validate(
    joi.object({
      rootDir: joi.string().default("src"),
    }),
    options
  );
