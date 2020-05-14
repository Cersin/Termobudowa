<template>
    <v-footer app
            absolute
            padless

    >
        <v-card
                flat
                tile
                width="100%"
                class="primary  text-center"
        >
            <v-card-text>
                <v-btn
                        v-for="link in links"
                        :key="link.text"
                        class="mx-4 error"
                        fab
                        x-small
                >
                    <router-link tag="v-btn" :to="link.route">
                    <v-icon size="18px" class="white--text">{{ link.icon }}</v-icon>
                    </router-link>
                </v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text >
                {{ new Date().getFullYear() }} — Szymon Wójcik
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "nav_footer",
        data() {
            return{
                links: [
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},
                    { icon: 'mdi-handshake', text: 'Referencje', route:'/referencje'},
                    { icon: 'mdi-image-multiple', text: 'Galeria', route:'/galeria'},
                ]
            }
        }
    }
</script>

<style scoped>


</style>
