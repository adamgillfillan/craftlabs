<template>
  <div></div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'Logout',
  mounted() {
    this.$store.dispatch('logout');
    this.$router.push({ name: 'Home' });
  },
};
</script>
