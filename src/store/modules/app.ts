import { Module } from 'vuex';
import { RootState } from '../index';

const COLLAPSED = 'collapsed';

export interface AppState {
  collapsed: boolean;
}
const initState: () => AppState = () => ({
  collapsed: localStorage[COLLAPSED] === 'T',
});

const app: Module<AppState, RootState> = {
  state: initState(),
  mutations: {
    TOGGLE_COLLAPSE: (state, payload?: boolean) => {
      state.collapsed = payload || !state.collapsed;
      localStorage[COLLAPSED] = state.collapsed ? 'T' : 'F';
    },
  },
};

export default app;
