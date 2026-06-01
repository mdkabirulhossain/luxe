/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This wildcard allows images from ANY secure website
      },
      {
        protocol: 'http',
        hostname: '**', // This covers older unencrypted image links if necessary
      },
    ],
  },
};

export default nextConfig;