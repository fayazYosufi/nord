import type { CollectionConfig } from 'payload'

export const Sections: CollectionConfig = {
  slug: 'sections',
  access: {
    read: () => true, // Allows all users to read from this collection
    // create: () => false, // Set to true if you want to allow public creation
    // update: () => false, // Set to true if you want to allow public updates
    // delete: () => false, // Set to true if you want to allow public deletions
  },
  labels: {
    singular: 'Sections',
    plural: 'Sections',
  },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
      defaultValue: 'Section Name',
    },
    {
      name: 'Title',
      type: 'text',
      required: false,
      defaultValue: 'Section Title',
    },
    {
      name: 'ShortDetails',
      type: 'text',
      required: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      name: 'LongDetails',
      type: 'textarea',
      required: false,
      defaultValue: '',
    },
    {
      name: 'ImgUrl',
      type: 'upload',
      relationTo: 'media',
      required: false,
      defaultValue: '',
    },
    {
      name: 'ButtonText',
      type: 'textarea',
      required: false,
      defaultValue: '',
    },
  ],
}
