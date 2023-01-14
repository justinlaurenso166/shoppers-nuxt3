// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon',['@pinia/nuxt', {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },]],
    nitro:{
        plugins: ["~/server/index.ts"],
    },
    // tailwindcss:{
    //     config
    // },
    alias: {
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    },
    runtimeConfig:{
        mongoUrl: process.env.MONGO_URL
    },
    imports:{
        dirs: ['store']
    },
})
