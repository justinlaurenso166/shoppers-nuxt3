<template>
    <div class="w-[60%] mx-auto flex gap-10 items-center justify-center py-20">
        <div class="w-1/3 relative darker overflow-hidden cursor-pointer">
            <figure class="relative overflow-hidden z-99">
                <img src="/images/women.jpg">
            </figure>
            <div class="absolute w-full h-full top-0 dark-gradient flex items-end z-10">
                <div class="pl-5 pb-6 w-full">
                    <p class="uppercase tracking-widest text-white text-xs font-medium">Collections</p>
                    <h4 class="text-white text-3xl font-normal mt-3">Women</h4>
                </div>
            </div>
        </div>
        <div class="w-1/3 relative darker overflow-hidden cursor-pointer">
            <figure class="relative overflow-hidden z-99">
                <img src="/images/children.jpg">
            </figure>
            <div class="absolute w-full h-full top-0 dark-gradient flex items-end z-10">
                <div class="pl-5 pb-6 w-full">
                    <p class="uppercase tracking-widest text-white text-xs font-medium">Collections</p>
                    <h4 class="text-white text-3xl font-normal mt-3">Children</h4>
                </div>
            </div>
        </div>
        <div class="w-1/3 relative darker overflow-hidden cursor-pointer">
            <figure class="relative overflow-hidden z-99">
                <img src="/images/men.jpg">
            </figure>
            <div class="absolute w-full h-full top-0 dark-gradient flex items-end z-10">
                <div class="pl-5 pb-6 w-full">
                    <p class="uppercase tracking-widest text-white text-xs font-medium">Collections</p>
                    <h4 class="text-white text-3xl font-normal mt-3">Men</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dark-gradient{
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 1) 100%) no-repeat;
    }

    .darker img{
        transition: transform .4s;
    }

    .darker:hover img{
        transform: scale(1.1);
        transform-origin: 50% 50%;
    }
</style>