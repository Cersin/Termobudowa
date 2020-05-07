<template>
  <div class="home">
<company/>

    <about/>

  </div>
</template>

<script>

import Company from "../components/company";
import About from "../components/about";

export default {
  name: 'Home',
  components: {
      About,
    Company
  }
}
</script>
