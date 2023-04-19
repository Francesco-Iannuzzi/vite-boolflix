<script>
import { state } from "./state";
export default {
  data() {
    return {
      state
    }
  },
  mounted() {
    state.searchMovies(state.API_URL_movies)
  }
}
</script>

<template>
  <div class="searchBox">
    <input v-model="state.searchText" type="text" placeholder="Search Movies">
    <input @click="state.searchMovies(state.API_URL_movies)" type="submit" value="Submit">
  </div>
  <!-- /searchBox -->
  <div class="movie_list">
    <h1>Print Movies</h1>
    <ul v-if="state.movies.length !== 0">
      <li v-for="movie in state.movies">
        <p>{{ movie.title }}</p>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
      </li>
    </ul>
  </div>
  <!-- /movies -->
</template>


<style lang="scss" scoped></style>
