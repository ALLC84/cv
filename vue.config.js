const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/index.scss";
        `,
      },
    },
  },
};
