import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q')?.trim() || ''

  try {
    const payload = await getPayload({ config: configPromise })
    const results: Array<{ title: string; url: string; category: string; description?: string }> = []

    // 1. Static Pages & Key Site Sections
    const staticItems = [
      { title: 'Behest AI Tournament', url: '/behest', category: 'Page', description: 'Participate in admin-uploaded AI coding tournaments.' },
      { title: 'AI Models Hub', url: '/models', category: 'Page', description: 'Hugging Face style model cards for downloading AI models.' },
      { title: 'Code Documentation', url: '/docu', category: 'Page', description: 'Complete CLI, REST API, and domain documentation.' },
      { title: 'Privacy & Security', url: '/privacy', category: 'Page', description: 'Offline/local execution and on-disk memory policy.' },
      { title: 'Quick Start CLI', url: '/#quickstart', category: 'CLI', description: 'bash scripts/install.sh & ellofive setup' },
    ]

    if (q) {
      const qLower = q.toLowerCase()
      staticItems.forEach((item) => {
        if (
          item.title.toLowerCase().includes(qLower) ||
          item.description.toLowerCase().includes(qLower) ||
          item.category.toLowerCase().includes(qLower)
        ) {
          results.push(item)
        }
      })

      // 2. Payload CMS Search Collection
      try {
        const searchResults = await payload.find({
          collection: 'search',
          depth: 1,
          limit: 6,
          pagination: false,
          where: {
            or: [
              { title: { like: q } },
              { 'meta.description': { like: q } },
              { slug: { like: q } },
            ],
          },
        })

        searchResults.docs?.forEach((doc: any) => {
          results.push({
            title: doc.title || doc.slug,
            url: `/posts/${doc.slug}`,
            category: 'Post',
            description: doc.meta?.description || 'Article post',
          })
        })
      } catch (_err) {
        // Fallback if search index is empty
      }

      // 3. Posts Collection Fallback
      try {
        const postResults = await payload.find({
          collection: 'posts',
          limit: 6,
          pagination: false,
          where: {
            title: { like: q },
          },
        })

        postResults.docs?.forEach((post: any) => {
          if (!results.some((r) => r.url === `/posts/${post.slug}`)) {
            results.push({
              title: post.title,
              url: `/posts/${post.slug}`,
              category: 'Post',
              description: post.meta?.description || 'Article post',
            })
          }
        })
      } catch (_err) {
        // Ignore
      }
    } else {
      // If query is empty, return top static items as recommendations
      results.push(...staticItems)
    }

    return NextResponse.json({ results })
  } catch (err: any) {
    return NextResponse.json({ results: [], error: err?.message || 'Search failed' }, { status: 500 })
  }
}
