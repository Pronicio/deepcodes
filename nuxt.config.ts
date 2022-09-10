import { defineNuxtConfig } from 'nuxt'
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/style/style.scss";',
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname),
            }
        }
    }
})
