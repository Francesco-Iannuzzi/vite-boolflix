<script>
import { state } from "../state";
export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    methods: {
        searchMoviesSeriesDom(url) {
            state.searchMovies(url);
            state.searchSeries(url);
        }
    }

}
</script>

<template>
    <header>
        <div class="searchBox">
            <input v-model="state.searchText" @keyup.enter="searchMoviesSeriesDom(state.API_URL_search)" type="text"
                placeholder="Search Movies">
            <button @click="searchMoviesSeriesDom(state.API_URL_search)">Submit</button>
        </div>
    </header>
</template>


<style lang="scss" scoped></style>