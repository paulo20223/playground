import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

const isProduction = !!process.env.IS_PRODUCTION
const apiDomain = process.env.API_URL_DOMAIN || process.env.LOCAL_API_SERVER || '0.0.0.0:8020'
console.log(apiDomain)

// const apiSecure = !process.env.API_URL_INSECURE
const apiSecure = !process.env.LOCAL_API_SERVER

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  vite: {
    plugins: [
      svgLoader(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: '@use "@/assets/scss/_index.scss" as *;',
        },
      },
    },
  },

  app: {
    head: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      title: require('./package.json').title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Nuxt 3 template for projects',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },

  components: [
    '~/components',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.yaml',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: './i18n.config.js',
  },

  googleFonts: {
    families: {
      Inter: [400, 700, 900],
    },
  },

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active-exact',
    },
  },

  runtimeConfig: {
    isProduction,
    public: {
    // baseWS: `ws${apiSecure ? 's' : ''}://${apiDomain}/ws`,
      baseAPI: `http${apiSecure ? 's' : ''}://${apiDomain}`,
    },
  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/scss/oruga/index.scss',
    'remixicon/fonts/remixicon.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  extend(config: any) {
    config.module.rules.push({
      test: /.*\.ya?ml$/i,
      type: 'javascript/auto',
      use: 'yaml-loader',
    })
  },
})
