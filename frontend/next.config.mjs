const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
      // Add more remote patterns if needed
    ],
  },
};

export default nextConfig;