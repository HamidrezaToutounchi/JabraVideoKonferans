/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
