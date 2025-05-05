const nextConfig = {
  output: 'export',
  distDir: 'build',
  trailingSlash: true,
  typescript: {
      ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_ASSET_URL 
  : '',
};

module.exports = nextConfig;