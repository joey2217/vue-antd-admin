// import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const collapsedKey = 'VUE_ANTD_ADMIN_COLLAPSED_KEY';
const localeKey = 'VUE_ANTD_ADMIN_LOCAL_KEY';

const app = {
  namespaced: true,
  state: {
    collapsed: localStorage[collapsedKey] === 1 || false,
    locale: (localStorage[localeKey] && JSON.parse(localStorage[localeKey])) || zhCN
  },
  mutations: {
    TOGGLE_COLLAPSED: (state) => {
      state.collapsed = !state.collapsed;
      localStorage[collapsedKey] = state.collapsed ? 1 : 0;
    },
    SWITCH_LOCALE: (state, localeValue) => {
      state.locale = localeValue;
      localStorage[localeKey] = JSON.stringify(localeValue);
    }
  },
  actions: {

  }
};
export default app;
