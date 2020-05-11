<template >
  <v-app>
    <navbar/>
      <v-content>
       <router-view/>
      </v-content>
<nav_footer/>
  </v-app>
</template>

<script>
  import nav_footer from "./components/nav_footer";
  import navbar from "./components/navbar";
export default {
  name: 'App',

  components: {
    navbar,
    nav_footer
  },

  data: () => ({
    //
  }),
};
</script>

