<template>
    <v-container id="home" fluid  class="primary">
        <v-row  class="justify-center align-center">
            <v-img class="image_banner"  src="../assets/banner.jpg" contain></v-img>
        </v-row>



    </v-container>
</template>

<script>
    export default {
        name: "company"
    }
</script>

<style scoped>
.image_banner  {

    opacity: 0.90;
    border-radius: 20%;
}
@media screen and (min-width: 700px) {
    .image_banner  {
        height: 250px;
        width: auto;
    }
}


</style>
