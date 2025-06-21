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
import { Madia } from './collections/Madia'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
// const myType = '{[key:string]: string}'
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      // baseDir: path.resolve(dirname),
      baseDir: path.resolve(__dirname),
    },
  },
  upload: {
    useTempFiles: true,
    tempFileDir: '/tmp/payload-uploads',
  },
  collections: [Madia, Users, Media, Sections, Services, JobOffers],

  // media: {
  //   upload: 'local',
  //   local: {
  //     uploads: path.resolve(__dirname, 'public/media'), // Ensure this path is correct
  //   },
  // },

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
