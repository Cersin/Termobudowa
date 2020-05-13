<template >
    <v-container fluid class="text-center primary ">
        <div class="reference_box">
         <silent-box class="white" :gallery="gallery" ></silent-box>
        </div>
    </v-container>
</template>

<style >
.reference_box {
    border-radius: 5%;
}

.reference_box #silentbox-gallery {
    margin-top: 2vw;
    margin-bottom: 2vw;
    margin-left: 5vw;
    margin-right: 5vw;
}

.reference_box .silentbox-item {
    margin-left: 5vh;
    margin-right: 5vh;


}


</style>

<script>

    export default {
        name: "Reference",
        data() {
            return {
                gallery: [
                    {
                        src: require('../assets/referencje/arcelormittal.jpg'),
                        description: 'ArcelorMittal Refractories',
                        alt: 'Referencja ArcelorMittal',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/energomontaz.jpg'),
                        description: 'Energomontaż Świętochłowice Sp. z o.o.',
                        alt: 'Referencja Energomontaż',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/hti.jpg'),
                        description: 'HTI Sp. z o.o.',
                        alt: 'Referencja HTI',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/piecoserwis.jpg'),
                        description: 'PiecoSerwis Sp. z o.o.',
                        alt: 'Referencja PiecoSerwis',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/polimex.jpg'),
                        description: 'Polimex - Mostostal S.A.',
                        alt: 'Referencja Polimex',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/silesia.jpg'),
                        description: 'ZM "SILESIA" S.A.',
                        alt: 'Referencja ZM "SILESIA"',
                        thumbnailWidth: '175px'
                    },
                    {
                        src: require('../assets/referencje/zec.jpg'),
                        description: 'Zakłady Energetyki Cieplnej S.A.',
                        alt: 'Referencja ZEC',
                        thumbnailWidth: '175px'
                    },

                ]

            }
        }
    }
</script>

