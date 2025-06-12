import type { CollectionConfig } from 'payload'

export const JobOffers: CollectionConfig = {
  slug: 'jobOffers',
  labels: {
    singular: 'JobOffers',
    plural: 'JobOffers',
  },
  access: {
    read: () => true,
    // read: () => false,
  },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
      defaultValue: 'security guard',
    },
    {
      name: 'Title',
      type: 'text',
      required: true,
      defaultValue: 'SEO Nord GmbH Security guard with expertise according to §34a GeWo',
    },
    {
      name: 'Category',
      type: 'select',
      options: [
        { label: 'Security', value: 'Security' },
        { label: 'Events', value: 'Events' },
      ],
      required: true,
      defaultValue: 'Security',
    },
    {
      name: 'TypeOFEmployment',
      type: 'select',
      options: [
        { label: 'Part-time', value: 'Part-time' },
        { label: 'Full-time', value: 'Full-time' },
        { label: 'Temporary', value: 'Temporary' },
        { label: 'freelance', value: 'freelance' },
        { label: 'Training', value: 'Training' },
        { label: 'Mini-job', value: 'Mini-job' },
      ],
      required: true,
      defaultValue: 'Full-time',
    },
    {
      name: 'Date',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'Location',
      type: 'select',
      options: [
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Munich', value: 'Munich' },
        { label: 'Dortmund', value: 'Dortmund' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
        { label: 'Hamburg', value: 'Hamburg' },
      ],
      required: true,
      defaultValue: 'Hamburg',
    },
    {
      name: 'Salary/hr',
      //   name: 'Salary_perHour',
      type: 'number',
      required: false,
      defaultValue: 13.9,
    },
  ],
}
