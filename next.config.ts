/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'preview.redd.it',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'prodcontent.cascadianfarm.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

