/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV === 'development',
  devServer: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'https://vue-element-admin-plus.vercel.app/',
      },
    },
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'VueAntdAdmin';
        return args;
      });

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch');

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial',
                },
                antdVue: {
                  name: 'chunk-ant-design-vue',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?ant-design-vue(.*)/,
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.join(__dirname, 'src/components'),
                  minChunks: 3,
                  priority: 5,
                  reuseExistingChunk: true,
                },
              },
            });
          config.optimization.runtimeChunk('single');
        },
      );
  },
};
