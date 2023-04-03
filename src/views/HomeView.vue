<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto">
    <div class="border-b border-grey-500 flex justify-between">
      <Navbar />
      <Searchbar />
    </div>
      <PopularMovies/>
  </div>
</template>

<script setup>
import Navbar from "../components/Header/NavBar.vue";
import Searchbar from "../components/Header/SearchBar.vue";
import PopularMovies from "../components/PopularMovies.vue";


</script>