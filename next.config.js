/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
            },
            {
                hostname: 'post-codes.net'
            },
            {
                hostname: "uaxktbjxsslbhswjgqog.supabase.co"
            },
            {
                hostname: "glvuhnzragiilxzudydl.supabase.co"
            }
        ],
    },
}

module.exports = nextConfig
