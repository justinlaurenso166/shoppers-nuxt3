// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
    nitro:{
        plugins: ["~/server/index.ts"],
    },
    runtimeConfig:{
        mongoUrl: process.env.MONGO_URL
    }
})
