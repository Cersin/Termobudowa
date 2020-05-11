<template>
    <v-container fluid  style="background-color:  #02497d">
        <v-row  class="justify-center align-center">
<!--        <h1 class="font-italic font-weight-light" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Termobudowa S.C.</h1>-->
            <v-img class="image_banner"  src="../assets/banner.jpg" contain></v-img>
        </v-row>
        <!--<v-row class=" justify-center ">-->
        <!--    <v-col cols="12" lg="5" md="5">-->
        <!--    <v-img  src="../assets/engineers.svg"></v-img>-->
        <!--    </v-col>-->
        <!--</v-row>-->
        <v-row class="justify-center align-end"  style="min-height: 20vh">
            <span>
                <v-icon x-large class="error--text">mdi-mouse</v-icon>
                <v-icon x-large class="error--text">mdi-arrow-up-down</v-icon>
            </span>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "company"
    }
</script>

<style scoped>
.image_banner {
    height: 200px;
    width: auto;
    opacity: 0.95;
    border-radius: 35%;
}


</style>
