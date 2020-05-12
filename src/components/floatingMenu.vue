<template>
    <div id="floatingMenu">
    <v-list  class="transparent floatingList" expand>
        <v-list-item-content>
        <v-btn icon  class="error red" @click="$vuetify.goTo('#home',{duration:1000})">
            <v-icon  >mdi-arrow-up-drop-circle</v-icon></v-btn>
            <v-btn icon  class="error white--text" @click="$vuetify.goTo('#about',{duration:1000})">
            <v-icon >mdi-wrench-outline mdi-18px</v-icon></v-btn>
            <v-btn icon  class="error white--text" @click="$vuetify.goTo('#contact',{duration:1000})">
            <v-icon  >mdi-phone mdi-18px</v-icon></v-btn>
            <v-btn icon  class="error red" @click="$vuetify.goTo('#googlemap',{duration:1000})">
            <v-icon  >mdi-arrow-down-drop-circle </v-icon></v-btn>
        </v-list-item-content>
    </v-list>
    </div>
</template>

<script>
    export default {
        name: "floatingMenu"
    }
</script>

<style scoped>
    #floatingMenu{
        position:fixed;
        z-index: 1000;
        top: 50%;
        margin-top: -100px;

    }
    .floatingList {
        width: 5vh;
    }

</style>
