<script setup>
    const route = useRoute();

    const id = route.params.id;
    const product = reactive({
        id:1,
        image: "/images/cloth_1.jpg",
        name: "Tank Top",
        long_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore. Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.",
        desc: "Finding perfect t-shirt",
        price: "50",
    })

    const buy_product = reactive({
        product_id: product.id,
        qty: 1,
        size: "medium"
    })

    //-------------------FUNCTION--------------------
    const changeQty = (type)=>{
        if(type == 'min'){
            if(buy_product.qty > 1){
                buy_product.qty -= 1
            }
        }else{
            buy_product.qty += 1
        }
    }
</script>

<template>
    <div>
        <header id="header">
            <Navbar />
            <hr>
            <NavbarMenu />
            <CurrentPage :type="'detail_product'" :product_name="product.name"/> 
        </header>

        <main>
            <div class="w-[60%] mx-auto py-20">
                <div class="flex gap-10">
                    <div class="w-1/2">
                        <img :src="product.image">
                    </div>
                    <div class="w-1/2">
                        <h2 class="text-3xl font-normal">{{product.name}}</h2>
                        <p class="text-sm leading-loose font-light text-gray-500 mt-5 text-justify">{{product.long_desc}}</p>
                        <p class="mt-4 text-2xl font-normal tracking-wider text-[#7971ea]">${{product.price}}</p>
                        <div class="flex gap-3 mt-4">
                            <div>
                                <input type="radio" name="size" value="small" v-model="buy_product.size"> <span class="font-light text-md">Small</span>
                            </div>
                            <div>
                                <input type="radio" name="size" value="medium" v-model="buy_product.size"> <span class="font-light text-md">Medium</span>
                            </div>
                            <div>
                                <input type="radio" name="size" value="large" v-model="buy_product.size"> <span class="font-light text-md">Large</span>
                            </div>
                            <div>
                                <input type="radio" name="size" value="extra_large" v-model="buy_product.size"> <span class="font-light text-md">Extra Large</span>
                            </div>
                        </div>
                        <div class="flex mt-4">
                            <button class="flex items-center justify-center text-3xl px-3 py-1 border-[#7971ea] border-[1.5px] font-light rounded-l-md hover:bg-[#5a50e5] transition-all duration-150 hover:shadow-xl hover:text-white" @click="changeQty('min')"> - </button>
                            <input type="number" v-model="buy_product.qty" class="w-14 text-center font-light text-md border-[#a8a2f3] border-l-0 border-r-0 border-[0.1px] focus:outline-none focus:border-[#7971ea]">
                            <button class="flex items-center justify-center text-2xl px-3 py-1 border-[#7971ea] border-[1.5px] font-light rounded-r-md hover:bg-[#5a50e5] transition-all duration-150 hover:shadow-xl hover:text-white" @click="changeQty('plus')"> + </button>
                        </div>
                        <div class="mt-10">
                            <button class="w-[30%] uppercase tracking-wider text-white bg-[#7971ea] hover:bg-[#5a50e5] transition-all duration-150 hover:shadow-xl text-sm font-light py-3 rounded-sm">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <section id="carousel">
            <Carousel />
        </section>

        <footer>
            <Footer />
        </footer>
    </div>
</template>

<style scoped>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>