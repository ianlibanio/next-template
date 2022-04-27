const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true
})

module.exports = nextConfig
