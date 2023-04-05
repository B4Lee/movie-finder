<template>
    <div>
        <router-link to="/movie/11">
            <img 
            :src="posterPath" 
            class="hover:opacity-75 transition easy-in-out duration-150" 
            alt=""/>
        </router-link>
        
        <h3>{{movie.title}}</h3>
        <div class="flex">
            <span class="ml-5"> {{movie.vote_average * 10}}% | {{movie.release_date}}</span>
        </div>
        <span class="text-sm text-gray-500">
            <span :key="genre" v-for="(genre, index) in movie.genre_ids">
                {{ genreTypeName(genre, index) }}
            </span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            required: true,
        },
        genres: {
            required: true,
        },
    },
    
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        },
    },
    
    methods: {
        genreTypeName(genraId, index) {
            for (const item of this.genres) {
                if (item.id == genraId) {
                    if (this.movie.genre_ids.length - 1 == index) {
                        return item.name;
                    } else {
                        return item.name + ",";
                    }
                }
            }
        },
    },
};
</script>