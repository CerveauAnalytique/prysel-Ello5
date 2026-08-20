import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const Tournaments: CollectionConfig = {
  slug: 'tournaments',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'participantsCount', 'mcUrl', 'updatedAt'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'status',
      type: 'select',
      defaultValue: 'Active',
      options: [
        { label: 'Active', value: 'Active' },
        { label: 'Upcoming', value: 'Upcoming' },
        { label: 'Completed', value: 'Completed' },
      ],
      required: true,
    },
    {
      name: 'participantsCount',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'mcUrl',
      type: 'text',
      required: true,
      admin: {
        description: 'Master Controller Endpoint URL (e.g. https://mc.ello5.com/arena/your-id)',
      },
    },
    {
      name: 'dataset',
      type: 'text',
      admin: {
        description: 'Benchmark dataset filename (e.g. frcl-bench-v2.json)',
      },
    },
    {
      name: 'prize',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'visibility',
      type: 'select',
      defaultValue: 'public',
      options: [
        { label: 'Public (Visible on Behest page)', value: 'public' },
        { label: 'Hidden (Accessible via direct link only)', value: 'hidden' },
        { label: 'Private (Admin panel only)', value: 'private' },
      ],
      required: true,
    },
  ],
}
