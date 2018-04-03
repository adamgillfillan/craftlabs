<template>
  <v-app>
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="deep-purple darken-">
      <v-toolbar-side-icon
        @click="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="craftlabs__link">craftlabs</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: 'face', title: 'Register', link: '/register' },
        { icon: 'lock_open', title: 'Login', link: '/login' },
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'store', title: 'View Store', link: '/store' },
          { icon: 'person', title: 'Profile', link: '/profile' },
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return !!this.$store.getters.user;
    },
  },
};
</script>

<style>
  .craftlabs__link {
    cursor: pointer;
  }
</style>
