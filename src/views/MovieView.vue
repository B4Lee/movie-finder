<template>
    <div>
        <div class="container flex mt-20 border-b border-gray-600 pb-2 mx-auto lg:px-24">
            <img src="../assets/images/yorushika.jpg" class="w-64" alt=""> 
            <div class="ml-24">
                <h1 class="text-4xl font-semibold">Yorushika</h1>
                <span class="text-gray-500 text-sm">82% | 2023-04-04 , Genre, Genre</span>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa impedit nihil illum ex repudiandae nulla et animi aperiam! Dolorum nulla dolor, saepe a provident facere dolore corrupti et commodi.
                </p>
                
                <div class="mt-5 ">
                    <span class="mt-5 font-semibold">Featured Cast</span>
                    <div class="flex">
                        <div class="flex flex-col mt-5 mr-5">
                            <span>Iqbal ANggoro</span>
                            <span class="text-gray-500">Writer</span>
                        </div>
                        <div class="flex flex-col mt-5">
                            <span>Wisnu ANggoro</span>
                            <span class="text-gray-500">Screenplay</span>
                        </div>
                    </div>
                </div>
                
                <div class="mt-5">
                    <a href="" class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black">
                        <img src="../assets/images/heart-white.png" alt="">
                        <span class="">Play Trailer</span>
                    </a>
                    <a href="" class="rounded bg-yellow-500  ml-5 px-5 py-3 inline-flex text-black">
                        <img src="../assets/images/heart-white.png" alt="">
                        <span class="">Favourite</span>
                    </a>
                </div>
            </div>
        </div>
        
        <Cast />
        <Image />
    </div>
</template>

<script setup>
import Cast from '../components/Movies/CastMovie.vue'
import Image from '../components/Movies/ImageMovies.vue'

</script>