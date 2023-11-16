/** @type {import('next').NextConfig} */


const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `http://node:4200/apis/:path*`
        // Proxy to Backend
      }
    ]
  }
}


module.exports = nextConfig
