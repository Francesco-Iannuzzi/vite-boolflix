<script>
import { state } from "../state.js";
export default {
    name: 'PrintStars',
    props: {
        elementStarContent: Object,
    },
    data() {
        return {
            state,
            URL_star: 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png',
            URL_star_empty: 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-empty-icon.png',
        }
    },
    methods: {
        generationStarContent(content) {
            let vote = Math.ceil(content.vote_average / 2);
            return vote
        },
        generationEmptyStarContent(content) {
            let vote = Math.floor(5 - (content.vote_average / 2))
            return vote
        }
    }
}
</script>

<template>
    <img v-for="vote in generationStarContent(elementStarContent)" width="15" :src="URL_star" alt="star">
    <img v-for="vote in generationEmptyStarContent(elementStarContent)" width="15" :src="URL_star_empty" alt="star_empty">
</template>


<style lang="scss" scoped></style>
