<template>
    <div class="w-[60%] mx-auto gap-10 py-20">
        <hr class="border-2 border- border-primary w-10 mx-auto">
        <div class="mb-14 mt-6">
            <h2 class="text-3xl font-medium text-center">Big Sale!</h2>
        </div>
        <div class="flex gap-20">
            <div class="w-[55%]">
                <img src="/images/blog_1.jpg" alt="">
            </div>
            <div class="flex-1 flex flex-col items-center justify-center">
                <h1 class="text-center text-primary font-medium text-3xl hover:text-secondary">50% less in all items</h1>
                <p class="font-light text-sm text-gray-500 mt-1">By <span class="text-primary hover:text-secondary font-medium">Carl Smith</span> <span class="mx-3 text-lg">•</span> <span>September 3, 2018</span></p>
                <p class="font-light text-sm text-gray-500 text-center mt-5 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?
                </p>
                <button class="uppercase bg-primary w-36 py-3 text-white font-light text-sm hover:bg-secondary hover:-translate-y-1 transition-all duration-150 hover:shadow-xl tracking-widest mt-7" @click="$router.push('/shop')">Shop Now</button>
            </div>
        </div>
    </div>
</template>