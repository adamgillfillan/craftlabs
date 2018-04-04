import Api from './api';

export default {
  register(params) {
    return Api().post('register', params);
  },
  login(params) {
    return Api().post('login', params);
  },
  logout() {
    return Api().get('logout');
  },
  getUser() {
    return Api().get('user');
  },
};
