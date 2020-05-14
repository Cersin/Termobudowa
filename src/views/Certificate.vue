<template>
    <div>
        <v-row class="ml-2 mr-2 ml-lg-12">
            <v-col cols="12" lg="4" md="4" sm="12">
                <v-img class="image_certificate" src="../assets/certificate.svg" contain/>
            </v-col>
            <v-col cols="12" lg="8" md="8" sm="12" class="text-center align-self-center">
                <h1 class="display-1">Certyfikaty Energetyczne</h1>

    <p class="ma-4">
        Mgr inż. Tomasz Lewandowski oferuje swoje usługi w zakresie sporządzania:
        <v-treeview v-for="usluga in uslugi" :key="usluga.name">{{ usluga.name }}</v-treeview>
    </p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6" lg="6">
                <v-row>
                    <v-col cols="12" lg="5" md="8" class="ml-lg-6 ml-md-8">
                        <v-img class="image_construction" src="../assets/construction.svg" contain/>
                    </v-col>

                <v-col cols="12" lg="5" md="12" class="mt-lg-12 text-center">
                    <p>Wykonuję dokumenty dla następujących rodzajów budynków:
                         <v-treeview v-for="dokument in dokumenty" :key="dokument.name">{{ dokument.name }}</v-treeview>

                    </p>
                </v-col>

                </v-row>
            </v-col>

            <v-col cols="12" md="6" lg="6">
                <v-row>
                    <v-col cols="12" lg="3" md="12" order-lg="1" order-md="1" order-xl="1">
                        <v-img class="image_price" src="../assets/price.svg" contain/>
                    </v-col>

                    <v-col cols="12" lg="8" md="12" class="mt-lg-10 text-center">
                <p>
                    Staram się, aby moje opracowania były na najwyższym poziomie a ich cena pozostała przystępna dla klienta. Zależy ona od :
                    <v-treeview v-for="opracowanie in opracowania" :key="opracowanie.name">{{ opracowanie.name }}</v-treeview>
                    Ostateczny koszt wykonania powyższych opracowań określony zostanie na podstawie
                    szczegółowych ustaleń z klientem.
                </p>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
        <v-row class="align-center justify-center">
            <v-col cols="12" lg="4" md="4" sm="4" order-lg="10" order-md="10">
                <v-img class="image_contract" src="../assets/contract.svg" contain/>
            </v-col>

            <v-col cols="10" lg="4" md="6" sm="6" order-lg="1" order-md="1" >
                <h1 class="headline ml-2">Zapraszam do współpracy!</h1>
                <v-card class="card_contact" shaped>
                    <v-card-title>
                        mgr inż. Tomasz Lewandowski
                    </v-card-title>
                    <v-card-subtitle>
                        <h1 class="subtitle-1">43-600 Jaworzno</h1>
                        <h1 class="subtitle-1">ul. Hetmańska 82L</h1>
                    </v-card-subtitle>
                    <v-card-text>
                         <h1 class="subtitle-2">Tel. (+48) 502 203 948</h1>
                    </v-card-text>
                </v-card>


            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Certificate",
        data() {
            return {
                uslugi: [
                    { name: '- świadectw charakterystyki energetycznej (certyfikatów energetycznych)'},
                    { name: '- projektowanej charakterystyki energetycznej'},
                    { name: '- efektu ekologicznego'},
                    { name: '- efektu ekonomicznego'},
                    { name: '- audytów energetycznych'}
                ],
                dokumenty: [
                    { name: '- budynki mieszkalne (domy jednorodzinne)'},
                    { name: '- budynki zamieszkania zbiorowegoj'},
                    { name: '- budynki użyteczności publicznej'},
                    { name: '- budynki przemysłowe'},
                    { name: '- budynki magazynowe'}
                ],
                opracowania: [
                    { name: '- rodzaj budynku,'},
                    { name: '- zawartości dokumentacji obiektu,'},
                    { name: '- powierzchni budynku,'},
                    { name: '- stopień skomplikowania budynku,'},
                    { name: '- termin i czas wykonania dokumentu.'}
                ]
            }
        }
    }
</script>

<style scoped>
.image_certificate {
    height: 30vw;
    width: auto;
}

.image_contract {
    height: 20vw;
    width: auto;
}

.image_construction {
    height: 20vw;
    width: auto;
}

.image_price {
    height: 20vw;
    width: auto;
}
.card_contact {
    width: 40vw;
}
@media screen and (max-width: 960px ) {
    .image_construction {
        height: 35vw;
    }
    .image_price {
        height: 35vw;
    }
    .image_contract {
        height: 35vw;
    }
    .image_certificate{
        height: 35vw;
    }
    .card_contact {
        width: 80vw;
    }
}

</style>
