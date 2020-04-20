import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/antd';

// mock
import mock from '../mock';
if (process.env.NODE_ENV === 'production') {
  mock();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
