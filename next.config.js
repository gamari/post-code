/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
                hostname: 'post-codes.net'
            }
        ],
    },
}

module.exports = nextConfig
