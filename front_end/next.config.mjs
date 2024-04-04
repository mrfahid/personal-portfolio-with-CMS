/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //         protocol: 'https',
  //         hostname: 'cdn.sanity.io',
  //         port: '',
  //     },
  //     // Add more remote patterns if needed
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      // Add more remote patterns for other domains if needed
    ],
    // Specify other image configuration options as needed
  },
};

export default nextConfig;
