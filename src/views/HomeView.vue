<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto px-8">
    <UpcomingMovies />
    <PopularMovies/>
  </div>
</template>

<script setup>

import PopularMovies from "../components/PopularMovies.vue";
import UpcomingMovies from "../components/UpcomingMovies.vue";

</script>