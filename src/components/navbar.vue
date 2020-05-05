<template>
    <nav>
        <v-app-bar short app flat class="primary">

            <v-toolbar-title class="title text-uppercase black--text font-weight-light">
                <span >Termo</span>
                <span class="font-weight-bold">budowa</span>
            </v-toolbar-title>

                <!-- odstęp w nawigacji !-->
                <v-spacer></v-spacer>

                <!--Przyciski na med i wys rozdzielczosci !-->
                <v-btn v-for="link in links" :key="link.text" small text class="text--secondary d-none d-md-block">
                    <span>{{ link.text }}</span>
                    <v-icon right>{{ link.icon }}</v-icon>
                </v-btn>

                <!--Przyciski ponizej med rozdzielczosci !-->
            <template>
                <div class="text-center d-md-none">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn small v-on="on" rounded class="transparent white--text" >
                                <span>Menu</span>
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list class="primary lighten-1 ">
                            <v-list-item
                                    v-for="link in links"
                                    :key="link.text"
                            >
                                <span>
                                    <v-btn small rounded class="transparent ">
                                        <v-icon>{{ link.icon }}</v-icon>
                                        <span>{{ link.text }}</span>
                                    </v-btn>

                                </span>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </template>

        </v-app-bar>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return{
                links: [
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},
                    { icon: 'mdi-home', text: 'Strona Główna', route:'/'},


                ]
            }
        }
    }
</script>

<style scoped>

</style>
