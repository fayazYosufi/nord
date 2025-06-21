import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true, // Set to true if you want to allow public creation
    update: () => true, // Set to true if you want to allow public updates
    delete: () => true, // Set to true if you want to allow public deletions
  },
  // upload: {
  //   staticDir: 'media',
  // },
  upload: true,
  // mimeTypes: ['image/*'],
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
