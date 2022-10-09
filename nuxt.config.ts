// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        vue: {
            reactivityTransform: true
        }
    },
    css: ['bootstrap/dist/css/bootstrap.min.css']
});
