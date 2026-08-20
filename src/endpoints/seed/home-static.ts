import type { RequiredDataFromCollectionSlug } from 'payload'

// Used for pre-seeded content so that the homepage is not empty
export const homeStatic: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'highImpact',
  },
  meta: {
    description: 'The ello5 coding system, running privately on your own machine.',
    title: 'ElloFive — Ello5 Coding System',
  },
  title: 'ElloFive',
  layout: [],
}
