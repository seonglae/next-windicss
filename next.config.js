//@ts-check
const WindiCSS = require('windicss-webpack-plugin').default

/** @type {import('next').NextConfig}*/
const nextConfig = {
  webpack: config => {
    config.plugins.push(new WindiCSS())
    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
