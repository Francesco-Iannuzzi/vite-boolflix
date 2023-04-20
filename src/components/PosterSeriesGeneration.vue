<script>
import { state } from "../state.js";
export default {
    name: 'PosterSeriesGeneration',
    props: {
        elementPosterSerie: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationPosterSerie(serie) {
            let posterSerie = state.API_URL_poster + serie.poster_path
            console.log(posterSerie);
            return posterSerie
        }
    }
}
</script>

<template>
    <img :src="generationPosterSerie(elementPosterSerie)" alt="">
</template>


<style lang="scss" scoped></style>