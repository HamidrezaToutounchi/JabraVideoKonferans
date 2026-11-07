/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets2.jabra.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jabra.com',
      },
    ],
  },
};

export default nextConfig;
