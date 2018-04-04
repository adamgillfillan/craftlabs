<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <form @submit.prevent="register">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      prepend-icon="person"
                      name="username"
                      label="Username"
                      id="username"
                      v-model="username"
                      type="text"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      prepend-icon="lock"
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">Sign Up</v-btn>
                </v-card-actions>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : '';
    },
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'Shop' });
      }
    },
  },
  methods: {
    register() {
      this.$store.dispatch('signUserUp', { username: this.username, password: this.password });
    },
  },
};
</script>
