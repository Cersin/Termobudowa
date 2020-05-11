<template>
  <div class="home">
      <floatingMenu/>
      <company/>
      <about id="about"/>
      <contact id="contact"/>
      <googlemap id="googlemap"/>
  </div>
</template>

<script>

import Company from "../components/company";
import About from "../components/about";
import Contact from "../components/contact";
import Googlemap from "../components/googlemap";
import FloatingMenu from "../components/floatingMenu";

export default {
  name: 'Home',
  components: {
      FloatingMenu,
      Googlemap,
      Contact,
      About,
    Company
  }
}
</script>
