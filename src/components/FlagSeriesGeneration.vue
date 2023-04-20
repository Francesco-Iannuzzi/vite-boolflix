<script>
import { state } from "../state.js";
export default {
    name: 'FlagSeriesGeneration',
    props: {
        elementSerie: Object
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationApiSerieFlag(serie) {
            if (state.correctFlags.includes(serie.original_language.toUpperCase())) {
                let urlSeries = state.API_URL_flags + serie.original_language.toUpperCase() + '/flat/32.png'
                console.log(urlSeries);
                return urlSeries
            } else if (serie.original_language = 'en') {
                serie.original_language = 'us'
                let urlSeries = state.API_URL_flags + serie.original_language.toUpperCase() + '/flat/32.png'
                console.log(urlSeries);
                return urlSeries
            } else {
                let urlSeriesMissing = 'https://www.otherworldproject.com/wiki/images/9/96/Unknown_flag.png'
                return urlSeriesMissing
            }
        }
    }
}
</script>

<template>
    <img width="32" :src="generationApiSerieFlag(elementSerie)">
</template>


<style lang="scss" scoped></style>