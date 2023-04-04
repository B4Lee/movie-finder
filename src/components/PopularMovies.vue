<template>
    <div class="mx-5">
        <h2 class="uppercase text-lg font-semibold mt-5 text-yellow-500">
            Popular Movies
        </h2>
        <div class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </div>
    </div>
</template>

<script setup>
import MovieItem from "./MovieItem.vue"

</script>