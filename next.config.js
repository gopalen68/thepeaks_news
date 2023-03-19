/** @type {import('next').NextConfig} */
// eslint-disable-next-line
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    output: "standalone"
  }
})
