module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    },
    devServer: {
      host: '0.0.0.0',
      public:'http://118.250.68.129:8080',
      port: 8080,
      https: false,
      hotOnly: false,
      disableHostCheck:true,
      open: true 
   
  },
  }
}