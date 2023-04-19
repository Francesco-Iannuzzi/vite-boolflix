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
    <ul v-if="state.movies.length !== 0">
      <li>Print Movies</li>
      <li v-for="movie in state.movies">{{ movie.title }}</li>
    </ul>
  </div>
  <!-- /movies -->
</template>


<style lang="scss" scoped></style>
