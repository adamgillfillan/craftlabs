<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username</label>
        <input id="username" type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <div v-if="errorMsg">{{ errorMsg }}</div>
      <!--<div>-->
        <!--<button type="submit">Sign up</button>-->
      <!--</div>-->
    </form>
  </div>
</template>

<script>
/* eslint-disable no-console,no-alert */

import auth from '../../services/auth';

export default {
  name: 'Register',
  data() {
    return {
      msg: 'Register brah',
      username: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    async register() {
      try {
        const register2 = await auth.register({
          username: this.username,
          password: this.password,
        });

        console.log('register2', register2);

        // on register, redirect them to the store page
        // this.$router.push({ name: 'Store })
      } catch (error) {
        console.log('error', error.response);
        this.errorMsg = error.response.data.message;
        // alert(error.response.data.message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
