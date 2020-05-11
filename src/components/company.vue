<template>
    <v-container id="home" fluid  class="primary">
        <v-row  class="justify-center align-center">
<!--        <h1 class="font-italic font-weight-light" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Termobudowa S.C.</h1>-->
            <v-img class="image_banner"  src="../assets/banner.jpg" contain></v-img>
        </v-row>
        <!--<v-row class=" justify-center ">-->
        <!--    <v-col cols="12" lg="5" md="5">-->
        <!--    <v-img  src="../assets/engineers.svg"></v-img>-->
        <!--    </v-col>-->
        <!--</v-row>-->
        <v-row class="justify-center align-end"  style="min-height: 15vh">

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
