<!-- <script>
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
            if (serie.poster_path !== null) {
                let posterSerie = state.API_URL_poster + serie.poster_path
                console.log(posterSerie);
                return posterSerie
            } else {
                let posterSerieEmpty = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4='
                return posterSerieEmpty
            }
        }
    }
}
</script>

<template>
    <img width="92" height="138" :src="generationPosterSerie(elementPosterSerie)" alt="">
</template>


<style lang="scss" scoped></style> -->