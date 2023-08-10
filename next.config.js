/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverComponentsExternalPackages:['cloudinary', 'graphql-request']
  }
}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
     
        },
        {
          protocol: 'http',
          hostname: 'res.cloudinary.com',
          port: '',
     
        },
      ],
    },
  }
