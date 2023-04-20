<template>
  <header>
    <div class="wrapper">
      <div class="border-b border-gray-700 flex justify-between pb-4 px-8">
        <NavBar />
        <SearchBar />
      </div>
      <RouterView />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
</template>

<script setup>
import NavBar from './components/Header/NavBar.vue'
import SearchBar from './components/Header/SearchBar.vue'

</script>