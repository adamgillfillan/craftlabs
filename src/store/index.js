/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import auth from '../services/auth';
// import shop from '../services/shop';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    shop: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = null;
    },
    setShop(state, payload) {
      console.log('setting store to: ', payload);
      state.store = payload;
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
    logUserIn({ commit }, id) {
      commit('setUser', id);
    },
    // addShop({ commit }, payload) {
    //
    // },
  },
  getters: {
    user(state) {
      return state.user;
    },
    shop(state) {
      return state.shop;
    },
  },
});

export default 'store';
