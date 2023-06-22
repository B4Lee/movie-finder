<template>
    <div class="flex mt-5 px-4">
        <router-link to="/">
            <img src="../../assets/images/logos.png" alt="" class="h-14 max-h-full ">
        </router-link>
        <ul class="flex pt-4 space-x-4 ml-4">
            <li>
                <router-link to="/">
                    🎥 Movies
                </router-link>
            </li>
            <li>
                <router-link to="/tv">
                    📺 Tv Shows
                </router-link>
            </li>
            <li>
                <router-link to="/actors">
                    🎭 Actors
                </router-link>
            </li>
        </ul>
    </div>
</template>