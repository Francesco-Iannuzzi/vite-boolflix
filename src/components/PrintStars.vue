<script>
import { state } from "../state.js";
export default {
    name: 'PrintStars',
    props: {
        elementStarContent: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationStarContent(content) {
            let vote = Math.ceil(content.vote_average / 2);
            return vote
        }
    }
}
</script>

<!-- TO DO v-for on vote to print -->
<template>
    <img v-if="generationStarContent(elementStarContent) > 0" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarContent(elementStarContent) > 1" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarContent(elementStarContent) > 2" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarContent(elementStarContent) > 3" width="15" :src="state.URL_star" alt="star">
    <img v-if="generationStarContent(elementStarContent) > 4" width="15" :src="state.URL_star" alt="star">
</template>



<style lang="scss" scoped></style>