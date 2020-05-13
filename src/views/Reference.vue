<template>
    <div>
        <silent-box :gallery="gallery"></silent-box>
    </div>
    
</template>

<script>

    export default {
        name: "Reference",
        data() {
            return {
                gallery: [
                    {
                        src: '../assets/banner.jpg',
                        description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                        alt: 'Blue starry night photo.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: '../assets/banner.jpg',
                        description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
                        alt: 'Landscape photo of mountain with fog.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: '../assets/banner.jpg',
                        description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
                        alt: 'Low angle photo of pine trees.',
                        thumbnailWidth: '220px'
                    },
                ]

            }
        }
    }
</script>

<style scoped>

</style>
