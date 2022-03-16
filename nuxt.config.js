export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    port: 8000, // default: 3000
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bayn',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '@/plugins/Marquee.js', ssr: 'false' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/image',

  ],
  image: {
    // Options
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/postcss8',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'cookie-universal-nuxt',
  ],

  i18n:
  {
    strategy: 'no_prefix',
    defaultLocale: 'ar',
    locales: [{ code: 'en', iso: 'en-US', name: 'english', file: 'en.json', dir: 'ltr' },
    { code: 'ar', iso: 'ar-EG', file: 'ar.json', name: 'arabic', dir: 'rtl' },],
    langDir: './locales/',
    vueI18nLoader: true,
    vueI18n: {
      silentTranslationWarn: true,
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true,
      },
    },

  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
