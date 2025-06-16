import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  access: {
    read: () => true,
  },
  // Set default limit
  // defaultLimit: 20,
  fields: [
    {
      name: 'Sort',
      type: 'number',
      required: false,
      defaultValue: 1,
    },
    {
      name: 'Name',
      type: 'text',
      required: true,
      defaultValue: 'Default Service Name',
    },
    {
      name: 'Title',
      type: 'text',
      required: true,
      defaultValue: 'Default Service Title',
    },
    {
      name: 'Category',
      type: 'text',
      required: false,
      defaultValue: 'Security',
    },
    {
      name: 'ImgURL',
      type: 'upload',
      relationTo: 'media',
      required: true,
      // defaultValue: '/api/media/file/contact.PNG',
    },
    {
      name: 'ImgWidthSizeX',
      type: 'number',
      required: false,
      defaultValue: 1,
    },
    {
      name: 'ShortDetails',
      type: 'text',
      required: false,
      defaultValue: 'Short description of the service.',
    },
    {
      name: 'LongDetails',
      type: 'textarea',
      required: false,
    },
  ],
}
