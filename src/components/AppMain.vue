<script>
import { state } from "../state";
// import FlagMoviesGeneration from "./FlagMoviesGeneration.vue";
// import FlagSeriesGeneration from "./FlagSeriesGeneration.vue";
// import PosterMoviesGeneration from "./PosterMoviesGeneration.vue";
// import PosterSeriesGeneration from "./PosterSeriesGeneration.vue";
// import PrintStarsMovie from "./PrintStarsMovie.vue";
// import PrintStarsSeries from "./PrintStarsSeries.vue";
import FlagGenerator from "./FlagGenerator.vue"
import PosterGenerator from "./PosterGenerator.vue"
import PrintStars from "./PrintStars.vue"
export default {
    name: 'AppMain',
    components: {
        // FlagMoviesGeneration,
        // FlagSeriesGeneration,
        // PosterMoviesGeneration,
        // PosterSeriesGeneration,
        // PrintStarsMovie,
        // PrintStarsSeries
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
            <ul>
                <li v-for="content in state.contents">
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
                    <!-- <li v-for="movie in state.movies">
                                                    <span>{{ movie.title }}-</span>
                                                    <span>{{ movie.original_title }}-</span>
                                                    <PrintStarsMovie :elementStarMovie="movie"></PrintStarsMovie>
                                                    <span>
                                                        <FlagMoviesGeneration :elementMovie="movie"></FlagMoviesGeneration>
                                                    </span>
                                                    <span>
                                                        <PosterMoviesGeneration :elementPosterMovie="movie"></PosterMoviesGeneration>
                                                    </span>
                                                    <span>{{ movie.vote_average }}</span>
                                                </li>
                                                <li v-for="serie in state.series">
                                                    <span>{{ serie.name }}-</span>
                                                    <span>{{ serie.original_name }}-</span>
                                                    <PrintStarsSeries :elementStarSerie="serie"></PrintStarsSeries>
                                                    <span>
                                                        <FlagSeriesGeneration :elementSerie="serie"></FlagSeriesGeneration>
                                                    </span>
                                                    <span>
                                                        <PosterSeriesGeneration :elementPosterSerie="serie"></PosterSeriesGeneration>
                                                    </span>
                                                    <span>{{ serie.vote_average }}</span>
                                                </li> -->
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