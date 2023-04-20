<!-- <script>
import { state } from "../state.js";
export default {
    name: 'PrintStarsMovie',
    props: {
        elementStarMovie: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationStarMovie(movie) {
            let vote = Math.ceil(movie.vote_average / 2);
            return vote
        }
    }
}
</script>

<template>
    <img v-if="generationStarMovie(elementStarMovie) > 0" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarMovie(elementStarMovie) > 1" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarMovie(elementStarMovie) > 2" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarMovie(elementStarMovie) > 3" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarMovie(elementStarMovie) > 4" width="15" :src="state.URL_star" alt="star">
</template>


<style lang="scss" scoped></style> -->