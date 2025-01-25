/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tranquil-morning-50f1598ff6.strapiapp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tranquil-morning-50f1598ff6.media.strapiapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    turbo: {
      // You can add any specific Turbopack settings here
      // For example:
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      // Additional Turbopack options can be added here
    },
  },
  webpack(config) {
    // Your existing Webpack configuration can remain here if needed
    return config;
  },
};

export default nextConfig;
