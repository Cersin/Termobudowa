<template >
  <v-app>
    <navbar/>
      <v-content>
       <router-view
       data-aos="fade-up"
       data-aos-easing="ease-in-out"
       data-aos-duration="1000"
       />
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

