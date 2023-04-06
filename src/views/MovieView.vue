<template>
    <div>
        <div class="container flex mt-20 border-b border-gray-600 pb-2 mx-auto lg:px-24">
            <img :src="posterPath" class="w-64" alt=""> 
            <div class="ml-24">
                <h1 class="text-4xl font-semibold">{{ this.movie.title }}</h1>
                <span class="text-gray-500 text-sm">
                    
                    {{ this.movie.vote_average * 10}}% | {{  this.movie.release_date }} 
                    <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
                        {{ item.name }}
                        <span v-if="movie.genres.length - 1 != index">,</span>
                    </span>
                </span>
                
                <p class="mt-5">
                    {{ this.movie.overview }}
                </p>
                
                <div class="mt-5 ">
                    <span class="mt-5 font-semibold">Featured Cast</span>
                    <div class="flex">
                        <div 
                        :key="index"
                        v-for="(crew, index) in movie.credits.crew">
                        <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                            <span>{{crew.name}}</span>
                            <span class="text-gray-500">{{crew.job}}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-5">
                <a 
                :href="youtubeVideo" 
                target="blank"
                class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black">
                <img src="../assets/images/heart-white.png" alt="">
                <span class="">Play Trailer</span>
            </a>
            <a href="" class="rounded bg-yellow-500  ml-5 px-5 py-3 inline-flex text-black">
                <img src="../assets/images/heart-white.png" alt="">
                <span class="">Favourite</span>
            </a>
        </div>
    </div>
</div>

<Cast :casts="movie.credits.cast" />
<Images :images="movie.images.backdrops" />
</div>
</template>

<script>
import Cast from '../components/Movies/CastMovie.vue'
import Images from '../components/Movies/ImageMovies.vue'

export default {
    components: {
        Cast,
        Images,
    },
    
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        },
        
        youtubeVideo() {
            if (!this.movie.videos) return;
            return (
            "https://www.youtube.com/watch?v=" + this.movie.videos.results[0].key
            );
        },
    },
    
    data() {
        return {
            movie: {
                credits: {
                    crew: {},
                },
                images: {
                    backdrops: {},
                },
            },
        };
    },
    
    mounted() {
        this.fetchMovie(this.$route.params.id);
    },
    
    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get(
            "/movie/" + movieId + "?append_to_response=credits,videos,images"
            );
            this.movie = response.data;
        }
    }
}

</script>