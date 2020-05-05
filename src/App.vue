<template>
  <v-app>
    <navbar/>

    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from "./components/navbar";
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
