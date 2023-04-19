import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    searchText: '',
    loading: true,
    API_URL_search: 'https://api.themoviedb.org/3/search/',
    API_URL_movies: 'movie?api_key=d1eb10a884fb991e4977a603a025083b&language=it-IT&query=',
    API_URL_series: 'tv?api_key=d1eb10a884fb991e4977a603a025083b&language=it-IT&query=',
    movies: [],
    series: [],
    searchMoviesSeries(url) {
        url += this.API_URL_movies + `${this.searchText}`,
            axios
                .get(url)
                .then(response => {
                    this.movies = response.data.results;
                    console.log(this.movies);
                    console.log(url);
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.message);
                })
        url += this.API_URL_series + `${this.searchText}`,
            axios
                .get(url)
                .then(response => {
                    this.series = response.data.results;
                    console.log(this.series);
                    console.log(url);
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.message);
                })
    }
});