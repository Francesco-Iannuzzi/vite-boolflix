<script>
import { state } from "../state.js";
export default {
    name: 'FlagGenerator',
    props: {
        elementContent: Object,
    },
    data() {
        return {
            state
        }
    },
    methods: {
        generationContentFlag(content) {
            if (state.correctFlags.includes(content.original_language.toUpperCase())) {
                let urlContents = state.API_URL_flags + content.original_language.toUpperCase() + '/flat/32.png'
                console.log(urlContents);
                return urlContents
            } else if (content.original_language = 'en') {
                content.original_language = 'us'
                let urlContents = state.API_URL_flags + content.original_language.toUpperCase() + '/flat/32.png'
                console.log(urlContents);
                return urlContents

            } else {
                let urlContensMissing = 'https://www.otherworldproject.com/wiki/images/9/96/Unknown_flag.png'
                return urlContensMissing
            }
        }
    }
}
</script>

<template>
    <img width="32" :src="generationContentFlag(elementContent)">
</template>


<style lang="scss" scoped></style>