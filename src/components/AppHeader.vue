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
        searchContents(url) {
            // state.searchMovies(url);
            // state.searchSeries(url);
            state.searchMoviesSeries(url)
        }
    }

}
</script>

<template>
    <header>
        <div class="searchBox">
            <input v-model="state.searchText" @keyup.enter="searchContents(state.API_URL_multi)" type="text"
                placeholder="Search Movies and Series">
            <button @click="searchContents(state.API_URL_multi)">Submit</button>
        </div>
    </header>
</template>


<style lang="scss" scoped></style>