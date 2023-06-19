<template>
    <div class="container mx-auto border-b border-gray-600 lg:px-24 py-4">
        <h2 class="text-4xl font-semibold mb-5">
            Cast
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="mx-auto gap-2 p-2 py-2" :key="cast.id" v-for="cast in casts">
            <router-link :to="`/actor/${cast.id}`">
                <img 
                class="border-gray-700 border-4 hover:opacity-75 transition easy-in-out duration-150" 
                :src="castProfileImage(cast)" alt="">
                <span class="text-white">{{ cast.name }}</span><br>
                <span class="text-gray-400 ">{{ cast.character }}</span>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        casts: {
            required: true,
        }
    },
    
    methods: {
        castProfileImage(cast) {
            if(cast.profile_path) {
                return "https://image.tmdb.org/t/p/w300/" + cast.profile_path;
            } else {
                return "https://via.placeholder.com/300x450";
            }
        }
    }
}
</script>