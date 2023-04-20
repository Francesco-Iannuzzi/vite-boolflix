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
            let posterMovie = state.API_URL_poster + movie.poster_path
            console.log(posterMovie);
            return posterMovie
        }
    }
}
</script>

<template>
    <img :src="generationPosterMovie(elementPosterMovie)" alt="">
</template>


<style lang="scss" scoped></style>