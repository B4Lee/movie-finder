<template>
    <div>
        <router-link :to="`/tv/${tv.id}`">
            <img 
            :src="posterPath" 
            class="border-8 border-gray-800 hover:opacity-75 transition easy-in-out duration-150" 
            width="400"
            height="600"
            alt=""/>
        </router-link>
        <h3 class="mt-2">{{tv.name}}</h3>
        <span class="text-sm text-gray-400">
            <span :key="genre" v-for="(genre, index) in tv.genre_ids">
                {{ genreTypeName(genre, index) }}
            </span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        tv: {
            require: true
        },
        genres: {
            required: true,
        },
    },
    
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.tv.poster_path;
        },
    },
    
    methods: {
        genreTypeName(genraId, index) {
            for (const item of this.genres) {
                if (item.id == genraId) {
                    if (this.tv.genre_ids.length - 1 == index) {
                        return item.name;
                    } else {
                        return item.name + ",";
                    }
                }
            }
        },
    },
    
}
</script>