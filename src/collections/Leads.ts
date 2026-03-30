import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const Leads: CollectionConfig = {
  slug: 'leads',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Contact Form', value: 'contact' },
        { label: 'Calculator', value: 'calculator' },
        { label: 'Gumroad', value: 'gumroad' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'calculatorData',
      type: 'json',
      admin: {
        condition: (data) => data.source === 'calculator',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
    },
  ],
  timestamps: true,
}
