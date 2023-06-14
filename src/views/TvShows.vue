<template>
    <div class="mx-20">
        <h1 class=" text-3xl my-4 text-white">
            Top Rated TV
        </h1>
        <div class="container mx-auto grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <TvItem v-for="tv in tvs" :key="tv.id" :tv="tv" :genres="genres" />
        </div>
    </div>
</template>

<script>
import TvItem from "./TvItem.vue"

export default {
    
    components: {
        TvItem,
    },
    
    data: function(){
        return {
            tvs: [],
            genres: []
        }
    },
    
    async mounted() {
        
        this.fetchGenres()
        
        try {
            const response = await this.$http.get('/tv/top_rated')
            this.tvs = response.data.results;
            // console.log(this.tvs)
        } catch (error) {
            console.log(error)
        }
    },
    
    methods: {
        async fetchGenres() {
            // https://api.themoviedb.org/3/genre/movie/list
            try {
                const response = await this.$http.get('/genre/tv/list')
                this.genres = response.data.genres;
                // console.log(this.genres)
            } catch (error) {
                console.log(error)
            }
            
        }
    }
    
}
</script>