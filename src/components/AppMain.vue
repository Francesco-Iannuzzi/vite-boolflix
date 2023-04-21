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
            state,
            isHover: false,
        }
    }
}
</script>

<template>
    <main class="py-5">
        <div class="movie_list container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5" v-if="state.contents.length !== 0">

                <div class="col g-3" v-for="content in state.contents">
                    <div class="card border-0 rounded-0" v-if="content.media_type == 'movie' || content.media_type == 'tv'">
                        <div class="content_cover">
                            <PosterGenerator :elementPosterContent="content"></PosterGenerator>
                        </div>
                        <!-- /conten_cover -->

                        <div class="content_info d-flex flex-column" @mouseenter="this.isHover = true"
                            @mouseleave="this.isHover = false" :class="this.isHover ? 'isHover' : 'isOut'">
                            <div class="info_title">
                                <h2 v-if="content.title">{{ content.title }}</h2>
                                <h2 v-else>{{ content.name }}</h2>
                            </div>
                            <!-- /info_title -->
                            <div class="info_original_title">
                                <h4 v-if="content.original_title">{{ content.original_title }}</h4>
                                <h4 v-else>{{ content.original_name }}</h4>
                            </div>
                            <!-- /info_original_title -->
                            <div class="info_overview">
                                <span v-if="content.overview !== ''">
                                    Overview:<p>{{ content.overview }}</p>
                                </span>
                            </div>
                            <!-- /info_overview -->
                            <div class="info_vote">
                                <PrintStars :elementStarContent="content"></PrintStars>
                            </div>
                            <!-- /info_vote -->
                            <div class="info_language">
                                <FlagGenerator :elementContent="content"></FlagGenerator>
                            </div>
                            <!-- /info_language -->
                        </div>
                        <!-- /conten_info -->

                    </div>
                    <!-- /content -->
                </div>

            </div>
            <!-- /v-if founded movies or series -->
        </div>
    </main>
</template>


<style lang="scss" scoped></style>