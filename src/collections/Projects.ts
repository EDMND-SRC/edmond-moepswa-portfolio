import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Web Design', value: 'web-design' },
        { label: 'Branding', value: 'branding' },
        { label: 'Web Development', value: 'web-development' },
        { label: 'Product Design', value: 'product-design' },
      ],
      required: true,
    },
    {
      name: 'year',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Live site or case study link',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
}
