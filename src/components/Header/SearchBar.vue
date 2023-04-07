<template>
    <div class="mt-5 flex">
        <input 
        type="text" 
        class="rounded-full bg-gray-500 px-5 w-50 h-10 mr-3 focus:outline-none" 
        placeholder="Search..."
        @input="debounceSearch"
        v-model = "searchTerm"
        >
        <div  class="absolute mt-12 ml-2 rounded bg-gray-600 w-60 ">
            <ul class="mt-3" v-if="searchResult.length !=0">
                <li :key="index" v-for="(movie, index) in searchResult" class="flex items-center border-b border-gray-500 p-2">
                    <img 
                    class="w-10 p-1"
                    :src="posterPath(movie.poster_path)" alt="">
                    <span class="ml-3">{{ movie.title }}</span>
                </li>
            </ul>
            <ul>
                <li class="px-3" v-if="noResultFound">No result found for "{{ searchTerm }}""</li>
            </ul>
        </div>
        <img src="../../assets/images/avatar.jpg" alt="" class="h-10">
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchResult: [],
            noResultFound: false,
            searchTerm: "",
        }
    },
    
    mounted() {
        
    },
    
    methods: {
        debounceSearch(event) {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                if(event.target.value.length > 2 ) {
                    this.fetchSearch(event.target.value)
                }
            }, 600);
        },
        async fetchSearch(term) {
            try {
                const response = await this.$http.get("/search/movie?query=" + term)
                this.searchResult = response.data.results;
                this.noResultFound = ( response.data.results) ? true : false
            } catch (error) {
                console.log(error);
            }
        },
        posterPath(poster_path) {
            if (poster_path) {
                return "https://image.tmdb.org/t/p/w500/" + poster_path;
            } else {
                return "https://via.placeholder.com/50x75"
            }
        },
    }
}
</script>