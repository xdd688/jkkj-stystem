import { createStore } from "vuex";
//vuex持久化插件
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  state() {
    return {
      userInfo: {},
    };
  },
  mutations: {
    updataUserInfo(state, user) {
      state.userInfo = user;
    },
  },
  actions: {},
  getters: {},
  modules: {},
  // vuex配置插件
  plugins: [
    createPersistedState({
      reducer: (state) => {
        return {
          userInfo: state.userInfo,
        };
      },
    }),
  ],
});
export default store;
