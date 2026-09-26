 /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

// BEFORE THE NEW PLESK ACCOUNT 
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Strict-Transport-Security',
//             value: 'max-age=31536000; includeSubDomains; preload'
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff'
//           },
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY'
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block'
//           }
//         ],
//       },
//     ]
//   },
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         has: [
//           {
//             type: 'header',
//             key: 'x-forwarded-proto',
//             value: 'http',
//           },
//         ],
//         destination: 'https://flomadlabs.com/:path*',
//         permanent: true,
//       },
//     ]
//   },
// };

// module.exports = nextConfig;
