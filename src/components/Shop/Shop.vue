<template>
  <v-container>
    <v-layout row v-if="!shop">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="addShop">
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
    <v-layout row v-if="shop">
      <v-flex xs10 offset-xs1>
        Welcome to your store!
        <!--<v-card>-->
          <!--<v-card-text>-->
            <!--<v-container>-->
              <!--Welcome to your store!-->
            <!--</v-container>-->
          <!--</v-card-text>-->
        <!--</v-card>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: 'Shop',
  data() {
    return {
      shopName: '',
    };
  },
  computed: {
    shop() {
      return this.$store.getters.shop;
    },
  },
  methods: {
    addShop() {
      this.$store.dispatch('addShop', { shopName: this.shopName });
    },
  },
};
</script>
