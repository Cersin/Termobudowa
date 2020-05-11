<template>
  <div class="home">
<company/>

      <about/>
      <contact/>
      <googlemap/>
  </div>
</template>

<script>

import Company from "../components/company";
import About from "../components/about";
import Contact from "../components/contact";
import Googlemap from "../components/googlemap";

export default {
  name: 'Home',
  components: {
      Googlemap,
      Contact,
      About,
    Company
  }
}
</script>
