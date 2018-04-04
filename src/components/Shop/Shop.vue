<template>
  <v-container>
    <v-layout row v-if="!hasShop">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="login">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="shopName"
                      label="Shop Name"
                      id="shopName"
                      v-model="shopName"
                      type="text"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Add</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Shop',
  data() {
    return {
      shopName: '',
      hasShop: false,
    };
  },
  computed: {
    shop() {
      return this.$store.getters.shop;
    },
  },
  watch: {
    shop(value) {
      if (value !== null && value !== undefined) {
        this.hasShop = true;
      }
    },
  },
  methods: {
    addShop() {
      this.$store.dispatch('addShop', { shopName: this.shopName });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
