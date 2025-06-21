import type { CollectionConfig } from 'payload'

export const Madia: CollectionConfig = {
  slug: 'madia',
  access: {
    read: () => true,
  },
  // staticDir: 'media',
  // mimeTypes: ['image/*'],
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
