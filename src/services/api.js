import axios from 'axios';

export default() => axios.create({
  // baseURL: 'http://localhost:8080/v1/',
  baseURL: 'http://craftlabs.herokuapp.com/v1/',
});
