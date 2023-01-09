<script setup>
    import "vue3-carousel/dist/carousel.css";
    import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
    import axios from "axios" 

    const products = ref([])
    
    const fetchAllProducts = async()=>{
        await useFetch('/api/products',{
            onResponse({response}){
                products.value = response._data.data
            }
        })
    }

    onBeforeMount(async()=>{
        await fetchAllProducts();
    })

</script>

<template>
    <div class="bg-[#f8f9fa]">
        <div class="w-[60%] mx-auto gap-10 py-20 ">
            <hr class="border-2 border- border-[#7971ea] w-10 mx-auto">
            <div class="mb-14 mt-6">
                <h2 class="text-3xl font-medium text-center">Featured Products</h2>
            </div>
            <carousel :items-to-show="3" :wrapAround="true" :autoplay="5000">
                <slide v-for="slide in products" :key="slide">
                    <NuxtLink :to="`/products/${slide._id}`">
                        <div class="mx-2 bg-white overflow-hidden hover:cursor-pointer shadow-md">
                            <img :src="`/images/${slide.image}`" class="hover:scale-105 duration-300 transition-all">
                            <div class="py-5 flex flex-col gap-1">
                                <p class="text-[#7971ea] font-semibold tracking-wide">{{slide.name}}</p>
                                <p class="font-light tracking-wide text-sm">{{slide.short_desc}}</p>
                                <p class="font-bold tracking-wide text-sm text-[#7971ea]">${{slide.price}}</p>
                            </div>
                        </div>
                    </NuxtLink>
                </slide>

                <template #addons>
                    <navigation />
                    <pagination />
                </template>
            </carousel>
        </div>
    </div>
</template>