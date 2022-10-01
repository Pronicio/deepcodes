import { defineNuxtConfig } from 'nuxt'
import path from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/deepcodes/'
    },
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
    },
    publicRuntimeConfig: {
        api_url: 'http://localhost:9000',
        discord_oauth: 'https://discord.com/api/oauth2/authorize?client_id=672124739421995010&redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fauth%2Fdiscord&response_type=code&scope=identify%20email'
    }
})
