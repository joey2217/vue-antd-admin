// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mock-server-eight.now.sh/api/react-antd-admin/',
        changeOrigin: true
      },
    }
  }
};
