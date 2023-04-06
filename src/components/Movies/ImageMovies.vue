<template>
    <div class="container mx-auto border-b border-gray-600 lg:px-24 py-4">
        <h2 class="text-4xl font-semibold mb-5"> Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div :key="index" v-for="(image, index) in images" class="mr-2 mt-2">
                <img 
                class="hover:opacity-75 transition easy-in-out duration-150" 
                :src="movieImage(image)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            required: true,
        }
    },
    
    methods: {
        movieImage(image) {
            if(image.file_path) {
                return "https://image.tmdb.org/t/p/w300/" + image.file_path;
            } else {
                return "https://via.placeholder.com/300x450";
            }
        }
    }
}
</script>