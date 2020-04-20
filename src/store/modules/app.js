
const collapsedKey = 'VUE_ANTD_ADMIN_COLLAPSED_KEY';

const app = {
  namespaced: true,
  state: {
    collapsed: localStorage[collapsedKey] === '1' || false,
  },
  mutations: {
    TOGGLE_COLLAPSED: (state) => {
      state.collapsed = !state.collapsed;
      localStorage[collapsedKey] = state.collapsed ? 1 : 0;
    },
  },
  actions: {

  }
};
export default app;
