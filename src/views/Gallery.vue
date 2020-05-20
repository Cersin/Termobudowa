<template>
    <v-container fluid class="text-center primary">
        <h1 class="display-2 mb-4 mt-2 font-italic font-weight-thin">Galeria</h1>
    <v-row>
        <v-col cols="12" lg="6" offset-lg="3" md="6" offset-md="3" sm="10" offset-sm="1">
        <form><fieldset>

            <span class="filters">
            <input type="radio" id="all" checked
                   name="filters"
                   v-on:click="updateFilter('all')"/>
            <label for="all">Wszystkie</label>
            </span>
            <span class="filters">
            <input type="radio" id="Izolacje"
                   name="filters"
                   v-on:click="updateFilter('Izolacje')"/>
            <label for="Izolacje">Izolacje</label>
            </span>
            <span class="filters">
            <input type="radio" id="Wymurówki"
                   name="filters"
                   v-on:click="updateFilter('Wymurówki')" />
            <label for="Wymurówki">Wymurówki</label>
            </span>
            <span class="filters">
            <input type="radio" id="Wyłożenia miękkie"
                   name="filters"
                   v-on:click="updateFilter('Wyłożenia miękkie')" />
            <label for="Wyłożenia miękkie">Wyłożenia miękkie</label>
            </span>
        </fieldset></form>
        </v-col>
    </v-row>
        <silent-box class="gallery_box" :gallery="filteredImages"></silent-box>

    </v-container>
</template>
<style >
    .gallery_box .silentbox-item{
        margin-left: 1vh;
        margin-right: 1vh;
        margin-top: 1vh;
    }
    .gallery_box .silentbox-item img{
        border: solid;
        border-color: #0D47A1;
        height: 173px;
    }
    .gallery_box .silentbox-item img:hover{
        border-color: #FF7202;
    }
    .filters{
        margin-left: 1vh;
    }
    .filters input{
        margin-right: 0.5vh;
    }
    .filters label:hover{
        cursor: pointer;
    }
</style>
<script>
    var gallery = [
            {
                src: require('../assets/Izolacje/1.jpg'), description: '', alt: '', thumbnailWidth: '220px' , filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/2.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/3.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/9.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/10.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/11.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/12.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/13.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/14.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/18.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/19.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/20.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/21.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/22.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/23.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/24.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/25.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Izolacje/26.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Izolacje"
            },
            {
                src: require('../assets/Wymurówki/4.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/8.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/15.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/16.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/17.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/27.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/28.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/29.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/30.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/31.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/32.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wymurówki/33.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wymurówki"
            },
            {
                src: require('../assets/Wyłożenia miękkie/5.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wyłożenia miękkie"
            },
            {
                src: require('../assets/Wyłożenia miękkie/6.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wyłożenia miękkie"
            },
            {
                src: require('../assets/Wyłożenia miękkie/7.jpg'), description: '', alt: '', thumbnailWidth: '220px', filter:"Wyłożenia miękkie"
            },
        ];
    export default {
        name: "Gallery",
        data() {
            return {
                images: gallery,
                galleryFilter: 'all',
            }
        },
        methods:{
          updateFilter(filterName){
              this.galleryFilter = filterName;
          }
        },
        computed:{
            filteredImages: function(){
                if (this.galleryFilter === 'all'){
                    return this.images;
                }else{
                    return this.images.filter(image => image.filter === this.galleryFilter);
                }
            }
        }
    }
</script>


