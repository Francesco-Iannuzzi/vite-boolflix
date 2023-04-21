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
            state.searchMoviesSeries(url)
        }
    }

}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="logo navbar-brand" href="#"><strong>Boolflix</strong></a>
                <!-- /logo -->

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#"><strong>Home</strong></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Original</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Recently added</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">My list</a>
                        </li>
                    </ul>
                </div>
                <!-- /navbar -->

                <div class="searchBox d-flex">
                    <input v-model="state.searchText" @keyup.enter="searchContents(state.API_URL_multi)" type="email"
                        class="form-control border-0 me-2" placeholder="Search Movies and Series">
                    <button class="btn py-0" @click="searchContents(state.API_URL_multi)">Submit</button>
                </div>
                <!-- /searchbox -->
            </div>
        </nav>

    </header>
</template>


<style lang="scss" scoped></style>

