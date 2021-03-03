module.exports = () => ({
  configureWebpack(config, isServer, utils) {
    const { getCacheLoader, getBabelLoader } = utils;
    return {
      module: {
        rules: [
          {
            test: /\.component.mdx$/,
            use: [
              getCacheLoader(isServer),
              getBabelLoader(isServer),
              require.resolve("@docusaurus/mdx-loader"),
            ],
          },
        ],
      },
    };
  },
});
