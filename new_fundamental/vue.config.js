const { defineConfig } = require("@vue/cli-service");
const { HotModuleReplacementPlugin } = require("webpack");
module.exports = {


  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/styles.scss";
         
        `
      },
    },
  },
};
