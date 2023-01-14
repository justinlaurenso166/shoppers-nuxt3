<script setup>
    import Slider from '@vueform/slider'
    import "@/node_modules/@vueform/slider/themes/default.css"

    const sliderValue = ref([100,300])
</script>

<template>
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
                            <div class="flex">
                                <div>
                                    <button class="px-3 py-1 bg-gray-btn">Latest</button>
                                </div>
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
</style>