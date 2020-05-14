<template>
    <v-container fluid>

        <v-row class="align-center">
            <v-col cols="12" lg="5" md="5" offset-lg="1" offset-md="1">
                <div class="aboutPicture">
                <v-img src="../assets/aboutPicture.svg" contain style="height: 350px; width: auto"></v-img>
                </div>
            </v-col>
            <v-col lg="5" md="5" class="text-center">
                <h1 class="font-italic font-weight-light display-2">O nas</h1>

                <p class="font-weight-black">Firma Termobudowa Spółka Cywilna</p>
                <p>M.Lewandowski &T.Lewandowski, którą chcemy państwu zaprezentować jest firmą rodzinną z tradycjami. Pod nazwą Termobudowa S.C istnieje od grudnia 2005 roku, powstała na bazie firmy Z.M.C.I - J.R. Lewandowscy istniejącej od 1986 roku.</p>
            </v-col>

        </v-row>
        <v-row>
            <v-col lg="5" md="5" class="order-sm-1 order-md-2">
                <div class="aboutPicture">
                    <v-img src="../assets/aboutPicture2.svg" contain style="height: 350px; width: auto;" ></v-img>
                </div>
            </v-col>
            <v-col cols="12" lg="5" md="5" offset-lg="1" offset-md="1" class="text-center order-sm-2 order-md-1">
                <h1 class="font-italic font-weight-light display-2 ma-1">Czym się zajmujemy?</h1>
                <p>Firma nasza koncentruje się na świadczeniu wysokiej jakości usług w zakresie budowy i remontów wymurówek i wykładzin izolacyjnych, ogniotrwałych i żaroodpornych:<br>
                <ul>
                <li>kotłów energetycznych</li>
                <li>kotłów ciepłowniczych</li>
                <li>pieców cynkowniczych</li>
                <li>pieców komorowych</li>
                <li>pieców przelotowych</li>
                <li>pieców tunelowych</li>
                <li>pieców wielostrefowych</li>
                </ul>


                    Ponadto wykonujemy izolacje termiczne ciepło i zimno-chronne instalacji energetycznych, ciepłowniczych, hutniczych, rurociągów.
                    Dewizą naszej firmy jest zadowolenie klientów z dobrego i terminowego wykonania naszych usług przy zachowaniu najwyższych standardów BHP i ochrony środowiska. W tym celu nasi pracownicy posiadają wysokie kwalifikacje i legitymują się niezbędnymi uprawnieniami.</p>
            </v-col>


        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
ul {
    text-align: center;

}
ul li {

}
</style>
