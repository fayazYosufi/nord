// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
// import { buildConfig } from 'payload/config'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Sections } from './collections/Sections'
import { Services } from './collections/Services'
import { JobOffers } from './collections/JobsOffers'

// import { payloadCloudPlugin } from '@payloadcms/plugin-cloud'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const adapter = s3Adapter({
  config: {
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  collections: [
    Users,
    {
      ...Media,
      upload: {
        disableLocalStorage: true, // Disable local storage for Vercel
      },
    },
    Sections,
    Services,
    JobOffers,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    cloudStorage({
      collections: {
        media: {
          adapter,
          disableLocalStorage: true,
          prefix: 'media', // optional folder prefix in S3 bucket
          generateFileURL: (args) => {
            // Customize the URL if needed (e.g., for CDN)
            return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/media/${args.filename}`
          },
        },
      },
    }),
  ],
})
