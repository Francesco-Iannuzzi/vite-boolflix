import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    searchText: '',
    loading: true,
    API_URL_movies: 'https://api.themoviedb.org/3/search/movie?api_key=d1eb10a884fb991e4977a603a025083b&language=it-IT&query=',
    movies: [],
    searchMovies(url) {
        axios
            .get(url)
            .then(response => {
                this.movies = response.data.results;
                console.log(response.data.results);
                console.log(this.movies);
                url += `${this.searchText}`
                console.log(this.API_URL_movies);
                console.log(url);
                console.log(this.movies);
            })
            .catch(err => {
                console.log(err);
                console.error(err.message);
            })
    }, methods: {
        searchMovies(API_URL_movies) {
            console.log(API_URL_movies);
        }
    }
});