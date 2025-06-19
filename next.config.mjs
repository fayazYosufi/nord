import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'https://nord-bay.vercel.app/',
      'your-bucket.s3.amazonaws.com',
    ], // if using S3], // Replace with your actual domain
  },
  // Other Next.js config options here
}

// module.exports = {
//   images: {
//     domains: [
//       'localhost',
//       'localhost:3000',
//       'https://nord-bay.vercel.app/',
//       'your-bucket.s3.amazonaws.com', // if using S3
//     ],
//   },
// }

export default withPayload(nextConfig, { devBundleServerPackages: false })
