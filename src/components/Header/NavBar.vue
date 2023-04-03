<template>
    <div class="flex mt-5">
     <img src="../../assets/images/logo.svg" alt="" class="h-12 max-h-full ">
     <ul class="flex py-3 space-x-4">
        <li>
            <router-link to="/movies">
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