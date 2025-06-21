import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    // staticDir: 'public/media',
    staticDir: 'public',
  },
  // mimeTypes: ['image/*'],
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
