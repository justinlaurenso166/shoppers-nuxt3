<script setup>
    import axios from "axios"

    const cartLength = ref(0)

    const countAllCart = async()=>{
    //     // await axios.get("http://localhost:3000/api/cart").then((res)=>{
    //     //     if(res.status == 200){
    //     //         cartLength.value = res.data.data.length;
    //     //     }
    //     // })
        await useFetch("/api/cart", {
            onResponse({response}){
                console.log(response._data)
                cartLength.value = response._data.data.length
                return response._data
            }
        })
    }
        
    onBeforeMount(async()=>{
        await countAllCart()
    })
</script>

<template>
    <div class="w-[60%] mx-auto">
        <div class="flex flex-row justify-between py-11 items-center">
            <div class="flex items-center w-1/3">
                <Icon
                    name="mdi:search"
                    size="25"
                    class="text-gray-400 hover:text-gray-500 transition-all duration-150">
                </Icon>
                <div class="input-form pl-5">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search" 
                        class="focus:outline-none text-md py-1 px-1 focus:-translate-x-4 transition duration-200 font-light"
                    >
                </div>
            </div>

            <div class=" w-1/3 flex justify-center">
                <NuxtLink to="/">
                    <span class="py-2 px-3 border-gray-800 border-2 uppercase tracking-[7px] text-center text-md font-light">
                        Shoppers
                    </span>
                </NuxtLink>                
            </div>

            <div class="flex flex-row gap-3 w-1/3 justify-end">
                <NuxtLink to="#">
                    <span>
                        <Icon 
                            name="mdi:account" 
                            size="25" 
                            class="text-gray-400 hover:text-gray-500 transition-all duration-150">
                        </Icon>
                    </span>
                </NuxtLink>
                <NuxtLink to="#">
                    <span>
                        <Icon
                            name="mdi:heart-outline" 
                            size="25" 
                            class="text-gray-400 hover:text-gray-500 transition-all duration-150">
                        </Icon>
                    </span>
                </NuxtLink>
                <NuxtLink to="/cart">
                    <span class="relative">
                        <Icon 
                            name="mdi:cart" 
                            size="25" 
                            class="text-gray-400 hover:text-gray-500 transition-all duration-150">
                        </Icon>
                        <span class="w-6 h-6 text-white text-xs bg-[#7971ea] flex items-center justify-center rounded-full absolute top-0 right-0 -mt-5 -mr-3">
                            {{cartLength}}
                        </span>
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>