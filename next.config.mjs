/** @type {import('next').NextConfig} */
const nextConfig = {
    
    output: 'export',
    compiler:{
      styledComponents: true
    },

    images: {
        unoptimized: true,
      },
      env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      }
};

export default nextConfig;
