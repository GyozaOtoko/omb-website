import { createStore } from 'vuex';

const store = createStore({
  state: {
      inscriptions: [],
  },
  mutations: {
    setInscriptions(state, inscriptions) {
        state.inscriptions = inscriptions;
    }
  },
  actions: {
    // setAccessToken({ commit }, accessToken) {
    //   commit('setAccessToken', accessToken);
    // }
  },
  getters: {
    // isAuthenticated: (state) => !!state.accessToken.token,
  },
});

export default store;