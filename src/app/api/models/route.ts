import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  try {
    const payload = await getPayload({ config: configPromise })

    if (slug) {
      // Fetch specific model (including hidden if accessed by direct slug link)
      const res = await payload.find({
        collection: 'ai-models',
        limit: 1,
        pagination: false,
        where: {
          and: [
            { slug: { equals: slug } },
            { visibility: { in: ['public', 'hidden'] } },
          ],
        },
      })

      return NextResponse.json({ model: res.docs?.[0] || null })
    }

    // Fetch all public models for the /models hub page
    const res = await payload.find({
      collection: 'ai-models',
      limit: 100,
      pagination: false,
      where: {
        visibility: {
          equals: 'public',
        },
      },
    })

    return NextResponse.json({ models: res.docs || [] })
  } catch (err: any) {
    // If DB has not been seeded yet or table does not exist, return empty array gracefully
    return NextResponse.json({ models: [], error: err?.message || 'Database empty' })
  }
}
