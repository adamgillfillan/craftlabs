/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import Auth from '../services/auth';
import Shop from '../services/shop';

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
  },
  actions: {
    async signUserUp({ commit }, payload) {
      try {
        const user = await Auth.register({
          username: payload.username,
          password: payload.password,
        });
        if (user) {
          commit('setUser', user.data);
        }
      } catch (err) {
        console.error('error', err);
      }
    },
    async signUserIn({ commit }, payload) {
      try {
        const user = await Auth.login({
          username: payload.username,
          password: payload.password,
        });
        if (user) {
          commit('setUser', user.data);
        }
      } catch (err) {
        console.error('error', err);
      }
    },
    async logout({ commit }) {
      try {
        const res = await Auth.logout();
        if (res) {
          commit('logout');
        }
      } catch (err) {
        console.error('error', err);
      }
    },
    logUserIn({ commit }, user) {
      commit('setUser', user);
    },
    async addShop({ commit }, shopName) {
      try {
        const user = await Shop.addShop(shopName);
        if (user) {
          commit('setUser', user.data);
        }
      } catch (err) {
        console.error('error', err);
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    shop(state) {
      return state.user ? state.user.shopName : null;
    },
  },
});

export default 'store';
