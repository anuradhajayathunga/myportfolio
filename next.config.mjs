const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isDev ? '' : '/myportfolio',
  assetPrefix: isDev ? '' : '/myportfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
