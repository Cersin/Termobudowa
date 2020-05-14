<template>
    <nav>
        <v-app-bar short app flat class="primary darken-1">
            <v-app-title>
                <v-img class="logo__nav" src="../assets/logo2.png" ></v-img>
            </v-app-title>
<!--                <span class="red&#45;&#45;text text&#45;&#45;darken-3 font-weight-bold" >Termo</span>-->
<!--                <span class="black&#45;&#45;text font-weight-bold">budowa</span>-->

                <!-- odstęp w nawigacji !-->
                <v-spacer></v-spacer>

                <!--Przyciski na med i wys rozdzielczosci !-->
                <v-btn v-for="link in links" :key="link.text"  small text class="grey--text text--lighten-3 d-none d-md-block">
                    <router-link tag="v-btn" :to="link.route">
                    <span>{{ link.text }}</span>
                    <v-icon right class="error--text" >{{ link.icon }}</v-icon>
                    </router-link>
                </v-btn>

                <!--Przyciski ponizej med rozdzielczosci !-->
            <template>
                <div class="text-center d-md-none">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn small v-on="on" rounded class="transparent grey--text text--lighten-3" >
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
                                    <v-btn small rounded class="transparent  ">
                                     <router-link tag="v-btn" :to="link.route">
                                        <v-icon class="error--text">{{ link.icon }}</v-icon>
                                        <span class="grey--text text--lighten-3">{{ link.text }}</span>
                                     </router-link>
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
                    { icon: 'mdi-handshake', text: 'Referencje', route:'/referencje'},
                    { icon: 'mdi-image-multiple', text: 'Galeria', route:'/galeria'},
                    { icon: 'mdi-certificate', text: 'Certyfikaty', route:'/certyfikaty'},
                ]
            }
        }
    }
</script>

<style scoped>
@media screen and (max-width: 900px) {
.logo__nav {
    width: 250px;
}
    
}
    
    
</style>
