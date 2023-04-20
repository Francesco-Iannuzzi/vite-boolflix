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
            if (state.correctFlags.includes(movie.original_language.toUpperCase())) {
                let urlMovies = state.API_URL_flags + movie.original_language.toUpperCase() + '/flat/32.png'
                console.log(urlMovies);
                return urlMovies
            } else {
                let urlMoviesMissing = 'https://www.otherworldproject.com/wiki/images/9/96/Unknown_flag.png'
                return urlMoviesMissing

            }
        }
    }
}
</script>

<template>
    <img width="32" :src="generationApiMovieFlag(elementMovie)">
</template>


<style lang="scss" scoped></style>