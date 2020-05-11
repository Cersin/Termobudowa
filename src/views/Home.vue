<template>
  <div class="home">
<company/>

      <about/>
      <contact/>

  </div>
</template>

<script>

import Company from "../components/company";
import About from "../components/about";
import Contact from "../components/contact";

export default {
  name: 'Home',
  components: {
      Contact,
      About,
    Company
  }
}
</script>
