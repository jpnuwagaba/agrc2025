/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'v0.blob.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'encrypted-tbn0.gstatic.com',
      'media-cdn.tripadvisor.com',
      'cf.bstatic.com',
      'upload.wikimedia.org',
      'utb.go.ug',
      'www.gorillatrekkingugandafromkigali.com',
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Remove experimental features that might be causing issues
}

export default nextConfig;
