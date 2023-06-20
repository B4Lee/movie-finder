<template>
    <div>
        <div class="container flex mt-10 border-b border-gray-600 pb-2 mx-auto lg:px-24">
            <img :src="posterPath" class="w-64" alt=""> 
            <div class="ml-24">
                <h1 class="text-4xl font-semibold">{{ this.tv.name }}</h1>
                <span :key="index" v-for="(item, index) in tv.genres" class="text-gray-500 text-sm mb-10">
                    {{ item.name }}
                    <span v-if="tv.genres.length - 1 != index">,</span>
                </span>
                <br>
                <br>
                <span class="text-white text-md mt-20">
                    {{ Math.round(this.tv.vote_average) * 10}}/100% | {{  this.tv.first_air_date }} - {{ this.tv.last_air_date }}
                </span>
                <p class="mt-5">
                    {{ this.tv.overview }}
                </p>
                <div class="mt-5 grid grid-cols-1 gap-2 mx-auto">
                    <span class="mt-5 font-semibold">Featured Cast</span>
                    <div class="flex">
                        <div 
                        :key="index"
                        v-for="(crew, index) in tv.credits.crew">
                        <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                            <span>{{crew.name}}</span>
                            <span class="text-gray-500">{{crew.job}}</span>
                        </div>
                    </div>
                    <!-- <div class="flex">
                        <div 
                        :key="index"
                        v-for="(pc,index) in tv.production_companies">
                        <div v-if="tv.production_companies" class="flex flex-col mt-5 mr-5">
                            <span>{{pc.name}}</span>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        
        <div class="mt-5">
            <a 
            href=""
            @click.prevent="openYoutubeModal"
            target="blank"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black">
            ▶
            <span class="">Play Trailer</span>
        </a>
        <a href="" class="rounded bg-yellow-500  ml-5 px-5 py-3 inline-flex text-black">
            <!-- <img src="../assets/images/heart-white.png" alt=""> -->
            <span class="">Favourite</span>
        </a>
    </div>
</div>
</div>

<Cast :casts="tv.credits.cast" />
<Images :images="tv.images.backdrops" v-on:on-image-click="showImageModal" />
<MediaModel 
:isVideo="this.isVideo"
:value="modalOpen" 
:mediaURL="mediaURL" 
@close="modalOpen = false"/>

</div>
</template>

<script>
import Cast from '../components/Movies/CastMovie.vue'
import Images from '../components/Movies/ImageMovies.vue'
import MediaModel from '../components/MediaModel.vue'



export default {
    components: {
        Cast,
        Images,
        MediaModel,
    },
    
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.tv.poster_path;
        },
    },
    
    data() {
        return {
            tv: {
                credits: {
                    crew: {},
                },
                images: {
                    backdrops: {},
                },
            },
            modalOpen: false,
            isVideo: false,
            mediaURL: ""
        };
    },
    
    watch: {
        "$route.params.id": {
            handler() {
                this.fetchMovie(this.$route.params.id);
            },
            immediate: true,
        }
    },
    
    methods: {
        async fetchMovie(tvId) {
            const response = await this.$http.get(
            "/tv/" + tvId + "?append_to_response=credits,videos,images"
            );
            this.tv = response.data;
        },
        youtubeVideo() {
            if (!this.tv.videos) return;
            return (
            "https://www.youtube.com/embed/" + this.tv.videos.results[0].key
            );
        },
        openYoutubeModal() {
            this.mediaURL = this.youtubeVideo()
            this.isVideo = true;
            this.modalOpen = true;
        },
        openImageModel() {
            this.isVideo = false;
            this.modalOpen = true;
        },
        showImageModal(imageFullPath) {
            this.mediaURL = imageFullPath;
            this.isVideo = false
            this.modalOpen = true;
        }
    }
}

</script>