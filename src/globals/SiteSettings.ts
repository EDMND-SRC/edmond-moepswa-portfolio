import type { GlobalConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      defaultValue: 'Edmond Moepswa | Product Designer & Web Developer',
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'contactEmail',
      type: 'text',
      defaultValue: 'edmond.moepswa@gmail.com',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '+267 78 692 888',
    },
    {
      name: 'whatsappNumber',
      type: 'text',
      defaultValue: '+267 78 692 888',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'twitter', type: 'text' },
        { name: 'github', type: 'text' },
        { name: 'substack', type: 'text', defaultValue: 'https://substack.com/@edmnd' },
      ],
    },
  ],
}
