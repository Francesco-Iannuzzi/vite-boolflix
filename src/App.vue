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
    <input v-model="state.searchText" type="text" placeholder="Search Movies">
    <button @click="searchMoviesSeriesDom(state.API_URL_search)">Submit</button>
  </div>
  <!-- /searchBox -->

  <div class="movie_list">
    <h1>Print Movies</h1>
    <ul v-if="state.movies.length !== 0 || state.series.length !== 0">
      <li v-for="movie in state.movies">
        <p>{{ movie.title }}</p>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </li>
      <li v-for="serie in state.series">
        <p>{{ serie.name }}</p>
        <p>{{ serie.original_name }}</p>
        <p>{{ serie.original_language }}</p>
        <p>{{ serie.vote_average }}</p>
      </li>
    </ul>
  </div>
  <!-- /movies -->
</template>


<style lang="scss" scoped></style>
