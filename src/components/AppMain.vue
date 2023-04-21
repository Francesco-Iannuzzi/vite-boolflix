<script>
import { state } from "../state";
import FlagGenerator from "./FlagGenerator.vue"
import PosterGenerator from "./PosterGenerator.vue"
import PrintStars from "./PrintStars.vue"
export default {
    name: 'AppMain',
    components: {
        FlagGenerator,
        PosterGenerator,
        PrintStars,
    },
    data() {
        return {
            state
        }
    },
}
</script>

<template>
    <main>
        <div class="movie_list">
            <div v-if="state.movies.length !== 0 || state.series.length !== 0 || state.contents.length !== 0">
                <h1>Print Movies</h1>
                <ul v-for="content in state.contents">
                    <li v-if="content.media_type == 'movie' || content.media_type == 'tv'">
                        <span v-if="content.title">{{ content.title }}-</span>
                        <span v-else>{{ content.name }}</span>
                        <span v-if="content.original_title">{{ content.original_title }}-</span>
                        <span v-else>{{ content.original_name }}</span>
                        <PrintStars :elementStarContent="content"></PrintStars>
                        <span>
                            <FlagGenerator :elementContent="content"></FlagGenerator>
                        </span>
                        <span>
                            <PosterGenerator :elementPosterContent="content"></PosterGenerator>
                        </span>
                        <span>{{ content.vote_average }}</span>
                    </li>
                    <!-- /content -->
                </ul>
            </div>
            <!-- /v-if founded movies or series -->
            <div v-else>
                <h1>Movies/Series not founded or searched</h1>
            </div>
            <!-- /v-else not found movies or series -->
        </div>

    </main>
</template>


<style lang="scss" scoped></style>