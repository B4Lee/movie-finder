<template>
    <div class="mx-20">
        <h2 class="text-3xl my-4 text-white">
            Popular Movies
        </h2>
        <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <MovieItem 
            :key="movie.id" 
            v-for="movie in movies" 
            :movie="movie"
            :genres="genres"
            />
            
        </div>
    </div>
</template>

<script>
import MovieItem from "./Movies/MovieItem.vue"

export default {
    components: {
        MovieItem,
    },
    
    data: function(){
        return {
            movies: [],
            genres: []
        }
    },
    
    async mounted() {
        
        this.fetchGenres()
        
        try {
            const response = await this.$http.get('/movie/popular')
            this.movies = response.data.results;
        } catch (error) {
            console.log(error)
        }
    },
    
    methods: {
        async fetchGenres() {
            // https://api.themoviedb.org/3/genre/movie/list
            try {
                const response = await this.$http.get('/genre/movie/list')
                this.genres = response.data.genres;
            } catch (error) {
                console.log(error)
            }
            
        }
    }
}
</script>