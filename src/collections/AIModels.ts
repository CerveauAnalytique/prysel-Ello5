import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from 'payload'

export const AIModels: CollectionConfig = {
  slug: 'ai-models',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'baseModel', 'visibility', 'size', 'updatedAt'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'baseModel',
      type: 'text',
      required: true,
      defaultValue: 'qwen2.5:7b',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      defaultValue: 'Ello5 Coding System (Pro)',
    },
    {
      name: 'size',
      type: 'text',
      defaultValue: '4.7 GB',
    },
    {
      name: 'vram',
      type: 'text',
      defaultValue: '8 GB VRAM',
    },
    {
      name: 'params',
      type: 'text',
      defaultValue: '7.6B',
    },
    {
      name: 'command',
      type: 'text',
      defaultValue: 'ollama pull qwen2.5:7b && ellofive setup',
    },
    {
      name: 'badge',
      type: 'select',
      defaultValue: 'Official Pro',
      options: [
        { label: 'Official Pro', value: 'Official Pro' },
        { label: 'Fast', value: 'Fast' },
        { label: 'Alias', value: 'Alias' },
        { label: 'Heavy', value: 'Heavy' },
        { label: 'Custom', value: 'Custom' },
      ],
    },
    {
      name: 'visibility',
      type: 'select',
      defaultValue: 'public',
      options: [
        { label: 'Public (Visible on Models page)', value: 'public' },
        { label: 'Hidden (Accessible via direct link only)', value: 'hidden' },
        { label: 'Private (Admin panel only)', value: 'private' },
      ],
      required: true,
    },
    {
      name: 'modelFile',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional model weights file uploaded by Admin',
      },
    },
    {
      name: 'downloadsCount',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
