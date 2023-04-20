<script>
import { state } from "../state.js";
export default {
    name: 'FlagMoviesGeneration',
    props: {
        elementMovie: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationApiMovieFlag(movie) {
            let urlMovies = state.API_URL_flags + movie.original_language.toUpperCase() + '/flat/32.png'
            console.log(urlMovies);
            return urlMovies
        }
    }
}
</script>

<template>
    <img width="32" :src="generationApiMovieFlag(elementMovie)">
</template>


<style lang="scss" scoped></style>