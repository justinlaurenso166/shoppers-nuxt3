<template>
    <div>
        <header id="header">
            <Navbar />
            <hr>
            <NavbarMenu />
            <CurrentPage :type="'detail_product'" :product_name="''"/> 
        </header>

        <main>
            <div class="w-[60%] mx-auto py-20">
                <div class="text-center">
                    <div class="bg-green-600 max-w-fit rounded-full p-2 mx-auto">
                        <Icon name="mdi:success" class="text-white" size="55"></Icon>
                    </div>
                    <h1 class="text-6xl font-light mt-5">Thank you!</h1>
                    <p class="text-xl font-light mt-7 text-gray-500">You order was successfuly completed.</p>
                    <div class="w-1/2 mx-auto mt-10">
                        <button class="w-[30%] uppercase tracking-wider text-white bg-primary hover:bg-secondary transition-all duration-150 hover:shadow-xl text-sm font-light py-3 rounded-sm hover:-translate-y-1" @click="$router.push('/')">Back to Shop</button>
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