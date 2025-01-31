/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eventbucket22.s3.ca-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'peru-grouse-335420.hostingersite.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;