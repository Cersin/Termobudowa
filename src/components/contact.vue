<template>
    <v-container fluid class="primary">

        <v-row justify="center" align="center">
            <v-col cols="8" lg="5" md="6">
                <v-img src="../assets/contact.svg" contain></v-img>
            </v-col>
            <v-col cols="12" sm="8" lg="6" md="6" xs="12">
                <v-card>
                    <v-card-title class="error">
                        <span class="headline white--text">Kontakt</span>
                        <v-spacer></v-spacer>
                    </v-card-title>

                    <v-list>
                        <v-list-item >
                            <v-list-item-action>
                                <v-icon>mdi-phone</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title><h1 class="caption">Marek Lewandowski</h1> (+48) 502 150 855</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-phone</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title><h1 class="caption">Tomasz Lewandowski</h1> (+48) 502 203 948</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item >
                            <v-list-item-action>
                                <v-icon>mdi-email</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>marek.lewandowski@termobudowa.com.pl</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item >
                            <v-list-item-action>
                                <v-icon>mdi-email</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>tomasz.lewandowski@termobudowa.com.pl</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item >
                            <v-list-item-action>
                                <v-icon>mdi-map-marker</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>43-600 Jaworzno, Hetmańska 82K</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

</v-container>


</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>

    .contact__container{
        width: 50%;
    }

</style>
