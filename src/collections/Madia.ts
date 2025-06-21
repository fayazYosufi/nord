import type { CollectionConfig } from 'payload'

export const Madia: CollectionConfig = {
  slug: 'madia',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    // You can add more fields if necessary
  ],
  upload: true, // This enables media uploads
}
