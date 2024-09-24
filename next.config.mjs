/** @type {import('next').NextConfig} */
const nextConfig = {
    
    output: 'export',
    compiler: {
      styledComponents: true
    },
    reactStrictMode: false,
    images: {
        unoptimized: true,
      }
};

export default nextConfig;
