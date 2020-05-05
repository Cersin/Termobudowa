<template>
  <div class="home">
<company/>
    <company data-aos="fade-right"
             data-aos-delay="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"/>
    <company data-aos="fade-left"
             data-aos-delay="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"

             />
    <company data-aos="fade-right"
             data-aos-delay="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             />
    <company data-aos="fade-left"
             data-aos-delay="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             />

  </div>
</template>

<script>

import Company from "../components/company";
export default {
  name: 'Home',
  components: {
    Company
  }
}
</script>
