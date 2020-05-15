<template>
    <div class="kontakt">
        <v-container fluid class="primary" >
            <v-row class="justify-center">
                <v-col cols="12" lg="4" md="4" sm="4"  class="align-self-center" >
                    <h1 class="display-2 font-weight-thin font-italic white--text text-center justify-center  ">Zapraszamy do współpracy</h1>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="6" class="hidden-xs-only">
                    <v-img class="img_deal align-content-center " contain src="../assets/deal.svg"/>
                    </v-col>
            </v-row>
        </v-container>

       <contact/>
      <googlemap/>
    </div>
</template>

<script>
    import Contact from "../components/contact";
    import Googlemap from "../components/googlemap";
    export default {
        name: "Kontakt",
        components: {Googlemap, Contact}
    }
</script>

<style scoped>
.img_deal {
    height: 20vw;
}
    @media screen and (max-height: 960px) {
        .img_deal {
            height: 25vw;
        }
    }
</style>
