// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mock-server-eight.now.sh/api/vue-antd-admin/',
        changeOrigin: true
      },
    }
  }
};
