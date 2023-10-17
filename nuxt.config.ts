// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Marco's Sunny Development",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  }
})
