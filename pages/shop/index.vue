<script setup>
    import Slider from '@vueform/slider'
    import "@/node_modules/@vueform/slider/themes/default.css"

    const sliderValue = ref([100,300])
    const currentPage = ref(1)
    const products = ref([])

    const onClickHandler = (page) => {
        console.log(page);
    };

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
    <Head>
        <Title>Shoppers - Shop</Title>
    </Head>
    <div>
        <header id="header">
            <Navbar />
            <hr>
            <NavbarMenu />
            <CurrentPage :type="'default'" :product_name="''"/> 
        </header>

        <main>
            <div class="w-[60%] mx-auto py-20">
                <div class="flex gap-10">
                    <div class="flex flex-col gap-4 w-[20%]">
                        <div class="border border-slate-300 py-4 px-5">
                            <p class="uppercase text-base font-normal tracking-wider">Categories</p>
                            <div class="mt-5 font-light text-sm">
                                <div class="flex justify-between items-center">
                                    <p class="text-primary hover:text-secondary transition-all duration-200">Men</p>
                                    <p>(12)</p>
                                </div>
                            </div>
                            <div class="mt-3 font-light text-sm">
                                <div class="flex justify-between items-center">
                                    <p class="text-primary hover:text-secondary transition-all duration-200 ">Women</p>
                                    <p>(12)</p>
                                </div>
                            </div>
                            <div class="mt-3 font-light text-sm">
                                <div class="flex justify-between items-center">
                                    <p class="text-primary hover:text-secondary transition-all duration-200 ">Children</p>
                                    <p>(12)</p>
                                </div>
                            </div>
                        </div>
                        <div class="border border-slate-300 py-4 px-5 flex flex-col gap-8">
                            <div>
                                <p class="uppercase text-base font-normal tracking-wider">Filter by Price</p>
                                <div class="mt-5">
                                    <Slider v-model="sliderValue" :min="0" :max="500" :tooltips="true" :showTooltip="'drag'" :tooltipPosition="'top'" />
                                    <p class="mt-4 font-light text-[0.9rem] tracking-wider"><span>${{sliderValue[0]}} - ${{sliderValue[1]}}</span></p>
                                </div>
                            </div>
                            <div>
                                <p class="uppercase text-base font-normal tracking-wider">Size</p>
                                <div  class="mt-1">
                                    <input type="checkbox"> <span class="font-light text-gray-600 text-sm ml-2">Small (1,239)</span> 
                                </div>
                                <div  class="mt-1">
                                    <input type="checkbox"> <span class="font-light text-gray-600 text-sm ml-2">Medium (1,239)</span> 
                                </div>
                                <div  class="mt-1">
                                    <input type="checkbox"> <span class="font-light text-gray-600 text-sm ml-2">Large (1,239)</span> 
                                </div>
                                <div  class="mt-1">
                                    <input type="checkbox"> <span class="font-light text-gray-600 text-sm ml-2">Extra Large (1,239)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[80%]">
                        <div class="flex justify-between">
                            <div>
                                <p class="font-normal text-lg">Shop All</p>
                            </div>
                            <div class="flex gap-4">
                                <div>
                                    <button class="px-4 py-3 rounded-sm bg-gray-btn font-light text-sm tracking-wider uppercase hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:shadow-slate-700">
                                        Latest 
                                        <Icon name="mdi:arrow-down-drop" size="20" class="-mt-1"></Icon>
                                    </button>
                                </div>
                                <div>
                                    <button class="px-4 py-3 rounded-sm bg-gray-btn font-light text-sm tracking-wider uppercase hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:shadow-slate-700">
                                        Reference 
                                        <Icon name="mdi:arrow-down-drop" size="20" class="-mt-1"></Icon>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16">
                            <div class="grid grid-cols-3 gap-7">
                                <div v-for="product in products" :key="product._id" class="border border-gray-btn shadow-md hover:cursor-pointer" @click="$router.push(`/products/${product._id}`)">
                                    <div>
                                        <img :src="`/images/${product.image}`">
                                    </div>
                                    <div class="py-5 text-center flex justify-center items-center flex-col gap-1">
                                        <h4 class="text-primary  font-light text-lg">{{product.name}}</h4>
                                        <p class="text-sm font-light text-gray-500 tracking-wide">{{product.short_desc}}</p>
                                        <p class="text-sm font-semibold text-primary">${{product.price}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-center mt-14">
                                <vue-awesome-paginate
                                    :total-items="50"
                                    :items-per-page="10"
                                    :max-pages-shown="5"
                                    v-model="currentPage"
                                    :on-click="onClickHandler"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <hr>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<style>
    :root{
        --slider-bg: #D1D5DB;
        --slider-connect-bg: #7971ea;
        --slider-connect-bg-disabled: #9CA3AF;
        --slider-height: 6px;
        --slider-vertical-height: 300px;
        --slider-radius: 9999px;

        --slider-handle-bg: #7971ea;
        --slider-handle-border: 0;
        --slider-handle-width: 16px;
        --slider-handle-height: 16px;
        --slider-handle-radius: 9999px;
        --slider-handle-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
        --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0,0,0,.42);
        --slider-handle-ring-width: 3px;
        --slider-handle-ring-color: #7971ea;

        --slider-tooltip-font-size: 0.875rem;
        --slider-tooltip-line-height: 1.25rem;
        --slider-tooltip-font-weight: 600;
        --slider-tooltip-min-width: 20px;
        --slider-tooltip-bg: #7971ea;
        --slider-tooltip-bg-disabled: #9CA3AF;
        --slider-tooltip-color: #fff;
        --slider-tooltip-radius: 5px;
        --slider-tooltip-py: 2px;
        --slider-tooltip-px: 6px;
        --slider-tooltip-arrow-size: 5px;
        --slider-tooltip-distance: 3px;
    }

    .pagination-container {
        display: flex;
        column-gap: 10px;
    }
    .paginate-buttons {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        cursor: pointer;
        background-color: rgb(242, 242, 242);
        border: 1px solid rgb(217, 217, 217);
        color: #7971ea;
        font-size: 13px;
    }
    .paginate-buttons:hover {
        background-color: #d8d8d8;
    }
    .active-page {
        background-color: #7971ea;
        border: 1px solid #7971ea;
        color: white;
    }
    .active-page:hover {
        background-color: #7971ea;
    }
</style>