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
    }, methods: {
        isHover() {

        }
    }
}
</script>

<template>
    <main class="py-5">
        <div class="movie_list container-fluid">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5" v-if="state.contents.length !== 0">
                <div class="col" v-for="content in state.contents">
                    <div class="card border-0 rounded-0" v-if="content.media_type == 'movie' || content.media_type == 'tv'">
                        <span>
                            <PosterGenerator :elementPosterContent="content"></PosterGenerator>
                        </span>
                        <h2 v-if="content.title">{{ content.title }}</h2>
                        <h2 v-else>{{ content.name }}</h2>
                        <h4 v-if="content.original_title">{{ content.original_title }}</h4>
                        <h4 v-else>{{ content.original_name }}</h4>
                        <div class="d-flex">
                            <PrintStars :elementStarContent="content"></PrintStars>
                        </div>
                        <div>
                            <FlagGenerator :elementContent="content"></FlagGenerator>
                        </div>
                    </div>
                    <!-- /content -->
                </div>
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