<template>
  <header>
    <div class="wrapper">
      <div class="border-b border-grey-500 flex justify-between">
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