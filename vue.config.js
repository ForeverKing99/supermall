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
  },
  // 修改本地服务器公网ip地址
  devServer: {
    public: '118.250.68.129:8080'
  },
}