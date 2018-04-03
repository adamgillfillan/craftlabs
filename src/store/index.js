/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../services/auth';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    logout(state) {
      console.log('setting user state to null');
      state.user = null;
    },
  },
  actions: {
    signUserUp({ commit }, payload) {
      auth.register({
        username: payload.username,
        password: payload.password,
      })
        .then((res) => {
          commit('setUser', res.data.user.id);
        })
        .catch((err) => {
          console.error('err: ', err);
        });
    },
    signUserIn({ commit }, payload) {
      auth.login({
        username: payload.username,
        password: payload.password,
      })
        .then((res) => {
          commit('setUser', res.data.user.id);
        })
        .catch((err) => {
          console.error('err: ', err);
        });
    },
    logout({ commit }) {
      auth.logout()
        .then(() => {
          commit('logout');
        })
        .catch((err) => {
          console.error('err: ', err);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});

export default 'store';
