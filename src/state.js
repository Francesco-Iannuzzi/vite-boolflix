import { reactive } from 'vue'
import axios from 'axios';
import flagsDatabase from './assets/data/flagsDatabase';
export const state = reactive({
    searchText: '',
    loading: true,
    API_URL_flags: 'https://flagsapi.com/',
    API_URL_poster: 'https://image.tmdb.org/t/p/w92/',
    URL_star: 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png',
    movies: [],
    series: [],
    API_URL_multi: 'https://api.themoviedb.org/3/search/multi?api_key=d1eb10a884fb991e4977a603a025083b&query=',
    contents: [],
    correctFlags: flagsDatabase,

    searchMoviesSeries(url) {
        url += this.API_URL_multi + this.searchText,
            axios
                .get(url)
                .then(response => {
                    this.contents = response.data.results;
                    console.log(this.contents);
                    console.log(url);
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.message);
                })
    }
});