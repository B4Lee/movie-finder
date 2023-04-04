<template>
    <div class="flex mt-5 px-4">
        <router-link to="/">
            <img src="https://delphiy.github.io/movies-hunter/img/logo.147b0df4.png" alt="" class="h-12 max-h-full ">
        </router-link>
        <ul class="flex py-3 space-x-4 ml-4">
            <li>
                <router-link to="/">
                    Movies
                </router-link>
            </li>
            <li>
                <router-link to="/actors">
                    Actors
                </router-link>
            </li>
            <li>
                <router-link to="/profile">
                    Profile
                </router-link>
            </li>
        </ul>
    </div>
</template>