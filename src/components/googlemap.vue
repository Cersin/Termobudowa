<template>
    <v-container fluid class="primary">

        <v-row justify="center" align="center">
            <v-col cols="3" xs="4" >
                <v-img class="svg_map" src="../assets/googlemap.svg" >
                </v-img>
            </v-col>

            <v-col cols="5" lg="4">
                <iframe class="maps_google" src="https://maps.google.com/maps?q=jaworzno%20hetma%C5%84ska%2082K&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </v-col>
        </v-row>

    </v-container>
</template>



<script>

    export default {
        name: "googlemap"
    }
</script>

<style scoped>
    .maps_google {
        width: 40vw;
        height: 20vw;
    }
    @media screen and (max-width: 800px) {
        .maps_google {
            height: 40vw;
        }
        .svg_map {
            height: 40vw;
        }
    }
</style>
