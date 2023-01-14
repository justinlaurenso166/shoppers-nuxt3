<template>
    <div class="w-[60%] mx-auto flex gap-10 items-center justify-center py-20">
        <div class="w-1/3 flex gap-7">
            <Icon name="mdi:truck" size="50" class="flip-icon text-primary flex-0"></Icon>
            <div class="flex-1 mt-1.5">
                <h4 class="uppercase tracking-widest font-normal">Free Shipping</h4>
                <p class="font-extralight text-slate-500 tracking-wide leading-relaxed text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>
        <div class="w-1/3 flex gap-7">
            <Icon name="mdi:refresh" size="50" class="text-primary flex-0"></Icon>
            <div class="flex-1 mt-1.5">
                <h4 class="uppercase tracking-widest font-normal">Free Returns</h4>
                <p class="font-extralight text-slate-500 tracking-wide leading-relaxed text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>
        <div class="w-1/3 flex gap-7">
            <Icon name="ph:question-fill" size="50" class="text-primary flex-0"></Icon>
            <div class="flex-1 mt-1.5">
                <h4 class="uppercase tracking-widest font-normal">Customer Support</h4>
                <p class="font-extralight text-slate-500 tracking-wide leading-relaxed text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .flip-icon{
        transform: scaleX(-1);
    }
</style>