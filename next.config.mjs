/* @type {import('next').NextConfig} */
/*const nextConfig = {
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
};

export default nextConfig;
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images Configuration
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
