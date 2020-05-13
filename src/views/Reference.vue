<template>
    <v-row>
        <silent-box :gallery="gallery"></silent-box>
    </v-row>
</template>

<style scoped>

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
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/energomontaz.jpg'),
                        description: 'Energomontaż Świętochłowice Sp. z o.o.',
                        alt: 'Referencja Energomontaż',
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/hti.jpg'),
                        description: 'HTI Sp. z o.o.',
                        alt: 'Referencja HTI',
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/piecoserwis.jpg'),
                        description: 'PiecoSerwis Sp. z o.o.',
                        alt: 'Referencja PiecoSerwis',
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/polimex.jpg'),
                        description: 'Polimex - Mostostal S.A.',
                        alt: 'Referencja Polimex',
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/silesia.jpg'),
                        description: 'ZM "SILESIA" S.A.',
                        alt: 'Referencja ZM "SILESIA"',
                        thumbnailWidth: '200px'
                    },
                    {
                        src: require('../assets/referencje/zec.jpg'),
                        description: 'Zakłady Energetyki Cieplnej S.A.',
                        alt: 'Referencja ZEC',
                        thumbnailWidth: '200px'
                    },

                ]

            }
        }
    }
</script>

