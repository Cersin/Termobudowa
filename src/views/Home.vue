<template>
  <div class="home">
<company/>
    <company data-aos="fade-left"
             data-aos-delat="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"/>
    <company data-aos="fade-right"
             data-aos-delat="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"/>
    <company data-aos="fade-up"
             data-aos-delat="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"/>
    <company data-aos="fade-down"
             data-aos-delat="150"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"/>

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
