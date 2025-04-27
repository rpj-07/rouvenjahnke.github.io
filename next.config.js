/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // For GitHub Pages static site generation
  distDir: 'out',
  images: {
    unoptimized: true // Required for static export
  },
  basePath: '',
}

module.exports = nextConfig