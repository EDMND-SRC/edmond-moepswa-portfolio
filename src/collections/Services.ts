import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      admin: {
        description: 'Base price in Pula (BWP)',
      },
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Icon emoji or Lucide icon name',
      },
    },
    {
      name: 'stripeProductId',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Linked Stripe Product ID',
      },
    },
  ],
  timestamps: true,
}
