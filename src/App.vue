<script>
import { state } from "./state";
export default {
  data() {
    return {
      state
    }
  }, methods: {
    searchMoviesSeriesDom(url) {
      state.searchMovies(url)
      state.searchSeries(url)
    }
  }, transformStringInFlag() {

  },
  mounted() {

  }
}
</script>

<template>
  <div class="searchBox">
    <input v-model="state.searchText" @keyup.enter="searchMoviesSeriesDom(state.API_URL_search)" type="text"
      placeholder="Search Movies">
    <button @click="searchMoviesSeriesDom(state.API_URL_search)">Submit</button>
  </div>
  <!-- /searchBox -->

  <div class="movie_list">
    <div v-if="state.movies.length !== 0 || state.series.length !== 0">
      <h1>Print Movies</h1>
      <ul>
        <li v-for="movie in state.movies">
          <span>{{ movie.title }}-</span>
          <span>{{ movie.original_title }}-</span>
          <span>{{ movie.original_language }}-</span>
          <span>{{ movie.vote_average }}</span>
        </li>
        <li v-for="serie in state.series">
          <span>{{ serie.name }}-</span>
          <span>{{ serie.original_name }}-</span>
          <span>{{ serie.original_language }}-</span>
          <span>{{ serie.vote_average }}</span>
        </li>
      </ul>
    </div>
    <!-- /v-if founded movies or series -->
    <div v-else>
      <h1>Movies or Series not found</h1>
    </div>
    <!-- /v-else not found movies or series -->
  </div>
  <!-- /movie_list -->
</template>


<style lang="scss" scoped></style>
