<template>
    <v-navigation-drawer floating  fixed class="transparent floating_drawer"   >
                 <span>
                <v-btn
                        block
                        color="primary"
                        @click="$vuetify.goTo('#about',{duration:1000})"
                >O nas</v-btn>
                <v-btn
                        block
                        color="primary"
                        @click="$vuetify.goTo('#contact',{duration:1000})"
                >Kontakt</v-btn>
                <v-btn
                        block
                        color="primary"
                        @click="$vuetify.goTo('#googlemap',{duration:1000})"
                >Lokalizacja</v-btn>
            </span>
    </v-navigation-drawer>

</template>

<script>
    export default {
        name: "floating"
    }
</script>

<style scoped>
.floating_drawer {
    height: 300px
}

</style>
