<template>
    <div class="flex justify-center gap-8 mt-5">
        <div class="dropdown-home">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150 flex items-center hover:cursor-pointer" id="dropdown-home">
                Home
                <Icon name="mdi:arrow-down-drop" size="25"></Icon>
            </span>
            <div class="home-dropdown mt-5">
                <div class="dropdown-home-content flex flex-col">
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu One</NuxtLink>
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu Two</NuxtLink>
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu Three</NuxtLink>
                </div>
            </div>
        </div>
        <div class="dropdown-about">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150 flex items-center hover:cursor-pointer">
                About
                <Icon name="mdi:arrow-down-drop" size="25"></Icon>
            </span>
            <div class="about-dropdown mt-5">
                <div class="dropdown-about-content flex flex-col">
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu One</NuxtLink>
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu Two</NuxtLink>
                    <NuxtLink to="#" class="text-sm font-light py-3 hover:bg-gray-100 text-gray-400 hover:text-gray-600 px-2 tracking-wide">Menu Three</NuxtLink>
                </div>
            </div>
        </div>
        <NuxtLink to="/">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150">Shop</span>
        </NuxtLink>
        <NuxtLink to="/">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150">Catalogue</span>
        </NuxtLink>
        <NuxtLink to="/">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150">New Arrivals</span>
        </NuxtLink>
        <NuxtLink to="/">
            <span class="font-light uppercase text-sm tracking-wider hover:text-[#7971ea] transition-all duration-150">Contact</span>
        </NuxtLink> 
    </div>    
</template>

<style scoped>
    .dropdown-home-content, .dropdown-about-content {
        visibility: hidden;
        position: absolute;
        min-width: 200px;
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
        z-index: 1;
        border-top: 3px solid #7971ea;
        background-color: white;
        transition: visibility .1s;
    }
    .dropdown-home:hover .dropdown-home-content,  .dropdown-about:hover .dropdown-about-content {
        visibility: visible;
    }
</style>