<template>
    <div id="floatingMenu">
    <ul>
        <li @click="$vuetify.goTo('#home',{duration:1000})">
            <v-icon x-large class="error--text">mdi-arrow-up-bold</v-icon></li>
        <li @click="$vuetify.goTo('#about',{duration:1000})">
            <v-icon x-large class="error--text">mdi-phone</v-icon></li>
        <li><a @click="$vuetify.goTo('#contact',{duration:1000})">
            <v-icon x-large class="error--text">mdi-account-box</v-icon></a></li>
        <li @click="$vuetify.goTo('#googlemap',{duration:1000})">
            <v-icon x-large class="error--text">mdi-map-marker</v-icon></li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "floatingMenu"
    }
</script>

<style scoped>
 #floatingMenu li{
     list-style-type: none;
 }
    #floatingMenu{
        position:fixed;
        z-index: 1000;
        top: 50%;
        margin-top: -50px;

    }
</style>
