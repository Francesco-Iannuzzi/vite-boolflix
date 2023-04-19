<script>
import { state } from "./state";
import flag from './components/FlagItem.vue'
import FlagItem from "./components/FlagItem.vue";
export default {
  data() {
    return {
      state
    }
  }, methods: {
    searchMoviesDom(url) {
      state.searchMovies(url)
    }
  }, transformStringInFlag() {

  },
  mounted() {
    console.log(flag);
  }
}
</script>

<template>
  <div class="searchBox">
    <input v-model="state.searchText" type="text" placeholder="Search Movies">
    <button @click="searchMoviesDom(state.API_URL_movies)">Submit</button>
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
  <div class="flag">
    <ul>
      <li v-for="flags in flag">{{ flag }}</li>
    </ul>
  </div>
  <!-- /movies -->
</template>


<style lang="scss" scoped></style>
