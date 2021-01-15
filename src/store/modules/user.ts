import { Module } from 'vuex';
import { RootState } from '../';
import { login, LoginData, getUserInfo, UserInfo, Menu } from '@/api/login';

const TOKEN = 'token';

export interface State {
  token: string;
  username: string;
  nickname: string;
  roles: string[];
  menus: Menu[];
  avatar: string;
}

const initState: () => State = () => ({
  token: localStorage[TOKEN] || '',
  nickname: '',
  username: '',
  roles: [],
  menus: [],
  avatar: '',
});

const user: Module<State, RootState> = {
  state: initState(),
  mutations: {
    SET_TOKEN: (state, payload: string) => {
      state.token = payload;
      localStorage[TOKEN] = payload;
    },
    SET_USER_INFO: (state, payload: UserInfo) => {
      const { username, nickname, roles, menus, avatar } = payload;
      state.username = username;
      state.nickname = nickname;
      state.roles = roles;
      state.menus = menus;
      state.avatar = avatar || '';
    },
  },
  actions: {
    async login({ commit }, loginData: LoginData) {
      const { data: { token } } = await login(loginData);
      commit('SET_TOKEN', token);
    },
    async getUserInfo({ commit }) {
      const { data } = await getUserInfo();
      commit('SET_USER_INFO', data);
    },
  },
  getters: {
    token: state => state.token,
    menus: state => state.menus,
  },
};

export default user;
