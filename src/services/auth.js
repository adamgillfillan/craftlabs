import Api from './api';

export default {
  register(params) {
    return Api().post('register', params);
  },
};
