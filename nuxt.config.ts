// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
    nitro:{
        preset: 'vercel',
    },
    serverHandlers: [{
        route: "/api/products", handler: "~/server/api/products.js"
    }]
})
