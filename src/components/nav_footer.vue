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
                        :to="link.route"
                >
                    <v-icon size="18px" class="white--text">{{ link.icon }}</v-icon>
                </v-btn>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text >
                Copyright &copy; {{ new Date().getFullYear() }}
                <h1 class="overline white--text">  Szymon Wójcik oraz Adrian Ochała</h1>
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
                    { icon: 'mdi-account-box', text: 'Kontakt', route:'/kontakt'},
                    { icon: 'mdi-handshake', text: 'Referencje', route:'/referencje'},
                    { icon: 'mdi-image-multiple', text: 'Galeria', route:'/galeria'},
                    { icon: 'mdi-certificate', text: 'Certyfikaty', route:'/certyfikaty'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
