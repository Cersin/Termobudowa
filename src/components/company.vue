<template>
    <v-container fluid class="company grey lighten-1 align-end">
        <v-row  class="justify-center align-center" style="height: 30vh">
        <h1 class="font-italic font-weight-light" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Termobudowa S.C.</h1>
        </v-row>
        <v-row class="justify-center align-end"  style="height: 30vh">
            <span>
                <v-icon x-large class="red--text text--darken-2">mdi-mouse</v-icon>
                <v-icon x-large class="red--text text--darken-2">mdi-arrow-up-down</v-icon>
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
.company{
}

</style>
