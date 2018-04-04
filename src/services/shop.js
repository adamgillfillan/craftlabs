/* eslint-disable no-console */
import Api from './api';

export default {
  addShop(params) {
    console.log('add store with params: ', params);
    return Api().post('addshop', params);
  },
};
