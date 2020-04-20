import { getUserInfo, logout } from '@/api/user';

const menus = [
  {
    path: '/nested',
    title: '嵌套路由',
    icon: 'bars',
    children: [
      {
        path: 'menu1',
        title: 'menu1',
      },
      {
        path: 'menu2',
        title: 'menu2',
        children: [
          {
            path: 'menu2-1',
            title: 'menu2-1',
          },
        ]
      }
    ]
  }
];

const user = {
  namespaced: true,
  state: {
    userId: null,
    roles: [],
    avatar: '',
    name: '',
    permissionMenus: menus
  },
  mutations: {
    SET_USER_INFO: (state, payload) => {
      const { userId, name, roles, avatar } = payload;
      state.userId = userId;
      state.name = name;
      state.roles = roles;
      state.avatar = avatar;
    },
    RESET_USER_INFO: (state) => {
      state.userId = null;
      state.name = null;
      state.roles = [];
      state.avatar = '';
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      const data = await getUserInfo();
      const { roles } = data;
      commit('SET_USER_INFO', data);
      return roles;
    },
    logout({ commit }) {
      commit('RESET_USER_INFO');
      logout();
    }
  }
};
export default user;
