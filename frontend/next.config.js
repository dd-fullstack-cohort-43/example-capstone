/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/apis/:path*',
        destination: `${process.env.REST_API_URL}:8000/:path*` // Proxy to Backend
      }
    ]
  }
}


module.exports = nextConfig
