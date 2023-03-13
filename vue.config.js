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
  configureWebpack:{
    mode: 'development',
    devtool: false,
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
          priority: -10,
            reuseExistingChunk: true,
          },
        },
           
        chunks: 'all',
        minSize: 15000,
        maxSize: 250000,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        
      },
    
     
    },  
  

  }
,



};
