export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'costlio - veebilehed soodsaks',
    htmlAttrs: {
      lang: 'et'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Veebilehed soodsaks' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/vendor/jquery/jquery.min.js',
        body: true
      },
      {
        src: '/vendor/bootstrap/js/bootstrap.min.bundle.js',
        body: true
      },
      {
        src: '/js/owl-carousel.js',
        body: true
      },
      {
        src: '/js/animation.js',
        body: true
      },
      {
        src: '/js/imagesloaded.js',
        body: true
      },
      {
        src: '/js/templatemo-custom.js',
        body: true
      }
    ]

  },

  css: [
    '~/assets/css/templatemo-space-dynamic',
    '~/assets/css/custom',
    '~/assets/css/fontawesome',
    '~/assets/css/animated',
    '~/node_modules/bootstrap/dist/css/bootstrap.css'
  ],

  plugins: ['~plugins/bootstrap.js'],

  components: true,

  buildModules: [
    '@nuxt/typescript-build'
  ],

  build: {
    vendor: ['bootstrap', 'jquery']
  }
}
