/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
      },
      // Add more remote patterns if needed
    ],
  },
};

export default nextConfig;
