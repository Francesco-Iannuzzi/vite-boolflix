<script>
import { state } from "../state.js";
export default {
    name: 'PosterMoviesGeneration',
    props: {
        elementPosterMovie: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationPosterMovie(movie) {
            if (movie.poster_path !== null) {
                let posterMovie = state.API_URL_poster + movie.poster_path
                console.log(posterMovie);
                return posterMovie
            } else {
                let posterMovieEmpty = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4='
                return posterMovieEmpty
            }
        }
    }
}
</script>

<template>
    <img width="92" height="138" :src="generationPosterMovie(elementPosterMovie)" alt="">
</template>


<style lang="scss" scoped></style>