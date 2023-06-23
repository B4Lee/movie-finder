<template>
    <div id="example" class="max-w-4xl mx-auto mb-20">
        <h2 class="text-center my-4 text-white font-semibold text-3xl mt-20">
            Upcoming Movies
        </h2>
        <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key="upcomingMovies.length"
        :listData="upcomingMovies"
        :height="500"
        >
        <slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
            <figure>
                <img width="400" height="600" class="hover:opacity-75 transition easy-in-out duration-150" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
                <router-link :to="`/movie/${movie.id}`">
                    <figcaption class=" absolute box-border box w-full mt-4 bg-gray-950/50 text-white bottom-0 p-4 uppercase font-semibold text-center border-x-zinc-900">
                        {{ movie.title }}
                    </figcaption>
                </router-link>
            </figure>
        </slide>
    </carousel-3d>
</div>
</template>

<script>
import { Carousel3d, Slide } from "vue3-carousel-3d";
export default {
    data() {
        return {
            upcomingMovies: [],
        };
    },
    components: {
        Carousel3d,
        Slide,
    },
    mounted() {
        this.fetchUpcomingMovies();
    },
    methods: {
        async fetchUpcomingMovies() {
            const response = await this.$http.get(
            "https://api.themoviedb.org/3/movie/upcoming"
            );
            
            this.upcomingMovies = response.data.results;
            // console.log(this.upcomingMovies);
        },
    },
};
</script>

<style>
#example {
    margin-top: -3.5rem
}
.carousel-3d-slide img {
    width: 50%;
}
/* .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 50%;
    box-sizing: border-box;
} */

.next span,
.prev span {
    color: white;
}
</style>
