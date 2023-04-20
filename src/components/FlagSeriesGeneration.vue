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
            let urlSeries = state.API_URL_flags + serie.original_language.toUpperCase() + '/flat/32.png'
            console.log(urlSeries);
            return urlSeries
        }
    }
}
</script>

<template>
    <img width="32" :src="generationApiSerieFlag(elementSerie)">
</template>


<style lang="scss" scoped></style>