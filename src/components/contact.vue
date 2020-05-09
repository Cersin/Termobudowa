<template>
    <v-container fluid style="background-color:  #02497d">

        <v-row class="justify-center">
            <h1 class="display-1 white--text font-weight-light font-italic">Kontakt</h1>
        </v-row>
        <v-row class="justify-center">
            <v-card height="10vw" width="40vw">
<!--                <v-card-title >-->
<!--                    <v-col cols="6" class="text-center">-->
<!--                        <p class="subtitle-2 " >Adres</p>-->
<!--                    </v-col>-->
<!--                    <v-col cols="6" class="text-center">-->
<!--                        <p class="subtitle-2" >Adres</p>-->
<!--                    </v-col>-->
<!--                </v-card-title>-->
                <v-row class="justify-center ">
                <v-col cols="4">
                    <p>Adres</p>
                </v-col>
                <v-col cols="4">
                    <p>TA</p>
                </v-col>
                <v-col cols="4">
                    <v-icon style="font-size: 8vw">mdi-map-marker</v-icon>
                </v-col>
                </v-row>

            </v-card>
        </v-row>
</v-container>


</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

</style>
