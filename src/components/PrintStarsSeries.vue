<!-- <script>
import { state } from "../state.js";
export default {
    name: 'PrintStarsSerie',
    props: {
        elementStarSerie: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationStarSerie(serie) {
            let vote = Math.ceil(serie.vote_average / 2);
            return vote
        }
    }
}
</script>

<template>
    <img v-if="generationStarSerie(elementStarSerie) > 0" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarSerie(elementStarSerie) > 1" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarSerie(elementStarSerie) > 2" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarSerie(elementStarSerie) > 3" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarSerie(elementStarSerie) > 4" width="15" :src="state.URL_star" alt="star">
</template>


<style lang="scss" scoped></style> -->