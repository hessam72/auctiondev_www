const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#165380", "@primary": "#165380" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
