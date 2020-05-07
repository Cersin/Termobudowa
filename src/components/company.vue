<template>
    <v-container fluid class="company grey lighten-1 align-end">
        <v-row  class="justify-center align-center">
        <h1 class="font-italic font-weight-light" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Termobudowa S.C.</h1>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" lg="5" md="5">
            <v-img  src="../assets/engineers.svg"></v-img>
            </v-col>
        </v-row>
        <v-row class="justify-center align-end"  style="min-height: 30vh">
            <span>
                <v-icon x-large class="red--text text--darken-2">mdi-mouse</v-icon>
                <v-icon x-large class="red--text text--darken-2">mdi-arrow-up-down</v-icon>
            </span>
        </v-row>
        Testuje
    </v-container>
</template>

<script>
    export default {
        name: "company"
    }
</script>

<style scoped>

</style>
