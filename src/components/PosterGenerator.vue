<script>
import { state } from "../state.js";
export default {
    name: 'PosterGenerator',
    props: {
        elementPosterContent: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationPosterContent(content) {
            if (content.poster_path !== null) {
                let posterContent = state.API_URL_poster + content.poster_path
                console.log(posterContent);
                return posterContent
            } else {
                let posterContentEmpty = 'https://media.istockphoto.com/id/1216251206/vector/no-image-available-icon.jpg?s=170667a&w=0&k=20&c=N-XIIeLlhUpm2ZO2uGls-pcVsZ2FTwTxZepwZe4DuE4='
                return posterContentEmpty
            }
        }
    }
}
</script>

<template>
    <img class="img-fluid" :src="generationPosterContent(elementPosterContent)" alt="">
</template>


<style lang="scss" scoped></style>