export default {
  nitro: {
    preset: 'vercel-edge'
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.yml'
      },
      {
        code: 'ru',
        file: 'ru-RU.yml'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ru'
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: {
      scale: 1.2,
      warn: true
    }, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    webFonts: {
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      }
    }, // enabled `@unocss/preset-webfonts`,

    // core options
    shortcuts: [],
    rules: []
  }
}
